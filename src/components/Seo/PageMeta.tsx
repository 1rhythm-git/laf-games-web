import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Metadata = {
  title: string
  description: string
}

const pageMetadata: Record<string, Metadata> = {
  '/': {
    title: 'LAF GAMES',
    description:
      'LAF GAMES is an independent game studio creating simple and engaging game experiences.',
  },
  '/lootup': {
    title: 'LootUp | LAF GAMES',
    description:
      'Discover LootUp, a vertical mobile hyper-casual game by LAF GAMES.',
  },
  '/privacy': {
    title: 'Privacy Policy | LAF GAMES',
    description:
      'Read the LAF GAMES Privacy Policy for its website and game services.',
  },
  '/terms': {
    title: 'Terms of Use | LAF GAMES',
    description:
      'Read the Terms of Use for the LAF GAMES website and game services.',
  },
}

const notFoundMetadata: Metadata = {
  title: 'Page Not Found | LAF GAMES',
  description: 'The requested page could not be found on the LAF GAMES website.',
}

function updateMetaContent(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

export function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? notFoundMetadata

    document.title = metadata.title
    updateMetaContent('meta[name="description"]', metadata.description)
    updateMetaContent('meta[property="og:title"]', metadata.title)
    updateMetaContent('meta[property="og:description"]', metadata.description)
  }, [pathname])

  return null
}
