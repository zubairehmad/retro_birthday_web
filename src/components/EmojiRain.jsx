import { useEffect, useMemo, useState } from 'react'

const MAX_PARTICLES = 220

function EmojiRain({ emojis = ['🎉'], count = 50, duration = 3000 }) {
  const [visible, setVisible] = useState(true)
  const trajectoryDuration = Math.min(Math.max(duration, 1500), 2500)
  const maxDelay = Math.min(1400, Math.max(600, trajectoryDuration * 0.65))
  const particles = useMemo(() => {
    const safeEmojis = emojis.length ? emojis : ['🎉']
    const particleCount = Math.min(Math.max(0, count), MAX_PARTICLES)

    return Array.from({ length: particleCount }, (_, index) => ({
      id: index,
      emoji: safeEmojis[Math.floor(Math.random() * safeEmojis.length)],
      left: Math.random() * 100,
      top: -12 + Math.random() * 10,
      fontSize: 1.25 + Math.random() * 1,
      startScale: 0.65 + Math.random() * 0.45,
      endScale: 0.75 + Math.random() * 0.75,
      startRotation: -40 + Math.random() * 80,
      midRotation: -100 + Math.random() * 200,
      endRotation: -180 + Math.random() * 360,
      drift: -120 + Math.random() * 240,
      midDrift: -70 + Math.random() * 140,
      opacity: 0.62 + Math.random() * 0.38,
      blur: Math.random() * 0.6,
      midScale: 0.72 + Math.random() * 0.6,
      delay: Math.random() * maxDelay,
      speed: Math.min(2500, Math.max(1500, trajectoryDuration * (0.85 + Math.random() * 0.3))),
    }))
  }, [count, emojis, maxDelay, trajectoryDuration])

  useEffect(() => {
    const cleanupTimer = window.setTimeout(() => setVisible(false), trajectoryDuration + maxDelay + 500)
    return () => window.clearTimeout(cleanupTimer)
  }, [maxDelay, trajectoryDuration])

  if (!visible) return null

  return (
    <div className="emoji-rain" aria-hidden="true">
      {particles.map((particle) => (
        <span
          className="emoji-rain__particle"
          key={particle.id}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            fontSize: `${particle.fontSize}rem`,
            '--emoji-start-scale': particle.startScale,
            '--emoji-end-scale': particle.endScale,
            '--emoji-start-rotation': `${particle.startRotation}deg`,
            '--emoji-mid-rotation': `${particle.midRotation}deg`,
            '--emoji-end-rotation': `${particle.endRotation}deg`,
            '--emoji-drift': `${particle.drift}px`,
            '--emoji-mid-drift': `${particle.midDrift}px`,
            '--emoji-opacity': particle.opacity,
            '--emoji-blur': `${particle.blur}px`,
            '--emoji-mid-scale': particle.midScale,
            animationDelay: `${particle.delay}ms`,
            animationDuration: `${particle.speed}ms`,
          }}
        >
          {particle.emoji}
        </span>
      ))}
    </div>
  )
}

export default EmojiRain
