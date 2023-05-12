import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Header from "./components/header";
export default function App() {
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