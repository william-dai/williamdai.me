import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

import Photo from '../../images/photo.png';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 360px;
    min-height: 300px;
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
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 25px 25px 25px;

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: start;
    }
`;

const Description = styled.div`
    position: relative;
    width: 70%;
    font-size: 16px;

    @media (max-width: 968px) {
        width: 100%;
    }
`;

const AvatarBorder = styled.div`
    position: relative;
    top: 15px;
    margin-left: 40px;
    width: 180px;
    height: 180px;
    background-color: transparent;
    border: 1px solid rgba(17, 29, 58);
    border-radius: 7px;
    visibility: hidden;

    @media (max-width: 968px) {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 25px;
    }
`;

const Avatar = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

const SelfImage = styled.img`
    position: relative;
    height: 94%;
    border-radius: 7px;
    opacity: 1;
    transition: 0.3s;

    &:hover {
        opacity: 0.6;
    }
`;

const AboutMe = (desc) => {
    const cardContainer = useRef(null);
    const textContainer = useRef(null);
    const avatarContainer = useRef(null);

    const descriptionFiller = (desc) => {
        return (
            desc.map((desc, index) => {
                return (
                    <span key={index}>
                        {desc}
                        <br/>
                        <br/>
                    </span>
                )
            })
        )
    }

    useEffect(() => {
        ScrollReveal().reveal(cardContainer.current, {delay: 0, duration: 2000, distance: '50px'});
        ScrollReveal().reveal(textContainer.current, {delay: 250, duration: 1000, distance: '10px'});
        ScrollReveal().reveal(avatarContainer.current, {delay: 500, duration: 1000, distance: '10px'});
    }, []);

    return (
        <Card ref={cardContainer}>
            <Content>
                <Description ref={textContainer}>
                    {descriptionFiller(desc)}
                </Description>
                <AvatarBorder ref={avatarContainer}>
                    <Avatar>
                        <SelfImage src={Photo} alt="Image of Me"/>
                    </Avatar>
                </AvatarBorder>
            </Content>
        </Card>
    )
}

export default AboutMe;