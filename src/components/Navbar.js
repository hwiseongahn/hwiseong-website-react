import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
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
        </div>
            
        </>
    );
};

const NavbarMobile = () => {
    const [open, setOpen] = useState(false);

    const onHamburgerClick = () => setOpen(!open);
    const linksVisible = open ? (
        <MobileNavLinks open={open} setOpen={setOpen} />
    ) : (
        <></>
    );

    return (
        <nav className="navbar-mobile">
            <div className="navbar-top">
                <div className="navbar-left">
                    <Link className="logo" to="/">HWISEONG<br/>AHN</Link>
                </div>
                <div className="navbar-right">
                    <Link className="link" onClick={onHamburgerClick}><FontAwesomeIcon className="hamburger-icon" icon={faBars} /></Link>
                </div>
            </div>
            <motion.div 
                className="link-container"
                variants={slideDownAnimation}
                whileInView={open ? "animate" : "initial"}
                transition={{duration : 0.5}}
                >
                {linksVisible}
            </motion.div>
        </nav>
    );
};

const NavbarDesktop = () => {   
    const [pageLoaded, setPageLoaded] = useState(false);

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
                    <Link className="logo" to="/">HWISEONG AHN</Link>
                    <CustomLink to="/About">ABOUT</CustomLink>
                    <CustomLink to="/Projects">PROJECTS</CustomLink>
                </div>
                <div className="navbar-right">
                    <CustomLink to="https://www.linkedin.com/in/hwiseongahn/">
                        <motion.p
                            className="linked-text"
                            variants={slideUpAnimation}
                            initial="initial"
                            whileInView={pageLoaded ? "animate" : "initial"}
                            transition={{
                                delay:0.75,
                            }}
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
                            transition={{
                                delay:0.75,
                            }}
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

const slideDownAnimation = {
    initial: {
        opacity: 1, y: -500,
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
