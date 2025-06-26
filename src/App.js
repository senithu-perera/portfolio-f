import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar.js";
import Home from "./components/Home.js";
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import ProjectDetail from './components/ProjectDetail.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router basename="/portfolio-f">
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
