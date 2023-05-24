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
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGitHub, faLinkedIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faTwitter, faGitHub, faLinkedIn, faEnvelope);

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
        <Route path="/Blogs" element={<Blogs />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/OpenSource" element={<OpenSource />}/>
      </Routes>
    </main>
   </>
  );
}
