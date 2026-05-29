'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

type Step = 'phone' | 'code' | 'done'

export default function JoinPage() {
  const [step, setStep] = useState<Step>('phone')
  const [phone, setPhone] = useState('+1')
  const [name, setName] = useState('')
  const [ageBand, setAgeBand] = useState('under_30')
  const [stateCode, setStateCode] = useState('')
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendCode() {
    setErr('')
    if (!/^\+\d{8,15}$/.test(phone)) {
      setErr('Enter your phone in international format, e.g. +15551234567.')
      return
    }
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({ phone })
    setLoading(false)
    if (error) setErr(error.message)
    else setStep('code')
  }

  async function verify() {
    setErr('')
    setLoading(true)
    const supabase = createClient()
    const { data, error } = await supabase.auth.verifyOtp({ phone, token: code, type: 'sms' })
    if (error) {
      setLoading(false)
      setErr(error.message)
      return
    }
    const uid = data.user?.id
    if (uid) {
      // phone_verified is set server-side by a trigger — we never set it here.
      await supabase.from('profiles').upsert({
        id: uid,
        display_name: name || null,
        age_band: ageBand,
        state: stateCode || null,
      })
    }
    setLoading(false)
    setStep('done')
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/" className="crumb">★ Home</Link>
          <p className="kicker">One citizen, one voice</p>
          <h1>Join the movement.</h1>
          <p className="thesis">Verify with your phone — one real person, one account, one vote. It&rsquo;s how we keep this honest: no bots, no donors buying influence, just citizens. Your number is used only to verify you and is never shown publicly.</p>
        </div>
      </section>

      <section className="join-page">
        <div className="wrap">
          <div className="auth-card">
            {step === 'phone' && (
              <>
                <h2 className="auth-title">Create your account</h2>
                <label className="fld">
                  <span>Mobile phone</span>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+15551234567" inputMode="tel" />
                </label>
                <label className="fld">
                  <span>Display name <em>(optional)</em></span>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="How you'll appear" />
                </label>
                <div className="fld-row">
                  <label className="fld">
                    <span>Age</span>
                    <select value={ageBand} onChange={(e) => setAgeBand(e.target.value)}>
                      <option value="under_30">Under 30</option>
                      <option value="30_50">30–50</option>
                      <option value="over_50">Over 50</option>
                    </select>
                  </label>
                  <label className="fld">
                    <span>State <em>(optional)</em></span>
                    <input value={stateCode} onChange={(e) => setStateCode(e.target.value)} placeholder="e.g. SC" maxLength={2} />
                  </label>
                </div>
                {err && <p className="auth-err">{err}</p>}
                <button className="btn btn-red auth-btn" onClick={sendCode} disabled={loading}>
                  {loading ? 'Sending…' : 'Send my code'}
                </button>
                <p className="auth-fine">We&rsquo;ll text you a 6-digit code. Standard message rates may apply.</p>
              </>
            )}

            {step === 'code' && (
              <>
                <h2 className="auth-title">Enter your code</h2>
                <p className="auth-sub">We sent a 6-digit code to {phone}.</p>
                <label className="fld">
                  <span>Verification code</span>
                  <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="123456" inputMode="numeric" maxLength={6} />
                </label>
                {err && <p className="auth-err">{err}</p>}
                <button className="btn btn-red auth-btn" onClick={verify} disabled={loading}>
                  {loading ? 'Verifying…' : 'Verify & join'}
                </button>
                <button className="auth-link" onClick={() => { setStep('phone'); setCode(''); setErr('') }}>
                  ← Use a different number
                </button>
              </>
            )}

            {step === 'done' && (
              <>
                <div className="auth-seal">★</div>
                <h2 className="auth-title">You&rsquo;re verified.</h2>
                <p className="auth-sub">Welcome to the movement{name ? `, ${name}` : ''}. Your voice now counts — you can propose amendments and vote on the ones that should become law.</p>
                <Link href="/issues" className="btn btn-red auth-btn">Explore the Issues</Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
