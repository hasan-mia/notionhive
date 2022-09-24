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
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerImg} className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h3 className='text-uppercase font-lg-48'>Modern elegance</h3>
                                <p>Our most popular bifold. Perfect for thermal efficiency</p>
                                <button type='button' className='p-2 my-lg-4 font-18 border-0 btn-orange'>Our services</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImg} className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h3 className='text-uppercase font-lg-48'>Modern elegance</h3>
                                <p>Our most popular bifold. Perfect for thermal efficiency</p>
                                <button type='button' className='p-2 my-lg-4 font-18 border-0 btn-orange'>Our services</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImg} className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h3 className='text-uppercase font-lg-48'>Modern elegance</h3>
                                <p>Our most popular bifold. Perfect for thermal efficiency</p>
                                <button type='button' className='p-2 my-lg-4 font-18 border-0 btn-orange'>Our services</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;