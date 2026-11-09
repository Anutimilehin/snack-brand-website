import ResponsiveImage from '../../components/ui/ResponsiveImage.jsx'
import { imageSources } from '../../data/imageSources.js'
import { aboutPageContent } from '../../data/aboutPage.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import useParallax from '../../hooks/useParallax.js'

function OurStory() {
  const imageRef = useParallax(8)
  const { story } = aboutPageContent

  return (
    <section className="about-story-section" id="our-story" aria-labelledby="story-title">
      <div className="story-inner page-shell">
        <div className="story-image-wrap" ref={imageRef}>
          <ScrollReveal as="figure" className="story-image" variant="image">
            <ResponsiveImage
              image={imageSources.aboutStory}
              sizes="(max-width: 900px) 92vw, 45vw"
              alt="An overhead arrangement of fruit, seeds and spices in bowls"
              loading="lazy"
            />
            <figcaption>Good food begins with an idea.</figcaption>
          </ScrollReveal>
          <span className="story-image-note" aria-hidden="true">FOOD / PEOPLE / PURPOSE</span>
        </div>

        <div className="story-copy">
          <ScrollReveal as="p" className="section-eyebrow">{story.eyebrow}</ScrollReveal>
          <ScrollReveal as="h2" className="section-title" variant="left" delay={70}>
            {story.title}
          </ScrollReveal>
          {story.paragraphs.map((paragraph, index) => (
            <ScrollReveal
              key={paragraph}
              as="p"
              className="section-paragraph"
              delay={120 + index * 70}
            >
              {paragraph}
            </ScrollReveal>
          ))}
          <ScrollReveal className="story-signature" delay={240}>
            <span className="signature-rule" />
            <span>Jidex Foods Nigeria Limited</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default OurStory
