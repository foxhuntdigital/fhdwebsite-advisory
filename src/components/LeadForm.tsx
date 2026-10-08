import { useState, type FormEvent } from 'react'
import './LeadForm.css'

// Must match the hidden <form name="lead"> in index.html, which is what Netlify registers.
const FORM_NAME = 'lead'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')

    try {
      const body = new URLSearchParams(
        [...new FormData(form).entries()].map(([key, value]) => [key, String(value)]),
      )
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`Form submit failed: ${response.status}`)
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card lead-form lead-form--done" role="status">
        <div className="display lead-form__done-title">Logged.</div>
        <p>Thanks. I'll reply within one business day to set up your assessment.</p>
        <div className="note lead-form__done-note">see you on day one.</div>
      </div>
    )
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="card lead-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="source" value={source} />
      <p className="visually-hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="card-header">
        <span>Intake form</span>
        <span>Week 0</span>
      </div>

      <div className="lead-form__fields">
        <label className="lead-form__field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="lead-form__field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="lead-form__field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className="lead-form__field">
          <span>Where is the product stuck?</span>
          <textarea name="message" rows={4} />
        </label>

        <button type="submit" className="btn btn--ink lead-form__submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Book an assessment'}
        </button>

        {status === 'error' && (
          <p className="lead-form__error" role="alert">
            That didn't go through. Try again, or email me directly.
          </p>
        )}
      </div>
    </form>
  )
}
