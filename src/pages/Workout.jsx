import React from 'react'

function Workout() {
  return (
    <>
      <section className="hero-small text-center text-white d-flex align-items-center justify-content-center" style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
        minHeight: '90vh', borderRadius: '14px'
      }}>
        <div className="container fade-up">
          <h1 className="fw-bold mb-3">Workout Library</h1>
          <p className="lead">Temukan program latihan sesuai level dan tujuan kamu.</p>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center fade-up">Program Latihan Interaktif</h2>
        <p className="text-center text-muted">Halaman Workout - React Version</p>
      </section>
    </>
  )
}

export default Workout

