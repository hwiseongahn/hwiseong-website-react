import React from 'react';
import { aboutMe } from '../assets';
import "../scss/about.scss";
import Card from "../components/Card";
import Dal from "../assets/dalLogo.png";

function About() {

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <p className = "about-me-text">{aboutMe}</p>
            <h1>Experience</h1>
            <Card title="Full Stack Software Developer Intern" description="June 2024 - August 2024" image={Dal}/>
        </div>
  )
}

export default About
