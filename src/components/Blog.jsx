import { useEffect, useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import './Blog.css'

const FEATURED_CODE = `// The migration that almost wasn't
// 400GB of insurance data, zero downtime

async function migrateArchive(source, target) {
  const chunks = await partitionByDate(source)

  for (const chunk of chunks) {
    await validateChecksum(chunk)
    await writeToTarget(target, chunk)
    await verifyAuditTrail(chunk.id)
  }

  return { "status": "100% preserved" }
}`

export default function Blog() {
  const { locale } = useLanguage()
  const t = locale.blog
  const [activeFilter, setActiveFilter] = useState(t.filters[0])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const visibleArticles =
    activeFilter === t.filters[0]
      ? t.grid.articles
      : t.grid.articles.filter((a) => a.tagLabel === activeFilter)

  return (
    <main className="blog-page">
      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <div>
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="blog-hero__title">
              {t.hero.titleLines.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
          </div>
          <p className="blog-hero__sub">
            <strong>{t.hero.subStrong}</strong>{t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── Filter ── */}
      <div className="blog-filter">
        <div className="blog-filter__inner">
          {t.filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn ${activeFilter === f ? 'filter-btn--on' : 'filter-btn--off'}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured ── */}
      <section className="blog-featured">
        <div className="blog-featured__inner">
          <article className="featured-card">
            <div className="featured-card__visual">
              <pre className="featured-card__code">{FEATURED_CODE}</pre>
            </div>
            <div className="featured-card__body">
              <div>
                <div className="featured-card__meta">
                  {t.featured.tags.map((tag) => (
                    <span key={tag.label} className={`article-tag article-tag--${tag.variant}`}>
                      {tag.label}
                    </span>
                  ))}
                  <span className="article-date">{t.featured.date}</span>
                </div>
                <h2 className="featured-card__title">{t.featured.title}</h2>
                <p className="featured-card__excerpt">{t.featured.excerpt}</p>
              </div>
              <div className="featured-card__footer">
                <div className="author">
                  <div className="author__avatar">{t.featured.author.initials}</div>
                  <div>
                    <div className="author__name">{t.featured.author.name}</div>
                    <div className="author__role">{t.featured.author.role}</div>
                  </div>
                </div>
                <a href="#" className="read-more">{t.featured.cta}</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="blog-grid">
        <div className="blog-grid__inner">
          <div className="blog-grid__heading">{t.grid.heading}</div>
          <div className="article-grid">
            {visibleArticles.map((a) => (
              <article key={a.title} className="article-card">
                <div className="article-card__visual">
                  <div className="article-card__visual-icon">{a.icon}</div>
                  <span className={`article-card__visual-tag article-tag article-tag--${a.tagVariant}`}>
                    {a.tagLabel}
                  </span>
                </div>
                <div className="article-card__body">
                  <div className="article-card__meta">
                    <span className="article-date">{a.date}</span>
                  </div>
                  <div className="article-card__title">{a.title}</div>
                  <p className="article-card__excerpt">{a.excerpt}</p>
                  <div className="article-card__footer">
                    <span className="article-read-time">{a.readTime}</span>
                    <a href="#" className="read-more read-more--sm">Read →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="blog-newsletter">
        <div className="blog-newsletter__inner">
          <span className="eyebrow blog-newsletter__eyebrow">{t.newsletter.eyebrow}</span>
          <h2 className="blog-newsletter__title">{t.newsletter.title}</h2>
          <p className="blog-newsletter__sub">{t.newsletter.sub}</p>
          <form
            className="blog-newsletter__form"
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className="blog-newsletter__input"
              type="email"
              placeholder={t.newsletter.placeholder}
              required
            />
            <button type="submit" className="btn btn-primary">
              {t.newsletter.button}
            </button>
          </form>
          <p className="blog-newsletter__note">{t.newsletter.note}</p>
        </div>
      </section>
    </main>
  )
}
