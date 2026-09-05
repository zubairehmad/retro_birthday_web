import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton.jsx'
import birthdayData from '../data/birthdayData.js'

function LetterPage({ onBack }) {
  const letter = birthdayData.letter
  const date = birthdayData.date || new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const [state, setState] = useState('closed')

  useEffect(() => {
    if (state !== 'opening') return undefined
    const reducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setState('opened'), reducedMotion ? 20 : 1200)
    return () => window.clearTimeout(timer)
  }, [state])

  const openLetter = () => {
    if (state === 'closed') setState('opening')
  }

  return (
    <div className="letter-screen">
      <div className="letter-screen__decorations" aria-hidden="true">
        <span className="letter-screen__decoration letter-screen__decoration--heart">♡</span>
        <span className="letter-screen__decoration letter-screen__decoration--sparkle">✦</span>
        <span className="letter-screen__decoration letter-screen__decoration--flower">✿</span>
        <span className="letter-screen__emoji letter-screen__emoji--cake">🎂</span>
        <span className="letter-screen__emoji letter-screen__emoji--gift">🎁</span>
        <span className="letter-screen__emoji letter-screen__emoji--balloon">🎈</span>
        <span className="letter-screen__emoji letter-screen__emoji--heart">💖</span>
        <span className="letter-screen__emoji letter-screen__emoji--sparkle">✨</span>
        <span className="letter-screen__emoji letter-screen__emoji--flower">🌸</span>
        <span className="letter-screen__emoji letter-screen__emoji--confetti">🎉</span>
        <span className="letter-screen__emoji letter-screen__emoji--music">🎶</span>
        <span className="letter-screen__decoration letter-screen__decoration--small-heart">♡</span>
      </div>
      <BackButton onClick={onBack} />
      <div className={`letter-opening letter-opening--${state}`}>
        <button
          className="letter-envelope"
          type="button"
          aria-label={state === 'closed' ? 'Open your birthday letter' : 'Birthday letter envelope'}
          aria-expanded={state === 'opened'}
          disabled={state !== 'closed'}
          onClick={openLetter}
        >
          <span className="letter-envelope__stamp" aria-hidden="true">♥</span>
          <span className="letter-envelope__mark" aria-hidden="true">✦</span>
          <span className="letter-envelope__flap" aria-hidden="true" />
          <span className="letter-envelope__label">A little something for you</span>
        </button>
        <article className="letter-paper" aria-live="polite">
          <span className="letter-paper__seal" aria-hidden="true">♥</span>
          <header className="letter-paper__header">
            <time>{date}</time>
            <p>Dear {birthdayData.name || 'birthday star'},</p>
          </header>
          <div className="letter-paper__body">
            {letter.split('\n').map((line, index) => (
              <p key={`${index}-${line}`}>{line || '\u00a0'}</p>
            ))}
          </div>
          <footer className="letter-paper__footer">With love, always ♡</footer>
        </article>
      </div>
    </div>
  )
}

export default LetterPage
