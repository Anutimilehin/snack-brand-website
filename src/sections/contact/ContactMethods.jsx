import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import { contactDetails } from '../../data/contactPage.js'

const contactMethods = [
  {
    number: '01',
    title: 'Phone enquiries',
    detail: contactDetails.phoneDisplay,
    href: contactDetails.phoneLink,
    linkText: 'Call us',
    symbol: '↗',
    description: 'Speak with the team about your enquiry.',
  },
  {
    number: '02',
    title: 'WhatsApp enquiries',
    detail: contactDetails.whatsappDisplay,
    href: contactDetails.whatsappLink,
    linkText: 'Open WhatsApp',
    symbol: '↗',
    description: 'Start a WhatsApp conversation with Jidex Foods.',
  },
  {
    number: '03',
    title: 'Email enquiries',
    detail: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    linkText: 'Send an email',
    symbol: '↗',
    description: 'Send a note about products, trade or partnerships.',
  },
]

function ContactMethods() {
  return (
    <section className="contact-methods" id="contact-options" aria-labelledby="contact-methods-title">
      <div className="contact-methods-heading page-shell">
        <ScrollReveal>
          <p className="eyebrow"><span /> Get in touch</p>
          <h2 id="contact-methods-title">Choose your<br /><em>conversation.</em></h2>
        </ScrollReveal>
        <ScrollReveal className="contact-methods-note" delay={100}>
          <p>Reach out in the way that works best for you. We welcome product questions and business enquiries.</p>
          <span>DIRECT CONTACT / NIGERIA</span>
        </ScrollReveal>
      </div>

      <div className="contact-method-list page-shell">
        {contactMethods.map((method, index) => (
          <ScrollReveal key={method.number} delay={index * 70}>
            <a
              className={`contact-method contact-method--${index + 1}`}
              href={method.href}
              target={index === 1 ? '_blank' : undefined}
              rel={index === 1 ? 'noopener noreferrer' : undefined}
              aria-label={`${method.linkText}: ${method.detail}`}
            >
              <span className="contact-method-number">{method.number}</span>
              <span className="contact-method-symbol" aria-hidden="true">{method.symbol}</span>
              <span className="contact-method-copy">
                <span className="contact-method-title">{method.title}</span>
                <span className="contact-method-detail">{method.detail}</span>
                <span className="contact-method-description">{method.description}</span>
              </span>
              <span className="contact-method-link">{method.linkText} <span aria-hidden="true">↗</span></span>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default ContactMethods
