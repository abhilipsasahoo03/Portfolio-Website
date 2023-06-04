import React from "react"; 
 import About from "./pages/About.js"; 
 import Navbar from "./pages/Navbar.js"; 
 import Projects from "./pages/Projects.js"; 
 import OpenSource from "./pages/OpenSource.js"; 
 import Blogs from "./pages/Blogs.js"; 
 import DarkModeToggle from "./components/DarkModeToggle"; 
 import { Route, Routes } from "react-router-dom"; 
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
          <Route path="/About" element={<About />}/>  
          <Route path="/Blogs" element={<Blogs />}/>  
          <Route path="/Projects" element={<Projects />}/>  
          <Route path="/OpenSource" element={<OpenSource />}/>  
        </Routes>  
      </main>  
     </>  
    );  
  }
