import React, { useState, useEffect } from 'react';
import "../scss/card.scss";

function Card({title, description, image, link="", linkDescription=""}) {

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
                        <CardDesktop 
                            title={title} 
                            image={image} 
                            description={description}
                        />
                    ) : (
                        <CardMobile 
                            title={title} 
                            image={image} 
                            description={description} 
                            link={link} 
                            linkDescription={linkDescription}
                        />
                    )}
                </>
            );
        };
    return <ScreenWidthCheck />;
}

const CardDesktop = ({title, description, image, link="", linkDescription=""}) => {
        return (
            
            <div className="card-container">
                <div className='flex-container'>
                    <img className='card-image' src={image} alt="asdf" ></img>
                    <h1 className='card-image'>{title}</h1>
                </div>
                <p className='card-desc'>{description}</p>
            </div>
        );
    }

    const CardMobile = ({title, description, image, link="", linkDescription=""}) => {
        return (
            
            <div className="card-container">
                <h1 className='card-title'>{title}</h1>
                <img className='card-image' src={image} alt="asdf" ></img>
                <p className='card-desc'>{description} <a href={link}>{linkDescription}</a></p>
            </div>
        );
    }
export default Card;