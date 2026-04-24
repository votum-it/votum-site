import useReveal from '../hooks/useReveal'
import './CtaBanner.css'

export default function CtaBanner() {
  const ref = useReveal()

  return (
    <section id="contact" className="cta-outer" ref={ref}>
      <div className="cta-banner reveal">
        <div>
          <span className="cta-banner__eyebrow">Ready to transform your engineering?</span>
          <div className="cta-banner__title">
            Let's build your competitive advantage.
          </div>
          <p className="cta-banner__sub">
            Tell us about your vision — we'll come back within 24 hours with
            a clear strategy, not a sales pitch.
          </p>
        </div>

        <div className="cta-banner__actions">
          <a href="mailto:info@votum.com" className="btn btn-primary btn-lg">
            Get in touch →
          </a>
          <span className="cta-small">No commitment. Response within 24 h.</span>
        </div>
      </div>
    </section>
  )
}
