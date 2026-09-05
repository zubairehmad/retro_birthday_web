import { playSound } from '../utils/audio.js'
import assets from '../data/assets.js'

function RetroButton({ onClick, children, playClickSound = true }) {
  const handleClick = () => {
    if (playClickSound) playSound(assets.audio.effects.click)
    onClick()
  }

  return <button className="retro-button" type="button" onClick={handleClick}>{children}</button>
}

export default RetroButton
