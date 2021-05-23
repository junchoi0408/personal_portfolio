import React from 'react';
import image from './no_profile.jpg';
import './About.css';

const About = () => {
    return (
        <div id='about' className='title'>
            <h1>About Me</h1>
            <img src={image} alt="img of face"></img>
            <p>Hi, I'm Junwon! I'm a class 2020 undergraduate majored in Risk Management and Information Sciences and Technology at The Pennsylvania State University. My primary interest lies in software engineering and data science/machine learning.</p>
        </div>
    );
}

export default About;