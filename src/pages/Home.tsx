import { Link } from 'react-router-dom'
import lafCharacter from '../assets/brand/character/Laf (2).png'
import lafLogo from '../assets/brand/logo/그림2.png'
import lootupFeatured from '../assets/games/lootup/lootup-featured.png'
import { CONTACT_EMAIL } from '../config/site'
import '../styles/home.css'

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__shape hero__shape--circle" aria-hidden="true" />
        <div className="hero__shape hero__shape--square" aria-hidden="true" />
        <div className="hero__shape hero__shape--disc" aria-hidden="true" />

        <div className="site-container hero__content">
          <div className="hero__brand">
            <img
              className="hero__logo"
              src={lafLogo}
              width="1126"
              height="501"
              fetchPriority="high"
              alt="LAF GAMES"
            />
          </div>

          <h1 className="hero__title text-display" id="hero-title">
            <span className="hero__line hero__line--solid">LINK</span>
            <span className="hero__line hero__line--shift">IDEAS.</span>
            <span className="hero__line hero__line--soft">CREATE</span>
            <span className="hero__line hero__line--outline">FLOW.</span>
          </h1>

          <div className="hero__footer">
            <div className="hero__intro">
              <p className="hero__studio">Independent Game Studio</p>
              <p className="hero__description">
                We connect ideas and turn their flow into play.
              </p>
            </div>

            <Link className="button button--primary hero__cta" to="/#games">
              VIEW GAMES
            </Link>
          </div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="site-container">
          <div className="section-header about__header">
            <p className="section-label">About LAF</p>
            <h2 className="section-title" id="about-title">
              From connection
              <br />
              to experience.
            </h2>
          </div>

          <div className="about__editorial">
            <article className="about__statement">
              <p className="about__keyword">LINK</p>
              <h3>Ideas connect.</h3>
              <p lang="ko">
                서로 다른 생각을 자유롭게 연결하고 가능성을 발견합니다.
              </p>
            </article>

            <article className="about__statement about__statement--flow">
              <p className="about__keyword about__keyword--outline">FLOW</p>
              <h3>Ideas become experiences.</h3>
              <p lang="ko">
                연결에서 시작된 흐름을 새로운 게임 경험으로 만들어 갑니다.
              </p>
            </article>
          </div>

          <div className="about__footer">
            <p className="about__summary" lang="ko">
              LAF GAMES는 Link And Flow의 철학을 바탕으로 게임을 만드는 독립
              게임 스튜디오입니다.
            </p>

            <dl className="about__facts">
              <div>
                <dt>Founded</dt>
                <dd>2025</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>South Korea</dd>
              </div>
            </dl>

            <img
              className="about__character"
              src={lafCharacter}
              width="408"
              height="612"
              loading="lazy"
              decoding="async"
              alt="LAF GAMES character imagining an idea"
            />
          </div>
        </div>
      </section>

      <section className="section games" id="games" aria-labelledby="games-title">
        <div className="site-container">
          <div className="section-header games__header">
            <p className="section-label">Games</p>
            <h2 className="section-title" id="games-title">
              Featured Project
            </h2>
          </div>

          <Link
            className="featured-game neu-card"
            to="/lootup"
            aria-label="View the LootUp game page"
          >
            <div className="featured-game__visual">
              <div className="featured-game__glass-frame">
                <img
                  src={lootupFeatured}
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  alt="LootUp game artwork"
                />
              </div>
            </div>

            <div className="featured-game__content">
              <p className="featured-game__status">In Development</p>
              <h3 className="featured-game__title">LOOTUP</h3>
              <p className="featured-game__genre">Mobile Hyper Casual Game</p>
              <span className="featured-game__link">
                VIEW PROJECT <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="site-container contact__layout">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="contact__title" id="contact-title">
              <span>LET&apos;S</span>
              <span className="contact__title-outline">CONNECT.</span>
            </h2>
          </div>

          <div className="contact__details">
            <p lang="ko">
              새로운 아이디어와 좋은 연결을 기다립니다.
            </p>
            {CONTACT_EMAIL ? (
              <a className="contact__channel contact__channel--link" href={`mailto:${CONTACT_EMAIL}`}>
                <span>{CONTACT_EMAIL}</span>
                <span className="contact__channel-mark" aria-hidden="true">↗</span>
              </a>
            ) : (
              <div
                className="contact__channel"
                aria-label="The business and partnership contact channel is not yet published."
              >
                <span aria-hidden="true">Business / Partnership</span>
                <span className="contact__channel-mark" aria-hidden="true">+</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
