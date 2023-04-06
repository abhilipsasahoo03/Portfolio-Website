import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import OpenSource from "./pages/OpenSource";
import Switcher from "./components/Switcher"; 

export default function App() {
  return (
    <main>
      <Navbar />
      <Switcher />
      <About />
    </main>
  );
}
