import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { CSSTransition } from 'react-transition-group';
import { AiFillCaretLeft, AiFillGithub } from "react-icons/ai";

import '../../styles/transitionStyles.css';
import PersonalWebsitePreview from '../../images/PersonalWebsitePreview.png';
import SlackClonePreview1 from '../../images/slack-clone-images/image1.png';
import SlackClonePreview2 from '../../images/slack-clone-images/image2.png';
import SlackClonePreview3 from '../../images/slack-clone-images/image3.png';

const Card = styled.div`
    position: relative;
    margin: auto;
    height: 1000px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 800px;

    @media (max-width: 1080px) {
        width: 70%
    }

    @media (max-width: 920px) {
        height: 820px;
    }

    @media (max-width: 600px) {
        height: 850px;
        width: 100%;
    }
`;

const CardCover = styled.div`
    position: absolute;
    margin: auto;
    height: 100%;
    width: 100%;
    background-color: white;
    border-radius: 16px;
    z-index: 3;
    opacity: 0.8;
    transition: 0.3s;
`;

const Grid = styled.span`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;

const ProjectCard = styled.div`
    position: relative;
    width: 80%;
    height: 440px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 15px 5px rgba(138, 89, 201, 0.18);

    transition: 0.3s;
    &:hover {
        cursor: pointer;
        transform: translateY(5px)
    }

    @media (max-width: 920px) {
        height: 355px;
    }

    @media (max-width: 720px) {
        height: 150px;
    }
`

const Title = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    margin-top: 40px;

    font-size: 28px;

    @media (max-width: 1080px) {
        margin-top: 25px;
    }

    transition: 0.3s;
    ${ProjectCard}:hover & {
        opacity: 0.2;
    }
`;

const Subtitle = styled.div`
    position: relative;
    margin: auto;
    text-align: center;
    width: 85%;
    margin-top: 20px;
    font-size: 16px;

    @media (max-width: 1080px) {
        margin-top: 25px;
    }

    transition: 0.3s;
    ${ProjectCard}:hover & {
        opacity: 0.2;
    }
`;

const PreviewImage = styled.img`
    position: position;
    display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.2;

    @media (max-width: 720px) {
        display: none;
    }

    transition: 0.3s;
    ${ProjectCard}:hover & {
        opacity: 1;
    }
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

const Snippet = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 10px;
    left: 0;
    right: 0;
    height: 480px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 780px;
    z-index: 10;

    @media (max-width: 1080px) {
        width: 97%
    }

    @media (max-width: 920px) {
        height: 800px;
    }

    @media (max-width: 600px) {
        height: 830px;
        width: 97%;
    }
`;

const Description = styled.div`
    position: relative;
    left: 30px;
    margin-bottom: 30px;

    font-size: 16px;
    line-height: 1.3em;
    text-align: left;

    // @media (max-width: 968px) {
    //     top: 30px;
    //     width: 85%;
    // }
`;

const SnippetImage = styled.img`
    position: position;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 40%;
    box-shadow: 0px 2px 20px 0px rgba(138, 89, 201, 0.18);
    transition: 0.3s;

    @media (max-width: 1080px) {
        height: 33%;
        margin-bottom: 130px;
    }

    @media (max-width: 1000px) {
        height: 28%;
    }

    @media (max-width: 920px) {
        height: 20%;
    }

    // @media (max-width: 600px) {
    //     height: 25%;
    // }

    // @media (max-width: 480px) {
    //     height: 25%;
    // }
`;

const Outer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background-color: lightblue;

    @media (max-width: 920px) {
        flex-direction: column;
    }
`

const Inner = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;

    @media (max-width: 920px) {
        width: 88%;
    }
`;

const MultiImage = styled.div`
    height: 90%;
    display: flex;
    align-content: center;
    @media (min-width: 921px) {
        margin-right: 40px;
    }

    @media (max-width: 920px) {
        margin-top: 60px;
    }
`

const Projects = () => {
    const cardContainer = useRef(null);
    const projectContainer = useRef(null);
    const [blur, setBlur] = React.useState(true);
    const [itemOne, setItemOne] = React.useState(false);
    const [itemTwo, setItemTwo] = React.useState(false);
    const [itemThree, setItemThree] = React.useState(false);
    const [itemFour, setItemFour] = React.useState(false);


    useEffect(() => {
        ScrollReveal().reveal(cardContainer.current, {delay: 0, duration: 2000, distance: '50px'});
        ScrollReveal().reveal(projectContainer.current, {delay: 1000, duration: 1000});
    }, []);

    return (
        <div>
            <Card ref={cardContainer}>
            {!blur &&
            <CardCover/>
            }
            {/* Personal Website Card */}
            <CSSTransition
                in={itemOne}
                timeout={300}
                classNames="menu"
                unmountOnExit
                onEnter={() => setBlur(false)}
                onExited={() => setBlur(true)}
            >
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={() => setItemOne(false)}>
                    <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={() => setItemOne(false)}>
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
                        <SnippetImage src={PersonalWebsitePreview} alt="Personal Website Preview"/>
                        </Outer>
                </Snippet>
            </CSSTransition>


            {/* Spotify GO Card */}
            <CSSTransition
                in={itemTwo}
                timeout={300}
                classNames="menu"
                unmountOnExit
                onEnter={() => setBlur(false)}
                onExited={() => setBlur(true)}
            >
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={() => setItemTwo(false)}>
                    <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={() => setItemTwo(false)}>
                            <AiFillCaretLeft/>
                            Close
                        </BackButton>
                            <BackButton style={{left: '-10px', color: 'rgba(240, 240, 240)', cursor: 'default'}}><AiFillGithub size={32}/></BackButton>
                    </div>
                    <Outer>
                        <Inner>
                            <Description>
                                A music discovery mobile application built for Android, written in JavaScript. Curates music for a user based
                                on what nearby users around them are listening to on Spotify. Pulls information using real-time tracking, geolocation, and
                                Spotify&apos;s servers and displays user information on the app&apos;s map view.
                            </Description>
                            <Description>
                                <b>Tech Stack:</b>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em', lineHeight: '2em'}}>
                                    <li>Language: JavaScript</li>
                                    <li>Framework: React Native</li>
                                    <li>Technologies: Google Firebase</li>
                                </ul>
                            </Description>
                        </Inner>
                        </Outer>
                </Snippet>
            </CSSTransition>


            {/* Slack Clone Card */}
            <CSSTransition
                in={itemThree}
                timeout={300}
                classNames="menu"
                unmountOnExit
                onEnter={() => setBlur(false)}
                onExited={() => setBlur(true)}
            >
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={() => setItemThree(false)}>
                    <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={() => setItemThree(false)}>
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
                        <MultiImage>
                            <SnippetImage src={SlackClonePreview1} alt="Slack Clone Preview 1"/>
                            <SnippetImage src={SlackClonePreview2} alt="Slack Clone Preview 2"/>
                            <SnippetImage src={SlackClonePreview3} alt="Slack Clone Preview 3"/>
                        </MultiImage>
                        </Outer>
                </Snippet>
            </CSSTransition>

            {/* Compression Card */}
            <CSSTransition
                in={itemFour}
                timeout={300}
                classNames="menu"
                unmountOnExit
                onEnter={() => setBlur(false)}
                onExited={() => setBlur(true)}
            >
                <Snippet style={{visibility: 'visible'}} variant="primary" dismissible onClose={() => setItemFour(false)}>
                    <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <BackButton onClick={() => setItemFour(false)}>
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
                                    <li>Language: C</li>
                                </ul>
                            </Description>
                        </Inner>
                        </Outer>
                </Snippet>
            </CSSTransition>


                <Grid ref={projectContainer}>
                    <ProjectCard onClick={() => setItemOne(true)}>
                        <Title>
                            <b>Personal Website</b>
                        </Title>
                        <Subtitle>
                            My personal website. You're currently looking at it!
                        </Subtitle>
                        <PreviewImage src={PersonalWebsitePreview} alt="Personal Website Preview" width="95%"/>
                    </ProjectCard>

                    <ProjectCard onClick={() => setItemTwo(true)}>
                        <Title>
                            <b>Spotify GO</b>
                        </Title>
                        <Subtitle>
                            Music discovery mobile application, built for Android.
                        </Subtitle>
                    </ProjectCard>

                    <ProjectCard onClick={() => setItemThree(true)}>
                        <Title>
                            <b>Slack Clone</b>
                        </Title>
                        <Subtitle>
                            Communications web application that mimics the Slack software.
                        </Subtitle>
                        <PreviewImage src={SlackClonePreview2} alt="Slack Clone Preview" width="50%"/>
                    </ProjectCard>

                    <ProjectCard onClick={() => setItemFour(true)}>
                        <Title>
                            <b>LZ78 Compression</b>
                        </Title>
                        <Subtitle>
                            Data compression program based on the LZ78 Compression algorithm.
                        </Subtitle>
                    </ProjectCard>
                </Grid>
            </Card>
        </div>
    );
}

export default Projects;