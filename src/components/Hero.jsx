import useReveal from '../hooks/useReveal'
import { useLanguage } from '../context/useLanguage'
import './Hero.css'

export default function Hero({ onContact }) {
  const ref = useReveal()
  const { locale } = useLanguage()
  const t = locale.hero

  return (
    <section className="hero" ref={ref}>

      {/* Logo watermark */}
      <div className="hero__v-mark" aria-hidden="true">
        <img src="/logo_icon.svg" alt="" />
      </div>

      <div className="hero__inner">
        <div className="hero__eyebrow reveal">
          <span className="hero__eyebrow-text">{t.eyebrow}</span>
        </div>

        <h1 className="hero__title reveal reveal-delay-1">
          {t.title.line1}
          <span className="line2">
            {t.title.line2} <span className="accent">{t.title.accent}</span>
          </span>
        </h1>

        <p className="hero__lead reveal reveal-delay-2">
          {t.lead}
        </p>

        <div className="hero__cta reveal reveal-delay-3">
          <button type="button" className="btn btn-primary btn-lg" onClick={onContact}>
            {t.ctaPrimary}
          </button>
          <a href="#work" className="btn btn-secondary-teal btn-lg">
            {t.ctaSecondary}
          </a>
        </div>

      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  )
}
