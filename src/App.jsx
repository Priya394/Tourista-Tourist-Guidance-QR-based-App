import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GenerateQR from './pages/GenerateQR'
import ScanQR from './pages/ScanQR'
import Destinations from './pages/Destinations'
import About from './pages/About'

function App() {
  return (
    <Router basename="/Tourista-Tourist-Guidance-QR-based-App">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateQR />} />
          <Route path="/scan" element={<ScanQR />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
