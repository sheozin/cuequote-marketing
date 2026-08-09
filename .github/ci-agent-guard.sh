#!/usr/bin/env bash
# PreToolUse gate for the CI failure agent.
#
# Copied from the app repo's feedback-agent-guard.sh, which was written for a
# harsher threat model: an agent reading text typed by a member of the public.
# The input here is our own build log, so the prompt-injection surface is far
# smaller — but the containment is worth keeping regardless, because the cost
# of keeping it is nil and a build log can quote a commit message, which can
# quote anything.
#
# A prompt is not a security control — it is a request. This script is the
# control. Default is deny: a command has to be recognised to run.
#
# Reads a PreToolUse hook payload on stdin, prints a permission decision.
# Default is deny: a command has to be recognised to run.

set -uo pipefail

payload=$(cat)
tool=$(printf '%s' "$payload" | jq -r '.tool_name // ""')

deny() {
  jq -n --arg r "$1" \
    '{hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"deny",permissionDecisionReason:$r}}'
  exit 0
}
allow() {
  jq -n '{hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"allow"}}'
  exit 0
}

# Editing files is the job. Everything else non-Bash is read-only.
case "$tool" in
  Read|Grep|Glob|Edit|Write|NotebookEdit|TodoWrite) allow ;;
  Bash) ;;
  *) deny "Tool '$tool' is not available to the CI agent." ;;
esac

cmd=$(printf '%s' "$payload" | jq -r '.tool_input.command // ""')

# Refuse anything that could read the environment or reach the network on its
# own terms. These run before the allowlist so a permitted binary cannot be
# smuggled in alongside them.
if printf '%s' "$cmd" | grep -qiE '(^|[^a-z])(env|printenv|set)([[:space:]]|$)'; then
  deny "Reading the environment is not permitted."
fi
if printf '%s' "$cmd" | grep -qiE '\$\{?(ANTHROPIC_API_KEY|WEBHOOK_SECRET|GH_TOKEN|GITHUB_TOKEN|AWS_|SUPABASE_SERVICE)'; then
  deny "Referencing a secret is not permitted."
fi
if printf '%s' "$cmd" | grep -qiE '(^|[^a-z])(nc|ncat|netcat|telnet|ssh|scp|rsync|wget|ftp)([[:space:]]|$)'; then
  deny "That network tool is not permitted."
fi
if printf '%s' "$cmd" | grep -qE '/proc/[0-9self]+/environ|~/\.ssh|\.git/config|\.npmrc|id_rsa'; then
  deny "That path is not readable by the CI agent."
fi

# curl is allowed, but only at our own production hosts — it is the agent's
# main tool for probing deployed behaviour, and its main exfiltration route.
if printf '%s' "$cmd" | grep -qiE '(^|[^a-z])curl([[:space:]]|$)'; then
  for url in $(printf '%s' "$cmd" | grep -oE 'https?://[^ "'"'"']+'); do
    case "$url" in
      https://app.cuequote.com/*|https://app.cuequote.com|\
      https://cuequote.com/*|https://cuequote.com|\
      https://www.cuequote.com/*|https://www.cuequote.com) ;;
      *) deny "curl may only reach cuequote.com hosts. Refused: $url" ;;
    esac
  done
  if printf '%s' "$cmd" | grep -qE '(-d|--data|--data-binary|-F|-T|--upload-file)([[:space:]]|=)'; then
    deny "curl may only read. Reporting happens in a later step, not from the agent."
  fi
  allow
fi

# git: local work and reading history. Pushing happens in a later step that
# never sees the ticket text.
if printf '%s' "$cmd" | grep -qE '^[[:space:]]*git([[:space:]]|$)'; then
  if printf '%s' "$cmd" | grep -qiE 'git[[:space:]]+(push|remote|config|clone|submodule|fetch[[:space:]]+.*(http|git@))'; then
    deny "The agent does not push or reconfigure git."
  fi
  allow
fi

# The remaining allowlist: build, test, inspect.
if printf '%s' "$cmd" | grep -qE '^[[:space:]]*(npm[[:space:]]+(ci|test|run|ls)|npx[[:space:]]+(tsc|playwright|eslint|vitest)|node[[:space:]]|jq[[:space:]]|cat[[:space:]]|ls[[:space:]]|ls$|head[[:space:]]|tail[[:space:]]|wc[[:space:]]|grep[[:space:]]|rg[[:space:]]|find[[:space:]]|diff[[:space:]]|sort[[:space:]]|uniq[[:space:]]|echo[[:space:]]|printf[[:space:]]|mkdir[[:space:]]|true$|pwd$)'; then
  allow
fi

deny "Command not on the CI agent's allowlist: $(printf '%s' "$cmd" | head -c 120)"
