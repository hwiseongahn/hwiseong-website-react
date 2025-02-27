import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {SunIcon} from '../assets';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import "../scss/navbar.scss";

const Navbar = () => {

    const ScreenWidthCheck = () => {
        const [isDesktop, setDesktop] = useState(window.innerWidth >= 650);

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

const MobileNavLinks = ({open, setOpen }) => {

    const onLinkClick = () => {
        setOpen(!open);
        document.documentElement.style.setProperty('--slideAnimation', "null");
    };

    const slideUpTransition = {
        type: "spring",
        stiffness: 260,
        damping: 20,
      };
    
    return (
        <>
        <div className="link-container">
            <Link className="link" to="/" onClick={onLinkClick}>
                Home
            </Link>
            <Link className="link" to="/About" onClick={onLinkClick}>
                About
            </Link>
            <Link className="link" to="/Projects" onClick={onLinkClick}>
                Projects
            </Link>
            <Link className="link" to="https://www.linkedin.com/in/hwiseongahn/">
                <motion.p
                    variants={slideUpAnimation}
                    key={open ? "open-linked" : "closed-linked"}
                    initial="initial"
                    whileInView={"animate"}
                    transition={open ? {delay:0} : {delay:0.25}}
                >
                    Linked
                </motion.p>
                <motion.div
                    variants={springAnimation}
                    key={open ? "open-in" : "closed-in"}
                    initial="initial"
                    whileInView={"animate"}
                    transition={{
                        ...slideUpTransition,
                        delay: open ? 0 : 0.5,
                      }}>
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </motion.div>
            </Link>
            <Link className="link" to="https://github.com/hwiseongahn">
                <motion.p
                    key={open ? "open-github" : "closed-github"}
                    variants={slideUpAnimation}
                    initial="initial"
                    whileInView={"animate"}
                    transition={open ? {delay:0} : {delay:0.25}}
                >
                    Github
                </motion.p>
                <motion.div
                    key={open ? "open-git-icon" : "closed-git-icon"}
                    variants={springAnimation}
                    initial="initial"
                    whileInView={"animate"}
                    transition={{
                        ...slideUpTransition,
                        delay: open ? 0 : 0.5,
                      }}>
                        <FontAwesomeIcon className="icon" icon={faSquareGithub} />
                </motion.div>
            </Link>
        </div>
            
        </>
    );
};

const NavbarMobile = () => {
    const [open, setOpen] = useState(true);
    const [darkMode, setDark] = useState(true);
    const onHamburgerClick = () => {
        setOpen(!open);
        document.documentElement.style.setProperty('--slideAnimation', open ? 'slideDown' : 'slideUp');
    }

    const onLogoClick = () => {
        if (!open) {
            setOpen(!open);
        }
        document.documentElement.style.setProperty('--slideAnimation', "null");
    }

    const onSunClick = () => {
        setDark(!darkMode);
        document.documentElement.style.setProperty('--fadeAnimation', darkMode ? "fadeDark" : "fadeLight");
    }

    return (
        <nav className="navbar-mobile">
            <div className="navbar-top">
                <div className="navbar-left">
                    <Link className="logo" onClick={onLogoClick} to="/">HWISEONG<br/>AHN</Link>
                </div>
                <div className="navbar-right">
                    <Link className="link" onClick={onSunClick}><SunIcon className="sun-icon"/></Link>
                    <Link className="link" onClick={onHamburgerClick}><FontAwesomeIcon className="hamburger-icon" icon={open ? faBars: faX} transform={open ? {rotate:0} : {rotate: 90}} fixedWidth/></Link>
                </div>
            </div>
            <MobileNavLinks open={open} setOpen={setOpen} />    
        </nav>
    );
};

const NavbarDesktop = () => {   
    const [pageLoaded, setPageLoaded] = useState(false);
    const [darkMode, setDark] = useState(true);

    const onSunClick = () => {
        setDark(!darkMode);
        document.documentElement.style.setProperty('--fadeAnimation', darkMode ? "fadeDark" : "fadeLight");
    }

    useEffect(() => {

        const handleLoad = () => {
            setPageLoaded(true);
            sessionStorage.setItem('pageLoaded', 'true');
        };
    
        const storedPageLoaded = sessionStorage.getItem('pageLoaded');
        if (storedPageLoaded === 'true') {
            setPageLoaded(true);
        }

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <nav className="navbar">
                <div className="navbar-left">
                    <CustomLink className="logo" to="/">HWISEONG AHN</CustomLink>
                    <CustomLink to="/About">ABOUT</CustomLink>
                    <CustomLink to="/Projects">PROJECTS</CustomLink>
                </div>
                <div className="navbar-right">
                    <SunIcon onClick={onSunClick} className="sun-icon"></SunIcon>
                    <CustomLink to="https://www.linkedin.com/in/hwiseongahn/">
                        <motion.p
                            className="linked-text"
                            variants={slideUpAnimation}
                            initial="initial"
                            whileInView={pageLoaded ? "animate" : "initial"}
                            transition={{delay:0.75}}
                        >
                            LINKED
                        </motion.p>
                        <motion.div
                            variants={springAnimation}
                            initial="initial"
                            whileInView={pageLoaded ? "animate" : "initial"}
                            transition={{
                                delay: 1,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        </motion.div>
                    </CustomLink>
                    <CustomLink to="https://github.com/hwiseongahn">
                        <motion.p
                            className="github-text"
                            variants={slideUpAnimation}
                            initial="initial"
                            whileInView={pageLoaded ? "animate" : "initial"}
                            transition={{delay:0.75}}
                        >
                            GITHUB
                        </motion.p>
                        <motion.div
                            variants={springAnimation}
                            initial= "initial"
                            whileInView={pageLoaded ? "animate" : "initial"}
                            transition={{
                                delay: 1,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                                <FontAwesomeIcon className="icon" icon={faSquareGithub} />
                        </motion.div>
                    </CustomLink>
                </div>
        </nav>
    );
};

const slideUpAnimation = {
    initial: {
        opacity: 0, y: 50,
    },
    animate: {
        opacity: 1, y: 0,
    }
}

const springAnimation = {
    initial : {
        scale: 0, rotate: 180,
    },
    animate : {
        scale: 1, rotate: 0,
    }
}


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
