export function playSound(src) {
  console.log('source provided: ', src)

  if (typeof src !== 'string' || !src.trim()) {
    console.warn('Unable to play sound: an audio source is required.')
    return Promise.resolve(false)
  }

  if (typeof globalThis.Audio !== 'function') {
    console.warn(`Unable to play sound "${src}": Audio is unavailable.`)
    return Promise.resolve(false)
  }

  try {
    const audio = new globalThis.Audio(src)
    audio.preload = 'auto'

    try {
      const playback = audio.play()
      if (playback && typeof playback.then === 'function') {
        return playback
          .then(() => true)
          .catch((error) => {
            console.warn(`Unable to play sound "${src}".`, error)
            return false
          })
      }
      return Promise.resolve(true)
    } catch (error) {
      console.warn(`Unable to start sound "${src}".`, error)
      return Promise.resolve(false)
    }
  } catch (error) {
    console.warn(`Unable to create sound "${src}".`, error)
    return Promise.resolve(false)
  }
}
