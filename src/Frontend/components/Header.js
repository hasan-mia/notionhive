import React from 'react';
import logo from '../assets/icon/logo.svg';
import logoMobile from '../assets/icon/mobile-logo.svg';
import menuImg from '../assets/menu.png';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className='position-foxed header'>
            {/* Top Bar */}
            <nav className="d-flex justify-content-between container mt-2 top-nav">
                <ul className='list-unstyled d-flex'>
                    <li className='call'> <a href="#a" className='text-decoration-none'>Call us: 783 367 2678</a> </li>
                </ul>
                <ul className='list-unstyled d-flex gap-2'>
                    <li className='border-start border-1 ps-2'> <a href="#a" className='text-decoration-none'>Free brochure</a> </li>
                    <li className='border-start border-end border-1 px-2'> <a href="#a" className='text-decoration-none'>Help centre</a> </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg">

                <div className="container">
                    <a className="navbar-brand mobile-none" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <a className="navbar-brand desk-none" href="#">
                        <img src={logoMobile} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menuImg" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll text-white" style={{ "--bs-scroll-height": "100vh" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            {/* ==mega menu== */}
                            <li className="nav-item dropdown megamenu conatiner">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className='container'>
                                        <div className="row">
                                            <div className="col-6 col-md-3">
                                                <h5>By size</h5>
                                                <ul className='list-unstyled'>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>Medium Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>Large Bifolds</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <h5>By Type</h5>
                                                <ul className='list-unstyled'>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>Stock Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>Corner Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>Bespoke Bifolds</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <h5>By Pannel</h5>
                                                <ul className='list-unstyled'>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>2 Panel Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>3 Panel Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>4 Panel Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>5 Panel Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>6 Panel Bifolds</a> </li>
                                                    <li className='py-2 mega-item'> <a href="#" className='text-decoration-none'>7 Panel Bifolds</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col col-md-3">
                                                <img src={menuImg} className="img-fluid menu-img" alt="navar" />
                                                <div className='menu-content px-2 w-25'>
                                                    <h1 className='font-26'>Bespoke Bifolds</h1>
                                                    <p>Our most popular bifold. Perfect for thermal efficiency.</p>
                                                    <a href="#" className='text-white'>Create your own</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sustainability</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">More</a>
                            </li>
                        </ul>

                        <ul className='d-flex list-unstyled gap-2'>
                            <li><a href="#" className="search"></a></li>
                            <li> <a href="#" className='text-white'>Sign in</a></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;