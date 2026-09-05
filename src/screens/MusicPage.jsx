import { useEffect, useRef, useState } from 'react'
import BackButton from '../components/BackButton.jsx'
import RetroButton from '../components/RetroButton.jsx'
import VinylPlayer from '../components/VinylPlayer.jsx'
import birthdayData from '../data/birthdayData.js'
import { playSound } from '../utils/audio.js'
import assets from '../data/assets.js'

function MusicPage({ onBack, onAudioStart, onAudioStop }) {
  const audioRef = useRef(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const tracks = birthdayData.songs
  const currentTrack = tracks[currentTrackIndex]

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio
    const updateProgress = () => setProgress(audio.currentTime)
    const updateDuration = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    const handleEnded = () => {
      if (!tracks.length) return
      setCurrentTrackIndex((index) => (index + 1) % tracks.length)
      setIsPlaying(true)
    }
    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.pause()
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
      audio.src = ''
      onAudioStop()
    }
  }, [onAudioStop, tracks.length])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return
    audio.src = currentTrack.src || ''
    audio.currentTime = 0
    setProgress(0)
    setDuration(0)
  }, [currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack?.src) return
    if (isPlaying) {
      onAudioStart()
      audio.play().catch(() => {
        setIsPlaying(false)
        onAudioStop()
      })
    } else {
      audio.pause()
      onAudioStop()
    }
  }, [isPlaying, currentTrack, onAudioStart, onAudioStop])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio || !currentTrack?.src) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      onAudioStop()
    } else {
      onAudioStart()
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false)
          onAudioStop()
        })
    }
  }

  const changeTrack = (direction) => {
    if (!tracks.length) return
    playSound(assets.audio.effects.click)
    setCurrentTrackIndex((index) => (index + direction + tracks.length) % tracks.length)
    setIsPlaying(true)
  }

  const scrub = (event) => {
    const nextProgress = Number(event.target.value)
    setProgress(nextProgress)
    if (audioRef.current) audioRef.current.currentTime = nextProgress
  }

  return (
    <div className="music-screen">
      <BackButton onClick={() => { onAudioStop(); onBack() }} />
      <header className="music-screen__header">
        <p>Press play and make a memory</p>
        <h1>Your Playlist</h1>
      </header>
      <VinylPlayer track={currentTrack} isPlaying={isPlaying} />
      <section className="music-controls" aria-label="Music controls">
        <RetroButton onClick={() => changeTrack(-1)}>◀</RetroButton>
        <RetroButton onClick={togglePlayback}>{isPlaying ? 'Pause' : 'Play'}</RetroButton>
        <RetroButton onClick={() => changeTrack(1)}>▶</RetroButton>
        <input type="range" min="0" max={duration || 0} value={Math.min(progress, duration || 0)} onChange={scrub} aria-label="Track progress" />
      </section>
      <div className="tracklist">
        {tracks.map((track, index) => (
          <button className={index === currentTrackIndex ? 'track track--active' : 'track'} type="button" key={track.id} onClick={() => { playSound(assets.audio.effects.click); setCurrentTrackIndex(index); setIsPlaying(true) }}>
            <span>{index === currentTrackIndex && isPlaying ? '♫' : '♪'}</span>
            <strong>{track.title}</strong>
            <small>{track.artist}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

export default MusicPage
