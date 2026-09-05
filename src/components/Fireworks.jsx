import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadFireworksPreset } from '@tsparticles/preset-fireworks'
import './fireworks.css'

export default function Fireworks({ burst }) {
  const [activeBurstId, setActiveBurstId] = useState(null)
  const watcherRef = useRef(null)

  useEffect(() => {
    if (!burst) return
    setActiveBurstId(burst)
  }, [burst])

  const watchBurst = useCallback((container) => {
    if (watcherRef.current) {
      window.cancelAnimationFrame(watcherRef.current)
    }

    let hasEmittedParticles = false
    const check = () => {
      if (!container || container.destroyed) {
        setActiveBurstId(null)
        return
      }

      if (container.particles.count > 0) {
        hasEmittedParticles = true
      }

      const finished = hasEmittedParticles && container.particles.count === 0

      if (finished) {
        setActiveBurstId(null)
        return
      }

      watcherRef.current = window.requestAnimationFrame(check)
    }

    watcherRef.current = window.requestAnimationFrame(check)
  }, [])

  useEffect(() => () => {
    if (watcherRef.current) window.cancelAnimationFrame(watcherRef.current)
  }, [])

  const options = useMemo(() => ({
    preset: 'fireworks',
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    sounds: {
      enable: true,
    },
    emitters: {
      direction: 'top',
      life: {
        count: 40,
        duration: 0.1,
      },
      rate: {
        delay: { min: 0.6, max: 1.0},
        quantity: 2,
      },
      position: { x: 50, y: 100 },
      size: { width: 90, height: 0 },
    },
    particles: {
      color: {
        value: ['#FF3B00', '#FFD700', '#FF007F', '#00E5FF', '#00FF66', '#A855F7'],
      },
      size: {
        value: { min: 4, max: 8 },
      },
      life: {
        duration: {
          sync: false,
          value: { min: 2.5, max: 4 },
        },
      },
      move: {
        enable: true,
        speed: { min: 22, max: 32 },
        gravity: {
          enable: true,
          acceleration: 2.5,
        },
        decay: 0.0005,
      },
      opacity: {
        value: { min: 0.6, max: 1 },
        animation: {
          enable: true,
          speed: 0.8,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
      },
    },
  }), [])

  const idleOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    sounds: { enable: true },
    emitters: [],
    particles: { number: { value: 0 } },
  }), [])

  return (
    <ParticlesProvider init={loadFireworksPreset}>
      <div className="fireworks-viewport">
        <Particles
          key={activeBurstId ? `active-${activeBurstId}` : 'idle-warmup'}
          id="hbd-fireworks-single"
          className="fireworks-canvas"
          options={activeBurstId ? options : idleOptions}
          particlesLoaded={activeBurstId ? watchBurst : undefined}
        />
      </div>
    </ParticlesProvider>
  )
}
