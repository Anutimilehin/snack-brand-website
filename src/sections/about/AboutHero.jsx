import { Link } from 'react-router-dom'
import ResponsiveImage from '../../components/ui/ResponsiveImage.jsx'
import { imageSources } from '../../data/imageSources.js'
import { aboutPageContent } from '../../data/aboutPage.js'
import ArrowIcon from '../../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import useParallax from '../../hooks/useParallax.js'

function AboutHero() {
  const mediaRef = useParallax(10)
  const { hero } = aboutPageContent

  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="about-hero-colour" aria-hidden="true" />
      <div className="about-hero-inner page-shell">
        <div className="about-hero-copy">
          <ScrollReveal as="p" className="eyebrow" variant="soft">
            <span /> {hero.eyebrow}
          </ScrollReveal>
          <ScrollReveal as="h1" id="about-hero-title" className="about-hero-title" variant="lines" delay={40}>
            <span>{hero.title[0]}</span>
            <em>{hero.title[1]}</em>
          </ScrollReveal>
          <ScrollReveal as="p" className="about-hero-description" variant="left" delay={170}>
            {hero.description}
          </ScrollReveal>
          <ScrollReveal className="about-hero-actions" variant="soft" delay={250}>
            <a className="button button-primary" href="#our-story">
              Discover our story <ArrowIcon />
            </a>
            <Link className="button button-text" to="/products">
              Explore products <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="about-hero-media" ref={mediaRef}>
          <ScrollReveal as="figure" className="about-hero-photo" variant="image" delay={90}>
            <ResponsiveImage
              image={imageSources.aboutFactory}
              sizes="(max-width: 900px) 92vw, 48vw"
              alt="Apples moving along an industrial food sorting conveyor"
              fetchPriority="high"
            />
            <figcaption>
              <span className="photo-caption-mark" />
              Illustrative food production photography
            </figcaption>
          </ScrollReveal>
          <div className="about-photo-index" aria-hidden="true">
            <span>01</span>
            <span className="about-photo-index-rule" />
            <span>OUR STORY</span>
          </div>
          <span className="about-hero-stamp" aria-hidden="true">JIDEX<br />FOODS</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
