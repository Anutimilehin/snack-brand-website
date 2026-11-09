import { useState } from 'react'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import { contactDetails, contactPageContent } from '../../data/contactPage.js'

function ContactForm() {
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const details = Object.fromEntries(formData.entries())
    const subject = `Website enquiry: ${details.enquiryType}`
    const body = [
      `Name: ${details.fullName}`,
      `Email: ${details.email}`,
      `Phone: ${details.phone}`,
      `Enquiry type: ${details.enquiryType}`,
      '',
      'Message:',
      details.message,
    ].join('\n')
    const parameters = new URLSearchParams({ subject, body })

    // mailto: opens the visitor's configured email application. It does not send an email automatically.
    window.location.href = `mailto:${contactDetails.email}?${parameters.toString()}`
    form.reset()
    setFeedback('Your email application should open with a prepared draft. Please review it and send the message to contact Jidex Foods.')
  }

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

        <p className="contact-form-note">Submitting opens a prepared email draft in your email application. Review it, then send it to the Jidex Foods team.</p>
        <button className="button button-primary contact-form-submit" type="submit">
          Prepare Email <span aria-hidden="true">↗</span>
        </button>

        {feedback && (
          <div className="contact-form-feedback contact-form-feedback--success" role="status" aria-live="polite">
            <p>{feedback}</p>
          </div>
        )}
      </ScrollReveal>
    </div>
  )
}

export default ContactForm
