import { useState } from 'react'
import BackButton from '../components/BackButton.jsx'
import PolaroidCard from '../components/PolaroidCard.jsx'
import PhotoLightbox from '../components/PhotoLightbox.jsx'
import birthdayData from '../data/birthdayData.js'
import { playSound } from '../utils/audio.js'
import assets from '../data/assets.js'

function PhotoAlbum({ onBack, onVideoPlay, onVideoStop }) {
  const categories = Object.keys(birthdayData.albums)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [activePhoto, setActivePhoto] = useState(null)
  const photos = birthdayData.albums[activeCategory]

  return (
    <div className="album-screen">
      <BackButton onClick={onBack} />
      <header className="album-screen__header">
        <p className="album-screen__kicker">Scrapbook memories</p>
        <h1>Memories</h1>
        <div className="album-tabs" role="tablist" aria-label="Memory categories">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'album-tab album-tab--active' : 'album-tab'}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              key={category}
              onClick={() => {
                playSound(assets.audio.effects.click)
                setActiveCategory(category)
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </header>
      <div className="album-grid">
        {photos.map((photo) => (
          <PolaroidCard key={photo.id} {...photo} onClick={() => setActivePhoto(photo)} />
        ))}
      </div>
      {activePhoto && (
        <PhotoLightbox
          activePhoto={activePhoto}
          photos={photos}
          onClose={() => setActivePhoto(null)}
          onVideoPlay={onVideoPlay}
          onVideoStop={onVideoStop}
        />
      )}
    </div>
  )
}

export default PhotoAlbum
