import React from 'react'

function Blog() {
  return (
    <>
      <section className="hero-small text-white text-center d-flex align-items-center" style={{
        background: '#16a34a',
        minHeight: '90vh'
      }}>
        <div className="container fade-up">
          <h1 className="fw-bold mb-3">Blog & Insight</h1>
          <p className="lead">Artikel seputar tips latihan, nutrisi, dan mental health terbaru.</p>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center">Blog Page - React Version</h2>
      </section>
    </>
  )
}

export default Blog

