import React from 'react';
import '../styles/Banner.css';
import bannerImg from '../assets/banner.svg';

const Banner = () => {
    return (
        <section>
            <div className="banner-slider">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerImg} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Modern elegance</h5>
                                    <p>Our most popular bifold. Perfect for thermal efficiency</p>
                                    <button type='button' className='btn btn-orange'>Our services</button>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImg} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Modern elegance</h5>
                                    <p>Our most popular bifold. Perfect for thermal efficiency.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImg} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Modern elegance</h5>
                                    <p>Our most popular bifold. Perfect for thermal efficiency.</p>
                                </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;