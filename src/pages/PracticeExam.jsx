import { Link } from 'react-router-dom'
import { examQuestions, examConfig } from '../data/examQuestions'

export default function PracticeExam() {
  const getQuestionCount = (filter) => {
    if (filter === 'all') return examQuestions.length
    return examQuestions.filter(q => q.chapter === filter).length
  }

  const examOptions = [
    { key: 'fullExam', ...examConfig.fullExam, color: '#0176D3', icon: '📋' },
    { key: 'chapter1', ...examConfig.chapter1, color: '#0176D3', icon: '🏛️' },
    { key: 'chapter2', ...examConfig.chapter2, color: '#FF6B35', icon: '⚡' },
    { key: 'chapter3', ...examConfig.chapter3, color: '#1B96FF', icon: '🖥️' },
    { key: 'chapter4', ...examConfig.chapter4, color: '#032D60', icon: '🔧' }
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
          {examOptions.map((exam, idx) => (
            <Link
              key={exam.key}
              to={`/exam/${exam.key}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className={`exam-option-card ${exam.key === 'fullExam' ? 'full-exam' : ''}`}
                style={{ borderTop: exam.key !== 'fullExam' ? `4px solid ${exam.color}` : undefined }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{exam.icon}</div>
                <h3>{exam.name}</h3>
                <p>{exam.description}</p>
                <div className="exam-option-details">
                  <div className="exam-option-detail">
                    <span>📝</span>
                    <span>{getQuestionCount(exam.questions)} Questions</span>
                  </div>
                  <div className="exam-option-detail">
                    <span>⏱️</span>
                    <span>{exam.timeLimit} Minutes</span>
                  </div>
                  <div className="exam-option-detail">
                    <span>🎯</span>
                    <span>{exam.passingScore}% to Pass</span>
                  </div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Start Exam
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Exam Tips */}
        <div className="content-section" style={{ marginTop: '48px' }}>
          <h2>💡 Exam Tips</h2>
          <div className="exam-tips-list">
            <div className="exam-tip">
              <span className="tip-icon">⏱️</span>
              <span className="tip-text">Manage your time - approximately 1.8 minutes per question on the full exam</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">📖</span>
              <span className="tip-text">Read each question carefully - look for keywords like "always", "never", "best", "most appropriate"</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">✅</span>
              <span className="tip-text">Review your answers before submitting - you can navigate between questions</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">🎯</span>
              <span className="tip-text">For multi-select questions, make sure you select ALL correct answers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
