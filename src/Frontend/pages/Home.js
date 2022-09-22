import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Blogs from '../components/Blogs';
import Branches from '../components/Branches';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Branches></Branches>
        </main>
    );
};

export default Home;