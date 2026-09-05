import { useEffect, useState } from 'react'

function QuoteRotator({ quotes = [] }) {
  const availableQuotes = quotes.length
    ? quotes
    : ['Some people make ordinary days feel special.']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (availableQuotes.length < 2) return undefined
    const interval = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % availableQuotes.length)
    }, 4000)
    return () => window.clearInterval(interval)
  }, [availableQuotes.length])

  return (
    <span className="quote-rotator" key={index}>
      “{availableQuotes[index]}”
    </span>
  )
}

export default QuoteRotator
