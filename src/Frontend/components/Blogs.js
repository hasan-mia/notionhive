import React from 'react';
import '../styles/Blogs.css'
import blog1 from '../assets/blog_1.svg';
import blog2 from '../assets/blog_2.svg';

const Blogs = () => {
    return (
        <section className='my-5'>
            <div className="container">
                <h2 className='font-32 py-2 text-uppercase'>Blog</h2>
                <div className="row gap-y-2">
                    <div className="col-12 col-md-4">
                        <div className="blog">
                            <img src={blog1} className="img-fluid" alt="blog" />
                            <span className='plus'>+</span>
                        </div>
                        <div className="blog-content">
                            <p>window</p>
                            <h1 className='font-24'>Lorem ipsom dolor</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="blog">
                            <img src={blog2} className="img-fluid" alt="blog" />
                            <span className='plus'>+</span>
                        </div>
                        <div className="blog-content">
                            <p>window</p>
                            <h1 className='font-24'>Consectetur adipiscing sed do</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="blog">
                            <img src={blog1} className="img-fluid" alt="blog" />
                            <span className='plus'>+</span>
                        </div>
                        <div className="blog-content">
                            <p>window</p>
                            <h1 className='font-24'>Lorem ipsom dolor</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;