import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Lesson from './pages/Lesson'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import './App.css'

function App() {
  const [userMode, setUserMode] = useState('b2c') // 'b2c' or 'b2b'

  return (
    <div className="noise-bg min-h-screen flex flex-col relative z-10">
      <Navbar userMode={userMode} setUserMode={setUserMode} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home userMode={userMode} setUserMode={setUserMode} />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:pathId/:moduleId/:lessonId" element={<Lesson />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing userMode={userMode} setUserMode={setUserMode} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
