import type { ReactNode } from 'react'
import { LEGAL_LAST_UPDATED } from '../../config/site'
import '../../styles/legal.css'

type LegalNavigationItem = {
  id: string
  label: string
}

type LegalLayoutProps = {
  titleLines: string[]
  intro: string
  navigationItems: LegalNavigationItem[]
  children: ReactNode
}

type LegalSectionProps = {
  index: string
  id: string
  title: string
  children: ReactNode
}

export function LegalLayout({
  titleLines,
  intro,
  navigationItems,
  children,
}: LegalLayoutProps) {
  const documentTitle = titleLines.join(' ')

  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="site-container legal-hero__layout">
          <div>
            <p className="section-label">LAF GAMES</p>
            <h1 className="legal-hero__title" aria-label={documentTitle}>
              {titleLines.map((line, index) => (
                <span
                  className={index === titleLines.length - 1 ? 'legal-hero__title-outline' : undefined}
                  key={line}
                  aria-hidden="true"
                >
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <div className="legal-hero__meta">
            <p>{intro}</p>
            <dl>
              <div>
                <dt>Last Updated</dt>
                <dd>
                  <time dateTime={LEGAL_LAST_UPDATED.iso}>
                    {LEGAL_LAST_UPDATED.display}
                  </time>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="site-container legal-body">
        <aside className="legal-toc">
          <nav aria-label={`${documentTitle} sections`}>
            <p>Contents</p>
            <ol>
              {navigationItems.map((item, index) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="legal-content">{children}</div>
      </div>
    </article>
  )
}

export function LegalSection({ index, id, title, children }: LegalSectionProps) {
  return (
    <section className="legal-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="legal-section__heading">
        <span aria-hidden="true">{index}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="legal-section__copy">{children}</div>
    </section>
  )
}
