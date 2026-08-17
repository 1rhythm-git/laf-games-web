import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import lafLogo from '../../assets/brand/logo/그림2.png'

const navigationItems = [
  { label: 'GAMES', to: '/lootup' },
  { label: 'ABOUT', to: '/#about' },
  { label: 'CONTACT', to: '/#contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="site-logo" to="/" aria-label="LAF GAMES home">
          <img
            className="site-logo__image"
            src={lafLogo}
            width="1126"
            height="501"
            alt=""
          />
          <span className="sr-only">LAF GAMES</span>
        </Link>

        <button
          className="site-menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>

        <nav
          className={`site-nav-wrap${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <ul className="site-nav">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  className="site-nav__link"
                  to={item.to}
                  aria-current={pathname === item.to ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
