import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Divide = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    margin-top: 360px;
    margin-bottom: 20px;
    width: 800px;
    visibility: hidden;

    @media (max-width: 1080px) {
        width: 70%
    }

    @media (max-width: 720px) {
        margin-top: 200px;
    }

    @media (max-width: 600px) {
        margin-top: 100px;
        width: 92%;
    }

    @media (max-height: 888px) {
        margin-top: 200px;
    }

    @media (max-height: 720px) {
        margin-top: 100px;
    }

`;

const Line = styled.div`
    position: relative;
    background-color: rgba(182, 137, 218);
    width: 100%;
    height: 3px;
`;

const Font = styled.h3`
    margin-right: 3px;
    white-space: nowrap;
    font-weight: bold;
    font-size: 24px;
`;

const Divider = (title) => {
    const divideContainer = useRef(null);
    const fontContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(fontContainer.current, {delay: 1000, duration: 1000, origin: 'top', distance: '10px'});
        ScrollReveal().reveal(divideContainer.current, {delay: 0, duration: 2000, distance: '50px'});
    }, []);

    return (
        <Divide ref={divideContainer}><Font ref={fontContainer}>{title}&nbsp;</Font><Line/></Divide>
    )
}

export default Divider;