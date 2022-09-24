import React from 'react';
import '../styles/About.css'
import woman from '../assets/woman.png'
import man from '../assets/man.png'

const About = () => {
    return (
        <section className='my-3 my-lg-5'>
            <div className='container'>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className='text-center text-uppercase font-32 pb-2'>About us</h1>
                    <p className='text-center w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className="row g-4 align-items-center mt-1">
                    <div className="col col-md-6">
                        <div id="carouselExampleControls" className="carousel slide control-next" data-bs-ride="carousel">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className='about-img'>
                                        <img src={woman} className="img-fluid" alt="about woman" />
                                    </div>
                                    <p className='counter'>1</p>
                                </div>

                                <div className="carousel-item">
                                    <div className='about-img'>
                                        <img src={man} className="img-fluid" alt="about woman" />
                                    </div>
                                    <p className='counter'>2</p>
                                </div>

                            </div>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="fal fa-arrow-right" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col col-md-6 ps-6">
                        <div className="about-right">
                            <h1 className='font-20 py-2'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <button className='p-2 btn-back text-uppercase border-0'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;