import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">SF</div>
              <span className="footer-logo-text">PD1 Mastery</span>
            </div>
            <p>
              Your comprehensive study companion for the Salesforce Platform Developer I (PD1) certification exam.
              Master every topic with our study guides, flashcards, and practice exams.
            </p>
          </div>

          <div className="footer-section">
            <h4>Study</h4>
            <ul>
              <li><Link to="/study/devFundamentals">Developer Fundamentals</Link></li>
              <li><Link to="/study/processAutomation">Process Automation & Logic</Link></li>
              <li><Link to="/study/userInterface">User Interface</Link></li>
              <li><Link to="/study/testingDebugging">Testing & Deployment</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Practice</h4>
            <ul>
              <li><Link to="/practice">Full Practice Exam</Link></li>
              <li><Link to="/flashcards">Flashcards</Link></li>
              <li><Link to="/exam/quiz-devFundamentals">Dev Fundamentals Quiz</Link></li>
              <li><Link to="/exam/quiz-processAutomation">Process Automation Quiz</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://trailhead.salesforce.com" target="_blank" rel="noopener noreferrer">Salesforce Trailhead</a></li>
              <li><a href="https://developer.salesforce.com" target="_blank" rel="noopener noreferrer">Developer Portal</a></li>
              <li><a href="https://focusonforce.com" target="_blank" rel="noopener noreferrer">Focus on Force</a></li>
              <li><Link to="/progress">My Progress</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>PD1 Mastery - Salesforce PD1 Exam Preparation</span>
          <span>Free & Open Study Resource</span>
        </div>
      </div>
    </footer>
  )
}
