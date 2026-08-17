import { Link, useLocation } from 'react-router-dom'
import lafLogo from '../../assets/brand/logo/그림2.png'

const footerNavigationItems = [
  { label: 'Games', to: '/lootup' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <div>
          <p className="site-footer__brand">
            <img
              className="site-footer__logo"
              src={lafLogo}
              width="1126"
              height="501"
              loading="lazy"
              decoding="async"
              alt="LAF GAMES"
            />
          </p>
          <p className="site-footer__tagline">Link And Flow</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="site-footer__nav">
            {footerNavigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  className="site-footer__link"
                  to={item.to}
                  aria-current={pathname === item.to ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <small className="site-footer__copyright">
          © {new Date().getFullYear()} LAF GAMES
        </small>
      </div>
    </footer>
  )
}
