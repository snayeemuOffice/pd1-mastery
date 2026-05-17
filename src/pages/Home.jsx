import { Link } from 'react-router-dom'
import { chapters } from '../data/studyTopics'

export default function Home() {
  const totalTopics = chapters.reduce((acc, ch) => acc + ch.topics.length, 0)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Master the <span>Salesforce PD1</span> Exam
          </h1>
          <p>
            Comprehensive study materials, interactive flashcards, and realistic practice exams
            to help you pass the Salesforce Platform Developer I certification with confidence.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/study" className="btn btn-secondary btn-lg">
              Start Studying
            </Link>
            <Link to="/practice" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
              Take Practice Exam
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">{totalTopics}</div>
              <div className="stat-label">Study Topics</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Practice Questions</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">134</div>
              <div className="stat-label">Flashcards</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Chapters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Everything You Need to Pass</h2>
          <p>Our platform covers every aspect of the PD1 exam with the right tools for effective learning</p>
        </div>
        <div className="features-grid">
          <Link to="/study" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Study Guide</h3>
              <p>
                Comprehensive study materials organized by exam topics.
                Key points, exam tips, and detailed explanations for every concept.
              </p>
            </div>
          </Link>
          <Link to="/flashcards" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Interactive Flashcards</h3>
              <p>
                Review key concepts with interactive flashcards.
                Flip to reveal answers and track your understanding.
              </p>
            </div>
          </Link>
          <Link to="/practice" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Practice Exams</h3>
              <p>
                Realistic practice exams that simulate the actual PD1 test.
                Timed questions with detailed explanations for every answer.
              </p>
            </div>
          </Link>
          <Link to="/progress" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>
                Monitor your study progress across all chapters.
                Identify weak areas and focus your preparation effectively.
              </p>
            </div>
          </Link>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Instant Feedback</h3>
            <p>
              Get immediate feedback on every question you answer.
              Learn from detailed explanations of correct and incorrect answers.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Exam-Aligned Content</h3>
            <p>
              All content is aligned with the official Salesforce PD1 exam guide.
              Study exactly what you need to know for the certification.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Info Section */}
      <section className="exam-info-section">
        <div className="section-header">
          <h2>PD1 Exam Overview</h2>
          <p>Know what to expect on the Salesforce Platform Developer I exam</p>
        </div>
        <div className="exam-info-grid">
          <div className="exam-details">
            <div className="exam-detail-item">
              <div className="exam-detail-icon" style={{ background: '#E8F4FD' }}>📋</div>
              <div>
                <h4>60 Questions</h4>
                <p>Multiple-choice and multi-select questions covering all exam topics</p>
              </div>
            </div>
            <div className="exam-detail-item">
              <div className="exam-detail-icon" style={{ background: '#FEF4E8' }}>⏱️</div>
              <div>
                <h4>110 Minutes</h4>
                <p>Approximately 1.8 minutes per question. Time management is key.</p>
              </div>
            </div>
            <div className="exam-detail-item">
              <div className="exam-detail-icon" style={{ background: '#E6F9ED' }}>🎯</div>
              <div>
                <h4>68% Passing Score</h4>
                <p>You need to answer at least 41 out of 60 questions correctly to pass.</p>
              </div>
            </div>
            <div className="exam-detail-item">
              <div className="exam-detail-icon" style={{ background: '#FDECEB' }}>💰</div>
              <div>
                <h4>$200 USD</h4>
                <p>Registration fee. Retake fee is $100. Be prepared on your first attempt!</p>
              </div>
            </div>
          </div>

          <div className="exam-topics-card">
            <h3>Exam Topics & Weights</h3>
            <div className="topic-weight-item">
              <span className="topic-weight-name">Salesforce Fundamentals</span>
              <div className="topic-weight-bar">
                <div className="bar"><div className="bar-fill" style={{ width: '23%' }}></div></div>
                <span className="weight-text">23%</span>
              </div>
            </div>
            <div className="topic-weight-item">
              <span className="topic-weight-name">Data Modeling & Management</span>
              <div className="topic-weight-bar">
                <div className="bar"><div className="bar-fill" style={{ width: '20%' }}></div></div>
                <span className="weight-text">20%</span>
              </div>
            </div>
            <div className="topic-weight-item">
              <span className="topic-weight-name">Logic & Process Automation</span>
              <div className="topic-weight-bar">
                <div className="bar"><div className="bar-fill" style={{ width: '30%' }}></div></div>
                <span className="weight-text">30%</span>
              </div>
            </div>
            <div className="topic-weight-item">
              <span className="topic-weight-name">User Interface</span>
              <div className="topic-weight-bar">
                <div className="bar"><div className="bar-fill" style={{ width: '15%' }}></div></div>
                <span className="weight-text">15%</span>
              </div>
            </div>
            <div className="topic-weight-item">
              <span className="topic-weight-name">Testing, Debugging & Deployment</span>
              <div className="topic-weight-bar">
                <div className="bar"><div className="bar-fill" style={{ width: '12%' }}></div></div>
                <span className="weight-text">12%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #014486, #0176D3)',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>
            Ready to Start Your PD1 Journey?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Join thousands of developers who have passed their PD1 exam using our comprehensive study platform.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/study" className="btn btn-secondary btn-lg">
              Start Studying Now
            </Link>
            <Link to="/practice" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
              Take a Practice Exam
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
