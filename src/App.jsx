// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Game from "./sections/Game/Game";
import Contact from "./sections/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import ProjectPage from "./pages/Projects/ProjectPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Game />
              <Contact />
            </>
          }
        />

        {/* Pages */}
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
