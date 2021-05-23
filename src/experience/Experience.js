import React, { useState } from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";
import { FiChevronsRight } from "react-icons/fi";
import jobs from './job';
import './Experience.css';

const Experience = () => {
    const [id, setId] = useState(0);
    const { title, dates, duties, company } = jobs[id];
    return (
        <div id='experience' className='title'>
            <h1>Experience</h1>
            <div className="job-container">
                <div className="job-btn-container">
                    {jobs.map((job, index)=>{return <button key={job.id} onClick={()=>{setId(index)}} className={`job-btn ${index === id && 'job-btn active-btn'}`}>{job.company}</button>})}
                </div>
                <div className="experience-body">
                    <h2 className="job position">{title}</h2>
                    <p className="job company">{company}</p>
                    <p className="job date">{dates}</p>
                    {duties.map((duty)=>
                    {
                        return(
                            <div className="job-desc">
                                <FiChevronsRight className="right"/>
                                <p className="job">{duty}</p>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Experience;

