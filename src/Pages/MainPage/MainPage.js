import React from 'react';
import { Contact } from '../Contact/Contact';
import Banner from '../Home/Banner/Banner';
import Header from '../Home/Header/Header';
import About from '../Home/About/About';
import Project from '../Project/Project';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default MainPage;