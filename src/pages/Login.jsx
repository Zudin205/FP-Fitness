import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/workout')
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setMessage('Isi semua kolom terlebih dahulu.')
      return
    }
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password: password.trim() })
      })
      const result = await res.json()
      if (result.success) {
        setMessage('Login berhasil! Mengarahkan...')
        localStorage.setItem('user', JSON.stringify(result.user))
        setTimeout(() => navigate('/workout'), 1000)
      } else {
        setMessage(result.message || 'Email atau password salah.')
      }
    } catch (err) {
      setMessage('Tidak dapat terhubung ke server.')
      console.error(err)
    }
  }

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="auth-card text-center" style={{ maxWidth: '400px', margin: 'auto', background: '#fff', padding: '2rem', borderRadius: '14px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <h4 className="mb-4 text-success fw-bold">Masuk ke FitLife</h4>
        <form onSubmit={handleSubmit}>
          <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="form-control mb-3" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn btn-success w-100">Masuk</button>
        </form>
        <p className="mt-3">Belum punya akun? <Link to="/register" className="text-success fw-semibold">Daftar</Link></p>
        {message && <p className="mt-3" style={{ color: message.includes('berhasil') ? 'green' : 'red', fontSize: '0.9rem' }}>{message}</p>}
      </div>
    </div>
  )
}

export default Login

