import React from 'react'

function Meal() {
  return (
    <>
      <section className="hero-small text-center text-white d-flex align-items-center justify-content-center" style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
        minHeight: '90vh'
      }}>
        <div className="container fade-up">
          <h1 className="fw-bold mb-3">Meal Plan Sehat</h1>
          <p className="lead">Rencana makan bergizi untuk menunjang tujuan fitness kamu setiap hari.</p>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center">Meal Plan Page - React Version</h2>
      </section>
    </>
  )
}

export default Meal

