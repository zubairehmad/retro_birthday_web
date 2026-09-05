import { useEffect, useRef, useState } from 'react'
import RetroButton from '../components/RetroButton.jsx'
import EmojiRain from '../components/EmojiRain.jsx'
import { playSound } from '../utils/audio.js'
import birthdayData from '../data/birthdayData.js'
import assets from '../data/assets.js'

function InitialScreen({ onNext, onCelebrate }) {
  const [celebrating, setCelebrating] = useState(false)
  const [sadReaction, setSadReaction] = useState(0)
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 })
  const noContainerRef = useRef(null)
  const noButtonRef = useRef(null)
  const noOffsetRef = useRef({ x: 0, y: 0 })
  const pointerRef = useRef(null)
  const evasionFrameRef = useRef(null)

  useEffect(() => () => {
    if (evasionFrameRef.current !== null) {
      window.cancelAnimationFrame(evasionFrameRef.current)
    }
  }, [])

  useEffect(() => {
    if (!celebrating) return undefined
    const navigationTimer = window.setTimeout(onNext, 1200)
    return () => window.clearTimeout(navigationTimer)
  }, [celebrating, onNext])

  const handleYes = () => {
    if (celebrating) return
    playSound(assets.audio.effects.yay)
    onCelebrate()
    setCelebrating(true)
  }

  const handleNoProximity = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    pointerRef.current = { x: event.clientX, y: event.clientY }
    if (evasionFrameRef.current !== null) return

    evasionFrameRef.current = window.requestAnimationFrame(() => {
      evasionFrameRef.current = null
      if (!noContainerRef.current || !noButtonRef.current || !pointerRef.current) return

      const containerRect = noContainerRef.current.getBoundingClientRect()
      const buttonRect = noButtonRef.current.getBoundingClientRect()
      const current = noOffsetRef.current
      const buttonCenter = {
        x: containerRect.left + containerRect.width / 2 + current.x,
        y: containerRect.top + containerRect.height / 2 + current.y,
      }
      const dx = buttonCenter.x - pointerRef.current.x
      const dy = buttonCenter.y - pointerRef.current.y
      const distance = Math.hypot(dx, dy)
      if (distance > 120) return

      const maxX = Math.max(0, (containerRect.width - buttonRect.width) / 2)
      const maxY = Math.max(0, (containerRect.height - buttonRect.height) / 2)
      const length = distance || 1
      const next = {
        x: Math.max(-maxX, Math.min(maxX, (dx / length) * maxX)),
        y: Math.max(-maxY, Math.min(maxY, (dy / length) * maxY)),
      }
      if (next.x === current.x && next.y === current.y) return
      noOffsetRef.current = next
      setNoOffset(next)
    })
  }

  const handleCardLeave = () => {
    pointerRef.current = null
    if (evasionFrameRef.current !== null) {
      window.cancelAnimationFrame(evasionFrameRef.current)
      evasionFrameRef.current = null
    }
    if (noOffsetRef.current.x === 0 && noOffsetRef.current.y === 0) return
    noOffsetRef.current = { x: 0, y: 0 }
    setNoOffset({ x: 0, y: 0 })
  }

  const handleNoTap = () => {
    playSound(assets.audio.effects.no)
    setSadReaction((reaction) => reaction + 1)
  }

  return (
    <div className="initial-screen">
      {sadReaction > 0 && <EmojiRain key={sadReaction} emojis={birthdayData.sadEmojis} count={120} duration={2200} />}
      <div className="initial-screen__decor" aria-hidden="true" />
      <section className="birthday-card retro-card-rounded" onMouseMove={handleNoProximity} onMouseLeave={handleCardLeave}>
        <p className="birthday-card__eyebrow">A tiny surprise</p>
        <h1>I've got something special for you...</h1>
        <p>Are you ready to open your birthday surprise?</p>
        <div className="birthday-card__actions">
          <RetroButton onClick={handleYes} playClickSound={false}>YESS!</RetroButton>
          <div
            className="no-button-container"
            ref={noContainerRef}
          >
            <span ref={noButtonRef} className="no-button-positioner" style={{ '--no-x': `${noOffset.x}px`, '--no-y': `${noOffset.y}px` }}>
              <RetroButton onClick={handleNoTap} playClickSound={false}>NO</RetroButton>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InitialScreen
