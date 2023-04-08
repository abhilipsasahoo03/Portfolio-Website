import React from "react";
import TypeWriter from "../components/TypeWriter.jsx";

export default function About(props) {
  return (
    <div class="top-0" id="aboutline">
      <section id="about">
        <br />
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 container mx-auto flex flex-col items-center">
            <img
              src="./MyPic.jpg"
              width="250"
              height="250"
              id="mypic"
              alt="My Pic"
            />
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./MySignature.png"
            />
        </div>
        <div className="container mx-auto flex md:flex-row flex-col items-center" id="aboutcont">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 items-center text-center">
            <TypeWriter />
            <br />
            <br className="hidden lg:inline-block" />
            <h2 className="title-font !bg-gradient-to-br !from-pink-300 !via-purple-300 !to-indigo-400 !text-4xl font-extrabold inline-block text-transparent bg-clip-text sm:text-5xl" id="tagline">
              Developer. Programmer. Open source enthusiast.
            </h2>
            <br />
            <p className="mb-8 leading-relaxed" id="desc">
              Front-end Web Developer. Grace Hopper Celebration Scholar 2022.
              The Shubhra Kar Linux Foundation Training Scholar 2022.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 py-2 px-6 focus:outline-none !hover:bg-pink-600 rounded text-lg"
              >
               <p className="bg-white text-1xl font-extrabold inline-block text-transparent bg-clip-text" id="workwithme"> Work With Me </p>
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex bg-gradient-to-r from-violet-500 to-blue-300 border-0 py-2 px-6 focus:outline-none !hover:bg-violet-500 rounded text-lg"
              >
               <p className="text-1xl font-extrabold inline-block bg-white text-transparent bg-clip-text" id="seemywork"> See My Past Work </p>
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
