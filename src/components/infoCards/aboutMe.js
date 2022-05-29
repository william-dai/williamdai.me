import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 360px;
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
        flex-direction: column;
        align-items: start;
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
    left: 30px;
    width: 60%;

    font-size: 16px;

    @media (max-width: 968px) {
        top: 30px;
        width: 85%;
    }
`;

const Avatar = styled.div`
    position: relative;
    right: 10px;
    top: -10px;
    width: 180px;
    height: 180px;
    background-color: rgba(17, 29, 58);
    border-radius: 7px;
    transition: 0.3s;

    &:hover {
        transform: translateX(5px) translateY(5px)
    }
`

const AvatarBorder = styled.div`
    position: relative;
    right: 40px;
    top: -15px;
    width: 180px;
    height: 180px;
    background-color: transparent;
    border: 1px solid rgba(17, 29, 58);
    border-radius: 7px;
    visibility: hidden;

    @media (max-width: 1080px) {
        top: -35px;
    }

    @media (max-width: 968px) {
        margin-left: auto;
        margin-right: auto;
        left: -5px;
    }
`;

const AboutMe = () => {
    const cardContainer = useRef(null);
    const avatarContainer = useRef(null);
    const textContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(cardContainer.current, {delay: 0, duration: 2000, distance: '50px'});
        ScrollReveal().reveal(textContainer.current, {delay: 1500, duration: 1000, distance: '10px'});
        ScrollReveal().reveal(avatarContainer.current, {delay: 2000, duration: 1000, distance: '10px'});
    }, []);

    return (
        <Card ref={cardContainer}>
            <Description ref={textContainer}>
                Hello! Glad that you could access my website. My name is William and I’m an aspiring software  engineer based in the Bay Area. I attended the University of California, Santa Cruz, where I majored in Computer Science.
                <br/><br/>
                My interest in the technology field stems from a love of technology and logical intuition. I love staying in touch with the latest in the tech world, whether it’s vehicles, phones, and software. 
                <br/><br/>
                Programming to me is a way to engage in an analytic process that I really enjoy, especially when I am able to create and present digital things to others. I’m always interested in tackling challenges, and developing projects and concepts help me fulfill my ambitious spirit.
            </Description>
            <AvatarBorder ref={avatarContainer}><Avatar></Avatar></AvatarBorder>
        </Card>
    )
}

export default AboutMe;