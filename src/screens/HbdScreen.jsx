import { useState } from 'react'
import RetroButton from '../components/RetroButton.jsx'
import QuoteRotator from '../components/QuoteRotator.jsx'
import Fireworks from '../components/Fireworks.jsx'
import birthdayData from '../data/birthdayData.js'

function HbdScreen({ onNext }) {
  const [fireworkBurst, setFireworkBurst] = useState(0)

  const handleCakeClick = () => {
    setFireworkBurst((burst) => burst + 1)
  }

  return (
    <div className="hbd-screen">
      <Fireworks burst={fireworkBurst} />
      <div className="hbd-screen__decorations" aria-hidden="true">
        <span className="hbd-screen__deco hbd-screen__deco--top-left">🎈</span>
        <span className="hbd-screen__deco hbd-screen__deco--top-right">✨</span>
        <span className="hbd-screen__deco hbd-screen__deco--bottom-left">🌸</span>
        <span className="hbd-screen__deco hbd-screen__deco--bottom-right">💖</span>
      </div>
      <section className="hbd-card retro-card-rounded">
        <p className="hbd-card__kicker">A special celebration</p>
        <p className="hbd-card__label">★ birthday wishes ★</p>
        <h1>Happy Birthday!</h1>
        <p className="hbd-card__message">{birthdayData.hbdCardMessage}</p>
        <p className="hbd-card__submessage">{birthdayData.hbdCardSubMessage}</p>
        <div className="hbd-card__cake-wrap">
          <span className="hbd-card__cake-sparkle" aria-hidden="true">✦</span>
          <button className="hbd-card__cake" type="button" onClick={handleCakeClick} aria-label="Celebrate with the birthday cake">
            <span aria-hidden="true">🎂</span>
            <span className="hbd-card__cake-hint">Tap the cake for a surprise!</span>
          </button>
          <span className="hbd-card__cake-sparkle hbd-card__cake-sparkle--right" aria-hidden="true">✦</span>
        </div>
        <blockquote className="hbd-card__quote">
          <span className="hbd-card__quote-label">a little note for you ♡</span>
          <QuoteRotator quotes={birthdayData.quotes} />
        </blockquote>
        <div className="hbd-card__actions">
          <RetroButton onClick={onNext}>Continue</RetroButton>
        </div>
      </section>
    </div>
  )
}

export default HbdScreen
