import { useCallback, useEffect, useRef, useState } from 'react'
import EmojiRain from './components/EmojiRain.jsx'
import InitialScreen from './screens/InitialScreen.jsx'
import HbdScreen from './screens/HbdScreen.jsx'
import MainScreen from './screens/MainScreen.jsx'
import PhotoAlbum from './screens/PhotoAlbum.jsx'
import LetterPage from './screens/LetterPage.jsx'
import MusicPage from './screens/MusicPage.jsx'
import birthdayData from './data/birthdayData.js'
import assets from './data/assets.js'

function App() {
  const [screen, setScreen] = useState('initial')
  const [celebration, setCelebration] = useState(0)
  const [isHbdMusicPlaying, setIsHbdMusicPlaying] = useState(false)
  const hbdAudioRef = useRef(null)
  const resumeHbdMusicRef = useRef(false)

  const stopHbdMusic = useCallback(() => {
    const audio = hbdAudioRef.current
    if (!audio) return
    audio.pause()
    setIsHbdMusicPlaying(false)
    resumeHbdMusicRef.current = false
    audio.currentTime = 0
    audio.src = ''
    hbdAudioRef.current = null
  }, [])

  useEffect(() => {
    if (screen !== 'hbd' || hbdAudioRef.current) return
    if (typeof globalThis.Audio !== 'function') {
      console.warn('Unable to play HBD background music: Audio is unavailable.')
      return
    }

    let audio
    try {
      audio = new globalThis.Audio(assets.audio.songs.happyBirthday)
    } catch (error) {
      console.warn('Unable to create HBD background music.', error)
      return
    }

    audio.preload = 'auto'
    audio.loop = true
    audio.volume = 1
    hbdAudioRef.current = audio

    const playback = audio.play()

    if (playback && typeof playback.then === 'function') {
      playback
        .then(() => {
          setIsHbdMusicPlaying(true)
        })
        .catch((error) => {
          console.warn('Unable to play HBD background music.', error)
          setIsHbdMusicPlaying(false)
        })
    } else {
      setIsHbdMusicPlaying(true)
    }
  }, [screen])

  const pauseHbdMusic = useCallback(() => {
    const audio = hbdAudioRef.current
    if (!audio || audio.paused) return

    resumeHbdMusicRef.current = true
    audio.pause()
    setIsHbdMusicPlaying(false)
  }, [])

  const resumeHbdMusic = useCallback(() => {
    const audio = hbdAudioRef.current
    if (!audio || !resumeHbdMusicRef.current) return

    resumeHbdMusicRef.current = false
    const playback = audio.play()

    if (playback && typeof playback.then === 'function') {
      playback
        .then(() => {
          setIsHbdMusicPlaying(true)
        })
        .catch((error) => {
          console.warn('Unable to resume HBD background music.', error)
          setIsHbdMusicPlaying(false)
        })
    } else {
      setIsHbdMusicPlaying(true)
    }
  }, [])

  useEffect(() => () => {
    stopHbdMusic()
  }, [stopHbdMusic])

  const screens = {
    initial: <InitialScreen onNext={() => setScreen('hbd')} onCelebrate={() => setCelebration((value) => value + 1)} />,
    hbd: <HbdScreen onNext={() => setScreen('main')} />,
    main: (
      <MainScreen
        onOpenAlbum={() => setScreen('album')}
        onOpenLetter={() => setScreen('letter')}
        onOpenMusic={() => setScreen('music')}
        onBack={() => setScreen('hbd')}
      />
    ),
    album: (
      <PhotoAlbum
        onBack={() => setScreen('main')}
        onVideoPlay={pauseHbdMusic}
        onVideoStop={resumeHbdMusic}
      />
    ),
    letter: <LetterPage onBack={() => setScreen('main')} />,
    music: (
      <MusicPage
        onBack={() => setScreen('main')}
        onAudioStart={pauseHbdMusic}
        onAudioStop={resumeHbdMusic}
      />
    ),
  }

  return (
    <main id="app">
      {celebration > 0 && <EmojiRain key={celebration} emojis={birthdayData.happyEmojis} count={120} duration={2200} />}
      {screens[screen]}
    </main>
  )
}

export default App
