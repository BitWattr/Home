import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DonatePage from './pages/DonatePage';
import NoAILG from './pages/NoAILG'; // New project page
import Think3D from './pages/Think3D'; // New project page
import ChatMimicryAI from './pages/ChatMimicryAI'; // New project page
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false); // Manage sidebar state in App.js

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      {/* Pass toggleSidebar to Header */}
      <Header toggleSidebar={toggleSidebar} />
      {/* Pass isOpen and closeSidebar to Navigation */}
      <Navigation isOpen={isOpen} closeSidebar={closeSidebar} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/projects/noai-lg" element={<NoAILG />} /> {/* Route for NoAI LG */}
          <Route path="/projects/think-3d" element={<Think3D />} /> {/* Route for Think 3D */}
          <Route path="/projects/chat-mimicry-ai" element={<ChatMimicryAI />} /> {/* Route for Chat Mimicry AI */}
        </Routes>
      </main>
      {/* Overlay is managed here, directly from App.js based on isOpen state */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </Router>
  );
}

export default App;
