import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleStartClick = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    if (user) {
      navigate('/workout')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <section className="hero text-center text-white">
        <div className="container">
          <h1 className="fw-bold mb-3 fade-up">Transform Your Life, One Workout at a Time</h1>
          <p className="lead mb-4 fade-up delay-1">
            Bergabung bersama komunitas sehat kami dan capai tujuan fitness kamu dengan panduan profesional.
          </p>
          <button onClick={handleStartClick} className="btn btn-success btn-lg shadow-sm fade-up delay-2">
            <i className="bi bi-play-fill me-1"></i> Mulai Sekarang
          </button>
        </div>
      </section>
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-5 fade-up">Fitur Utama FitLife</h2>
        <div className="row g-4">
          <div className="col-md-4 fade-up delay-1">
            <Link to="/workout" className="text-decoration-none">
              <div className="feature-card">
                <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="Workout Icon" />
                <h5>Workout Program</h5>
                <p>Program latihan untuk semua level, dari pemula hingga profesional.</p>
              </div>
            </Link>
          </div>
          <div className="col-md-4 fade-up delay-2">
            <Link to="/tracker" className="text-decoration-none">
              <div className="feature-card">
                <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="Tracker Icon" />
                <h5>Fitness Tracker</h5>
                <p>Lacak progres latihan, berat badan, dan kalori dengan mudah.</p>
              </div>
            </Link>
          </div>
          <div className="col-md-4 fade-up delay-3">
            <Link to="/meal" className="text-decoration-none">
              <div className="feature-card">
                <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Meal Icon" />
                <h5>Meal & Nutrition</h5>
                <p>Temukan rencana makan sehat sesuai kebutuhan kamu.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

