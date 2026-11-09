import { Link } from 'react-router-dom'
import { heroGallery } from '../data/heroGallery.js'
import ArrowIcon from '../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import useParallax from '../hooks/useParallax.js'

function HeroSection() {
  const galleryRef = useParallax(12)

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <ScrollReveal as="p" className="eyebrow" variant="soft">
            <span /> Jidex Foods · Nigeria
          </ScrollReveal>

          <ScrollReveal as="h1" className="hero-title" variant="lines" delay={40}>
            <span>More flavour.</span>
            <span>More to</span>
            <em>share.</em>
          </ScrollReveal>

          <ScrollReveal as="p" className="hero-description" variant="left" delay={170}>
            Jidex Foods brings together the snacks, flavours and everyday
            moments that make food worth sharing.
          </ScrollReveal>

          <ScrollReveal className="hero-actions" delay={190}>
            <Link className="button button-primary" to="/products">
              Discover our range <ArrowIcon />
            </Link>
            <Link className="button button-text" to="/about">
              The Jidex story <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>

          <div className="hero-signoff" aria-hidden="true">
            <span className="signoff-rule" />
            <span>GOOD THINGS ARE MADE TO BE SHARED</span>
          </div>
        </div>

        <div className="hero-media" ref={galleryRef}>
          <p className="gallery-kicker" aria-hidden="true">A taste of what’s possible</p>
          <div className="hero-gallery" role="group" aria-label="A selection of snacks and food manufacturing photography">
            {heroGallery.map((item, index) => (
              <ScrollReveal
                key={item.id}
                as={Link}
                to={item.href}
                aria-label={`Explore ${item.label}`}
                className={`gallery-card gallery-card--${item.id}`}
                variant="image"
                delay={70 + index * 65}
              >
                <ResponsiveImage
                  image={item.image}
                  sizes="(max-width: 700px) 48vw, (max-width: 1100px) 30vw, 22vw"
                  alt={item.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
                <span className="gallery-card-caption">
                  <span className="gallery-index">0{index + 1}</span>
                  <span>{item.label}</span>
                  <span className="gallery-arrow" aria-hidden="true">↗</span>
                </span>
              </ScrollReveal>
            ))}
          </div>
          <span className="gallery-side-note" aria-hidden="true">FLAVOUR / FORWARD</span>
        </div>
      </div>

      <div className="hero-baseline page-shell" aria-hidden="true">
        <span>JIDEX FOODS NIGERIA LIMITED</span>
        <span className="baseline-rule" />
        <span>GOOD TASTE, GOOD COMPANY</span>
      </div>
    </section>
  )
}

export default HeroSection
