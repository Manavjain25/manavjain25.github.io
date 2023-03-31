import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const emailAddress = "manavpra@usc.edu";
  const githubProfileUrl = "https://github.com/Manavjain25";
  return <div className="home">
    <div className="about">
      <h2> Hi, My Name is Manav Jain</h2>
      <div className="prompt">
        <p>A software developer with a passion for learning and creating.</p>
        <a href="https://www.linkedin.com/in/manav-jain25/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
        <a href={githubProfileUrl}>
          <GithubIcon />
        </a>
      </div>
    </div>
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Frontend</h2>
          <span>
            ReactJS, HTML, CSS,
            BootStrap, MaterialUI, NPM, Yarn, StyledComponents
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, Flask, ExpressJS, REST, GraphQL,
            MySQL, MongoDB, AWS, JSON
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>Python, JavaScript, C++, Java</span>
        </li>
      </ol>
    </div>
  </div >;
}

export default Home;
