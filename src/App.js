import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import OpenSource from "./pages/OpenSource";
import DarkModeToggle from "./components/DarkModeToggle"; 

export default function App() {
  return (
    <main className="bg-white dark:bg-slate-800">
      <Navbar />
      <center><DarkModeToggle /></center>
      <About />
    </main>
  );
}
