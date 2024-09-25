import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import "../scss/navbar.scss";
function Navbar() {
    return (
        <>
        <nav className="navbar">
            
            <div className="nav-links">
                <div className="navbar-left">
                    <Link className="link" to="/"> 
                        Hwiseong Ahn
                    </Link>
                    <Link className="link" to="/About">
                        About
                    </Link>
                    <Link className="link" to="/Projects">
                        Projects
                    </Link>
                </div>
                <div className="navbar-right">
                        <motion.a href="https://www.linkedin.com/in/hwiseongahn/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/hwiseongahn/">
                        <FontAwesomeIcon className="icon" icon={faSquareGithub} />
                        </motion.a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
