import { useState } from 'react'

function PolaroidCard({ imageSrc, videoSrc, mediaType = 'image', caption, onClick }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <button className="polaroid-card" type="button" onClick={onClick}>
      <span className="polaroid-card__image">
        {mediaType === 'video' && videoSrc ? (
          <video src={videoSrc} muted playsInline preload="metadata" aria-label={caption} />
        ) : imageSrc && !imageFailed ? (
          <img src={imageSrc} alt={caption} onError={() => setImageFailed(true)} />
        ) : (
          <span aria-label={mediaType === 'video' ? 'Video placeholder' : 'Photo placeholder'} role="img">
            {mediaType === 'video' ? '🎞️' : '📷'}
          </span>
        )}
      </span>
      <span className="polaroid-card__caption">{caption}</span>
    </button>
  )
}

export default PolaroidCard
