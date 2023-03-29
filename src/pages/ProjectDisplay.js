import React from 'react';
import { useParams } from 'react-router-dom';
// import GithubIcon from "@material-ui/icons/GitHub";
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt="..loading" />

            <ul >
                {project.text.map((ele, idx) => {
                    return <li key={idx}> {ele}</li>
                })
                }
            </ul>
            {/* <p>
            <b>Skills: </b> {project.skills}
        </p> */}
            {/* <GithubIcon /> */}
        </div>
    )
}

export default ProjectDisplay;


