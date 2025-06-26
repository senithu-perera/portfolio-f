import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";

import TimeOverride from "../assets/img/TimeOvrride-bg.png";
import T1 from "../assets/img/T1.webp";
import T2 from "../assets/img/TimeOverride.webp";
import T3 from "../assets/img/T3.webp";
import T4 from "../assets/img/T4.webp";
import T5 from "../assets/img/T5.webp";
import T6 from "../assets/img/T6.webp";
import T7 from "../assets/img/T7.webp";

import HousePricePrediction from "../assets/img/House-Price-Prediction.jpg";
import MustangGT from "../assets/img/mustang.png";
import ChatApp from "../assets/img/SDPChat.png";

import BlindAssistance from "../assets/img/blind-assist-system.png";
import BA1 from "../assets/img/BA1.jpg";

import Website from "../assets/img/website.png";

import AR1 from "../assets/img/AR1.jpg";
import AR2 from "../assets/img/AR2.jpg";
import AR3 from "../assets/img/AR3.jpg";
import AR4 from "../assets/img/AR4.jpg";
import AR5 from "../assets/img/AR5.jpg";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectDetails = {    
    
    "time-override": {
      title: "Time Override - Student Game Award",
      images: [TimeOverride, T1, T2, T3, T4, T5, T6, T7],
      videos: [
        {
          type: "youtube",
          id: "jPVdltl96E0",
          title: "Time Override Gameplay Trailer"
        }
      ],
      description: "Time Override is a game made by myslef and showcases innovative gameplay mechanics but the story is not finished due to this being a hobby project. This project demonstrates advanced game development skills for a solo developer using modern game engines like Unity and programming techniques in C#. Few days after publishing the game on itch.io GDWC (Game Development World Championship) contacted me and asked if I would like to submit the game for the Student Game Award.",
      technologies: ["Unity", "C#", "Game Design", "3D Modeling", "Audio Engineering", "Animation", "Shader Programming", "Sprite Creation", "UI/UX Design", "Photoshop", "illustrator", "Game Testing", "Game Optimization"],
      features: [
        "Innovative time manipulation mechanics",
        "Immersive 3D environments",
        "Original soundtrack and sound effects",
        "Optimized performance across multiple platforms"
      ],
      challenges: "The main challenge was implementing smooth time manipulation mechanics while maintaining game balance and performance. I had to carefully design the time-stop system so that the in game time runs for the play but not for the other game objects.",
      outcome: "Successfully won 2 rounds of Student Game Award but the game was rushed and I cloudn't make another submission with all the bugs fixed at the time, but it was a greate experience working with the GDWC team. The project received positive feedback from my Youtube subscribers and the gaming community, showcasing my ability to create engaging and innovative gameplay experiences.",
      liveLink: "https://thegdwc.com/pages/game.php?game_guid=c378bd1e-fcc7-41d0-89a6-c1bf782af42f",
      githubLink: "#"
    },    
      
    "house-price-prediction": {
      title: "House Price Prediction - Machine Learning / Web App",
      images: [HousePricePrediction], // Can add more images here
      videos: [
        {
          type: "linkedin",
          embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7271383498693734400?collapsed=1" height="501" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
          title: "House Price Prediction - Project Demo"
        }
      ],
      description: "A comprehensive machine learning web application that predicts house prices based on various features such as Geo location, size, amenities, and market trends. This project combines data science and advanced web development with Machine Learning to create a user-friendly prediction tool.",
      technologies: ["Python", "React", "Flask", "Scikit-learn", "Tensorflow", "Pandas", "NumPy", "HTML/CSS", "JavaScript"],
      features: [
        "3 Machine learning algorithms for accurate predictions, Linear Regression, k-means Clustering, and Random Forests",
        "Interactive web interface for easy data input",
        "Real-time price predictions",
        "Data visualization and analytics dashboard",
        "Responsive design for mobile and desktop"
      ],
      challenges: "The primary challenge was cleaning and preprocessing the real estate data to ensure model accuracy. Additionally, integrating the ML model with the web interface required careful API design and optimization.",
      outcome: "Achieved 85% accuracy in price predictions and created a fully functional web application that demonstrates the practical application of machine learning in real estate. Unfortunately, the project is not available online due to this beign a campus project and hosted on campus servers, but a live demonstration video is available on linkedIn.",
      liveLink: "https://www.linkedin.com/posts/senithu-perera-477629266_machinelearning-datascience-webdevelopment-activity-7271382833523240960-N7GI?utm_source=share&utm_medium=member_desktop",
      githubLink: "https://github.com/senithu-perera/CompInno.github.io"
    },    
    
    "3d-animation": {
      title: "3D Animation Project",
      images: [MustangGT], // Can add more images here
      videos: [
        {
          type: "youtube",
          id: "xFjHiTYYHnI", 
          title: "My First Ever Car Animation!! | Blender"
        }
      ],
      description: "A stunning 3D animation project featuring a Ford Mustang GT with realistic rendering, lighting, and animation sequences. This project showcases advanced 3D modeling and animation techniques.",
      technologies: ["Blender", "3D Modeling", "Animation", "Rendering", "Post-Processing", "Davinci Resolve", "Color Grading", "Environment Modeling", "Lighting", "Camera Animation"],
      features: [
        "Advanced lighting and shadow effects",
        "Smooth animation sequences",
        "High-quality rendering and post-processing",
        "Dynamic camera movements and cinematography"
      ],
      challenges: "Creating photorealistic materials and achieving optimal render times while maintaining high quality. The complex geometry of the enviroment and roads required detailed attention to modeling accuracy.",
      outcome: "Successfully created a professional-quality 3D animation that demonstrates 3D modeling and animation skills in Blender.",
      liveLink: "#",
      githubLink: "#"
    },    
    
    "sdp-chat-app": {
      title: "SDP Chat App",
      images: [ChatApp],
      description: "This is encrypted server chat application I build with Unity and Photon in a very young age this project is no way near any professional grade software but it gave me a solid understanding on how networking works in games and applications. It was a great learning experience in real-time communication and client-server architecture.",
      technologies: ["Unity", "Photon Server", "UI/UX"],
      features: [
        "Real-time messaging",
        "User authentication and authorization via server name entry and password entry",
        "Responsive chat interface",
      ],
      challenges: "Implementing real-time communication while ensuring message delivery and handling connection issues. Managing state synchronization across multiple connected clients.",
      outcome: "Created a functional chat application with real-time communication capabilities, providing a solid foundation for understanding networking in game development. The project was a great learning experience, feel free to check it out on my itch.io page",
      liveLink: "https://sdpstudios.itch.io/sdp-chat",
      githubLink: "#"
    },    
    
    "arduino-projects": {
      title: "Arduino Projects - Blind Assistance System",
      images: [BlindAssistance, BA1],
      description: "An innovative Arduino-based blind assistance system designed to help visually impaired individuals navigate their environment safely. This project combines hardware engineering with compassionate design.",
      technologies: ["Arduino", "C++", "Ultrasonic Sensors", "Buzzer", "LED", "Circuit Design"],
      features: [
        "Ultrasonic distance detection",
        "Audio feedback system",
        "Vibration alerts for proximity warnings",
        "Lightweight and portable design",
        "Low power consumption for extended use"
      ],
      challenges: "Calibrating sensors for accurate distance measurement and designing an intuitive feedback system that doesn't overwhelm the user with information.",
      outcome: "Successfully developed a working prototype that demonstrates practical application of Arduino technology for accessibility solutions.",
      liveLink: "#",
      githubLink: "#"
    },    
    
    "generic-website": {
      title: "Generic Website - Kangaroo Facility Co",
      images: [Website], // Can add more images here
      description: "A modern, responsive website built with contemporary web technologies. This project showcases clean design principles, responsive layouts, and modern web development practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      features: [
        "Fully responsive design",
        "Modern and clean user interface",
        "Cross-browser compatibility",
        "Optimized performance",
        "SEO-friendly structure"
      ],
      challenges: "Ensuring consistent design across different devices and browsers while maintaining optimal performance and accessibility standards.",
      outcome: "Created a professional website that demonstrates proficiency in modern web development techniques and responsive design principles. Later on the site had to be dicontinued due to the client not being able to pay for the hosting and domain.",
      liveLink: "#",
      githubLink: "#"
    },

    "Arduino Room State monitoring system": {
      title: "Arduino Room State Monitoring System",
      images: [AR1, AR2, AR3, AR4, AR5],
      videos: [
        {
          type: "linkedin",
          embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7328315398884372482?collapsed=1" height="720" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
          title: "Room State Monitoring System - Project Demo"
        }
      ],
      description: "A Room state monitoring system built with Arduino that tracks and displays the state of a room, including temperature, humidity, and light intensity. This project combines hardware and software to create a comprehensive monitoring solution that has an online dashboard and database to perform analysis.",
      technologies: ["Arduino", "Edge Computing", "MySQL", "React", "Flask API", "JavaScript", "UI/UX", "Responsive Design"],
      features: [
        "Real-time monitoring of room conditions",
        "Data logging and analysis",
        "User-friendly web interface for data visualization",
        "Responsive design for mobile and desktop access",
        "Integration with MySQL database for data storage"
      ],
      challenges: "Integrating hardware sensors with a web interface and ensuring real-time data updates. Managing data storage and retrieval efficiently in the MySQL database.",
      outcome: "Successfully developed a comprehensive room state monitoring system that provides real-time data visualization and analysis. This project demonstrates the ability to integrate hardware and software solutions effectively.",
      liveLink: "https://lnkd.in/gdPQamRy",
      githubLink: "#"
    }
  };  const project = projectDetails[projectId];

  const nextImage = () => {
    if (project && project.images && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (project && project.images && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <Link to="/" className="back-home-btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <Link to="/" className="back-btn">← Back to Portfolio</Link>
        <h1>{project.title}</h1>
      </div>
        <div className="project-detail-content">        
          <div className="project-detail-image">
          <div className="image-gallery">
            <div className="main-image-container">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                className="main-image"
              />
              
              {project.images && project.images.length > 1 && (
                <>
                  <button className="nav-btn prev-btn" onClick={prevImage}>
                    ❮
                  </button>
                  <button className="nav-btn next-btn" onClick={nextImage}>
                    ❯
                  </button>
                </>
              )}
            </div>
            
            {project.images && project.images.length > 1 && (
              <div className="image-counter">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}             {/*Video Section */}
          {project.videos && project.videos.length > 0 && (
            <div className="project-videos">
              <h3>Project Videos</h3>
              <div className="videos-grid">
                {project.videos.map((video, index) => (
                  <div key={index} className="video-item">
                    <div className="video-item-container">
                      {video.type === 'youtube' ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : video.type === 'linkedin' ? (
                        <div 
                          className="linkedin-embed"
                          dangerouslySetInnerHTML={{ __html: video.embedCode }}
                        />
                      ) : null}
                    </div>
                    <div className="video-item-title">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
        
        <div className="project-detail-info">
          <div className="project-section">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </div>
          
          <div className="project-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-section">
            <h2>Challenges & Solutions</h2>
            <p>{project.challenges}</p>
          </div>
          
          <div className="project-section">
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </div>
            <div className="project-links">
            {project.liveLink !== "#" && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                View Live Project
              </a>
            )}
            {project.githubLink !== "#" && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                View on GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
