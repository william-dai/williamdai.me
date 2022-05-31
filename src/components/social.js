import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const SocialDiv = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    bottom: 0;
    left: 0px;
    width: 80px;
    height: 400px;
    @keyframes slideBottom {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    animation-name: slideBottom;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: both;

    @media (max-width: 540px) {
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

const VerticalLine = styled.div`
    position: relative;
    width: 2px;
    background-color: rgba(17, 29, 58);
`;

const Icons = styled.h1`
    font-size: 32px;
    
    transition: 0.3s;
    &:hover {
        font-size: 40px;
    }
`;

const Social = () => {
    return (
        <SocialDiv>
            <VerticalLine style={{height: '200px'}}/>
            <br/>
            <a href="mailto:w.dai1150@gmail.com" target="_blank" rel="noreferrer">
                <Icons>
                    <AiFillMail color='rgba(17, 29, 58)'/>
                </Icons>
            </a>
            <br/>
            <a href="https://www.linkedin.com/in/widai/" target="_blank" rel="noreferrer">
                <Icons>
                    <AiFillLinkedin color='rgba(17, 29, 58)'/>
                </Icons>
            </a>
            <br/>
            <a href="https://github.com/william-dai" target="_blank" rel="noreferrer">
                <Icons>
                    <AiFillGithub color='rgba(17, 29, 58)'/>
                </Icons>
            </a>
            <br/>
            <VerticalLine style={{height: '80px'}}/>
        </SocialDiv>
    );
}

export default Social;
