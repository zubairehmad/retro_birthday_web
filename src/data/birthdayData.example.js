import assets from './assets.js'

const birthdayData = {
  name: 'Alice',
  date: 'September 4, 2026',
  quotes: [
    'Some people make ordinary days feel special.',
    'Life is better with the right people around.',
    "Here's to all the memories we've made.",
  ],
  letter: 'Wishing you a birthday filled with gentle moments, big smiles, and all the happiness you deserve.\n\nHere is to another year of memories, laughter, and wonderful surprises.',
  hbdCardMessage: "Congratulations on your special day!",
  hbdCardSubMessage: "Here's to another year of joy, laughter, and lovely memories.",
  happyEmojis: [
    '🎉', '🥳', '❤️', '💕', '💖', '✨', '🎂', '🎈', '🌸', '😍',
    '🎊', '🎁', '🌟', '💫', '🪩', '🎶', '🍰', '🧁', '🌈', '🤩', '🥰', '💝',
  ],
  sadEmojis: ['😭', '😢', '💔', '😡', '🥺', '😤', '☹️', '💢'],
  albums: {
    'Outdoor Fun': [
      { id: 'outdoor-1', imageSrc: assets.images.photo5, caption: 'Fun day out' },
      { id: 'outdoor-2', imageSrc: assets.images.photo2, caption: 'Cute outdoor memory' },
    ],
    Friends: [
      { id: 'friends-1', imageSrc: assets.images.photo1, caption: 'Retro Café memory' },
      { id: 'friends-2', imageSrc: assets.images.photo4, caption: 'Evening walk' },
      { id: 'friends-3', imageSrc: assets.images.photo6, caption: 'Stress free hangouts' },
    ],
    Birthday: [
      { id: 'birthday-1', mediaType: 'image', imageSrc: assets.images.photo3, caption: 'Birthday memory' },
      { id: 'birthday-2', mediaType: 'video', videoSrc: assets.videos.video1, caption: 'Memory clip' },
    ],
  },
  songs: [
    { id: 'track-1', title: 'Birthday Song For My Love', artist: 'Bob A. Feldman', src: assets.audio.songs.song1 },
    { id: 'track-2', title: 'Sound Track For You', artist: 'Monplaisir', src: assets.audio.songs.song2 },
  ],
}

export { birthdayData }
export default birthdayData
