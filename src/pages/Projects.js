import React from 'react';

import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className="projects">
      <h1> My personal Projects </h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
        })}
      </div>

      {/* <ProjectItem name="Smart Wardrobe Planner" image={Proj1} />
      <ProjectItem name="Mental Health State Detection" image={Proj2} />
      <ProjectItem name="Mental Health State Detection" image={Proj3} /> */}
    </div>
  );
}

export default Projects;
