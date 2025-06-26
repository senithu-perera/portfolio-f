import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

import TimeOverride from "../assets/img/TimeOvrride-bg.png";
import HousePricePrediction from "../assets/img/House-Price-Prediction.jpg";
import MustangGT from "../assets/img/mustang.png";
import ChatApp from "../assets/img/SDPChat.png";
import BlindAssistance from "../assets/img/blind-assist-system.png";
import Website from "../assets/img/website.png";
import ArduinoRoomState from "../assets/img/AR1.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Time Override - GDWC - Student Game Award",
      image: TimeOverride,
      slug: "time-override",
    },
    {
      title: "House Price Prediction - Machine Learning / Web App",
      image: HousePricePrediction,
      slug: "house-price-prediction",
    },
    {
      title: "3D - Animation Project",
      image: MustangGT,
      slug: "3d-animation",
    },

    {
      title: "SDP Chat App - Hobby Project",
      image: ChatApp,
      slug: "sdp-chat-app",
    },
    
    {
      title: "Arduino Project - Blind Assistance System",
      image: BlindAssistance,
      slug: "arduino-projects",
    },

     {
       title: "Generic Website - Kangaroo Facility Co.",
       image: Website,
       slug: "generic-website",
     },

     {
       title: "Arduino Room State Monitoring System",
       image: ArduinoRoomState,
       slug: "Arduino Room State Monitoring System",
     },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <Link to={`/project/${project.slug}`} className="project-link">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;