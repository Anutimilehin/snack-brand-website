import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import { contactDetails } from '../../data/contactPage.js'

function SocialContact() {
  return (
    <section className="social-contact page-shell" aria-labelledby="social-contact-title">
      <ScrollReveal className="social-contact-label">
        <p className="eyebrow"><span /> Stay connected</p>
        <h2 id="social-contact-title">Find us on social.</h2>
      </ScrollReveal>
      <ScrollReveal className="social-contact-placeholder" delay={100}>
        <span className="social-contact-placeholder-mark" aria-hidden="true">JF</span>
        <span><strong>{contactDetails.socialName}</strong><small>Official social links will be added once confirmed.</small></span>
        <span className="social-contact-pending">LINKS TO BE CONFIRMED</span>
      </ScrollReveal>
    </section>
  )
}

export default SocialContact
