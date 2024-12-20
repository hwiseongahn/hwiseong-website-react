import React from 'react';
import "../scss/card.scss";

function Card({title, description, image}) {
    return (
        <div className="card-container">
            <div className='flex-container'>
                <img src={image} alt="asdf" className='card-image'></img>
                <h1 className='card-item'>{title}</h1>
            </div>
            
            <p className='card-item'>{description}</p>
        </div>
    );
}

export default Card;