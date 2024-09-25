import React from 'react';
import newYorkNight from "../assets/newyorkplease.png";
import "../scss/hero.scss";
function Hero() {
  return (
    <div className='container'>
        <img src={newYorkNight} alt="New York Skyline during the night"/>
    </div>
  )
}

export default Hero
