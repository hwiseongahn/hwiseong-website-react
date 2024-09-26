import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                        <motion.p
                            className="linked-text"
                            variants={slideUpAnimation}
                            initial="initial"
                            whileInView="animate"
                            transition={{
                                delay:0.5,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            LINKED
                        </motion.p>
                        <motion.div
                            initial={{ scale: 0, rotate: 180}}
                            animate={{ rotate: 0, scale: 1 }}
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
                            whileInView="animate"
                            transition={{
                                delay:0.5,
                            }}
                            viewport={{
                                once: true,
                            }}>
                            GITHUB
                        </motion.p>
                        <motion.div
                            initial={{ scale: 0, rotate: 180}}
                            animate={{ rotate: 0, scale: 1 }}
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
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
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
