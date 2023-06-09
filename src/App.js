import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portofolio" element={<Project />} />
    </Routes>
  );
}

export default App;
