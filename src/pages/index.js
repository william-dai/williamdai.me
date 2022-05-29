import React from 'react';
import Navibar from '../components/navibar.js';
import Divider from '../components/divider.js';
import GlobalStyle from '../styles/globalStyle.js';
import Title from '../components/infoCards/title.js';
import AboutMe from '../components/infoCards/aboutMe.js';
import Skills from '../components/infoCards/skills.js';

const Home = () => {
    return (
        <div>
            <GlobalStyle/>
            <Navibar/>
            <Title/>
            <AboutMe/>
            {Divider('Skills')}
            <Skills/>
            {Divider('Academica & Work')}
            <Skills/>
        </div>
    )
}

export default Home;