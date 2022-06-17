import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Card = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    min-height: 230px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 800px;
    visibility: hidden;

    @media (max-width: 1080px) {
        width: 70%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Content = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 25px 25px 25px 25px;
`;

const Description = styled.div`
    position: relative;
    text-align: center;
    width: 90%;
    font-size: 16px;
`;

const NaviButton = styled.button`
    width: 180px;
    height: 60px;
    background-color: transparent;
    border: 1px solid rgba(17, 29, 58);
    border-radius: 7px;
    color: rgba(17, 29, 58);
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        background-color: rgba(17, 29, 58, 0.2);
        opacity: 0.5;
    }
  
    font-size: 16px;
`;

const Closure = () => {
    const cardContainer = useRef(null);
    const textContainer = useRef(null);
    const buttonContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(cardContainer.current, {delay: 0, duration: 2000, distance: '50px'});
        ScrollReveal().reveal(textContainer.current, {delay: 250, duration: 1000, distance: '10px'});
        ScrollReveal().reveal(buttonContainer.current, {delay: 250, duration: 1000, origin: 'bottom', distance: '10px'});
    }, []);

    return (
        <Card ref={cardContainer}>
            <Content>
                <Description ref={textContainer}>
                    That's it for my website, more or less. I'm currently looking for new opportunities right now,
                    so if you would like to contact me, just come around and say hello! You can also send me feedback or
                    questions if you'd like. I'll try to get back to you as soon as possible.
                </Description>
                <br/>
                <br/>
                <a href="mailto:w.dai1150@gmail.com" target="_blank" rel="noreferrer">
                    <NaviButton ref={buttonContainer}>
                        Contact Me
                    </NaviButton>
                </a>
            </Content>
        </Card>
    )
}

export default Closure;