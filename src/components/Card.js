import React, { useState, useEffect } from 'react';
import "../scss/card.scss";
import { LinkIcon } from '../assets';

function Card({title, description, image, link="", linkDescription="", linkEmoji=false}) {

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
                            link={link}
                            linkDescription={linkDescription}
                            linkEmoji={linkEmoji}
                        />
                    ) : (
                        <CardMobile 
                            title={title} 
                            image={image} 
                            description={description} 
                            link={link} 
                            linkDescription={linkDescription}
                            linkEmoji={linkEmoji}
                        />
                    )}
                </>
            );
        };
    return <ScreenWidthCheck />;
}

const CardDesktop = ({title, description, image, link, linkDescription, linkEmoji}) => {
        return (
            
            <div className="card-container">
                <h1 className='card-title'>{title}</h1>
                <img className='card-image' src={image} alt="asdf" ></img>
                <div className="card-desc">
                    <p  dangerouslySetInnerHTML={{ __html: description }}></p>
                    {linkEmoji && <p><a href={link}>{linkDescription + " "}</a><LinkIcon className="link-icon"/></p>}
                </div>
            </div>
        );
    }

    const CardMobile = ({title, description, image, link, linkDescription, linkEmoji}) => {
        return (
            
            <div className="card-container">
                <h1 className='card-title'>{title}</h1>
                <img className='card-image' src={image} alt="asdf" ></img>
                <div className="card-desc">
                    <p  dangerouslySetInnerHTML={{ __html: description }}></p>
                    {linkEmoji && <p><a href={link}>{linkDescription + " "}</a><LinkIcon className="link-icon"/></p>}
                </div>
            </div>
        );
    }
export default Card;