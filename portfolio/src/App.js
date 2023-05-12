import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Header from "./components/header";
import './App.css';

const App = () => {
  return (
    <main>
      <Header>  
        <Navbar />
      </Header>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;