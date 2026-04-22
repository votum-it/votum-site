import useReveal from '../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" ref={ref}>

      {/* Logo watermark */}
      <div className="hero__v-mark" aria-hidden="true">
        <img src="/logo_icon.svg" alt="" />
      </div>

      <div className="hero__inner">
        <div className="hero__eyebrow reveal">
          <span className="hero__eyebrow-text">End-to-End Engineering</span>
        </div>

        <h1 className="hero__title reveal reveal-delay-1">
          Engineered
          <span className="line2">
            for <span className="accent">impact.</span>
          </span>
        </h1>

        <p className="hero__lead reveal reveal-delay-2">
              We take complex technical problems off your plate — and deliver systems your team can actually own.
        </p>

        <div className="hero__cta reveal reveal-delay-3">
          <a href="#contact" className="btn btn-primary btn-lg">
            Get in touch &nbsp;→
          </a>
          <a href="#work" className="btn btn-secondary-teal btn-lg">
            Case Studies
          </a>
        </div>

        <div className="hero__trust reveal reveal-delay-4">
          <span>10+ years of experience</span>
          <div className="hero__trust-dot" />
          <span>45+ projects delivered</span>
          <div className="hero__trust-dot" />
          <span>80% client retention</span>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  )
}
