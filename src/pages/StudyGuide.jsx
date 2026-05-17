import { Link, useParams } from 'react-router-dom'
import { chapters } from '../data/studyTopics'

export default function StudyGuide() {
  const { chapterId } = useParams()
  const selectedChapter = chapterId ? chapters.find(c => c.id === chapterId) : null

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>{selectedChapter ? selectedChapter.name : 'Study Guide'}</h1>
          <p>
            {selectedChapter
              ? selectedChapter.description
              : 'Master every PD1 exam topic with our comprehensive study materials'
            }
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px' }}>
        {/* Chapter Navigation */}
        <div className="chapter-tabs" style={{ marginBottom: '32px' }}>
          <Link to="/study" className={`chapter-tab ${!chapterId ? 'active' : ''}`}>
            All Chapters
          </Link>
          {chapters.map(ch => (
            <Link
              key={ch.id}
              to={`/study/${ch.id}`}
              className={`chapter-tab ${chapterId === ch.id ? 'active' : ''}`}
            >
              {ch.icon} {ch.name}
            </Link>
          ))}
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-2">
          {(selectedChapter ? [selectedChapter] : chapters).map((chapter, idx) => (
            <div key={chapter.id} className="chapter-card card fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="chapter-header" style={{ background: `linear-gradient(135deg, ${chapter.color}, ${chapter.color}dd)` }}>
                <h3>{chapter.icon} {chapter.name}</h3>
                <p>{chapter.topics.length} topics</p>
              </div>
              <div className="chapter-topics">
                {chapter.topics.map(topic => (
                  <Link
                    key={topic.id}
                    to={`/topic/${topic.id}`}
                    className="chapter-topic-item"
                  >
                    <div className="topic-info">
                      <span className="topic-code">{topic.code}</span>
                      <span className="topic-title">{topic.title}</span>
                    </div>
                    <span className="topic-weight-badge">{topic.weight}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Study Tips */}
        {!selectedChapter && (
          <div className="content-section" style={{ marginTop: '48px' }}>
            <h2>💡 Study Tips for PD1 Success</h2>
            <div className="exam-tips-list">
              <div className="exam-tip">
                <span className="tip-icon">✅</span>
                <span className="tip-text">Start with the fundamentals in Chapter 1 before moving to more advanced topics</span>
              </div>
              <div className="exam-tip">
                <span className="tip-icon">✅</span>
                <span className="tip-text">Use flashcards after studying each chapter to reinforce key concepts</span>
              </div>
              <div className="exam-tip">
                <span className="tip-icon">✅</span>
                <span className="tip-text">Take practice exams regularly to identify areas that need more study</span>
              </div>
              <div className="exam-tip">
                <span className="tip-icon">✅</span>
                <span className="tip-text">Focus on understanding concepts, not memorizing - the exam tests application of knowledge</span>
              </div>
              <div className="exam-tip">
                <span className="tip-icon">✅</span>
                <span className="tip-text">Pay special attention to Apex best practices, governor limits, and bulkification</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
