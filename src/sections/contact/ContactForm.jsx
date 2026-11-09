import { useRef, useState } from 'react'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import { contactDetails, contactPageContent } from '../../data/contactPage.js'

function ContactForm() {
  const [submissionState, setSubmissionState] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const submissionInProgress = useRef(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (submissionInProgress.current) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const details = Object.fromEntries(formData.entries())

    submissionInProgress.current = true
    setSubmissionState('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      })
      let result = null
      try {
        result = await response.json()
      } catch {
        // A proxy or host may return a non-JSON error page; show a helpful fallback below.
      }

      if (!response.ok || !result?.accepted) {
        throw new Error(result?.message || 'We could not send your message. Please try again.')
      }

      form.reset()
      setSubmissionState('success')
      setFeedback('Your message was accepted for delivery. Thank you for contacting Jidex Foods.')
    } catch (error) {
      setSubmissionState('error')
      setFeedback(error instanceof Error ? error.message : 'We could not send your message. Please try again.')
    } finally {
      submissionInProgress.current = false
    }
  }

  const isSending = submissionState === 'sending'

  return (
    <div className="contact-form-panel">
      <ScrollReveal className="contact-form-heading">
        <p className="eyebrow"><span /> Send an enquiry</p>
        <h2>Tell us a little<br /><em>about it.</em></h2>
        <p>Send your enquiry directly to the Jidex Foods team.</p>
      </ScrollReveal>

      <ScrollReveal as="form" className="contact-form" variant="right" delay={100} onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <label>
            <span>Full name <b aria-hidden="true">*</b></span>
            <input autoComplete="name" name="fullName" type="text" required minLength="2" maxLength="100" placeholder="Your name" />
          </label>
          <label>
            <span>Email address <b aria-hidden="true">*</b></span>
            <input autoComplete="email" name="email" type="email" required maxLength="254" placeholder="you@example.com" />
          </label>
        </div>

        <div className="contact-form-row">
          <label>
            <span>Phone number <b aria-hidden="true">*</b></span>
            <input autoComplete="tel" name="phone" type="tel" required minLength="7" maxLength="30" placeholder="Your phone number" />
          </label>
          <label>
            <span>Enquiry type <b aria-hidden="true">*</b></span>
            <select name="enquiryType" required defaultValue="">
              <option value="" disabled>Select an enquiry</option>
              {contactPageContent.enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </label>
        </div>

        <label className="contact-form-message">
          <span>Message <b aria-hidden="true">*</b></span>
          <textarea name="message" required minLength="5" maxLength="3000" rows="5" placeholder="How can we help?" />
        </label>

        {/* This quiet honeypot helps discard basic automated spam. */}
        <label className="contact-form-honeypot" aria-hidden="true" tabIndex="-1">
          Leave this field empty
          <input name="website" type="text" tabIndex="-1" autoComplete="off" />
        </label>

        <p className="contact-form-note">Your message is sent securely to our email provider for delivery to the Jidex Foods team.</p>
        <button className="button button-primary contact-form-submit" type="submit" disabled={isSending}>
          {isSending ? 'Sending…' : 'Send Message'} <span aria-hidden="true">↗</span>
        </button>

        {feedback && (
          <div className={`contact-form-feedback contact-form-feedback--${submissionState}`} role={submissionState === 'error' ? 'alert' : 'status'} aria-live="polite">
            <p>{feedback}</p>
            {submissionState === 'error' && (
              <p>
                You can also call <a href={contactDetails.phoneLink}>{contactDetails.phoneDisplay}</a> or email <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>.
              </p>
            )}
          </div>
        )}
      </ScrollReveal>
    </div>
  )
}

export default ContactForm
