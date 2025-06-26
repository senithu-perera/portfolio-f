import React from "react";
import "./About.css";

import logo from "../assets/img/profile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">          <div className="about-text">
          <p>
              Hello! I'm <strong>Senithu Perera</strong>, a passionate <span>Games Developer, Machine Learning Programmer, 3D Animator, Web Developer and Content Creator</span> with 
              a keen eye for design and a love for crafting immersive experiences. I specialize in creating high-quality, innovative, and engaging applications. 
              My goal is to bring ideas to life through my skills in programming, problem-solving, and creativity.
            </p>
            <p>
              When I'm not coding, you can find me creating content for my awesome community, posting development logs, and learning and teaching at the same time. 
              I'm excited to work on challenging projects and contribute to impactful solutions. 
              Let's connect and build something great together!
            </p>
          </div>
          <div className="about-image">
            <img src={logo} alt="Senithu Perera" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills">            <div className="skill">
              <span data-percentage="75%">Machine Learning</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span data-percentage="85%">React / Web Development</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span data-percentage="90%">Arduino</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span data-percentage="93%">Game Development</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "93%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span data-percentage="90%">Programming</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <span data-percentage="85%">3D Animation</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
