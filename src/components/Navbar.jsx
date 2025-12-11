import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    window.location.href = '/'
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to="/">FitLife</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/workout') ? 'active' : ''}`} to="/workout">Workouts</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/tracker') ? 'active' : ''}`} to="/tracker">Tracker</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/meal') ? 'active' : ''}`} to="/meal">Meal Plan</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/blog') ? 'active' : ''}`} to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/coaching') ? 'active' : ''}`} to="/coaching">Coaching</Link>
            </li>
            <li className="nav-item ms-lg-3">
              {user ? (
                <div className="btn-group">
                  <Link className="btn profile-btn d-flex align-items-center gap-2" to="/profile">
                    <i className="bi bi-person-circle"></i>
                    {user.name.split(' ')[0]}
                  </Link>
                  <button
                    type="button"
                    className="btn profile-btn dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Menu</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fade-dropdown shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="bi bi-person me-2"></i> Profil
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <span className="dropdown-item logout" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <i className="bi bi-box-arrow-right me-2"></i> Keluar
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="btn btn-success px-4 py-2 fw-semibold shadow-sm">
                  <i className="bi bi-person-circle me-1"></i> Masuk / Daftar
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

