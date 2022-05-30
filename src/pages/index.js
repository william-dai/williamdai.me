import React from 'react';
import Navibar from '../components/navibar.js';
import Divider from '../components/divider.js';
import GlobalStyle from '../styles/globalStyle.js';
import Title from '../components/infoCards/title.js';
import AboutMe from '../components/infoCards/aboutMe.js';
import Skills from '../components/infoCards/skills.js';
import Experience from '../components/infoCards/experience.js';
import Footer from '../components/footer.js';
import Social from '../components/social.js';

import CPlusLogo from "../images/C++.png";
import CLangLogo from "../images/C.png";
import JavaScriptLogo from '../images/JavaScript.png';
import PythonLogo from '../images/Python.png';
import SQLLogo from '../images/SQL.png';
import HTML5Logo from '../images/HTML5.png';
import CSS3Logo from '../images/CSS3.png';
import ReactLogo from '../images/React.png';
import ReactNativeLogo from '../images/ReactNative.png';
import NodeLogo from '../images/Node.png';
import ExpressLogo from '../images/Express.png';
import PostgreSQLLogo from '../images/PostgreSQL.png';
import FirebaseLogo from '../images/Firebase.png';
import DockerLogo from '../images/Docker.png';
import UnixLogo from '../images/Unix.png';
import GitLogo from '../images/Git.png';

const Home = () => {
    const languages = [
        ['C++', CPlusLogo],
        ['C', CLangLogo],
        ['JavaScript', JavaScriptLogo],
        ['Python', PythonLogo],
        ['SQL', SQLLogo],
        ['HTML5', HTML5Logo],
        ['CSS3', CSS3Logo]
    ];

    const technologies = [
        ['React.js', ReactLogo],
        ['Node.js', NodeLogo],
        ['Express.js', ExpressLogo],
        ['React Native', ReactNativeLogo],
        ['PostgreSQL', PostgreSQLLogo],
        ['Firebase', FirebaseLogo],
        ['Docker', DockerLogo],
        ['Git', GitLogo],
        ['Unix', UnixLogo]
    ]

    return (
        <div>
            <GlobalStyle/>
            <Navibar/>
            <Title/>
            <AboutMe/>
            {Divider('Skills')}
            {Skills(languages, technologies)}
            {Divider('Education & Work')}
            <Experience/>
            <Social/>
            <Footer/>
        </div>
    )
}

export default Home;