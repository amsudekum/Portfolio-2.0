import React from "react";
import { BrowserRouter as Router, Routes, Route, IndexRoute  } from 'react-router-dom'  
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Header from "./components/header";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header>
        <Navbar />
      </Header>
      <Routes>
        
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;