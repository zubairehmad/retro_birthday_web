import { playSound } from '../utils/audio.js'
import BackButton from '../components/BackButton.jsx'
import assets from '../data/assets.js'

function MainScreen({ onOpenAlbum, onOpenLetter, onOpenMusic, onBack }) {
  const selectCard = (onOpen) => {
    playSound(assets.audio.effects.click)
    onOpen()
  }

  const cards = [
    { icon: '📷', title: 'Memories', description: 'Photos & Videos', onOpen: onOpenAlbum },
    { icon: '💌', title: 'A Special Note', description: 'Letter Page', onOpen: onOpenLetter },
    { icon: '📼', title: 'Your Playlist', description: 'Music Page', onOpen: onOpenMusic },
  ]

  return (
    <div className="main-screen">
      <span className="main-screen__decoration main-screen__decoration--heart" aria-hidden="true">♡</span>
      <span className="main-screen__decoration main-screen__decoration--star" aria-hidden="true">✦</span>
      <span className="main-screen__decoration main-screen__decoration--flower" aria-hidden="true">✿</span>
      <div className="main-screen__panel retro-card-rounded">
        <header className="main-screen__header">
          <p>A little something for you</p>
          <h1>Welcome to Your Birthday Hub</h1>
        </header>
        <div className="main-screen__grid">
          {cards.map((card) => (
            <button
              className="nav-card"
              type="button"
              key={card.title}
              onClick={() => selectCard(card.onOpen)}
            >
              <span className="nav-card__tape" aria-hidden="true" />
              <span className="nav-card__icon" aria-hidden="true">{card.icon}</span>
              <strong>{card.title}</strong>
              <span>{card.description}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="main-screen__actions">
        <BackButton onClick={onBack}>Back to Birthday</BackButton>
      </div>
    </div>
  )
}

export default MainScreen
