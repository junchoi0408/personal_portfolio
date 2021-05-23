import React, { useState } from 'react';
import educations from './education_list'
import './Education.css';

const Education = () => {
    const [id, setId ] = useState(0);
    const { education, degree, dates, courses} = educations[id];
    return (
        <div id='education' className='title'>
            <h1>Education</h1>
            <div className="education-body">
                <h2>{education}</h2>
                <p>{dates}</p>
                <p>{degree}</p>
                <br></br>
                <p>Relevant Coursework:</p>
                <p>{courses}</p>
            </div>
        </div>
    )
}

export default Education;