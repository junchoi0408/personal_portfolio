import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
    const [nonActive, setActive] = useState(true);
    const show = () => {
        setActive(false)
    }
    const hide = () => {
        setActive(true)
    }
    return (
        <div className="nav">
            <FaBars className='fa-bars' onClick={show} />
            <div className={`active-list ${nonActive && 'visibility'}`}>
                <p onClick={hide}>Close <IoCloseSharp className="io" /></p>
                <a href="#about" onClick={hide}>About</a>
                <a href="#experience" onClick={hide}>Experience</a>
                <a href="#education" onClick={hide}>Education</a>
                <a href="#project" onClick={hide}>Project</a>
                <a href="#form" onClick={hide}>Contact</a>
            </div>
            <div className="nav-bar">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#project">Project</a>
                <a href="#form">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;