import React from "react";

export default function About(props) {
  return (
    <div class="bg-white dark:bg-slate-800 ">
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
              Hi, I'm Abhilipsa Sahoo. <br />
            </h1>
            <br className="hidden lg:inline-block" />
            <h2 className="title-font sm:text-3xl text-2xl">
              Developer. Open source enthusiast.
            </h2>
            <br />
            <p className="mb-8 leading-relaxed text-slate-800 dark:text-white">
              Front-end Web Developer. Grace Hopper Celebration Scholar 2022.
              The Shubhra Kar Linux Foundation Training Scholar 2022.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./MySignature.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
