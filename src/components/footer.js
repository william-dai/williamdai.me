import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Foot = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 360px;
    margin-bottom: 50px;
    width: 800px;

    @media (max-width: 1080px) {
        width: 70%
    }

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

const Font = styled.h4`
    color: rgba(200, 200, 200);

    transition: 0.3s;
    &:hover {
        color: rgba(160, 160, 160);
    }
`;

const Footer = () => {
    const fontContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(fontContainer.current, {delay: 0, duration: 1000, origin: 'bottom', distance: '50px'});
    }, []);

    return (
        <Foot ref={fontContainer}>
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