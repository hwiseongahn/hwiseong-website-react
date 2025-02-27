import React, {useEffect} from 'react';
import newYorkNight from "../assets/newyorkplease.jpg";
import "../scss/hero.scss";
function Hero() {

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight;

            document.documentElement.style.setProperty('--window-height', `${height}px`);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='hero-container'>
        <img src={newYorkNight} alt="New York Skyline during the night"/>
    </div>
  )
}

export default Hero
