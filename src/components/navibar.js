import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    position: fixed;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: rgba(17, 29, 58);
    box-shadow: 0px 4px 22px 8px rgba(0, 0, 0, 0.55);
    z-index: 1;
    @keyframes slideTop {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    animation-name: slideTop;
    animation-duration: 0.8s;
    animation-delay: 0s;
    animation-fill-mode: both;
    
`;


const NaviButton = styled.button`
    margin-right: 40px;
    width: 110px;
    height: 45px;
    background-color: transparent;
    border: 1px solid rgba(182, 137, 218);
    border-radius: 7px;
    color: rgba(182, 137, 218);
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        background-color: rgba(182, 137, 218, 0.2);
        opacity: 0.5;
    }

    @keyframes slideTop {
        0% {
            transform: translateY(-200%);
        }
        100% {
            transform: translateY(0);
        }
    }
    animation-name: slideTop;
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: both;

    font-size: 16px;
`;

const Navibar = () => {
    const NaviWrapper = (text, link) => (
        <a href="/resume.pdf" target='_blank' rel='noopener noreferrer'>
            <NaviButton>{text}</NaviButton>
        </a>
    )

    return (
        <Header>
            {NaviWrapper('Resume', 'resume.pdf')}
            {NaviWrapper('Contact Me', 'mailto:w.dai1150@gmail.com')}
        </Header>
    );
}

export default Navibar;