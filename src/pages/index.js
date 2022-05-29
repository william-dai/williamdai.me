import React from 'react';
import Navibar from '../components/navibar.js';
import Divider from '../components/divider.js';
import AboutMe from '../components/aboutMe.js';
import Title from '../components/title.js';
import Skills from '../components/skills.js';
import GlobalStyle from '../styles/globalStyle.js';


const Home = () => {
    return (
        <div>
            <GlobalStyle/>
            <Navibar/>
            <Title/>
            <AboutMe/>
            {Divider('Skills')}
            <Skills/>
            <AboutMe/>
            <AboutMe/>
            <AboutMe/>
        </div>
    )
}

export default Home;