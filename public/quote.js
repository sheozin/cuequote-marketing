/**
 * CueQuote instant-quote widget.
 *
 *   <script src="https://cuequote.com/quote.js" data-key="cq_pub_..."></script>
 *
 * Drops a form onto an AV company's own website. A visitor describes their
 * event and gets an indicative budget in under a minute; the company gets a
 * fully costed draft proposal and the lead.
 *
 * Everything renders inside a shadow root. The host site's CSS cannot reach in
 * and this cannot leak out — installing a widget that reshuffles someone's
 * layout is how you get uninstalled.
 *
 * Options (all on the script tag):
 *   data-key    required — publishable key, cq_pub_...
 *   data-color  accent colour, default #10b981
 *   data-target CSS selector to mount into; defaults to where the tag sits
 */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var KEY = script.getAttribute('data-key') || '';
  var ACCENT = script.getAttribute('data-color') || '#10b981';
  var TARGET = script.getAttribute('data-target');
  var ENDPOINT = 'https://api.cuequote.com/v1/widget/quote';
  var POLL_ENDPOINT = 'https://api.cuequote.com/v1/widget/quote';

  if (KEY.indexOf('cq_pub_') !== 0) {
    // A secret key on a public page would be a serious mistake, so say so
    // loudly in the console rather than quietly doing nothing.
    console.error('[CueQuote] data-key must be a publishable key (cq_pub_...). Never put a cq_live_ secret key on a public page.');
    return;
  }

  var host = document.createElement('div');
  host.className = 'cuequote-widget';
  if (TARGET && document.querySelector(TARGET)) document.querySelector(TARGET).appendChild(host);
  else script.parentNode.insertBefore(host, script);

  var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;

  var css = [
    ':host,*{box-sizing:border-box}',
    '.cq{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;',
    'max-width:520px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;',
    'box-shadow:0 4px 24px rgba(0,0,0,.06);color:#1f2937}',
    '.cq h3{margin:0 0 4px;font-size:19px;font-weight:800;color:#0f172a;letter-spacing:-.3px}',
    '.cq .sub{margin:0 0 18px;font-size:13.5px;color:#6b7280;line-height:1.5}',
    '.cq label{display:block;font-size:12.5px;font-weight:600;color:#374151;margin:0 0 5px}',
    '.cq textarea,.cq input{width:100%;padding:10px 12px;border:1px solid #d1d5db;border-radius:10px;',
    'font-size:14px;font-family:inherit;color:#111827;background:#fff;outline:none;transition:border-color .15s,box-shadow .15s}',
    '.cq textarea{min-height:88px;resize:vertical;line-height:1.5}',
    '.cq textarea:focus,.cq input:focus{border-color:var(--cq-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--cq-accent) 18%,transparent)}',
    '.cq .row{display:flex;gap:10px}.cq .row>div{flex:1}',
    '.cq .field{margin-bottom:13px}',
    '.cq button{width:100%;padding:12px 16px;background:var(--cq-accent);color:#fff;border:0;border-radius:10px;',
    'font-size:14.5px;font-weight:700;font-family:inherit;cursor:pointer;transition:filter .15s}',
    '.cq button:hover:not(:disabled){filter:brightness(.94)}',
    '.cq button:disabled{opacity:.6;cursor:default}',
    '.cq .err{margin-top:12px;padding:10px 12px;background:#fef2f2;border:1px solid #fecaca;border-radius:9px;font-size:13px;color:#b91c1c}',
    '.cq .foot{margin-top:14px;font-size:11.5px;color:#9ca3af;text-align:center}',
    '.cq .foot a{color:#9ca3af}',
    /* result */
    '.cq .total{text-align:center;padding:18px 0 6px}',
    '.cq .total .lbl{font-size:12px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#6b7280}',
    '.cq .total .amt{font-size:31px;font-weight:800;color:#0f172a;margin-top:6px;letter-spacing:-1px}',
    '.cq .total .cur{font-size:16px;font-weight:700;color:#6b7280;margin-left:4px}',
    '.cq .bars{margin:18px 0 6px}',
    '.cq .bar{margin-bottom:11px}',
    '.cq .bar .top{display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px}',
    '.cq .bar .cat{font-weight:600;color:#374151;text-transform:capitalize}',
    '.cq .bar .val{color:#6b7280;font-variant-numeric:tabular-nums}',
    '.cq .bar .track{height:7px;background:#f1f5f9;border-radius:99px;overflow:hidden}',
    '.cq .bar .fill{height:100%;background:var(--cq-accent);border-radius:99px;opacity:.85}',
    '.cq .note{margin-top:16px;padding:12px 14px;background:#f8fafc;border:1px solid #eef2f7;border-radius:10px;font-size:12.5px;color:#475569;line-height:1.55}',
    '.cq .again{margin-top:12px;background:none;color:#6b7280;font-weight:600;font-size:13px;padding:6px}',
    '.cq .spin{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.45);',
    'border-top-color:#fff;border-radius:50%;animation:cqspin .7s linear infinite;vertical-align:-2px;margin-right:7px}',
    '@keyframes cqspin{to{transform:rotate(360deg)}}',
    '@media(max-width:480px){.cq .row{flex-direction:column;gap:0}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  root.appendChild(style);

  var wrap = document.createElement('div');
  wrap.className = 'cq';
  wrap.style.setProperty('--cq-accent', ACCENT);
  root.appendChild(wrap);

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function money(n) { return Number(n).toLocaleString(); }

  function renderForm(prefill) {
    prefill = prefill || {};
    wrap.innerHTML =
      '<h3>Get an instant estimate</h3>' +
      '<p class="sub">Describe your event and we&rsquo;ll price an indicative budget in about a minute.</p>' +
      '<div class="field"><label>What are you planning?</label>' +
      '<textarea id="cq-desc" placeholder="e.g. Awards dinner for 120 guests with a stage, lectern, screen and background music">' + esc(prefill.description || '') + '</textarea></div>' +
      '<div class="row">' +
        '<div class="field"><label>Guests</label><input id="cq-att" type="number" min="1" placeholder="120"></div>' +
        '<div class="field"><label>Date</label><input id="cq-date" type="date"></div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="field"><label>Your name</label><input id="cq-name" type="text" placeholder="Anna Kowalska"></div>' +
        '<div class="field"><label>Email</label><input id="cq-email" type="email" placeholder="anna@company.com"></div>' +
      '</div>' +
      '<button id="cq-go">Get my estimate</button>' +
      '<div id="cq-err"></div>' +
      '<p class="foot">Powered by <a href="https://cuequote.com" target="_blank" rel="noopener">CueQuote</a></p>';

    wrap.querySelector('#cq-go').addEventListener('click', submit);
  }

  function submit() {
    var btn = wrap.querySelector('#cq-go');
    var errBox = wrap.querySelector('#cq-err');
    var payload = {
      key: KEY,
      description: wrap.querySelector('#cq-desc').value.trim(),
      name: wrap.querySelector('#cq-name').value.trim(),
      email: wrap.querySelector('#cq-email').value.trim(),
      venue: '',
      days: 1
    };
    var att = parseInt(wrap.querySelector('#cq-att').value, 10);
    if (att > 0) payload.attendees = att;
    var date = wrap.querySelector('#cq-date').value;
    if (date) payload.date = date;

    errBox.innerHTML = '';
    if (!payload.description) { errBox.innerHTML = '<div class="err">Tell us about the event first.</div>'; return; }
    if (!payload.name || !payload.email) { errBox.innerHTML = '<div class="err">We need your name and email to send the full proposal.</div>'; return; }

    btn.disabled = true;

    // Pricing a real event against a full catalogue takes the better part of a
    // minute. One frozen label for that long reads as a broken page, so the
    // button narrates what is actually happening and says up front how long it
    // takes. The visitor leaving at second 20 is the expensive failure here.
    var stages = [
      [0,  'Reading your brief…'],
      [6,  'Choosing equipment…'],
      [16, 'Pricing from our catalogue…'],
      [30, 'Almost there — this takes about a minute…']
    ];
    var startedAt = Date.now();
    function paint() {
      var elapsed = (Date.now() - startedAt) / 1000;
      var label = stages[0][1];
      for (var i = 0; i < stages.length; i++) if (elapsed >= stages[i][0]) label = stages[i][1];
      btn.innerHTML = '<span class="spin"></span>' + label;
    }
    paint();
    var ticker = setInterval(paint, 1000);

    var stopped = false;
    function reset() {
      stopped = true;
      clearInterval(ticker);
      btn.disabled = false;
      btn.textContent = 'Get my estimate';
    }

    function fail(msg) {
      reset();
      errBox.innerHTML = '<div class="err">' + esc(msg) + '</div>';
    }

    // Submission returns in about a second and records the enquiry; the estimate
    // is generated behind it and collected by polling. The visitor's details
    // therefore reach the company even if they close the tab while it works.
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json().then(function (b) { return { ok: r.ok, body: b }; }); })
      .then(function (res) {
        if (!res.ok || !res.body || !res.body.quote_id) {
          fail((res.body && res.body.error && res.body.error.message) || 'Something went wrong. Please try again.');
          return;
        }
        poll(res.body.quote_id, res.body.poll_after_ms || 4000);
      })
      .catch(function () { fail('Could not reach the estimator. Please try again.'); });

    function poll(quoteId, delay) {
      // Give up well after a normal generation (~50-70s) but long before the
      // visitor would anyway. The enquiry is already recorded either way, so
      // this is only about what they see, never about losing the lead.
      if (stopped) return;
      if (Date.now() - startedAt > 180000) {
        reset();
        errBox.innerHTML = '<div class="err">This is taking longer than usual. We have your details and will come back to you directly.</div>';
        return;
      }

      setTimeout(function () {
        if (stopped) return;
        fetch(POLL_ENDPOINT + '/' + encodeURIComponent(quoteId) + '?key=' + encodeURIComponent(KEY))
          .then(function (r) { return r.json(); })
          .then(function (b) {
            if (stopped) return;
            if (b.status === 'ready') {
              clearInterval(ticker);
              stopped = true;
              renderResult(b, payload);
            } else if (b.status === 'failed') {
              fail(b.message || 'We could not price this automatically. Your enquiry has reached us.');
            } else if (b.error) {
              fail(b.error.message || 'Something went wrong. Please try again.');
            } else {
              poll(quoteId, b.poll_after_ms || 4000);
            }
          })
          // A dropped poll is not fatal — the estimate is still being built
          // server-side, so keep asking rather than discarding the attempt.
          .catch(function () { poll(quoteId, 6000); });
      }, delay);
    }
  }

  function renderResult(data, sent) {
    var max = 0;
    (data.categories || []).forEach(function (c) { if (c.high > max) max = c.high; });

    var bars = (data.categories || []).map(function (c) {
      var pct = max ? Math.round((c.high / max) * 100) : 0;
      return '<div class="bar"><div class="top"><span class="cat">' + esc(c.category) + '</span>' +
        '<span class="val">' + money(c.low) + ' – ' + money(c.high) + '</span></div>' +
        '<div class="track"><div class="fill" style="width:' + pct + '%"></div></div></div>';
    }).join('');

    wrap.innerHTML =
      '<h3>Your indicative budget</h3>' +
      '<p class="sub">Based on ' + esc(data.company || 'our') + ' current rates.</p>' +
      '<div class="total"><div class="lbl">Estimated range</div>' +
      '<div class="amt">' + money(data.total.low) + ' – ' + money(data.total.high) +
      '<span class="cur">' + esc(data.currency) + '</span></div></div>' +
      '<div class="bars">' + bars + '</div>' +
      '<div class="note">This is an indicative range, not a quote. A detailed proposal with the full equipment list is on its way to <strong>' + esc(sent.email) + '</strong>.</div>' +
      '<button class="again" id="cq-again">Estimate another event</button>' +
      '<p class="foot">Powered by <a href="https://cuequote.com" target="_blank" rel="noopener">CueQuote</a></p>';

    wrap.querySelector('#cq-again').addEventListener('click', function () { renderForm(); });
  }

  renderForm();
})();
