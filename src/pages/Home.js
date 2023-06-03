import React from "react";
import About from "./About.js";
import Navbar from "./Navbar.js";
import Projects from "./Projects.js";
import OpenSource from "./OpenSource.js";
import DarkModeToggle from "../components/DarkModeToggle";

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
