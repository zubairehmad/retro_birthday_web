function VinylPlayer({ track, isPlaying }) {
  return (
    <div className="vinyl-player">
      <div className={`vinyl-record${isPlaying ? ' vinyl-record--playing' : ''}`}>
        <span className="vinyl-record__label">{track?.title || 'Select a track'}</span>
      </div>
      <div className="vinyl-player__metadata">
        <strong>{track?.title || 'Birthday Mixtape'}</strong>
        <span>{track?.artist || 'Choose a song below'}</span>
      </div>
    </div>
  )
}

export default VinylPlayer
