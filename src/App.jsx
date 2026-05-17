import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import StudyGuide from './pages/StudyGuide'
import TopicDetail from './pages/TopicDetail'
import PracticeExam from './pages/PracticeExam'
import ExamSession from './pages/ExamSession'
import Flashcards from './pages/Flashcards'
import StudyProgress from './pages/StudyProgress'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study" element={<StudyGuide />} />
            <Route path="/study/:chapterId" element={<StudyGuide />} />
            <Route path="/topic/:topicId" element={<TopicDetail />} />
            <Route path="/practice" element={<PracticeExam />} />
            <Route path="/exam/:examId" element={<ExamSession />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/flashcards/:chapterId" element={<Flashcards />} />
            <Route path="/progress" element={<StudyProgress />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
