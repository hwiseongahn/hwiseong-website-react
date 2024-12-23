import React from 'react'
import "../scss/projects.scss";
import Card from "../components/Card"
import Discord from "../assets/discord.png"

function Projects() {
  return (
    <div className="projects-container">
        <h1>Projects</h1>
        <p className="projects-text">These are some projects I've created.</p>
        <Card title="summBot" description="This Discord bot summarizes conversations. Software used: Python, discord.py, and Gemini API for text analysis." image={Discord} link="https://discord.com/oauth2/authorize?client_id=1293394343297679390" linkDescription='Link'/>
        <Card title="Portfolio Website" description="This Discord bot summarizes conversations. Software used: Python, discord.py, and Gemini API for text analysis." image={Discord} link="https://discord.com/oauth2/authorize?client_id=1293394343297679390" linkDescription='Link'/>
    </div>
  )
}

export default Projects
