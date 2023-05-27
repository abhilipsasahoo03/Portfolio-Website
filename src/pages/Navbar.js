import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10 navcomp" id="header">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-extrabold mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            <img
              className="object-center light-mode"
              id="abellight"
              alt="hero"
              src="./abel_light.svg"
              width="30%"
            />
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <p className="mr-5 hover:text-gray">
            <Link to="/">About</Link>
          </p>
          <p className="mr-5 hover:text-gray">
            <Link to="/Projects">Projects</Link>
          </p>


          <p className="mr-5 hover:text-gray">
            <Link to="/Blogs">Blogs</Link>
          </p>
          <p className="mr-5 hover:text-gray">
            <Link to="/OpenSource">Open Source</Link>
          </p>
        </nav>
        <a
          href="https://www.buymeacoffee.com/abhilipsasahoo"
          className="inline-flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl font-extrabold text-transparent bg-clip-text border-0 py-1 px-3 focus:outline-none rounded mt-4 md:mt-0"
          id="hireme"
        >
          Buy me a 🍕
        </a>
      </div>
    </header>
  );
}
