import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Workout from './pages/Workout'
import Profile from './pages/Profile'
import Tracker from './pages/Tracker'
import Meal from './pages/Meal'
import Blog from './pages/Blog'
import Coaching from './pages/Coaching'

function AppContent() {
  const location = useLocation()
  const hideFooter = ['/login', '/register'].includes(location.pathname)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

