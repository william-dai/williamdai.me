import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import HorizontalMenu from './menu.js';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    height: 460px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 800px;
    visibility: hidden;

    @media (max-width: 1080px) {
        height: 340px;
        width: 70%
    }

    @media (max-width: 968px) {
        height: 550px;
    }

    @media (max-width: 720px) {
        height: 600px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
    
    @media (max-width: 480px) {
        height: 650px;
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
    const languages = ['C++', 'C', 'JavaScript', 'Python', 'SQL'];
    const technologies = ['React.js', 'React Native', 'Node.js', 'Express.js', 'PostgreSQL', 'Google Firebase', 'Docker', 'Unix', 'Git']

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
                
                <div style={{marginLeft: '5px', marginTop: '5px', width: '96%'}}>
                    {HorizontalMenu(languages)}
                </div>
                
                <Description>
                    <b>Technologies</b>
                </Description>

                <div style={{marginLeft: '5px',marginTop: '5px', width: '96%'}}>
                    {HorizontalMenu(technologies)}
                </div>

            </span>
        </Card>
    )
}

export default Skills;
