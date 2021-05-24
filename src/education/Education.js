import React, { useState } from 'react';
import educations from './education_list'
import './Education.css';

const Education = () => {
    const [id, setId ] = useState(0);
    const { education, degrees, dates, organizations, courses} = educations[id];
    return (
        <div id='education' className='title'>
            <h1>Education</h1>
            <div className="education-body">
                <h2>{education}</h2>
                <p className=".education-date">{dates}</p>
                {degrees.map((degree)=>
                {
                    return (<p>{degree}</p>)
                })}
                <br></br>
                <p>Relevant Coursework:</p>
                {courses.map((course)=>{
                    return(
                            <li>{course}</li>
                    )
                })}
            </div>
        </div>
    )
}

export default Education;