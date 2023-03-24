import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return <div className="home">
    <div className="about">
      <h2> Hi, My Name is Manav Jain</h2>
      <div className="prompt">
        <p>A software developer with a passion for learning and creating.</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
      </div>
    </div>
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Frontend</h2>
          <span>
            ReactJS, Redux, HTML, CSS, React Native, NPM,
            BootStrap, MaterialUI, Yarn, StyledComponents
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, ExpressJS, GraphQL,
            MySQL, MongoDB, AWS S3
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>Python, JavaScript,  C++, Java</span>
        </li>
      </ol>
    </div>
  </div>;
}

export default Home;
