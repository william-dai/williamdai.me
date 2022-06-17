import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
// import { CSSTransition } from 'react-transition-group';
// import { AiFillCaretLeft, AiFillGithub } from "react-icons/ai";

// import '../../styles/transitionStyles.css';
import PersonalWebsitePreview from '../../images/PersonalWebsitePreview.png';
// import SlackClonePreview1 from '../../images/slack-clone-images/image1.png';
import SlackClonePreview2 from '../../images/slack-clone-images/image2.png';
// import SlackClonePreview3 from '../../images/slack-clone-images/image3.png';
import { CardOne, CardTwo, CardThree, CardFour } from './projectCards/cards';

const Card = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    min-height: 800px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 800px;

    @media (max-width: 1080px) {
        width: 70%;
    }

    @media (max-width: 920px) {
        // height: 820px;
    }

    @media (max-width: 600px) {
        // height: 850px;
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
    flex: 1;
    margin: 25px 25px 25px 25px;
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
        // height: 355px;
    }

    @media (max-width: 720px) {
        // height: 150px;
        min-height: 150px;
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
                {!blur && <CardCover/>}
                {/* Personal Website Card */}
                {CardOne(itemOne, () => setBlur(false), () => setBlur(true), () => setItemOne(false))}
                {CardTwo(itemTwo, () => setBlur(false), () => setBlur(true), () => setItemTwo(false))}
                {CardThree(itemThree, () => setBlur(false), () => setBlur(true), () => setItemThree(false))}
                {CardFour(itemFour, () => setBlur(false), () => setBlur(true), () => setItemFour(false))}
                                    
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
                            Music discovery mobile application, built for Android. (Images Soon&#8482;)
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
                            Data compression program based on the LZ78 Compression algorithm. (Images Soon&#8482;)
                        </Subtitle>
                    </ProjectCard>
                </Grid>
            </Card>
        </div>
    );
}

export default Projects;