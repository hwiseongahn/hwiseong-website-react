import React from 'react';
import { aboutMe } from '../assets';
import "../scss/about.scss";

function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p className = "about-me-text">{aboutMe}</p>
        </div>
  )
}

export default About
