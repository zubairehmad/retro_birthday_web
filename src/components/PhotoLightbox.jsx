import { useEffect, useState } from 'react'

function PhotoLightbox({ activePhoto, photos, onClose, onVideoPlay = () => {}, onVideoStop = () => {} }) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, photos.findIndex((photo) => photo.id === activePhoto.id)),
  )
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    setImageFailed(false)
  }, [activeIndex])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onVideoStop()
        onClose()
      }
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + photos.length) % photos.length)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % photos.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, photos.length])

  const photo = photos[activeIndex]
  if (!photo) return null

  const move = (direction) => {
    setActiveIndex((index) => (index + direction + photos.length) % photos.length)
  }

  const closeViewer = () => {
    onVideoStop()
    onClose()
  }

  return (
    <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Memories viewer">
      <button className="photo-lightbox__close" type="button" onClick={closeViewer} aria-label="Close photo viewer">✕</button>
      <button className="photo-lightbox__previous" type="button" onClick={() => move(-1)} aria-label="Previous photo">&lt;</button>
      <div className="photo-lightbox__content">
        {photo.mediaType === 'video' && photo.videoSrc ? (
          <video
            src={photo.videoSrc}
            controls
            playsInline
            preload="metadata"
            aria-label={photo.caption}
            onPlay={onVideoPlay}
            onPause={onVideoStop}
            onEnded={onVideoStop}
          />
        ) : photo.imageSrc && !imageFailed ? (
          <img src={photo.imageSrc} alt={photo.caption} onError={() => setImageFailed(true)} />
        ) : (
          <span className="photo-lightbox__placeholder" role="img" aria-label="Media placeholder">
            {photo.mediaType === 'video' ? '🎞️' : '📷'}
          </span>
        )}
        <p>{photo.caption}</p>
      </div>
      <button className="photo-lightbox__next" type="button" onClick={() => move(1)} aria-label="Next photo">&gt;</button>
    </div>
  )
}

export default PhotoLightbox
