import React from 'react';

const Footer = () => {
    return (
        <footer className='jumbotron jumbotron-fluid'>
            <div className='bg-black p-4 text-white'>
                <div className="container">
                    <h1 className='display-4 text-center text-uppercase font-32'>Let’s Contact</h1>
                    <p className='lead text-center p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <p className="text-center">
                        <a className="px-4 py-3 my-4 font-18 border-0 btn-orange btn-lg text-center" href="#" role="button">Contact Us</a>
                    </p>
                </div>
            </div>
            <div className="text-center">
                <p className='mb-1 mt-1'>Copyright @2022 | Notionhive</p>
            </div>
        </footer>
    );
};

export default Footer;