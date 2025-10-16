import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Sponsorships from './pages/Sponsorships'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
