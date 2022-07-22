import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { AiFillCaretLeft, AiFillGithub } from "react-icons/ai";

import '../../../styles/transitionStyles.css';

import PersonalWebsitePreview from '../../../images/PersonalWebsitePreview.png';
import SlackClonePreview1 from '../../../images/slack-clone-images/image1.png';
import SlackClonePreview2 from '../../../images/slack-clone-images/image2.png';
import SlackClonePreview3 from '../../../images/slack-clone-images/image3.png';

const Snippet = styled.div`
    position: sticky;
    top: 100px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    min-height: 100px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    z-index: 4;
`;

const BackButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 10px;
    left: 10px;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 16px;

    transition: 0.3s;
    &:hover {
        opacity: 0.4;
    }
`;

const Description = styled.div`
    flex: 1;
    position: relative;
    margin: 25px 25px 25px 25px;

    font-size: 16px;
    line-height: 1.3em;
    text-align: left;
`;

const Outer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 968px) {
        flex-direction: column;
    }
`

const Inner = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 968px) {
        width: 100%;
    }
`;

const SnippetImage = styled.img`
    flex: 1;
    box-shadow: 0px 2px 20px 0px rgba(138, 89, 201, 0.18);
    transition: 0.3s;
`;

const MultiImage = styled.div`
    position: relative;
    margin: 25px auto 25px auto;
    text-align: center;
`;

const CardOne = (item, funcOne, funcTwo, funcThree) => {
    return (
        <CSSTransition
            in={item}
            timeout={300}
            classNames="menu"
            unmountOnExit
            onEnter={funcOne}
            onExited={funcTwo}
        >
            <div style={{position: 'absolute', zIndex: '3', width: '100%', height: '100%'}}>
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={funcThree}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={funcThree}>
                            <AiFillCaretLeft/>
                            Close
                        </BackButton>
                        <a href="https://github.com/william-dai/william-dai.com" target="_blank" rel="noreferrer">
                            <BackButton style={{left: '-10px'}}><AiFillGithub size={32}/></BackButton>
                        </a>
                    </div>
                    <Outer>
                        <Inner>
                            <Description>
                                My website that I designed as a side project, albeit I suppose everyone's got to do this one of these at some point.
                                Outside of some dependency components (namely ScrollReveal, styled-components, React Transition Group, Ant Design, and
                                React Icons), everything has been designed and coded from scratch. I hope you find it nice, I spent a lot of hours on it!
                            </Description>
                            <Description>
                                <b>Tech Stack:</b>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em', lineHeight: '2em'}}>
                                    <li>Languages: JavaScript, HTML5, CSS3</li>
                                    <li>Framework: Gatsby (React.js)</li>
                                </ul>
                            </Description>
                        </Inner>
                        <SnippetImage style={{margin: '25px 25px 25px 25px', width: 'auto', height: '180px'}} src={PersonalWebsitePreview} alt="Personal Website Preview"/>
                    </Outer>
                </Snippet>
            </div>
        </CSSTransition>
    )
}

const CardTwo = (item, funcOne, funcTwo, funcThree) => {
    return (
        <CSSTransition
            in={item}
            timeout={300}
            classNames="menu"
            unmountOnExit
            onEnter={funcOne}
            onExited={funcTwo}
        >
            <div style={{position: 'absolute', zIndex: '3', width: '100%', height: '100%'}}>
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={funcThree}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={funcThree}>
                            <AiFillCaretLeft/>
                            Close
                        </BackButton>
                        <a href="https://github.com/ritwik-aluri/CSE115A-Spotify-GO" target="_blank" rel="noreferrer">
                            <BackButton style={{left: '-10px'}}><AiFillGithub size={32}/></BackButton>
                        </a>
                    </div>
                    <Outer>
                        <Inner>
                            <Description>
                                A music discovery mobile application built for Android, written in JavaScript. Curates music for a user based
                                on what nearby users around them are listening to on Spotify. Pulls information using real-time tracking, geolocation, and
                                Spotify's servers and displays nearby user songs and information on the app's map view.
                            </Description>
                            <Description>
                                <b>Tech Stack:</b>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em', lineHeight: '2em'}}>
                                    <li>Language: JavaScript</li>
                                    <li>Framework: React Native (React.js)</li>
                                    <li>Technologies: Google Firebase</li>
                                </ul>
                            </Description>
                        </Inner>
                        {/* <SnippetImage/> */}
                    </Outer>
                </Snippet>
            </div>
        </CSSTransition>
    )
}

const CardThree = (item, funcOne, funcTwo, funcThree) => {
    return (
        <CSSTransition
            in={item}
            timeout={300}
            classNames="menu"
            unmountOnExit
            onEnter={funcOne}
            onExited={funcTwo}
        >
            <div style={{position: 'absolute', zIndex: '3', width: '100%', height: '100%'}}>
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={funcThree}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={funcThree}>
                            <AiFillCaretLeft/>
                            Close
                        </BackButton>
                        <a href="https://github.com/william-dai/slack-clone" target="_blank" rel="noreferrer">
                            <BackButton style={{left: '-10px'}}><AiFillGithub size={32}/></BackButton>
                        </a>
                    </div>
                    <Outer>
                        <Inner>
                            <Description>
                                A communications web application that mimics the Slack software, using React.js and written in JavaScript.
                                Features much of the same functionality, including login and authentication, users, servers, channels, and messaging.
                            </Description>
                            <Description>
                                <b>Tech Stack:</b>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em', lineHeight: '2em'}}>
                                    <li>Languages: JavaScript, SQL</li>
                                    <li>Technologies: React.js, Node.js, Express.js, PostgreSQL, Docker</li>
                                    <li>Frontend: MUI</li>
                                </ul>
                            </Description>
                        </Inner>
                        {/* <SnippetImage src={PersonalWebsitePreview} alt="Personal Website Preview"/> */}
                        <MultiImage>
                            <SnippetImage style={{height: '180px', maxWidth: 'auto'}} src={SlackClonePreview1} alt="Slack Clone Preview 1"/>
                            <SnippetImage style={{height: '180px', maxWidth: 'auto'}} src={SlackClonePreview2} alt="Slack Clone Preview 2"/>
                            <SnippetImage style={{height: '180px', maxWidth: 'auto'}} src={SlackClonePreview3} alt="Slack Clone Preview 3"/>
                        </MultiImage>
                    </Outer>
                </Snippet>
            </div>
        </CSSTransition>
    )
}

const CardFour = (item, funcOne, funcTwo, funcThree) => {
    return (
        <CSSTransition
            in={item}
            timeout={300}
            classNames="menu"
            unmountOnExit
            onEnter={funcOne}
            onExited={funcTwo}
        >
            <div style={{position: 'absolute', zIndex: '3', width: '100%', height: '100%'}}>
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={funcThree}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={funcThree}>
                            <AiFillCaretLeft/>
                            Close
                        </BackButton>
                        <BackButton style={{left: '-10px', color: 'rgba(240, 240, 240)', cursor: 'default'}}><AiFillGithub size={32}/></BackButton>
                    </div>
                    <Outer>
                        <Inner>
                            <Description>
                                A data compression program written in C with a command line interface on Unix Bash that utilizes the LZ78
                                algorithm to compress inputted files with strings and then decompress them using two respective executables.
                            </Description>
                            <Description>
                                <b>Tech Stack:</b>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em', lineHeight: '2em'}}>
                                    <li>Languages: C</li>
                                </ul>
                            </Description>
                        </Inner>
                        {/* <SnippetImage src={PersonalWebsitePreview} alt="Personal Website Preview"/> */}
                    </Outer>
                </Snippet>
            </div>
        </CSSTransition>
    )
}

export { CardOne, CardTwo, CardThree, CardFour };