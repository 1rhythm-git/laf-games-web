import { Link } from 'react-router-dom'
import '../styles/not-found.css'

export function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__shape" aria-hidden="true" />

      <div className="site-container not-found__content">
        <h1 className="not-found__title" id="not-found-title" aria-label="404. Lost in the flow.">
          <span className="not-found__code" aria-hidden="true">404</span>
          <span aria-hidden="true">LOST</span>
          <span className="not-found__outline" aria-hidden="true">IN THE FLOW.</span>
        </h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link className="button button--primary not-found__cta" to="/">
          BACK HOME
        </Link>
      </div>
    </section>
  )
}
