import { playSound } from '../utils/audio.js'
import assets from '../data/assets.js'

function BackButton({ onClick, children = 'Back' }) {
  const handleClick = () => {
    playSound(assets.audio.effects.click)
    onClick()
  }

  return <button className="back-button" type="button" onClick={handleClick}>{children}</button>
}

export default BackButton
