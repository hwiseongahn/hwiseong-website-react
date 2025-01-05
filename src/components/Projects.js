import React from 'react';
import "../scss/projects.scss";
import Card from "../components/Card";
import summBot from "../assets/summbot.png";
import Logo from "../assets/favicon.png";
import Algae from "../assets/CO2.png";

function Projects() {
  return (
    <div className="projects-container">
        <h1>Projects</h1>
        <p className="projects-text">Here are some of the projects I’ve developed. You can find the source code for these projects on my GitHub. </p>
        <div className="projects-card-container">
            <Card 
            title="summBot" 
            description="This Discord bot summarizes conversations.<br/><br/>Software used: Python, discord.py, and Gemini API for text analysis." 
            image={summBot} 
            link="https://discord.com/oauth2/authorize?client_id=1293394343297679390" 
            linkDescription='Click to invite discord bot'
            linkEmoji={true}
            />
            <Card 
                title="Portfolio Website" 
                description="You're on it right now! Personal Portfolio Website to highlight my interests and experiences.<br/><br/>Software used: React.js, SCSS." 
                image={Logo} 
                link="https://hwiseongahn.netlify.app/" 
                linkDescription='Deployed using Netlify' 
                linkEmoji={true}
            />
            <Card 
                title="Algae and Carbon Dioxide Community Mapping" 
                description="Community mapping of Canada and Alberta's Carbon Dioxide Emissions. <br/><br/>Software used: Python, Folium, Flask, HTML/CSS, JavaScript." 
                image={Algae} 
                link="https://algaeandco2.up.railway.app/" 
                linkDescription='Deployed using Railway' 
                linkEmoji={true}
            />
        </div>
        
    </div>
  )
}

export default Projects;
