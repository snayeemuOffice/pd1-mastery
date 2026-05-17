import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { flashcards, getFlashcardsByChapter } from '../data/flashcards'
import { chapters } from '../data/studyTopics'

export default function Flashcards() {
  const { chapterId } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    const filtered = chapterId ? getFlashcardsByChapter(chapterId) : [...flashcards]
    // Shuffle
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]]
    }
    setCards(filtered)
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [chapterId])

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setIsFlipped(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setIsFlipped(false)
    }
  }

  const handleShuffle = () => {
    const shuffled = [...cards]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setCards(shuffled)
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext()
    else if (e.key === 'ArrowLeft') handlePrev()
    else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleFlip()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  if (cards.length === 0) {
    return (
      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No Flashcards Available</h3>
          <p>There are no flashcards for this chapter yet.</p>
          <Link to="/flashcards" className="btn btn-primary" style={{ marginTop: '16px' }}>
            View All Flashcards
          </Link>
        </div>
      </div>
    )
  }

  const currentCard = cards[currentIndex]

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Flashcards</h1>
          <p>Review key concepts with interactive flashcards</p>
        </div>
      </div>

      <div className="flashcard-container">
        {/* Chapter Filter */}
        <div className="flashcard-chapter-nav">
          <Link
            to="/flashcards"
            className={`chapter-tab ${!chapterId ? 'active' : ''}`}
          >
            All ({flashcards.length})
          </Link>
          {chapters.map(ch => {
            const count = getFlashcardsByChapter(ch.id).length
            if (count === 0) return null
            return (
              <Link
                key={ch.id}
                to={`/flashcards/${ch.id}`}
                className={`chapter-tab ${chapterId === ch.id ? 'active' : ''}`}
              >
                {ch.icon} {ch.name.split(':')[0]} ({count})
              </Link>
            )
          })}
        </div>

        {/* Progress */}
        <div className="flashcard-progress">
          <span className="flashcard-counter">
            Card {currentIndex + 1} of {cards.length}
          </span>
          <button className="btn btn-ghost btn-sm" onClick={handleShuffle}>
            🔀 Shuffle
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar" style={{ marginBottom: '24px' }}>
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / cards.length) * 100}%`,
              background: 'var(--primary)'
            }}
          />
        </div>

        {/* Flashcard */}
        <div
          className="flashcard"
          onClick={handleFlip}
          style={{
            transform: isFlipped ? 'scale(1)' : 'scale(1)',
            borderLeft: `4px solid var(--primary)`
          }}
        >
          <div className="card-content">
            {!isFlipped ? (
              <>
                <div className="card-label">Question</div>
                <div className="card-text">{currentCard.front}</div>
              </>
            ) : (
              <>
                <div className="card-label" style={{ color: 'var(--success)' }}>Answer</div>
                <div className="card-text-back">{currentCard.back}</div>
              </>
            )}
          </div>
        </div>

        <p className="flashcard-hint">
          Click card or press Space to flip • Use arrow keys to navigate
        </p>

        {/* Navigation */}
        <div className="flashcard-actions">
          <button
            className="btn btn-outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
          >
            ← Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleFlip}
          >
            {isFlipped ? 'Show Question' : 'Show Answer'}
          </button>
          <button
            className="btn btn-outline"
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            style={{ opacity: currentIndex === cards.length - 1 ? 0.5 : 1 }}
          >
            Next →
          </button>
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="content-section" style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '16px' }}>⌨️ Keyboard Shortcuts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <kbd style={{ padding: '4px 8px', background: 'var(--gray-100)', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>Space</kbd>
              <span style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Flip card</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <kbd style={{ padding: '4px 8px', background: 'var(--gray-100)', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>Enter</kbd>
              <span style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Flip card</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <kbd style={{ padding: '4px 8px', background: 'var(--gray-100)', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>←</kbd>
              <span style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Previous card</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <kbd style={{ padding: '4px 8px', background: 'var(--gray-100)', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }}>→</kbd>
              <span style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Next card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
