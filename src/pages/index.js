import React from 'react';
import Navibar from '../components/navibar.js';
import IntroCard from '../components/introcard.js';
import Title from '../components/title.js';

import './style.css';

const Home = () => {

    return (
        <div>
            <Navibar/>
            <Title/>
            <IntroCard/>
            <IntroCard/>
            <IntroCard/>
            <IntroCard/>
            <IntroCard/>
        </div>
    )
}

export default Home;