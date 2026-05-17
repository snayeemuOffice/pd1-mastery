import { Link } from 'react-router-dom'
import { examQuestions } from '../data/examQuestions'
import { examSets, chapterQuizzes, topicQuizzes } from '../data/examSets'

export default function PracticeExam() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Practice Exams</h1>
          <p>Test your knowledge with realistic PD1 exam questions - 60 questions per set, official marking ratios</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        {/* Full Exam Sets */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <h2>Full Practice Exam Sets</h2>
          <p>60 questions each, 110 minutes, following official PD1 exam format</p>
        </div>

        <div className="exam-options-grid">
          {examSets.map((set) => (
            <Link key={set.id} to={`/exam/${set.id}`}>
              <div className="exam-option-card">
                <div className="exam-icon">📋</div>
                <h3>{set.name}</h3>
                <p className="exam-desc">{set.description}</p>
                <div className="exam-option-details">
                  <div className="exam-option-detail">
                    <span className="detail-icon">📝</span>
                    <span>60 Qs</span>
                  </div>
                  <div className="exam-option-detail">
                    <span className="detail-icon">⏱️</span>
                    <span>110 min</span>
                  </div>
                  <div className="exam-option-detail">
                    <span className="detail-icon">🎯</span>
                    <span>68%</span>
                  </div>
                </div>
                <button className="btn btn-primary">Start Exam</button>
              </div>
            </Link>
          ))}
        </div>

        {/* Chapter Quizzes */}
        <div className="section-header" style={{ marginBottom: '32px', marginTop: '48px' }}>
          <h2>Chapter Quizzes</h2>
          <p>20 questions focused on specific chapters</p>
        </div>

        <div className="exam-options-grid">
          {chapterQuizzes.map((quiz) => (
            <Link key={quiz.id} to={`/exam/${quiz.id}`}>
              <div className="exam-option-card">
                <div className="exam-icon">{quiz.icon}</div>
                <h3>{quiz.name}</h3>
                <p className="exam-desc">{quiz.description}</p>
                <div className="exam-option-details">
                  <div className="exam-option-detail">
                    <span className="detail-icon">📝</span>
                    <span>20 Qs</span>
                  </div>
                  <div className="exam-option-detail">
                    <span className="detail-icon">⏱️</span>
                    <span>30 min</span>
                  </div>
                  <div className="exam-option-detail">
                    <span className="detail-icon">🎯</span>
                    <span>70%</span>
                  </div>
                </div>
                <button className="btn btn-outline">Start Quiz</button>
              </div>
            </Link>
          ))}
        </div>

        {/* Topic Quizzes */}
        <div className="section-header" style={{ marginBottom: '32px', marginTop: '48px' }}>
          <h2>Topic-Specific Quizzes</h2>
          <p>10 questions on individual exam topics</p>
        </div>

        <div className="exam-options-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {topicQuizzes.map((quiz) => (
            <Link key={quiz.id} to={`/exam/${quiz.id}`}>
              <div className="exam-option-card" style={{ padding: '20px 16px' }}>
                <h3 style={{ fontSize: '14px' }}>{quiz.name}</h3>
                <p className="exam-desc" style={{ fontSize: '12px' }}>{quiz.topic}</p>
                <div className="exam-option-details" style={{ padding: '6px', marginBottom: '12px' }}>
                  <div className="exam-option-detail" style={{ fontSize: '11px' }}>
                    <span>📝</span>
                    <span>10 Qs</span>
                  </div>
                  <div className="exam-option-detail" style={{ fontSize: '11px' }}>
                    <span>⏱️</span>
                    <span>15 min</span>
                  </div>
                </div>
                <button className="btn btn-sm btn-ghost" style={{ width: '100%' }}>Start</button>
              </div>
            </Link>
          ))}
        </div>

        {/* Exam Stats */}
        <div className="content-section" style={{ marginTop: '48px' }}>
          <h2>📊 Content Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '20px' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--primary-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary)' }}>{examQuestions.length}</div>
              <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Total Questions</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--success-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--success)' }}>5</div>
              <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Exam Sets</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--warning-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--warning)' }}>5</div>
              <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Chapter Quizzes</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: 'var(--secondary-light)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--secondary)' }}>16</div>
              <div style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Topic Quizzes</div>
            </div>
          </div>
        </div>

        {/* Marking Ratios */}
        <div className="content-section" style={{ marginTop: '24px' }}>
          <h2>📈 Official PD1 Exam Weights</h2>
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--gray-100)' }}>
              <span style={{ fontWeight: 500 }}>Developer Fundamentals</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '200px' }}>
                <div style={{ flex: 1, height: '8px', background: 'var(--gray-200)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '27%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
                <span style={{ fontWeight: 600, color: 'var(--primary)', minWidth: '35px', textAlign: 'right' }}>27%</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--gray-100)' }}>
              <span style={{ fontWeight: 500 }}>Process Automation and Logic</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '200px' }}>
                <div style={{ flex: 1, height: '8px', background: 'var(--gray-200)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '28%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
                <span style={{ fontWeight: 600, color: 'var(--primary)', minWidth: '35px', textAlign: 'right' }}>28%</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--gray-100)' }}>
              <span style={{ fontWeight: 500 }}>User Interface</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '200px' }}>
                <div style={{ flex: 1, height: '8px', background: 'var(--gray-200)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '25%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
                <span style={{ fontWeight: 600, color: 'var(--primary)', minWidth: '35px', textAlign: 'right' }}>25%</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
              <span style={{ fontWeight: 500 }}>Testing, Debugging, and Deployment</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '200px' }}>
                <div style={{ flex: 1, height: '8px', background: 'var(--gray-200)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '20%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
                <span style={{ fontWeight: 600, color: 'var(--primary)', minWidth: '35px', textAlign: 'right' }}>20%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Tips */}
        <div className="content-section" style={{ marginTop: '24px' }}>
          <h2>💡 Exam Strategies</h2>
          <div className="exam-tips-list">
            <div className="exam-tip">
              <span className="tip-icon">⏱️</span>
              <span className="tip-text"><strong>Time Management:</strong> 110 minutes for 60 questions = ~1.8 min per question. Flag difficult questions and return later.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">📖</span>
              <span className="tip-text"><strong>Read Carefully:</strong> Look for keywords like "always", "never", "best", "most appropriate". These change the correct answer.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">🎯</span>
              <span className="tip-text"><strong>Passing Score:</strong> You need 68% (41/60 correct) to pass. Focus on your strong areas first.</span>
            </div>
            <div className="exam-tip">
              <span className="tip-icon">🧠</span>
              <span className="tip-text"><strong>Process of Elimination:</strong> Eliminate obviously wrong answers first to increase your chances.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
