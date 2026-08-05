'use client'

import { useMemo, useState } from 'react'

/**
 * Every figure below is quoted from our own published price guide,
 * /blog/event-av-cost-price-guide-2026, so the calculator and the article can never
 * drift apart. They are market day-rates in USD, and they are orientation rather than
 * a binding quote — the UI says so, and the article says so.
 *
 * If the guide is updated, update these together.
 */
const RATES = {
  audioSystem: {
    small: { low: 300, high: 600 },    // 50–100 people, 2 speakers + mixer
    mid: { low: 800, high: 2000 },     // 100–300, PA with subs + monitors
    large: { low: 2500, high: 6000 },  // 300–1,000, line array
  },
  microphone: { low: 80, high: 180 },  // wireless handheld through lavalier
  audioEngineer: { low: 450, high: 800 },

  projector: { low: 300, high: 600 },        // 5,000–8,000 ANSI
  projectorLarge: { low: 800, high: 2000 },  // 10,000+ ANSI
  screenTripod: { low: 100, high: 200 },     // 3x2m tripod
  screen: { low: 200, high: 500 },           // 4x3m+ with rigging
  ledSmall: { low: 1500, high: 3500 },       // 4x2.5m, ~10m²
  ledLarge: { low: 4000, high: 10000 },      // 20m²+
  camera: { low: 500, high: 1200 },          // with operator
  switcher: { low: 800, high: 2000 },
  streamPlatform: { low: 500, high: 1500 },

  lightingBasic: { low: 400, high: 1000 },   // front wash
  lightingAmbient: { low: 300, high: 800 },  // 10–20 LED uplights
  lightingPro: { low: 1500, high: 4000 },    // moving heads, spots, effects
  lightingTech: { low: 500, high: 900 },

  stageSmall: { low: 1000, high: 2500 },     // 6x4m with skirting — one-off
  stageLarge: { low: 2500, high: 5000 },     // 10x6m with steps — one-off
  backdrop: { low: 800, high: 3000 },        // one-off

  technician: { low: 450, high: 800 },
  projectLead: { low: 600, high: 1200 },
  setupCrew: { low: 250, high: 400 },
} as const

const SHORT_NOTICE_SURCHARGE = { low: 0.2, high: 0.5 }  // booking inside 2 weeks

type Range = { low: number; high: number }
type Line = { key: string; label: string; detail: string; qty: number } & Range

const add = (a: Range, b: Range): Range => ({ low: a.low + b.low, high: a.high + b.high })
const times = (r: Range, n: number): Range => ({ low: r.low * n, high: r.high * n })

export interface CalculatorLabels {
  attendees: string; days: string; video: string; lighting: string; staging: string
  streaming: string; shortNotice: string; shortNoticeHint: string
  none: string; projector: string; ledSmall: string; ledLarge: string
  lightBasic: string; lightAmbient: string; lightPro: string
  stageSmall: string; stageLarge: string
  yourEstimate: string; perDay: string; oneOff: string; qty: string
  breakdown: string; catAudio: string; catVideo: string; catLighting: string
  catStaging: string; catCrew: string; catSurcharge: string
  excludedTitle: string; excluded: string
  sourceNote: string; sourceLink: string
  ctaTitle: string; ctaBody: string; ctaButton: string
}

export function AvCostCalculator({ labels, guideHref, signupHref }: {
  labels: CalculatorLabels
  guideHref: string
  signupHref: string
}) {
  const [attendees, setAttendees] = useState(200)
  const [days, setDays] = useState(1)
  const [video, setVideo] = useState<'none' | 'projector' | 'ledSmall' | 'ledLarge'>('projector')
  // Defaults describe a plain conference room, so the opening figure lines up with the
  // "meeting for 50 people" benchmark in the price guide this is built from.
  const [lighting, setLighting] = useState<'none' | 'basic' | 'ambient' | 'pro'>('none')
  const [staging, setStaging] = useState<'none' | 'small' | 'large'>('none')
  const [streaming, setStreaming] = useState(false)
  const [shortNotice, setShortNotice] = useState(false)

  const { lines, subtotal, surcharge, total } = useMemo(() => {
    const lines: Line[] = []
    const push = (key: string, label: string, detail: string, rate: Range, qty: number) => {
      if (qty <= 0) return
      const r = times(rate, qty)
      lines.push({ key, label, detail, qty, ...r })
    }

    // ── Audio. Tier and microphone count both follow head count.
    const tier = attendees <= 100 ? 'small' : attendees <= 300 ? 'mid' : 'large'
    const mics = attendees <= 100 ? 2 : attendees <= 300 ? 4 : 6
    push('audioSystem', labels.catAudio, tierLabel(tier, labels), RATES.audioSystem[tier], days)
    push('microphone', labels.catAudio, `${labels.qty} ${mics} × ${days}`, RATES.microphone, mics * days)
    // A dedicated A1 only appears once the mix is big enough to need one. Below that the
    // single technician covers audio — billing both double-counted the labour and put a
    // 50-person meeting at roughly twice our own published benchmark.
    const hasAudioEngineer = attendees > 100
    if (hasAudioEngineer)
      push('audioEngineer', labels.catAudio, `${days} × ${labels.perDay}`, RATES.audioEngineer, days)

    // ── Video
    if (video === 'projector') {
      const big = attendees > 300
      push('projector', labels.catVideo, labels.projector, big ? RATES.projectorLarge : RATES.projector, days)
      push('screen', labels.catVideo, `${days} × ${labels.perDay}`,
        attendees <= 100 ? RATES.screenTripod : RATES.screen, days)
    } else if (video === 'ledSmall') {
      push('ledSmall', labels.catVideo, labels.ledSmall, RATES.ledSmall, days)
    } else if (video === 'ledLarge') {
      push('ledLarge', labels.catVideo, labels.ledLarge, RATES.ledLarge, days)
    }
    if (streaming) {
      // Above ~300 the screen carries IMAG as well as the stream, which needs more than
      // one camera — the guide describes this tier as multi-camera.
      const cameras = attendees > 300 ? 2 : 1
      push('camera', labels.catVideo, `${labels.qty} ${cameras} × ${days}`, RATES.camera, cameras * days)
      push('switcher', labels.catVideo, `${days} × ${labels.perDay}`, RATES.switcher, days)
      push('streamPlatform', labels.catVideo, `${days} × ${labels.perDay}`, RATES.streamPlatform, days)
    }

    // ── Lighting. Tiers are cumulative, matching how the guide describes them.
    if (lighting !== 'none') {
      push('lightingBasic', labels.catLighting, labels.lightBasic, RATES.lightingBasic, days)
      if (lighting === 'ambient' || lighting === 'pro')
        push('lightingAmbient', labels.catLighting, labels.lightAmbient, RATES.lightingAmbient, days)
      if (lighting === 'pro') {
        push('lightingPro', labels.catLighting, labels.lightPro, RATES.lightingPro, days)
        push('lightingTech', labels.catLighting, `${days} × ${labels.perDay}`, RATES.lightingTech, days)
      }
    }

    // ── Staging is built once, not rented per day.
    if (staging === 'small') push('stageSmall', labels.catStaging, labels.oneOff, RATES.stageSmall, 1)
    if (staging === 'large') {
      push('stageLarge', labels.catStaging, labels.oneOff, RATES.stageLarge, 1)
      push('backdrop', labels.catStaging, labels.oneOff, RATES.backdrop, 1)
    }

    // ── Crew. Counts here are on top of the audio and lighting specialists already billed
    // above, so they don't double up.
    const techs = attendees <= 300 ? 1 : attendees <= 500 ? 2 : 3
    push('technician', labels.catCrew, `${labels.qty} ${techs} × ${days}`, RATES.technician, techs * days)
    if (attendees > 200) push('projectLead', labels.catCrew, `${days} × ${labels.perDay}`, RATES.projectLead, days)
    // A separate load-in/out crew only exists once there is enough to rig. Below that the
    // show technician sets up and strikes it themselves.
    if (attendees > 200 || staging !== 'none')
      push('setupCrew', labels.catCrew, labels.oneOff, RATES.setupCrew, (techs + 1) * 2)

    const subtotal = lines.reduce(add, { low: 0, high: 0 })
    const surcharge: Range = shortNotice
      ? { low: subtotal.low * SHORT_NOTICE_SURCHARGE.low, high: subtotal.high * SHORT_NOTICE_SURCHARGE.high }
      : { low: 0, high: 0 }

    return { lines, subtotal, surcharge, total: add(subtotal, surcharge) }
  }, [attendees, days, video, lighting, staging, streaming, shortNotice, labels])

  const categories = [labels.catAudio, labels.catVideo, labels.catLighting, labels.catStaging, labels.catCrew]
    .map((cat) => {
      const inCat = lines.filter((l) => l.label === cat)
      return inCat.length ? { cat, total: inCat.reduce(add, { low: 0, high: 0 }), lines: inCat } : null
    })
    .filter(Boolean) as { cat: string; total: Range; lines: Line[] }[]

  return (
    <div className="avcalc">
      <div className="avcalc-grid">
        {/* ── Inputs ─────────────────────────────────────────── */}
        <div className="avcalc-inputs">
          <label className="avcalc-field">
            <span className="avcalc-label">{labels.attendees}</span>
            <div className="avcalc-rowline">
              <input
                type="range" min={20} max={1000} step={10} value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                aria-label={labels.attendees}
              />
              <output className="avcalc-out">{attendees}</output>
            </div>
          </label>

          <label className="avcalc-field">
            <span className="avcalc-label">{labels.days}</span>
            <div className="avcalc-rowline">
              <input
                type="range" min={1} max={5} step={1} value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                aria-label={labels.days}
              />
              <output className="avcalc-out">{days}</output>
            </div>
          </label>

          <Choice label={labels.video} value={video} onChange={setVideo} options={[
            ['none', labels.none], ['projector', labels.projector],
            ['ledSmall', labels.ledSmall], ['ledLarge', labels.ledLarge],
          ]} />

          <Choice label={labels.lighting} value={lighting} onChange={setLighting} options={[
            ['none', labels.none], ['basic', labels.lightBasic],
            ['ambient', labels.lightAmbient], ['pro', labels.lightPro],
          ]} />

          <Choice label={labels.staging} value={staging} onChange={setStaging} options={[
            ['none', labels.none], ['small', labels.stageSmall], ['large', labels.stageLarge],
          ]} />

          <div className="avcalc-toggles">
            <Toggle checked={streaming} onChange={setStreaming} label={labels.streaming} />
            <Toggle checked={shortNotice} onChange={setShortNotice} label={labels.shortNotice} hint={labels.shortNoticeHint} />
          </div>
        </div>

        {/* ── Result ─────────────────────────────────────────── */}
        <div className="avcalc-result">
          <div className="avcalc-total">
            <span className="avcalc-totlabel">{labels.yourEstimate}</span>
            <span className="avcalc-figure">
              ${Math.round(total.low).toLocaleString('en-US')}
              <span className="avcalc-dash"> – </span>
              ${Math.round(total.high).toLocaleString('en-US')}
            </span>
          </div>

          <div className="avcalc-breakdown">
            <span className="avcalc-bdtitle">{labels.breakdown}</span>
            {categories.map(({ cat, total: t }) => (
              <div className="avcalc-bdrow" key={cat}>
                <span>{cat}</span>
                <span className="avcalc-bdfig">
                  ${Math.round(t.low).toLocaleString('en-US')} – ${Math.round(t.high).toLocaleString('en-US')}
                </span>
              </div>
            ))}
            {shortNotice && (
              <div className="avcalc-bdrow">
                <span>{labels.catSurcharge}</span>
                <span className="avcalc-bdfig">
                  +${Math.round(surcharge.low).toLocaleString('en-US')} – ${Math.round(surcharge.high).toLocaleString('en-US')}
                </span>
              </div>
            )}
          </div>

          <div className="avcalc-excluded">
            <b>{labels.excludedTitle}</b> {labels.excluded}
          </div>

          <p className="avcalc-source">
            {labels.sourceNote}{' '}
            <a href={guideHref}>{labels.sourceLink}</a>
          </p>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="avcalc-cta">
        <h2>{labels.ctaTitle}</h2>
        <p>{labels.ctaBody}</p>
        <a href={signupHref} className="avcalc-ctabtn">{labels.ctaButton}</a>
      </div>

      <style>{`
        .avcalc { max-width: 1120px; margin: 0 auto; }
        .avcalc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
        .avcalc-inputs {
          background: #fff; border: 1px solid #e5e7eb; border-radius: 18px; padding: 28px;
          display: flex; flex-direction: column; gap: 22px;
        }
        .avcalc-field { display: flex; flex-direction: column; gap: 9px; }
        .avcalc-label {
          font-size: 12px; font-weight: 700; letter-spacing: .7px; text-transform: uppercase;
          color: #4b5563;
        }
        .avcalc-rowline { display: flex; align-items: center; gap: 14px; }
        .avcalc-rowline input[type="range"] { flex: 1; accent-color: #10b981; height: 24px; }
        .avcalc-out {
          font-family: var(--font-dm-sans); font-weight: 800; font-size: 19px; color: #08172E;
          min-width: 56px; text-align: end; font-variant-numeric: tabular-nums;
        }
        .avcalc-opts { display: flex; flex-wrap: wrap; gap: 7px; }
        .avcalc-opt {
          border: 1px solid #e5e7eb; background: #fff; color: #4b5563; cursor: pointer;
          border-radius: 9px; padding: 8px 13px; font-size: 13px; font-weight: 600;
          transition: border-color .15s, color .15s, background .15s;
        }
        .avcalc-opt[aria-pressed="true"] { background: #08172E; border-color: #08172E; color: #fff; }
        .avcalc-toggles { display: flex; flex-direction: column; gap: 12px; }
        .avcalc-toggle {
          display: flex; align-items: flex-start; gap: 10px; cursor: pointer;
          font-size: 14px; color: #374151;
        }
        .avcalc-toggle input { margin-top: 3px; accent-color: #10b981; width: 17px; height: 17px; }
        .avcalc-hint { display: block; font-size: 12px; color: #6b7280; margin-top: 2px; }

        .avcalc-result {
          background: linear-gradient(135deg, #08172E 0%, #0f2d50 100%);
          border-radius: 18px; padding: 28px; color: #fff; position: sticky; top: 24px;
        }
        .avcalc-total { border-bottom: 1px solid rgba(255,255,255,.13); padding-bottom: 20px; margin-bottom: 20px; }
        .avcalc-totlabel {
          display: block; font-size: 11px; font-weight: 700; letter-spacing: 1.1px;
          text-transform: uppercase; color: #10b981; margin-bottom: 9px;
        }
        .avcalc-figure {
          font-family: var(--font-dm-sans); font-weight: 800; font-size: 33px; letter-spacing: -1.2px;
          line-height: 1.15; display: block; font-variant-numeric: tabular-nums;
        }
        .avcalc-dash { color: #94a3b8; font-weight: 600; }
        .avcalc-bdtitle {
          display: block; font-size: 11px; font-weight: 700; letter-spacing: 1.1px;
          text-transform: uppercase; color: #94a3b8; margin-bottom: 11px;
        }
        .avcalc-bdrow {
          display: flex; justify-content: space-between; gap: 14px; padding: 7px 0;
          font-size: 14px; border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .avcalc-bdfig { font-variant-numeric: tabular-nums; color: #cbd5e1; white-space: nowrap; }
        .avcalc-excluded {
          margin-top: 18px; font-size: 12.5px; line-height: 1.6; color: #94a3b8;
          background: rgba(255,255,255,.05); border-radius: 10px; padding: 13px 15px;
        }
        .avcalc-excluded b { color: #fff; }
        .avcalc-source { font-size: 12px; color: #94a3b8; margin: 14px 0 0; line-height: 1.6; }
        .avcalc-source a { color: #10b981; text-decoration: underline; }

        .avcalc-cta {
          margin-top: 32px; text-align: center; background: #f9fafb;
          border: 1px solid #e5e7eb; border-radius: 18px; padding: 40px 28px;
        }
        .avcalc-cta h2 {
          font-family: var(--font-dm-sans); font-weight: 800; font-size: 25px;
          color: #08172E; letter-spacing: -.6px; margin: 0 0 10px;
        }
        .avcalc-cta p { font-size: 15px; color: #4b5563; max-width: 520px; margin: 0 auto 22px; line-height: 1.6; }
        .avcalc-ctabtn {
          display: inline-block; background: #10b981; color: #fff; font-weight: 700; font-size: 15px;
          padding: 14px 30px; border-radius: 11px; text-decoration: none;
        }

        @media (max-width: 900px) {
          .avcalc-grid { grid-template-columns: 1fr; gap: 22px; }
          .avcalc-result { position: static; }
          .avcalc-figure { font-size: 28px; }
        }
      `}</style>
    </div>
  )
}

function tierLabel(tier: 'small' | 'mid' | 'large', l: CalculatorLabels) {
  if (tier === 'small') return `${l.qty} 50–100`
  if (tier === 'mid') return `${l.qty} 100–300`
  return `${l.qty} 300–1,000`
}

function Choice<T extends string>({ label, value, onChange, options }: {
  label: string; value: T; onChange: (v: T) => void; options: [T, string][]
}) {
  return (
    <div className="avcalc-field">
      <span className="avcalc-label">{label}</span>
      <div className="avcalc-opts">
        {options.map(([val, text]) => (
          <button
            key={val} type="button" className="avcalc-opt"
            aria-pressed={value === val} onClick={() => onChange(val)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  )
}

function Toggle({ checked, onChange, label, hint }: {
  checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string
}) {
  return (
    <label className="avcalc-toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>
        {label}
        {hint && <span className="avcalc-hint">{hint}</span>}
      </span>
    </label>
  )
}
