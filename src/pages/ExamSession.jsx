import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { examQuestions, examConfig } from '../data/examQuestions'
import { examSets, chapterQuizzes, topicQuizzes } from '../data/examSets'

// Shuffle array using Fisher-Yates
function shuffleArray(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Shuffle options for a question and return mapping
function shuffleQuestionOptions(question) {
  const indices = [0, 1, 2, 3]
  const shuffledIndices = shuffleArray(indices)
  const shuffledOptions = shuffledIndices.map(i => question.options[i])
  // Find where original correct answer (index 0) ended up
  const newCorrect = shuffledIndices.indexOf(0)
  return {
    ...question,
    options: shuffledOptions,
    correct: newCorrect,
    originalCorrect: 0
  }
}

export default function ExamSession() {
  const { examId } = useParams()

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [examStarted, setExamStarted] = useState(false)
  const [examName, setExamName] = useState('')
  const [passingScore, setPassingScore] = useState(68)

  // Initialize exam
  useEffect(() => {
    let examData = null
    let questionsList = []
    let time = 110
    let pass = 68
    let name = 'Practice Exam'

    // Check exam sets first
    const examSet = examSets.find(s => s.id === examId)
    if (examSet) {
      questionsList = examSet.questions
      time = examSet.timeLimit
      pass = examSet.passingScore
      name = examSet.name
    }

    // Check chapter quizzes
    const chapterQuiz = chapterQuizzes.find(q => q.id === examId)
    if (chapterQuiz) {
      questionsList = chapterQuiz.questions
      time = chapterQuiz.timeLimit
      pass = chapterQuiz.passingScore
      name = chapterQuiz.name
    }

    // Check topic quizzes
    const topicQuiz = topicQuizzes.find(q => q.id === examId)
    if (topicQuiz) {
      questionsList = topicQuiz.questions
      time = topicQuiz.timeLimit
      pass = 70
      name = topicQuiz.name
    }

    // Fall back to exam config
    if (questionsList.length === 0 && examConfig[examId]) {
      const config = examConfig[examId]
      questionsList = config.questions === 'all'
        ? [...examQuestions]
        : examQuestions.filter(q => q.chapter === config.questions)
      time = config.timeLimit
      pass = config.passingScore
      name = config.name
    }

    // Shuffle question order
    questionsList = shuffleArray(questionsList)

    // Shuffle options for each question
    questionsList = questionsList.map(q => shuffleQuestionOptions(q))

    setQuestions(questionsList)
    setTimeLeft(time * 60)
    setPassingScore(pass)
    setExamName(name)
  }, [examId])

  // Timer
  useEffect(() => {
    if (!examStarted || showResults) return
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmitExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [examStarted, showResults])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const handleSelectOption = (questionId, optionIndex) => {
    if (submitted[questionId]) return
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmitAnswer = () => {
    const q = questions[currentIndex]
    if (answers[q.id] === undefined) return
    setSubmitted(prev => ({ ...prev, [q.id]: true }))

    // Save to localStorage for progress tracking
    const existing = JSON.parse(localStorage.getItem('pd1_progress') || '{}')
    if (!existing.examResults) existing.examResults = []
    existing.examResults.push({
      questionId: q.id,
      correct: answers[q.id] === q.correct,
      timestamp: Date.now()
    })
    localStorage.setItem('pd1_progress', JSON.stringify(existing))
  }

  const handleSubmitExam = useCallback(() => {
    setShowResults(true)
    const allSubmitted = {}
    questions.forEach(q => { allSubmitted[q.id] = true })
    setSubmitted(allSubmitted)

    const score = calculateScore()
    localStorage.setItem('pd1_lastExam', JSON.stringify({
      examId,
      score: score.percentage,
      correct: score.correct,
      total: score.total,
      passed: score.percentage >= passingScore,
      date: Date.now()
    }))
  }, [questions, answers, examId, passingScore])

  const calculateScore = () => {
    let correct = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++
    })
    return {
      correct,
      total: questions.length,
      incorrect: questions.length - correct,
      percentage: Math.round((correct / questions.length) * 100)
    }
  }

  const handleStartExam = () => {
    setExamStarted(true)
  }

  const handleRestart = () => {
    setAnswers({})
    setSubmitted({})
    setCurrentIndex(0)
    setShowResults(false)
    setExamStarted(false)
    // Re-shuffle questions and options
    let questionsList = shuffleArray(questions)
    questionsList = questionsList.map(q => shuffleQuestionOptions(q))
    setQuestions(questionsList)
    setTimeLeft(Math.floor(timeLeft / 60) * 60)
  }

  if (questions.length === 0) {
    return (
      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Exam Not Found</h3>
          <p>The requested exam could not be found.</p>
          <Link to="/practice" className="btn btn-primary" style={{ marginTop: '16px' }}>
            Back to Practice Exams
          </Link>
        </div>
      </div>
    )
  }

  // Pre-exam start screen
  if (!examStarted) {
    return (
      <div className="exam-session" style={{ paddingTop: '40px' }}>
        <div className="results-card">
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>📝</div>
          <h2>{examName}</h2>
          <p className="results-subtitle">{questions.length} questions • {Math.floor(timeLeft / 60)} minutes • {passingScore}% to pass</p>
          <div className="results-stats">
            <div className="result-stat">
              <div className="stat-value">{questions.length}</div>
              <div className="stat-label">Questions</div>
            </div>
            <div className="result-stat">
              <div className="stat-value">{Math.floor(timeLeft / 60)}</div>
              <div className="stat-label">Minutes</div>
            </div>
            <div className="result-stat">
              <div className="stat-value">{passingScore}%</div>
              <div className="stat-label">Passing Score</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={handleStartExam}>
              Start Exam
            </button>
            <Link to="/practice" className="btn btn-outline btn-lg">
              Back
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Results screen
  if (showResults) {
    const score = calculateScore()
    const passed = score.percentage >= passingScore

    return (
      <div className="results-container">
        <div className="results-card">
          <div className={`results-icon ${passed ? 'pass' : 'fail'}`}>
            {passed ? '✓' : '✗'}
          </div>
          <h2>{passed ? 'Congratulations!' : 'Keep Practicing'}</h2>
          <p className="results-subtitle">
            {passed
              ? 'You passed the practice exam! Great job!'
              : 'You didn\'t pass this time. Review the explanations and try again.'
            }
          </p>
          <div className={`results-score ${passed ? 'pass' : 'fail'}`}>
            {score.percentage}%
          </div>
          <p className="results-score-label">
            {score.correct} of {score.total} questions correct
          </p>
          <div className="results-stats">
            <div className="result-stat">
              <div className="stat-value" style={{ color: 'var(--success)' }}>{score.correct}</div>
              <div className="stat-label">Correct</div>
            </div>
            <div className="result-stat">
              <div className="stat-value" style={{ color: 'var(--danger)' }}>{score.incorrect}</div>
              <div className="stat-label">Incorrect</div>
            </div>
            <div className="result-stat">
              <div className="stat-value">{passingScore}%</div>
              <div className="stat-label">Passing Score</div>
            </div>
          </div>

          {/* Question Review */}
          <div style={{ textAlign: 'left', marginTop: '32px' }}>
            <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>Question Review</h3>
            {questions.map((q, idx) => {
              const isCorrect = answers[q.id] === q.correct
              return (
                <div key={q.id} className={`question-review-card ${isCorrect ? 'correct-card' : 'incorrect-card'}`}>
                  <div className="review-question">{idx + 1}. {q.question}</div>
                  <div className="review-answer">
                    <span className="label">Your answer: </span>
                    <span className={isCorrect ? 'correct' : 'incorrect'}>
                      {answers[q.id] !== undefined ? q.options[answers[q.id]] : 'Not answered'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div className="review-answer">
                      <span className="label">Correct answer: </span>
                      <span className="correct">{q.options[q.correct]}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="results-actions" style={{ marginTop: '32px' }}>
            <button className="btn btn-primary btn-lg" onClick={handleRestart}>
              Retake Exam
            </button>
            <Link to="/practice" className="btn btn-outline btn-lg">
              All Exams
            </Link>
            <Link to="/study" className="btn btn-ghost btn-lg">
              Study More
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Exam question view
  const currentQuestion = questions[currentIndex]
  const isSubmitted = submitted[currentQuestion.id]
  const selectedAnswer = answers[currentQuestion.id]
  const isCorrect = selectedAnswer === currentQuestion.correct
  const submittedCount = Object.keys(submitted).length
  const timeWarning = timeLeft < 300
  const timeDanger = timeLeft < 60

  return (
    <div className="exam-session">
      {/* Exam Header */}
      <div className="exam-header">
        <div className="exam-header-left">
          <Link to="/practice" className="btn btn-ghost btn-sm">✕ Exit</Link>
          <div className="exam-progress-info">
            <span className="progress-text">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  background: 'var(--primary)'
                }}
              />
            </div>
          </div>
        </div>
        <div className={`exam-timer ${timeDanger ? 'danger' : timeWarning ? 'warning' : ''}`}>
          ⏱️ {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card">
        <div className="question-number">
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className="question-text">{currentQuestion.question}</div>

        {/* Options */}
        <div className="options-list">
          {currentQuestion.options.map((option, idx) => {
            let className = 'option-item'
            if (isSubmitted) {
              if (idx === currentQuestion.correct) className += ' correct'
              else if (idx === selectedAnswer && !isCorrect) className += ' incorrect'
            } else if (selectedAnswer === idx) {
              className += ' selected'
            }

            return (
              <div
                key={idx}
                className={className}
                onClick={() => handleSelectOption(currentQuestion.id, idx)}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="option-text">{option}</span>
              </div>
            )
          })}
        </div>

        {/* Submit Button or Explanation */}
        {!isSubmitted ? (
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <button
              className="btn btn-primary btn-lg"
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === undefined}
              style={{ opacity: selectedAnswer === undefined ? 0.5 : 1 }}
            >
              Submit Answer
            </button>
            {selectedAnswer === undefined && (
              <p style={{ fontSize: '13px', color: 'var(--gray-400)', marginTop: '8px' }}>
                Select an answer to continue
              </p>
            )}
          </div>
        ) : (
          <div className={`explanation-box ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="explanation-header">
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </div>
            <div className="explanation-text">
              {currentQuestion.explanation}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="exam-navigation">
        <button
          className="btn btn-ghost"
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: 'var(--gray-500)' }}>
            {submittedCount}/{questions.length} answered
          </span>
          {submittedCount === questions.length && (
            <button className="btn btn-success" onClick={handleSubmitExam}>
              Submit Exam
            </button>
          )}
        </div>

        <button
          className="btn btn-ghost"
          onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
          disabled={currentIndex === questions.length - 1}
        >
          Next →
        </button>
      </div>

      {/* Question Map */}
      <div className="content-section" style={{ marginTop: '24px' }}>
        <h2 style={{ fontSize: '16px' }}>Question Map</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
          {questions.map((q, idx) => {
            let bg = 'var(--gray-200)'
            let color = 'var(--gray-600)'
            if (submitted[q.id]) {
              bg = answers[q.id] === q.correct ? 'var(--success)' : 'var(--danger)'
              color = 'white'
            } else if (answers[q.id] !== undefined) {
              bg = 'var(--primary)'
              color = 'white'
            }
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: idx === currentIndex ? '2px solid var(--gray-800)' : 'none',
                  background: bg,
                  color: color,
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {idx + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
