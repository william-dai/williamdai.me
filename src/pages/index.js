import React from 'react';
import Navibar from '../components/navibar.js';
import IntroCard from '../components/introcard.js';
import Title from '../components/title.js';
import GlobalStyle from '../styles/globalStyle.js';

const Home = () => {
    document.body.style.display = 'none';

    return (
        <div>
            <GlobalStyle/>
            <Navibar/>
            <Title/>
            <IntroCard/>
            {/* <IntroCard/>
            <IntroCard/>
            <IntroCard/>
            <IntroCard/> */}
        </div>
    )
}

export default Home;