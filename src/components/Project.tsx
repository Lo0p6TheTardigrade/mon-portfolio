// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Custom_Data_Array_Obj } from '../data';

const Project = () => {
  return (
    <div className="projects-section">
      <div className="title-container">
        <div className="learn">
          <p className="learn-title">Projets réalisés dans le cadre de ma formation Développeur Frontend chez OpenClassroom</p>
        </div>
      </div>
      <div className="projects">
        {Custom_Data_Array_Obj.projects.map((project, index) => {
          return (
            <div
              className={`article-container ${project.class}`}
              key={index}
              id={project.class}>
              <article className="article-item">
                <Link
                  to={project.link}
                  target="blank"
                  className="project-link">
                  <div className="project-title-box">
                    <p className="project-type">{project.type}</p>
                    <p className="project-name">{project.name}</p>
                  </div>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="project-preview-image"
                    width={336}
                    height={210}
                  />
                  <div className="description-container">
                    <p className="description">{project.description}</p>
                    <p className="skills">{project.skill}</p>
                  </div>
                </Link>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
