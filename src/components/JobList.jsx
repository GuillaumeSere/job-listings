import React, { useState, useEffect } from 'react';
import jobData from '../data.json';
import './jobList.css'

function JobList() {

    const [jobs, setJobs] = useState(jobData);
    const [filters, setFilters] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        setJobs(jobData);
        setFilteredJobs(jobData);
    }, []);



    useEffect(() => {
        if (filters.length === 0) {
            setFilteredJobs(jobData);
        } else {
            const newFilteredJobs = jobData.filter((job) =>
                filters.every(
                    (filter) =>
                        job.role === filter ||
                        job.new === filter ||
                        job.featured === filter ||
                        job.level === filter ||
                        job.languages.includes(filter) ||
                        job.tools.includes(filter)
                )
            );
            setFilteredJobs(newFilteredJobs);
        }
    }, [filters]);

    const addFilter = (filter) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    };

    const removeFilter = (filter) => {
        const newFilters = filters.filter((f) => f !== filter);
        setFilters(newFilters);
    };

    const clearFilters = () => {
        setFilters([]);
    };

    return (
        <div className='container'>
            {filters.length > 0 && (
                <div className='filter'>
                    <button className='btn-clear' onClick={() => clearFilters('')}>
                        Clear
                    </button>
                    {filters.map((filter) => (
                        <button className='btn' key={filter} onClick={() => removeFilter(filter)}>
                            {filter} <span className='btn-filter'>X</span>
                        </button>
                    ))}
                </div>
            )}
            {filteredJobs.map((job) => (
                <>
                    {job.featured === true ? (
                        <div className='card-job' key={job.id}>
                            <img className='logo' src={`../images/${job.logo}`} alt='logo' />
                            <div className='card-info'>
                                <div className='card-company'>{job.company}</div>
                                {job.new === true && (
                                    <span className='new'>NEW!</span>
                                )}
                                {job.featured === true && (
                                    <span className='featured'>FEATURED</span>
                                )}
                                <div className='card-position'>{job.position}</div>
                                <ul>
                                    <li className='card-post'>{job.postedAt} </li>
                                    <li className='card-contract'>{job.contract} </li>
                                    <li className='card-location'>{job.location}</li>
                                </ul>
                            </div>
                            <div className='card-selection'>
                                {[
                                    job.role,
                                    job.level,
                                    ...job.languages,
                                    ...job.tools,
                                ].map((filter) => (
                                    <button
                                        className='btn selection'
                                        key={filter}
                                        onClick={() => addFilter(filter)}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) :
                        <div className='card-jobs' key={job.id}>
                            <img className='logo' src={`../../images/${job.logo}`} alt='logo' />
                            <div className='card-info'>
                                <div className='card-company'>{job.company}</div>
                                {job.new === true && (
                                    <span className='new'>NEW!</span>
                                )}
                                {job.featured === true && (
                                    <span className='featured'>FEATURED</span>
                                )}
                                <div className='card-position'>{job.position}</div>
                                <ul>
                                    <li className='card-post'>{job.postedAt} </li>
                                    <li className='card-contract'>{job.contract} </li>
                                    <li className='card-location'>{job.location}</li>
                                </ul>
                            </div>
                            <div className='card-selection'>
                                {[
                                    job.role,
                                    job.level,
                                    ...job.languages,
                                    ...job.tools,
                                ].map((filter) => (
                                    <button
                                        className='btn selection'
                                        key={filter}
                                        onClick={() => addFilter(filter)}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    }
                </>
            ))}

        </div>
    );
}

export default JobList;