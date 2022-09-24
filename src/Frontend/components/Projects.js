import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
    return (
        <section className='projects text-white'>
            <div className="container py-5">
                <h1 className='font-18 pb-2 text-uppercase'>Projects We have done</h1>
                <div className="row g-2">
                    <div className="col-12 col-md-4">
                        <div class="project d-flex position-relative flex-column">
                            <div class='imgContainer'>
                                <img src={project1} alt="project"/>
                                <h2 className='font-32 project-title py-2 h-none'>Residential</h2>
                            </div>
                            <div class="content p-2">
                                <h2 className='font-24 py-2'>Residential</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div class="project d-flex position-relative flex-column">
                            <div class='imgContainer'>
                                <img src={project2} alt="project"/>
                                <h2 className='font-32 project-title py-2 h-none'>Commercial</h2>
                            </div>
                            <div class="content p-2">
                                <h2 className='font-24 py-2'>Commercial</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div class="project d-flex position-relative flex-column">
                            <div class='imgContainer'>
                                <img src={project3} alt="project"/>
                                <h2 className='font-32 project-title py-2 h-none'>Duplex</h2>
                            </div>
                            <div class="content p-2">
                                <h2 className='font-24 py-2'>Duplex</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
              

                </div>
            </div>
        </section>
    );
};

export default Projects;