import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Foot = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 360px;
    margin-bottom: 50px;
    width: 100%;
    visibility: hidden;

    @media (max-width: 720px) {
        margin-top: 200px;
    }

    @media (max-width: 600px) {
        margin-top: 100px;
    }

    @media (max-height: 888px) {
        margin-top: 200px;
    }

    @media (max-height: 720px) {
        margin-top: 100px;
    }
`;

const SocialDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom: 40px;

    @media (min-width: 601px) {
        display: none;
    }
`;

const Font = styled.h5`
    color: rgba(200, 200, 200);

    transition: 0.3s;
    &:hover {
        color: rgba(160, 160, 160);
    }
`;

const HorizontalLine = styled.div`
    position: relative;
    height: 2px;
    background-color: rgba(17, 29, 58);
`;

const Icons = styled.h1`
    font-size: 32px;
    
    transition: 0.3s;
    &:hover {
        font-size: 40px;
    }
`;

const Footer = () => {
    const fontContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(fontContainer.current, {delay: 0, duration: 1000, origin: 'bottom', distance: '50px'});
    }, []);

    return (
        <Foot ref={fontContainer}>
            <SocialDiv>
                <HorizontalLine style={{width: '90px'}}/>
                <a href="mailto:w.dai1150@gmail.com" target="_blank" rel="noreferrer">
                    <Icons>
                        <AiFillMail color='rgba(17, 29, 58)'/>
                    </Icons>
                </a>
                <a href="https://github.com/william-dai" target="_blank" rel="noreferrer">
                    <Icons>
                        <AiFillLinkedin color='rgba(17, 29, 58)'/>
                    </Icons>
                </a>
                <a href="https://www.linkedin.com/in/widai/" target="_blank" rel="noreferrer">
                    <Icons>
                        <AiFillGithub color='rgba(17, 29, 58)'/>
                    </Icons>
                </a>
                <HorizontalLine style={{width: '90px'}}/>
            </SocialDiv>
            <a href="https://github.com/william-dai/william-dai.com" target="_blank" rel="noreferrer">
                <Font>
                    <i>
                        Created and designed by William Dai.
                    </i>
                </Font>
            </a>
        </Foot>
    )
}

export default Footer;