import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Divide = styled.div`
    position: relative;
    display: flex;
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

    @media (max-width: 600px) {
        width: 92%;
    }
`;

const Line = styled.div`
    position: relative;
    background-color: rgba(182, 137, 218);
    width: 100%;
    height: 3px;
`;

const Font = styled.h3`
    font-weight: bold;
    font-size: 24px;
`;

const Divider = (title) => {
    const divideContainer = useRef(null);
    const fontContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(fontContainer.current, {delay: 1500, duration: 1000, origin: 'top', distance: '10px'});
        ScrollReveal().reveal(divideContainer.current, {delay: 0, duration: 2000, distance: '50px'});
    }, []);

    return (
        <Divide ref={divideContainer}><Font ref={fontContainer}>{title}&nbsp;</Font><Line/></Divide>
    )
}

export default Divider;