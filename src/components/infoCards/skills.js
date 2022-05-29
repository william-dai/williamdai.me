import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import HorizontalMenu from '../menu.js';

import CPlusLogo from "../../images/C++.png";
import CLangLogo from "../../images/C.png";
import JavaScriptLogo from '../../images/JavaScript.png';
import PythonLogo from '../../images/Python.png';
import SQLLogo from '../../images/SQL.png';
import HTML5Logo from '../../images/HTML5.png';
import CSS3Logo from '../../images/CSS3.png';
import ReactLogo from '../../images/React.png';
import ReactNativeLogo from '../../images/ReactNative.png';
import NodeLogo from '../../images/Node.png';
import ExpressLogo from '../../images/Express.png';
import PostgreSQLLogo from '../../images/PostgreSQL.png';
import FirebaseLogo from '../../images/Firebase.png';
import DockerLogo from '../../images/Docker.png';
import UnixLogo from '../../images/Unix.png';
import GitLogo from '../../images/Git.png';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    height: 455px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 800px;
    visibility: hidden;

    @media (max-width: 1080px) {
        height: 425px;
        width: 70%
    }

    @media (max-width: 600px) {
        width: 100%;
    }

    @media (max-width: 400px) {
        height: 445px;
    }
    
`;

const Description = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    margin-top: 35px;

    font-size: 16px;

    @media (max-width: 1080px) {
        margin-top: 25px;
    }
`;

const Skills = () => {
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

    const cardContainer = useRef(null);
    const LogoContainer = useRef(null);
    const textContainer = useRef(null);
    
    useEffect(() => {
        ScrollReveal().reveal(cardContainer.current, {delay: 0, duration: 2000, distance: '50px'});
        ScrollReveal().reveal(textContainer.current, {delay: 1500, duration: 1000, distance: '10px'});
        ScrollReveal().reveal(LogoContainer.current, {delay: 2000, duration: 1000, distance: '10px'});
    }, []);

    return (
        <Card ref={cardContainer}>
            <span style={{width: '100%'}} ref={textContainer}>
                <Description>
                    I'd like to consider myself knowledged in the following:
                </Description>

                <Description>
                    <b>Languages</b>
                </Description>
                
                <div style={{marginLeft: '1.3%', marginTop: '5px', width: '96%'}}>
                    {HorizontalMenu(languages)}
                </div>
                
                <Description>
                    <b>Technologies</b>
                </Description>

                <div style={{marginLeft: '1.3%',marginTop: '5px', width: '96%'}}>
                    {HorizontalMenu(technologies)}
                </div>

            </span>
        </Card>
    )
}

export default Skills;
