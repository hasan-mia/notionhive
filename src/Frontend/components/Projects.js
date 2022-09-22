import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
    return (
        <section className='projects text-white'>
            <div className="container py-5">
                <h1 className='font-16 pb-2 text-uppercase'>Projects We have done</h1>
                <div className="row g-2">
                    <div className="col-12 col-md-4">
                        <div className='project'>
                        <img src={project1} className="img-fluid" alt="project" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='project'>

                        <img src={project2} className="img-fluid" alt="project" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='project'>

                        <img src={project3} className="img-fluid" alt="project" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;