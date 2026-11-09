import { aboutPageContent } from '../../data/aboutPage.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

function CommitmentSection() {
  return (
    <section className="commitment-section" aria-labelledby="commitment-title">
      <div className="commitment-inner page-shell">
        <div className="commitment-heading">
          <ScrollReveal as="p" className="section-eyebrow">04 / Our commitment</ScrollReveal>
          <ScrollReveal as="h2" id="commitment-title" className="section-title" delay={70}>
            What we stand for, every day.
          </ScrollReveal>
          <ScrollReveal as="p" className="commitment-intro" delay={130}>
            The principles we want to guide how we make food and build trust.
          </ScrollReveal>
        </div>

        <ol className="commitment-list">
          {aboutPageContent.commitments.map((item, index) => (
            <ScrollReveal as="li" className="commitment-item" key={item.title} delay={index * 55}>
              <span className="commitment-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="commitment-marker" aria-hidden="true" />
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default CommitmentSection
