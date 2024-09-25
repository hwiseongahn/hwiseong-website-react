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
                    <Link className="logo" to="/">MY NAME</Link>
                    <CustomLink to="/About">ABOUT</CustomLink>
                    <CustomLink to="/Projects">PROJECTS</CustomLink>
                </div>
                <div className="navbar-right">
                    <motion.a className="link" href="https://www.linkedin.com/in/hwiseongahn/">
                        LINKED
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </motion.a>
                    <motion.a className="link" href="https://github.com/hwiseongahn">
                        GITHUB
                        <FontAwesomeIcon className="icon" icon={faSquareGithub} />
                    </motion.a>
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
