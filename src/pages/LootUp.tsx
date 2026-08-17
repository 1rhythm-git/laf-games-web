import { Link } from 'react-router-dom'
import lootupScreenshot1 from '../assets/games/lootup/1.png'
import lootupScreenshot2 from '../assets/games/lootup/2.png'
import lootupScreenshot3 from '../assets/games/lootup/3.png'
import lootupScreenshot4 from '../assets/games/lootup/4.png'
import lootupScreenshot5 from '../assets/games/lootup/5.png'
import lootupScreenshot6 from '../assets/games/lootup/6.png'
import lootupScreenshot7 from '../assets/games/lootup/7.png'
import lootupFeatured from '../assets/games/lootup/lootup-featured.png'
import '../styles/lootup.css'

const gameplayItems = [
  { keyword: 'MOVE', description: 'Left & Right' },
  { keyword: 'CLIMB', description: 'Keep moving upward' },
  { keyword: 'LOOT', description: 'Collect items along the way' },
  { keyword: 'SURVIVE', description: 'Go as high as possible' },
]

const featureItems = [
  'Simple left / right controls',
  'Infinite vertical progression',
  'Item collection',
  'Character progression elements',
  'Highest-floor record',
  'Mobile-first portrait gameplay',
]

const lootupScreenshots = [
  {
    src: lootupScreenshot1,
    width: 319,
    height: 724,
    alt: 'LootUp account login and sign-up screen',
  },
  {
    src: lootupScreenshot2,
    width: 323,
    height: 725,
    alt: 'LootUp title screen over a city skyline',
  },
  {
    src: lootupScreenshot3,
    width: 323,
    height: 726,
    alt: 'LootUp character selection and game start screen',
  },
  {
    src: lootupScreenshot4,
    width: 328,
    height: 723,
    alt: 'LootUp leaderboard showing player floor and score records',
  },
  {
    src: lootupScreenshot5,
    width: 320,
    height: 722,
    alt: 'LootUp climbing gameplay with platforms and obstacles',
  },
  {
    src: lootupScreenshot6,
    width: 324,
    height: 726,
    alt: 'LootUp fever mode gameplay filled with collectible gold bars',
  },
  {
    src: lootupScreenshot7,
    width: 328,
    height: 747,
    alt: 'LootUp game results showing highest floor and earned scores',
  },
]

export function LootUp() {
  return (
    <>
      <section className="lootup-hero" aria-labelledby="lootup-title">
        <div className="lootup-hero__shape lootup-hero__shape--orb" aria-hidden="true" />
        <div className="lootup-hero__shape lootup-hero__shape--tile" aria-hidden="true" />

        <div className="site-container lootup-hero__layout">
          <div className="lootup-hero__content">
            <p className="lootup-kicker">LAF GAMES / GAME 01</p>
            <h1 className="lootup-hero__title" id="lootup-title">
              LOOTUP
            </h1>

            <p className="lootup-hero__statement" aria-label="Climb. Loot. Keep going.">
              <span>CLIMB.</span>
              <span className="lootup-hero__statement-accent">LOOT.</span>
              <span className="lootup-hero__statement-outline">KEEP GOING.</span>
            </p>

            <div className="lootup-hero__meta">
              <p>Mobile Hyper Casual Game</p>
              <span className="lootup-badge">In Development</span>
            </div>
          </div>

          <div className="lootup-hero__visual neu-raised">
            <div className="lootup-hero__visual-slot">
              <img
                src={lootupFeatured}
                width="1536"
                height="1024"
                fetchPriority="high"
                alt="LootUp game artwork"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section lootup-overview" aria-labelledby="overview-title">
        <div className="site-container lootup-overview__layout">
          <div>
            <p className="section-label">Overview</p>
            <h2 className="sr-only" id="overview-title">
              LootUp Overview
            </h2>
          </div>

          <p className="lootup-overview__statement">
            LootUp is a vertical hyper-casual game built around simple
            left-and-right controls, continuous climbing, and risk-reward item
            collection.
          </p>
        </div>
      </section>

      <section className="section lootup-gameplay" aria-labelledby="gameplay-title">
        <div className="site-container">
          <div className="section-header lootup-section-header">
            <p className="section-label">Core Gameplay</p>
            <h2 className="section-title" id="gameplay-title">
              One direction.
              <br />
              Always upward.
            </h2>
          </div>

          <ol className="gameplay-list">
            {gameplayItems.map((item, index) => (
              <li className="gameplay-list__item" key={item.keyword}>
                <span className="gameplay-list__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.keyword}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section lootup-features" aria-labelledby="features-title">
        <div className="site-container lootup-features__layout">
          <div className="section-header">
            <p className="section-label">Features</p>
            <h2 className="section-title" id="features-title">
              Simple to move.
              <br />
              Hard to stop.
            </h2>
          </div>

          <ul className="feature-list">
            {featureItems.map((item) => (
              <li key={item}>
                <span aria-hidden="true">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section lootup-visuals" aria-labelledby="visuals-title">
        <div className="site-container">
          <div className="section-header lootup-section-header">
            <p className="section-label">Game Visual</p>
            <h2 className="section-title" id="visuals-title">
              Built for portrait play.
            </h2>
            <p className="section-description">
              A vertical experience designed for quick, focused mobile play.
            </p>
          </div>

          <div className="screenshot-gallery" aria-label="LootUp game screenshots">
            {lootupScreenshots.map((screenshot, index) => (
              <figure className="screenshot-frame" key={screenshot.src}>
                <div className="screenshot-frame__surface">
                  <img
                    src={screenshot.src}
                    width={screenshot.width}
                    height={screenshot.height}
                    loading="lazy"
                    decoding="async"
                    alt={screenshot.alt}
                  />
                </div>
                <figcaption className="screenshot-frame__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section lootup-platform" aria-labelledby="platform-title">
        <div className="site-container">
          <div className="section-header lootup-section-header">
            <p className="section-label">Release</p>
            <h2 className="section-title" id="platform-title">
              Platform & Status
            </h2>
          </div>

          <dl className="platform-list">
            <div>
              <dt>Platform</dt>
              <dd>Android</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>In Development</dd>
            </div>
            <div>
              <dt>Coming</dt>
              <dd>Google Play</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section lootup-back" aria-labelledby="back-title">
        <div className="site-container lootup-back__layout">
          <div>
            <p className="section-label">LAF GAMES</p>
            <h2 className="lootup-back__title" id="back-title">
              Discover what
              <br />
              connects us.
            </h2>
          </div>

          <Link className="button button--primary lootup-back__cta" to="/">
            BACK TO LAF GAMES
          </Link>
        </div>
      </section>
    </>
  )
}
