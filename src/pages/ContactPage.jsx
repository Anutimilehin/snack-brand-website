import ContactHero from '../sections/contact/ContactHero.jsx'
import ContactMethods from '../sections/contact/ContactMethods.jsx'
import BusinessEnquiries from '../sections/contact/BusinessEnquiries.jsx'
import ContactForm from '../sections/contact/ContactForm.jsx'
import SocialContact from '../sections/contact/SocialContact.jsx'
import '../styles/contact-page.css'
import pageMetadata from '../data/pageMetadata.js'
import usePageMetadata from '../hooks/usePageMetadata.js'

function ContactPage() {
  usePageMetadata(pageMetadata.contact)

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactMethods />
      <section className="contact-enquiry-section" aria-label="Business enquiries and contact form">
        <BusinessEnquiries />
        <ContactForm />
      </section>
      <SocialContact />
    </div>
  )
}

export default ContactPage
