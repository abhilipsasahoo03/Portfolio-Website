import React from "react";
import { Route, Routes } from "react-router-dom";
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
    <div className="main">
    </div>
    <main className="content">
      <Navbar />
      <center><DarkModeToggle /></center>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/" element={<Blogs />}/>
      </Routes>
    </main>
   </>
  );
}
