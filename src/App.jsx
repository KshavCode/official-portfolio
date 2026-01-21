import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects"; // Ensure this path matches where you moved the file
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Roadmap from "./pages/Roadmap"

// 2. Define the Routing Logic
export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          {/* Main Page */}
          <Route path="/" element={<Home />} />
          
          {/* Separate Projects Page */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}