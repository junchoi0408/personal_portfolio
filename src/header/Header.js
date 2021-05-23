import React from 'react';
import './Header.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';

const Header = () => {
    return(
        <div className="header">
            <div className="shadow">
                <div className="container">
                    <h1>Junwon Choi</h1>
                    <p>Software Engineer | Data Scientist</p>
                    <button>Download Resume</button>
                    <div className="logo-container">
                        <a href="https://www.github.com/junchoi0408" target="_blank" rel="noreferrer">
                            <FaGithub className="logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/junwon-choi-487917139/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="logo"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="logo"/>
                        </a>
                    </div>
                    <a href="#about">
                        <HiChevronDown className="icon"/>
                    </a>
                </div>
            </div>     
        </div>
    ) 
};

export default Header;
