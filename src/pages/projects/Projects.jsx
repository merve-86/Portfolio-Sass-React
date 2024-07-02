import React from "react";
import "./Projects.scss"
import project1 from "../../assets/img/project-1.jpg";
import project2 from "../../assets/img/project-2.jpg";
import project3 from "../../assets/img/project-3.jpg";
import project4 from "../../assets/img/project-4.jpg";
import project5 from "../../assets/img/project-5.jpg";
import project6 from "../../assets/img/project-6.jpg";

const Projects = () => {
  return (
    <div>
      <>
        <div className="project-bgImg-container">
          {/* PROJECT NAV */}
          {/* <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="about.html" className="nav__link">
                  About Me
                </a>
              </li>
              <li className="nav__item">
                <a href="projects.html" className="nav__link nav__link--active">
                  My Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="contact.html" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav> */}
          <div className="projects__bio-image">
            <h1>My Projects</h1>
          </div>
        </div>
        {/* PROJECT MAIN */}
        <main className="projects">
          <div className="projects__items">
            <div className="projects__item">
              <img src={project1} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={project2} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={project3} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={project4} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={project5} alt="My Project" />
            </div>
            <div className="projects__item">
              <img src={project6} alt="My Project" />
            </div>
          </div>
        </main>
        {/* PROJECT FOOTER */}
        {/* <footer className="vertical">
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
          <div className="copyright">© Copyright 2023</div>
        </footer> */}
      </>
    </div>
  );
};

export default Projects;
