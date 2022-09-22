import React from 'react';
import '../styles/About.css'
import woman from '../assets/woman.svg'

const About = () => {
    return (
        <section className='my-5'>
            <div className='container'>
                <h1 className='text-center text-uppercase font-32'>About us</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                <div className="row align-items-center gap-y-2">
                    <div className="col col-md-6">
                        <div id="carouselExampleControls" class="carousel slide control-next" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className='about-img'>
                                        <img src={woman} className="img-fluid" alt="about woman" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='about-img'>
                                        <img src={woman} className="img-fluid" alt="about woman" />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className='about-img'>
                                        <img src={woman} className="img-fluid" alt="about woman" />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col col-md-6">
                        <div className="about-right">
                            <h6>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
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