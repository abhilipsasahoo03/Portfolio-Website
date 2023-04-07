import React from "react";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-extrabold mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Abhilipsa Sahoo
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-gray">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-gray">
            Skills
          </a>
          <a href="#opensource" className="mr-5 hover:text-gray">
            Open Source
          </a>
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
