import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div className="logo-icon">SF</div>
          <div className="brand-text">
            <span className="brand-name">PD1 Mastery</span>
            <span className="brand-sub">Salesforce Platform Developer I</span>
          </div>
        </Link>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/study" className={isActive('/study') ? 'active' : ''} onClick={() => setOpen(false)}>
              Study Guide
            </Link>
          </li>
          <li>
            <Link to="/flashcards" className={isActive('/flashcards') ? 'active' : ''} onClick={() => setOpen(false)}>
              Flashcards
            </Link>
          </li>
          <li>
            <Link to="/practice" className={isActive('/practice') ? 'active' : ''} onClick={() => setOpen(false)}>
              Practice Exam
            </Link>
          </li>
          <li>
            <Link to="/progress" className={isActive('/progress') ? 'active' : ''} onClick={() => setOpen(false)}>
              Progress
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
