import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
      <Footer />
    </>
  )
}

export default App
