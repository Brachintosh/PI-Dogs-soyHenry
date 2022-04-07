import React from "react";
import './About/About.css';
import linkedin from "../../images/linkedinLogo.png";
import github from "../../images/githubLogo.png";
import gmail from "../../images/gmailLogo3.png";

 export default function About() {
    return (
      <div className="about-container">
        <div className="about-description">
            
            <h2><u>ABOUT THIS SINGLE PAGE APPLICATION:</u></h2>
            <div className='about-text'>
                <p><u> - Necessary technologies:</u>
                    <ul className='techs-text'><br />
                        <ul>[ ] React</ul>
                        <ul>[ ] Redux</ul>
                        <ul>[ ] Express</ul>
                        <ul>[ ] Sequelize - Postgres</ul>
                    </ul>
                </p><br /><br />
                
                <p>
                    DogSite App is a Full Stack Web Application of an individual project, 
                    held during my bootcamp in{" "}
                    <a
                    href="https://www.soyhenry.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    #soyHenry
                    </a>, being one of the 2 required projects.
                </p><br /><br />
            
                <p>
                    The technologies used here are Express, Sequelize, PostgreSQL,
                    React, Redux, and pure CSS, among others. This application uses the
                    API{" "}
                <a
                    href="https://thedogapi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        The Dog API
                </a>{" "}
                        to obtain information about all the countries of the world,
                        store them in a local database, and then work them and
                        require them from the API itself.
                </p>
            </div>
        </div>

        <div className="about-contact">
            <h3><u>Contact Me:</u></h3>
            <div className="contact-container">
                <div className="contact-item">
                    <a
                        href="https://www.linkedin.com/in/brian-ezequiel-bedendo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedin}
                            alt="Logo LinkedIn"
                            className="contact-item-img" // Linked-In
                        />
                    </a>
                    <span>LinkedIn</span>
                </div>
                <div className="contact-item">
                    <a
                        href="https://github.com/Brachintosh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={github}
                            alt="Logo GitHub"
                            className="contact-item-img" // GitHub
                        />
                    </a>
                    <span>GitHub</span>
                </div>
                <div className="contact-item">
                    <a
                        href="mailto:bedendo.br@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={gmail} alt="Logo Gmail" className="contact-item-img-gmail" />
                    </a>
                    <span>bedendo.br@gmail.com</span>
                </div>
            </div>
        </div>
      </div>
    );
  };