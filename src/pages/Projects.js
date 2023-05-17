import React from "react";
import { project } from "../projects.js";
import ProjectCard from "../components/ProjectCard.js";

export default function Projects() {
  return (
    <section id="projectsection">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 container mx-auto flex flex-col items-center">
        <h1 id="projects" className="title-font !bg-gradient-to-br !from-pink-300 !via-purple-300 !to-indigo-400 !text-4xl font-extrabold inline-block text-transparent bg-clip-text sm:text-5xl">Projects</h1>
      </div>
      <br />
      <div className="mx-auto flex px-5 flex-wrap items-center blogcard">
        {project.map((project, index) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}