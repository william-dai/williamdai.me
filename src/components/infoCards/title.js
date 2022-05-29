import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const Container = styled.div`
    position: absolute;
    top: 0;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    height: 100px;
    width: 171px;
    visibility: hidden;
`;

const TopFont = styled.h3`
    display: flex;
    justify-content: left;
    font-size: 16px;
`;

const NameFont = styled.h2`
    display: flex;
    justify-content: center;
    margin-top: 4px;
    font-weight: bold;
    font-size: 32px;
`;

const Title = () => {
    const revealContainer = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(revealContainer.current, {delay: 1500, duration: 1000, distance: '50px', origin: 'top'});
    }, []);

    return (
        <Container ref={revealContainer}>
            <TopFont>Hi! My name is</TopFont>
            <NameFont>William Dai</NameFont>
        </Container>
    )
}

export default Title;