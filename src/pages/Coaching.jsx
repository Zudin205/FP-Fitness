import React from 'react'

function Coaching() {
  return (
    <>
      <section className="hero-small text-center text-white d-flex align-items-center justify-content-center" style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
        minHeight: '90vh'
      }}>
        <div className="container fade-up">
          <h1 className="fw-bold mb-3">Personal Coaching</h1>
          <p className="lead">Konsultasi langsung dengan coach profesional sesuai tujuanmu.</p>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center">Coaching Page - React Version</h2>
      </section>
    </>
  )
}

export default Coaching

