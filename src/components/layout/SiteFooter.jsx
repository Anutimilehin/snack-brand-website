import { Link, NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/navigation.js'
import { contactDetails } from '../../data/contactPage.js'
import { products } from '../../data/products.js'
import ArrowIcon from '../ui/ArrowIcon.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import '../../styles/site-footer.css'

const footerLinks = navigationItems.map((item) => ({
  ...item,
  label: item.href === '/about' ? 'About Us' : item.href === '/contact' ? 'Contact Us' : item.label,
}))

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-main page-shell">
        <ScrollReveal as="section" className="footer-brand-block" aria-label="About Jidex Foods" variant="left">
          <Link className="footer-brand" to="/" aria-label="Jidex Foods Nigeria Limited home">
            <span>JIDEX</span>
            <small>FOODS NIGERIA LIMITED</small>
          </Link>
          <p>Food, flavour, and the moments we share.</p>
          <span className="footer-brand-description">A Nigerian food company with a range of familiar snacks.</span>
        </ScrollReveal>

        <ScrollReveal as="nav" className="footer-column footer-navigation" aria-label="Quick links" delay={70}>
          <h2 className="footer-heading">Quick Links</h2>
          <ul>
            {footerLinks.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal as="nav" className="footer-column footer-products" aria-label="Our products" variant="soft" delay={130}>
          <h2 className="footer-heading">Our Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products#${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal as="section" className="footer-column footer-contact" aria-labelledby="footer-contact-title" variant="right" delay={190}>
          <h2 className="footer-heading" id="footer-contact-title">Contact Information</h2>
          <address>
            <a href={contactDetails.phoneLink}>{contactDetails.phoneDisplay}</a>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={contactDetails.whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp enquiries <ArrowIcon />
            </a>
          </address>
          <Link className="footer-cta" to="/contact">
            Start a conversation <ArrowIcon />
          </Link>
        </ScrollReveal>

        <ScrollReveal as="section" className="footer-column footer-social" aria-labelledby="footer-social-title" variant="soft" delay={250}>
          <h2 className="footer-heading" id="footer-social-title">Social Media</h2>
          <div className="footer-social-placeholder">
            <span className="footer-social-mark" aria-hidden="true">JF</span>
            <div>
              <strong>{contactDetails.socialName}</strong>
              <p>Official social links will be added once confirmed.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="footer-bottom">
        <ScrollReveal className="footer-bottom-inner page-shell" variant="soft">
          <span>Copyright © {currentYear}</span>
          <strong>Jidex Foods Nigeria Limited</strong>
          <span>All rights reserved.</span>
        </ScrollReveal>
      </div>
    </footer>
  )
}

export default SiteFooter
