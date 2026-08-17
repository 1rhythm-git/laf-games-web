import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { PageMeta } from '../components/Seo/PageMeta'

export function MainLayout() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return undefined
    }

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash, pathname])

  return (
    <div className="app-shell">
      <PageMeta />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main className="site-main" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
