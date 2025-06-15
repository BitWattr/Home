import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DonatePage from './pages/DonatePage';
import NoAILG from './pages/NoAILG';
import Think3D from './pages/Think3D';
import ChatMimicryAI from './pages/ChatMimicryAI';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Header
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Navigation isOpen={isOpen} closeSidebar={closeSidebar} />
      <main>
        <Routes>
          {/* Render all main sections when the path is "/" */}
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          {/* Keep specific routes for individual project pages and donate page */}
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/projects/noai-lg" element={<NoAILG />} />
          <Route path="/projects/think-3d" element={<Think3D />} />
          <Route path="/projects/chat-mimicry-ai" element={<ChatMimicryAI />} />
        </Routes>
      </main>
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </Router>
  );
}

export default App;