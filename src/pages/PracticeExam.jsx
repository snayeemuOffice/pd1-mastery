import { Link } from 'react-router-dom'
import { examQuestions, examConfig } from '../data/examQuestions'

export default function PracticeExam() {
  const getQuestionCount = (filter) => {
    if (filter === 'all') return examQuestions.length
    return examQuestions.filter(q => q.chapter === filter).length
  }

  const examOptions = [
    { key: 'fullExam', ...examConfig.fullExam, icon: '📋', featured: true },
    { key: 'chapter1', ...examConfig.chapter1, icon: '🏛️' },
    { key: 'chapter2', ...examConfig.chapter2, icon: '⚡' },
    { key: 'chapter3', ...examConfig.chapter3, icon: '🖥️' },
    { key: 'chapter4', ...examConfig.chapter4, icon: '🔧' }
  ]

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Practice Exams</h1>
          <p>Test your knowledge with realistic PD1 exam questions</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h2>Choose Your Exam</h2>
          <p>Select a full exam or focus on specific chapters</p>
        </div>

        <div className="exam-options-grid">
          {examOptions.map((exam) => (
            <Link
              key={exam.key}
              to={`/exam/${exam.key}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={`exam-option-card ${exam.featured ? 'full-exam' : ''}`}>
                <div className="exam-icon">{exam.icon}</div>
                <h3>{exam.name}</h3>
                <p className="exam-desc">{exam.description}</p>
                <div className="exam-option-details">
                  <div className="exam-option-detail">
                    <span className="detail-icon">📝</span>
                    <span>{getQuestionCount(exam.questions)} Qs</span>
                  </div>
                  <div className="exam-option-detail">
                    <span className="detail-icon">⏱️</span>
                    <span>{exam.timeLimit} min</span>
                  </div>
                  <div className="exam-option-detail">
                    <span className="detail-icon">🎯</span>
                    <span>{exam.passingScore}%</span>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Start Exam
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="content-section" style={{ marginTop: '48px' }}>
          <h2>📊 Exam Content Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--primary-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary)' }}>{examQuestions.length}</div>
              <div style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Total Questions</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--success-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--success)' }}>4</div>
              <div style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Chapters Covered</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--warning-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--warning)' }}>134</div>
              <div style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Flashcards</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--secondary-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--secondary)' }}>25</div>
              <div style={{ fontSize: '14px', color: 'var(--gray-600)' }}>Study Topics</div>
            </div>
          </div>
        </div>

        {/* Exam Tips */}
        <div className="content-section" style={{ marginTop: '24px' }}>
          <h2>💡 Exam Tips & Strategies</h2>
          <div className="exam-tips-list">
            <div className="exam-tip">
              <span className="tip-icon">⏱️</span>
              <span className="tip-text"><strong>Time Management:</strong> You have approximately 1.8 minutes per question. Don't spend too long on any single question - flag it and come back later.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">📖</span>
              <span className="tip-text"><strong>Read Carefully:</strong> Look for keywords like "always", "never", "best", "most appropriate". These words significantly change the correct answer.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">✅</span>
              <span className="tip-text"><strong>Review Answers:</strong> Use the question map to review all answers before submitting. You can navigate between questions freely.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">🎯</span>
              <span className="tip-text"><strong>Multi-Select Questions:</strong> Make sure you select ALL correct answers. Partial credit is not given for multi-select questions.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">🧠</span>
              <span className="tip-text"><strong>Process of Elimination:</strong> If unsure, eliminate obviously wrong answers first. This increases your chances of selecting the correct answer.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">📝</span>
              <span className="tip-text"><strong>Key Topics:</strong> Focus on Apex best practices, governor limits, bulkification, and the save order of execution. These are heavily tested.</span>
            </div>
          </div>
        </div>

        {/* Study Resources */}
        <div className="content-section" style={{ marginTop: '24px' }}>
          <h2>📚 Additional Study Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
            <Link to="/study" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'all 0.2s', cursor: 'pointer' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📚</div>
                <div style={{ fontWeight: 600, color: 'var(--gray-800)' }}>Study Guide</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>Comprehensive study materials</div>
              </div>
            </Link>
            <Link to="/flashcards" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'all 0.2s', cursor: 'pointer' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔄</div>
                <div style={{ fontWeight: 600, color: 'var(--gray-800)' }}>Flashcards</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>Review key concepts</div>
              </div>
            </Link>
            <Link to="/progress" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', textAlign: 'center', transition: 'all 0.2s', cursor: 'pointer' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📊</div>
                <div style={{ fontWeight: 600, color: 'var(--gray-800)' }}>Progress</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>Track your preparation</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
