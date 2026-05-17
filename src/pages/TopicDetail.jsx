import { useParams, Link } from 'react-router-dom'
import { getTopicById } from '../data/studyTopics'

export default function TopicDetail() {
  const { topicId } = useParams()
  const topicData = getTopicById(topicId)

  if (!topicData) {
    return (
      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Topic Not Found</h3>
          <p>The requested study topic could not be found.</p>
          <Link to="/study" className="btn btn-primary" style={{ marginTop: '16px' }}>
            Back to Study Guide
          </Link>
        </div>
      </div>
    )
  }

  const { chapter, ...topic } = topicData

  // Get prev/next topics
  const chapterTopics = chapter.topics
  const currentIndex = chapterTopics.findIndex(t => t.id === topicId)
  const prevTopic = currentIndex > 0 ? chapterTopics[currentIndex - 1] : null
  const nextTopic = currentIndex < chapterTopics.length - 1 ? chapterTopics[currentIndex + 1] : null

  return (
    <div>
      <div className="page-header" style={{ background: `linear-gradient(135deg, ${chapter.color}, ${chapter.color}dd)` }}>
        <div className="container">
          <h1>{topic.code}: {topic.title}</h1>
          <p>{chapter.name}</p>
        </div>
      </div>

      <div className="topic-content">
        {/* Breadcrumb */}
        <div className="topic-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/study">Study Guide</Link>
          <span>›</span>
          <Link to={`/study/${chapter.id}`}>{chapter.name}</Link>
          <span>›</span>
          <span>{topic.code}</span>
        </div>

        {/* Topic Hero */}
        <div className="topic-hero">
          <div className="topic-meta">
            <span className="badge badge-primary">{topic.code}</span>
            <span className="badge badge-warning">Weight: {topic.weight}</span>
          </div>
          <h1>{topic.title}</h1>
          <p className="topic-description">{topic.description}</p>
        </div>

        {/* Study Material */}
        {topic.detailedContent && (
          <div className="content-section">
            <h2>📖 Study Material</h2>
            <div className="detailed-content">
              {topic.detailedContent.map((block, idx) => {
                switch (block.type) {
                  case 'heading':
                    return <h4 key={idx} className="content-heading">{block.text}</h4>
                  case 'paragraph':
                    return <p key={idx} className="content-paragraph">{block.text}</p>
                  case 'list':
                    return (
                      <ul key={idx} className="content-list">
                        {block.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    )
                  case 'code':
                    return (
                      <div key={idx} className="content-code">
                        <div className="code-header">
                          <span className="code-lang">{block.language || 'code'}</span>
                        </div>
                        <pre><code>{block.code}</code></pre>
                      </div>
                    )
                  case 'table':
                    return (
                      <div key={idx} className="content-table-wrapper">
                        <table className="content-table">
                          <thead>
                            <tr>
                              {block.headers.map((h, i) => <th key={i}>{h}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell, j) => <td key={j}>{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  default:
                    return null
                }
              })}
            </div>
          </div>
        )}

        {/* Key Points */}
        <div className="content-section">
          <h2>📌 Key Points</h2>
          <ul className="key-points-list">
            {topic.keyPoints.map((point, idx) => (
              <li key={idx} className="key-point fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <span className="point-icon">▸</span>
                <span className="point-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exam Tips */}
        <div className="content-section">
          <h2>🎯 Exam Tips</h2>
          <div className="exam-tips-list">
            {topic.examTips.map((tip, idx) => (
              <div key={idx} className="exam-tip fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <span className="tip-icon">💡</span>
                <span className="tip-text">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practice This Topic */}
        <div className="content-section" style={{ textAlign: 'center' }}>
          <h2 style={{ justifyContent: 'center' }}>📝 Test Your Knowledge</h2>
          <p style={{ color: 'var(--gray-500)', marginBottom: '20px' }}>
            Ready to test what you learned about {topic.title}?
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/practice" className="btn btn-primary">
              Take Practice Exam
            </Link>
            <Link to={`/flashcards/${chapter.id}`} className="btn btn-outline">
              Review Flashcards
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="exam-navigation">
          {prevTopic ? (
            <Link to={`/topic/${prevTopic.id}`} className="btn btn-ghost">
              ← {prevTopic.code}
            </Link>
          ) : <div></div>}
          <Link to={`/study/${chapter.id}`} className="btn btn-outline btn-sm">
            Back to {chapter.name}
          </Link>
          {nextTopic ? (
            <Link to={`/topic/${nextTopic.id}`} className="btn btn-ghost">
              {nextTopic.code} →
            </Link>
          ) : <div></div>}
        </div>
      </div>
    </div>
  )
}
