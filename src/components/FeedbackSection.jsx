import { useState } from 'react'
import { submitFeedback } from '../services/feedbackService'

const initialForm = {
  name: '',
  message: '',
}

export function FeedbackSection({ customer }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')

    try {
      await submitFeedback({
        ...form,
        mobileNumber: customer?.mobileNumber ?? 'guest',
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="feedback-section" id="feedback">
      <div className="section-heading">
        <p className="eyebrow">Customer feedback</p>
        <h2>Tell us what should taste even better</h2>
      </div>

      <form className="feedback-card" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Feedback
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Share your experience"
            rows="5"
            required
          />
        </label>
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send feedback'}
        </button>
        {status === 'success' && (
          <p className="form-status">Thanks. Your feedback is queued for EmailJS.</p>
        )}
        {status === 'error' && (
          <p className="form-status error">Please try again in a moment.</p>
        )}
      </form>
    </section>
  )
}
