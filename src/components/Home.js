import React, { useState, useEffect } from "react";
import "./Home.css";
import SocialLinks from "./SocialLinks";

import DP from "../assets/img/DP.png";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const words = ["ML Programmer", "Coder", "Web Developer", "Games Developer", "3D Animator", "Content Creator"];
  const typingSpeed = isDeleting ? 100 : 150;

  useEffect(() => {
    const handleTyping = setTimeout(() => {
      const currentWord = words[loop % words.length];
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [text, isDeleting, loop, words]);

  return (
    <section className="home" id="home">
      <img className="logo-img" src={DP} alt="SDP Studios Logo" />
      <div className="content-container">
        <h1>🎉Hello It's Me, <strong>SENITHU PERERA</strong>🎉</h1>
        <h1>
          I am a <span className="dynamic-text">{text}</span>
        </h1>
        <br></br>
        <br></br>
        <div className="buttons-hire-cv">
        <a className="hire-me-button" href="#contact">Hire Me</a>
        <a className="hire-me-button" href="#contact">Download CV</a>
        </div>
        <div>
            <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
