import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { chapters } from '../data/studyTopics'
import { examQuestions } from '../data/examQuestions'

export default function StudyProgress() {
  const [progress, setProgress] = useState(null)
  const [lastExam, setLastExam] = useState(null)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('pd1_progress') || '{}')
    const exam = JSON.parse(localStorage.getItem('pd1_lastExam') || 'null')
    setProgress(saved)
    setLastExam(exam)
  }, [])

  const clearProgress = () => {
    if (window.confirm('Are you sure you want to clear all progress data?')) {
      localStorage.removeItem('pd1_progress')
      localStorage.removeItem('pd1_lastExam')
      setProgress(null)
      setLastExam(null)
    }
  }

  // Calculate stats
  const totalQuestions = examQuestions.length
  const answeredQuestions = progress?.examResults
    ? [...new Set(progress.examResults.map(r => r.questionId))].length
    : 0
  const correctAnswers = progress?.examResults
    ? progress.examResults.filter(r => r.correct).length
    : 0
  const accuracy = answeredQuestions > 0
    ? Math.round((correctAnswers / progress.examResults.length) * 100)
    : 0

  // Chapter progress
  const chapterStats = chapters.map(ch => {
    const chapterQuestions = examQuestions.filter(q => q.chapter === ch.id)
    const chapterResults = progress?.examResults
      ? progress.examResults.filter(r => {
          const q = examQuestions.find(eq => eq.id === r.questionId)
          return q && q.chapter === ch.id
        })
      : []
    const chapterCorrect = chapterResults.filter(r => r.correct).length
    const chapterAccuracy = chapterResults.length > 0
      ? Math.round((chapterCorrect / chapterResults.length) * 100)
      : 0

    return {
      ...ch,
      totalQuestions: chapterQuestions.length,
      answered: chapterResults.length,
      correct: chapterCorrect,
      accuracy: chapterAccuracy
    }
  })

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Study Progress</h1>
          <p>Track your PD1 exam preparation journey</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        {/* Overview Stats */}
        <div className="progress-overview">
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-value">{answeredQuestions}</div>
            <div className="stat-label">Questions Answered</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-value" style={{ color: 'var(--success)' }}>{correctAnswers}</div>
            <div className="stat-label">Correct Answers</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-value" style={{ color: accuracy >= 70 ? 'var(--success)' : 'var(--danger)' }}>
              {accuracy}%
            </div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-value">{totalQuestions - answeredQuestions}</div>
            <div className="stat-label">Remaining</div>
          </div>
        </div>

        {/* Last Exam Result */}
        {lastExam && (
          <div className="content-section">
            <h2>📋 Last Practice Exam</h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px',
              background: lastExam.passed ? 'var(--success-light)' : 'var(--danger-light)',
              borderRadius: 'var(--radius-lg)',
              marginTop: '16px'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>
                  {lastExam.passed ? '✓ Passed' : '✗ Not Passed'}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--gray-600)' }}>
                  {lastExam.correct} of {lastExam.total} questions correct
                  {' • '}
                  {new Date(lastExam.date).toLocaleDateString()}
                </p>
              </div>
              <div style={{
                fontSize: '36px',
                fontWeight: 800,
                color: lastExam.passed ? 'var(--success)' : 'var(--danger)'
              }}>
                {lastExam.score}%
              </div>
            </div>
          </div>
        )}

        {/* Chapter Progress */}
        <div className="content-section">
          <h2>📚 Chapter Progress</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            {chapterStats.map(ch => (
              <div key={ch.id} style={{
                padding: '20px',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
                      {ch.icon} {ch.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--gray-500)' }}>
                      {ch.answered} of {ch.totalQuestions} questions answered • {ch.correct} correct
                    </p>
                  </div>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: ch.accuracy >= 70 ? 'var(--success)' : ch.accuracy > 0 ? 'var(--danger)' : 'var(--gray-400)'
                  }}>
                    {ch.answered > 0 ? `${ch.accuracy}%` : '—'}
                  </div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${ch.answered > 0 ? (ch.answered / ch.totalQuestions) * 100 : 0}%`,
                      background: ch.accuracy >= 70 ? 'var(--success)' : ch.accuracy > 0 ? 'var(--danger)' : 'var(--gray-300)'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                  <Link to={`/study/${ch.id}`} className="btn btn-outline btn-sm">
                    Study
                  </Link>
                  <Link to={`/flashcards/${ch.id}`} className="btn btn-ghost btn-sm">
                    Flashcards
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="content-section">
          <h2>💡 Recommendations</h2>
          <div className="exam-tips-list">
            {chapterStats.some(ch => ch.accuracy < 70 && ch.answered > 0) ? (
              <>
                {chapterStats
                  .filter(ch => ch.accuracy < 70 && ch.answered > 0)
                  .map(ch => (
                    <div key={ch.id} className="exam-tip">
                      <span className="tip-icon">📖</span>
                      <span className="tip-text">
                        Review <strong>{ch.name}</strong> - your accuracy is {ch.accuracy}%.
                        Focus on the key points and exam tips for each topic.
                      </span>
                    </div>
                  ))
                }
              </>
            ) : (
              <div className="exam-tip">
                <span className="tip-icon">🌟</span>
                <span className="tip-text">
                  {answeredQuestions === 0
                    ? 'Start by taking a practice exam to assess your current knowledge level.'
                    : 'Great progress! Keep studying and taking practice exams to maintain your knowledge.'
                  }
                </span>
              </div>
            )}
            <div className="exam-tip">
              <span className="tip-icon">📝</span>
              <span className="tip-text">
                Take a full practice exam regularly to simulate the real PD1 test experience and track improvement.
              </span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">🔄</span>
              <span className="tip-text">
                Use flashcards after each study session to reinforce key concepts in your memory.
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
          <Link to="/practice" className="btn btn-primary btn-lg">
            Take Practice Exam
          </Link>
          <Link to="/study" className="btn btn-outline btn-lg">
            Continue Studying
          </Link>
          <button className="btn btn-ghost btn-lg" onClick={clearProgress}>
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  )
}
