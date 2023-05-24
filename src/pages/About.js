import React from "react";
import TypeWriter from "../components/TypeWriter.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              className="mypic"
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
            <h2 className="title-font !bg-gradient-to-r !from-indigo-200 !via-red-200 !to-yellow-100 text-3xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text lg:text-6xl" id="tagline">
              Developer. Programmer. Open source enthusiast.
            </h2>
            <br />
            <div className="descdiv flex flex-wrap items-center justify-center rounded">
              <div className="flex flex-row" id="icondiv">
                <div><a href="https://github.com/abhilipsasahoo03"><FontAwesomeIcon icon="fa-brands fa-github" id="icons" /></a></div>
                <div><a href="https://linkedin.com/in/abhilipsasahoo"><FontAwesomeIcon icon="fa-brands fa-linkedin" id="icons" /></a></div>
                <div><a href="abhilipsasahoo03@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" id="icons" /></a></div>
              </div>
              <br />
              <h1 className="m-8 w-full leading-relaxed lg:text-3xl" id="descline">
                Front-end Web Developer. Grace Hopper Celebration Scholar 2022.
                The Shubhra Kar Linux Foundation Training Scholar 2022.
              </h1>
              <p className="mb-8 ml-8 mr-8 w-full leading-relaxed lg:text-2xl" id="desc">
Abhilipsa identifies herself as an idea-chaser/executor and go-getter with an inquisitive mind. She is an open source enthusiast with approved contributions towards organizations like Dcoder App, Spotify, Novu, IBM Carbon Design System, NASA TOPS, Moja Global, Open Food Facts, AnitaB.Org, EddieHub, Zero Octave, and many more.

She aspires to be a Front-end Web Dev and also truly believes that open source thrives at the intersection of innovation and collaboration.
              </p>
            </div>
            <br />
            <br />
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
