import React, {useState, useEffect} from 'react';
import newYorkNight from "../assets/newyorkplease.png";
import "../scss/hero.scss";
function Hero() {
    
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight;
            setWindowHeight(height);

            document.documentElement.style.setProperty('--window-height', `${height}px`);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='container'>
        <img src={newYorkNight} alt="New York Skyline during the night"/>
    </div>
  )
}

export default Hero
