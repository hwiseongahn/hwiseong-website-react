import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import "../scss/navbar.scss";

const Navbar = () => {

    const ScreenWidthCheck = () => {
        const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

        const updateMedia = () => {
            setDesktop(window.innerWidth >= 650);
        };

        useEffect(() => {
            window.addEventListener("resize", updateMedia);
            return () => window.removeEventListener("resize", updateMedia);
        }, []);

        return (
            <>
                {isDesktop ? (
                    <NavbarDesktop />
                ) : (
                    <NavbarMobile />
                )}
            </>
        );
    };

    return <ScreenWidthCheck />;
};

const NavbarMobile = () => {
    return (
        <div>
            THIS MEANS THE NAVBAR IS MOBILE!!!
        </div>
    );
};

const NavbarDesktop = () => {
    return (
        <nav className="navbar">
                <div className="navbar-left">
                    <Link className="logo" to="/">HWISEONG AHN</Link>
                    <CustomLink to="/About">ABOUT</CustomLink>
                    <CustomLink to="/Projects">PROJECTS</CustomLink>
                </div>
                <div className="navbar-right">
                    <CustomLink to="https://www.linkedin.com/in/hwiseongahn/">
                        LINKED
                        <motion.div
                            animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                              }}>
                                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        </motion.div>
                    </CustomLink>
                    <p className="link">
                        <a href="https://www.linkedin.com/in/hwiseongahn/">
                            LINKED
                            
                        </a>
                    </p>
                </div>
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
        <Link className={isActive ? "active-link" : "link"} to={to} {...props}>
          {children}
        </Link>
    )
  }

export default Navbar;
