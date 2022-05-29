import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import App from './menu.js';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    height: 300px;
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

// const Row = styled.div`
//     width: 100%;
//     position: relative;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     margin-top: 20px;
// `

// const Logo = styled.div`
//     width: 90px;
//     height: 90px;
//     background-color: white;
//     box-shadow: 0px 0px 10px 0px rgba(138, 89, 201, 0.18);
//     border-radius: 7px;
//     transition: 0.3s;
//     margin: auto;
//     text-align: center;
//     vertical-align: middle;
//     line-height: 90px;

//     &:hover {
//         transform: translateY(5px)
//     }
// `

// const languages = ['C++', 'C', 'JavaScript', 'Python', 'SQL'];

const Skills = () => {
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
                <div style={{margin: 'auto', width: '92%'}}>
                    <App/>
                </div>
            </span>
        </Card>
    )
}

export default Skills;
