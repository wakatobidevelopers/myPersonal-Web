import React from 'react';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
