import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import OpenSource from "./pages/OpenSource";
import Blogs from "./pages/Blogs";
import DarkModeToggle from "./components/DarkModeToggle"; 
import "./App.css";

export default function App() {
  return (
   <>
    <div className="main h-0">
    </div>
    <Navbar />
    <main className="content h-0 p-0">
      <center><DarkModeToggle /></center>
      <About />
      <Blogs />
    </main>
   </>
  );
}
