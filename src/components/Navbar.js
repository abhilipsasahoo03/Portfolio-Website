import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Abhilipsa Sahoo
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
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
        <script>
          function addDarkmodeWidget() {new Darkmode().showWidget()}
          window.addEventListener('load', addDarkmodeWidget);
        </script>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-400 dark:text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
