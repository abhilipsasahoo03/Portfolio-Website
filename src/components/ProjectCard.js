import React from "react";
import '../App.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card">
          <div className="buttons">
             <div className="button-red"></div>
             <div className="button-yellow"></div>
             <div className="button-green"></div>
          </div>
          <hr className="line"/>
          <div className="cardcontent">
            <a href={project.link}>
            <img src={project.coverImage} alt={project.title} />
            </a>
            <br />
            <h2 className="font-extrabold">{project.title}</h2>
            <br />
            <p>{project.description}</p>
            <br />

         </div>
        </div>
    );
}

export default ProjectCard
