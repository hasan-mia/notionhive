import React from 'react';
import logo from '../assets/icon/logo.svg';
import menuImg from '../assets/menu.svg';
import banner from '../assets/banner.svg'
import '../styles/Header.css'

const Header = () => {
    return (
        <header className='sticky'>
            {/* Top Bar */}
            <nav className="d-flex justify-content-between container mt-2">
                <ul className='list-unstyled d-flex'>
                    <li className='call'> <a href="#a" className='text-decoration-none'>Call us: 783 367 2678</a> </li>
                </ul>
                <ul className='list-unstyled d-flex gap-2'>
                    <li className='border border-1'> <a href="#a" className='text-decoration-none'>Free brochure</a> </li>
                    <li className='border border-1'> <a href="#a" className='text-decoration-none'>Help centre</a> </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg border border-1">


                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menuImg" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100vh" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item dropdown megamenu conatiner">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mega Menu
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className='container'>
                                        <div className="row">
                                            <div className="col col-md-3">
                                                <h5>By size</h5>
                                                <ul className='list-unstyled'>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col col-md-3">
                                                <h5>By Type</h5>
                                                <ul className='list-unstyled'>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col col-md-3">
                                                <h5>By Pannel</h5>
                                                <ul className='list-unstyled'>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                    <li className='py-2'> <a href="#" className='text-decoration-none'>Small Bifolds</a> </li>
                                                </ul>
                                            </div>
                                            <div className="col col-md-3">
                                                <img src={menuImg} className="img-fluid" alt="navar" />
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;