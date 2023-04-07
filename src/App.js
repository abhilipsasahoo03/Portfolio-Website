import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import OpenSource from "./pages/OpenSource";
import DarkModeToggle from "./components/DarkModeToggle"; 
import "./App.css";

export default function App() {
  return (
    <div className="main">
    </div>
    <main className="content">
      <Navbar />
      <center><DarkModeToggle /></center>
      <About />
    </main>
  );
}
