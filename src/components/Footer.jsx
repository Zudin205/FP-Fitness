import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="modern-footer mt-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5 text-start">
            <h3 className="fw-bold text-white">FitLife</h3>
            <p className="text-white-50 mb-4">
              FitLife menghubungkan kamu dengan program kebugaran, nutrisi, dan komunitas aktif. Kami percaya setiap langkah kecil bisa menciptakan perubahan besar bagi kesehatan.
            </p>
            <h5 className="text-white fw-semibold">Hub Aktif Indonesia</h5>
            <p className="text-white-50 mb-0">Ruang berkumpul pecinta fitness dari berbagai kota untuk berbagi motivasi, ilmu, dan aksi positif.</p>
          </div>
          <div className="col-lg-3 text-start">
            <h5 className="text-white fw-semibold mb-3">FitLife</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Tentang</Link></li>
              <li><Link to="/workout">Workout</Link></li>
              <li><Link to="/meal">Meal Plan</Link></li>
              <li><Link to="/coaching">Coaching</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 text-start">
            <h5 className="text-white fw-semibold mb-3">Hubungi FitLife</h5>
            <p className="text-white-50">Butuh info kerjasama, partnership, atau ingin terhubung dengan tim kami? Tinggalkan emailmu.</p>
            <form className="footer-form d-flex mb-3">
              <input type="email" className="form-control me-2" placeholder="Email" />
              <button className="btn btn-light text-success fw-semibold" type="button">Kirim</button>
            </form>
            <div>
              <h6 className="text-white fw-semibold mb-3">Ikuti Kami</h6>
              <div className="d-flex gap-3">
                <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-whatsapp"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-base text-center text-white-50 mt-4">
        © 2025 FitLife • All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer

