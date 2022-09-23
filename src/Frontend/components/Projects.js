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
                        <div class="card d-flex position-relative flex-column">
                            <div class='imgContainer'>
                                <img src={project1} alt="project"/>
                            </div>
                            <div class="content">
                                <h2 className='font-32 project-title'>Residential</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div class="card d-flex position-relative flex-column">
                            <div class='imgContainer'>
                                <img src={project1} alt="project"/>
                            </div>
                            <div class="content">
                                <h2 className='font-32 project-title'>Residential</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div class="card d-flex position-relative flex-column">
                            <div class='imgContainer'>
                                <img src={project1} alt="project"/>
                            </div>
                            <div class="content">
                                <h2 className='font-32 project-title'>Residential</h2>
                            </div>
                        </div>
                    </div>
              

                </div>
            </div>
        </section>
    );
};

export default Projects;