import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiChevronUp } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    return (
        <div id="footer" className="title">
            <p>Copyright &copy; {date.getFullYear()} Junwon Choi</p>
            <a href="#about">
                <HiChevronUp className="footer-logo chev-up"/>
            </a>
            <div className="logo-container-footer">
                <a href="https://www.github.com/junchoi0408" target="_blank" rel="noreferrer">
                    <FaGithub className="footer-logo fa" />
                </a>
                <a href="https://www.linkedin.com/in/junwon-choi-487917139/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="footer-logo fa"/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="footer-logo fa"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;