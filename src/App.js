import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import OpenSource from "./pages/OpenSource";
import Blogs from "./pages/Blogs";
import CoverPage from "./pages/CoverPage";
import Home from "./Home";
import DarkModeToggle from "./components/DarkModeToggle"; 
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab, faTwitter, faGithub, faLinkedin, faEnvelope);

export default function App() {
  return (
   <>
      <Routes>
        <Route exact path="/" element={<CoverPage />}/>
        <Route path="/Home/*" element={<Home />}/>
      </Routes>
   </>
  );
}
