import React, { useState } from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import CloseIcon from "@material-ui/icons/Close";
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
// Import your profile image - replace with your actual image file
import ProfileImage from '../assets/profile.JPG'; // You can change this to any image from your assets
import "../styles/Home.css";

function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailAddress = "manavj2504@gmail.com";
  const githubProfileUrl = "https://github.com/Manavjain25";

  const handleProjectClick = (projectIndex) => {
    setSelectedProject(ProjectList[projectIndex]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderRightContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="about-content">
            <h2>About Me</h2>
            <p>I'm a passionate and adaptable full-stack developer dedicated to designing and delivering production-grade web and mobile applications. During my time at BridgeHaul, I led the development of scalable platforms and mobile apps using Angular, Node.js, React Native, and PostgreSQL. I also integrated advanced AI capabilities using GPT-4o and built real-time systems leveraging Neo4j, enriching user experiences with cutting-edge technology.</p>

            <p>I thrive in collaborative, fast-paced environments where problem-solving drives innovation. My background includes internships and research in Machine Learning and Natural Language Processing, fueling my passion for AI and data-driven solutions. Continuous learning motivates me to push the boundaries of what technology can achieve and build solutions that create real-world impact.</p>

            <p>If you're interested in connecting or collaborating, I'd love to hear from you!</p>
            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <p>Python, JavaScript, C++, Java, TypeScript, Go</p>
                </div>
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <p>Angular, ReactJS, HTML, CSS, BootStrap, MaterialUI, NPM, Yarn, StyledComponents</p>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <p>NodeJS, Flask, ExpressJS, REST, GraphQL, JSON</p>
                </div>
                <div className="skill-category">
                  <h4>Databases</h4>
                  <p>PostgreSQL, MySQL, NoSQL, MongoDB, Supabase, Neo4j</p>
                </div>
                <div className="skill-category">
                  <h4>Cloud</h4>
                  <p>AWS, GCP, Azure</p>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <p>Git, Docker, Kubernetes, Terraform</p>
                </div>
                <div className="skill-category">
                  <h4>AI</h4>
                  <p>GPT-4o, OpenAI, LangChain, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, Natural Language Processing, Machine Learning</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="projects-content">
            <h2>Projects</h2>
            <div className='projectList'>
              {ProjectList.map((project, idx) => {
                return (
                  <div key={idx} className="project-card" onClick={() => handleProjectClick(idx)}>
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-info">
                      <h3>{project.name}</h3>
                      <p>Click to view details</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="education-content">
            <h2>Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <SchoolIcon />
                </div>
                <div className="timeline-content">
                  <h3>University of Southern California, Los Angeles, United States</h3>
                  <h4>Master's Degree - Computer Science</h4>
                  <p>2021 - 2023</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <SchoolIcon />
                </div>
                <div className="timeline-content">
                  <h3>University of Mumbai, Mumbai, India</h3>
                  <h4>Bachelor's Degree - Information Technology</h4>
                  <p>2017 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="experience-content">
            <h2>Work Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <WorkIcon />
                </div>
                <div className="timeline-content">
                  <h3>
                    <span>BridgeHaul Logistics Solutions</span>
                    <span>Oct 2023 – Present</span>
                  </h3>
                  <h4>Full Stack Engineer 2</h4>
                  <ul className="experience-list">
                    <li>Designed and developed three scalable full-stack applications (Carrier TMS, Shipper TMS, Admin Tools) in a fast-paced startup environment using Angular (frontend), Node.js (backend), and PostgreSQL.</li>
                    <li>Engineered BridgeHaul's flagship mobile app from scratch using React Native and Redux; incorporated cross-platform optimization and role-based access control; launched on iOS and Android.</li>
                    <li>Developed the BridgeHaul Intelligence System by integrating GPT-4o, automating internal query handling and dynamic response validation.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <WorkIcon />
                </div>
                <div className="timeline-content">
                  <h3>
                    <span>Cansera</span>
                    <span>Jul 2023 – Oct 2023</span>
                  </h3>
                  <h4>Software Engineer (Part-Time)</h4>
                  <ul className="experience-list">
                    <li>Participated in a flexible, part-time software engineering role under the OPT program, contributing to the design and development of a scalable full-stack application.</li>
                    <li>Built UI components and workflows using React, Node.js, and PostgreSQL, aligned with business goals.</li>
                    <li>Created wireframes and collaborated with cross-functional teams to improve usability and functionality.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <WorkIcon />
                </div>
                <div className="timeline-content">
                  <h3>
                    <span>Rivian</span>
                    <span>May 2022 - Aug 2022</span>
                  </h3>
                  <h4>Software Engineer Intern</h4>
                  <ul className="experience-list">
                    <li> Integrated automated static code and security analysis tools across multiple microservices, enhancing early
vulnerability detection and improving code quality </li>
                    <li>Provisioned and deployed scalable infrastructure with Terraform to stream AWS CloudWatch metrics across
                    dev, staging, and production environments, enabling real-time observability and performance monitoring. </li>
                    <li>Constructed a scalable data ingestion pipeline in Databricks using PySpark autoloader jobs to perform
                    ETL tasks, write delta tables to Silver S3 buckets, and generate SQL-based datasets for downstream analytics.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <WorkIcon />
                </div>
                <div className="timeline-content">
                  <h3>
                    <span>Unacores Solutions</span>
                    <span>May 2020 - July 2020</span>
                  </h3>
                  <h4>Machine Learning Intern</h4>
                  <ul className="experience-list">
                    <li>Accomplished accuracy of up to 84% using weighted XGBoost to detect fraud in claiming Auto Insurance.</li>
                    <li>Tested 5 different classifiers with different ensembles and various methods of handling imbalance dataset.</li>
                    <li> Implemented hyperparameter tuning using RandomizedSearchCV on weighted and non-weighted model.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      {/* Left Section - About Me */}
      <div className="left-section">
        <div className="profile-content">
          <div className="profile-image">
            <img src={ProfileImage} alt="Manav Jain" />
          </div>
          <h1>Hi, I am Manav Jain</h1>
          <p>A software developer with a passion for learning and creating.</p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/manav-jain25/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
          
          <div className="resume-section">
            <button className="resume-button" onClick={() => window.open('/resume.pdf', '_blank')}>
              <span>📄</span>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Content with Tabs */}
      <div className="right-section">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <CodeIcon />
            About
          </button>
          <button 
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <CodeIcon />
            Projects
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <SchoolIcon />
            Education
          </button>
          <button 
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <WorkIcon />
            Experience
          </button>
        </div>
        
        <div className="content-area">
          {renderRightContent()}
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <CloseIcon />
            </button>
            <div className="modal-header">
              {selectedProject.video ? (
                selectedProject.video.includes('vimeo.com') ? (
                  <iframe
                    className="modal-video"
                    src={selectedProject.video.replace('vimeo.com', 'player.vimeo.com/video').replace('?share=copy#%23t=0', '')}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : selectedProject.video.includes('drive.google.com') ? (
                  <iframe
                    className="modal-video"
                    src={selectedProject.video.replace('/view', '/preview')}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video 
                    className="modal-video" 
                    controls 
                    autoPlay 
                    muted 
                    loop
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
              )}
              <h2>{selectedProject.name}</h2>
            </div>
            <div className="modal-body">
              <div className="project-details">
                {selectedProject.text.map((detail, index) => (
                  <div key={index} className="detail-item">
                    <span className="bullet">•</span>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
