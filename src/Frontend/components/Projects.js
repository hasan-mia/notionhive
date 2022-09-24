import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
    return (
        <section className='projects text-white'>
            <div className="container py-2 py-lg-5">
                <h1 className='font-18 py-2 text-uppercase'>Projects We have done</h1>
                <ul className="row g-2 list-unstyled">
                    <li className="col-12 col-md-4">
                        <div className="project d-flex position-relative flex-column">
                            <div className='imgContainer'>
                                <img src={project1} alt="project"/>
                                <span className='plus'>+</span>
                                <h2 className='font-32 project-title py-2'>Residential</h2>
                            </div>
                            <div className="content p-2">
                                <h2 className='font-24 py-2'>Residential</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </li>

                    <li className="col-12 col-md-4">
                        <div className="project d-flex position-relative flex-column">
                            <div className='imgContainer'>
                                <img src={project2} alt="project"/>
                                <span className='plus'>+</span>
                                <h2 className='font-32 project-title py-2'>Commercial</h2>
                            </div>
                            <div className="content p-2">
                                <h2 className='font-24 py-2'>Commercial</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </li>

                    <li className="col-12 col-md-4">
                        <div className="project d-flex position-relative flex-column">
                            <div className='imgContainer'>
                                <img src={project3} alt="project"/>
                                <span className='plus'>+</span>
                                <h2 className='font-32 project-title py-2'>Duplex</h2>
                            </div>
                            <div className="content p-2">
                                <h2 className='font-24 py-2'>Duplex</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </li>
              

                </ul>
            </div>
        </section>
    );
};

export default Projects;