import React from 'react';
import { Contact } from '../Contact/Contact';
import Banner from '../Home/Banner/Banner';
import About from '../Home/About/About';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;