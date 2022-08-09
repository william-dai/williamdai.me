import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import "antd/lib/tabs/style/index.css";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Card = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    min-height: 400px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 51px 0px rgba(138, 89, 201, 0.18);
    width: 800px;
    visibility: hidden;

    @media (max-width: 1080px) {
        width: 70%
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Content = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 25px 25px 25px 25px;
    width: 90%;
`;

const Description = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    font-size: 16px;

    @media (max-width: 1080px) {
        margin-top: 25px;
    }
`;

const ScrollBox = styled.div`
    position: relative;
    margin-top: 10px;
    height: 120px;
    width: 100%;
    overflow-y: auto;
`

const Experience = () => {
    const cardContainer = useRef(null);
    const textContainer = useRef(null);

    const UCcourses = [
        'CSE183: Web Applications',
        'CSE180: Database Systems I',
        'CSE144: Applied Machine Learning',
        'CSE143: Introduction to Natural Language Processing',
        'CSE130: Principles of Computer Systems Design',
        'CSE120: Computer Architecture',
        'CSE115A: Introduction to Computer Engineering',
        'CSE112: Comparative Programming Langauges',
        'CSE103: Computational Models',
        'CSE102: Introduction to Analysis of Algorithms',
        'CSE101: Data Structures & Algorithms',
        'CSE13S: Comp Sys and C Programming',        
        'STAT131: Introduction to Probability Theory'
    ]

    const populateCourses = (arr) => {
        return (
        <ScrollBox>
            <ul style={{listStylePosition: 'outside', marginLeft: '1em'}}>
                {arr.map((course) => {
                    return <li key={course}>{course}</li>
                })}
            </ul>
        </ScrollBox>
        );
    }

    useEffect(() => {
        ScrollReveal().reveal(cardContainer.current, {delay: 0, duration: 2000, distance: '50px'});
        ScrollReveal().reveal(textContainer.current, {delay: 1000, duration: 1000});
    }, []);

    return (
        <Card ref={cardContainer}>
            <Content ref={textContainer}>
                <Description>
                    <b>Education</b>
                </Description>
                    <Tabs defaultActiveKey='1' centered size='large' style={{fontSize: '16px'}}>
                        <TabPane tab="University of California, Santa Cruz" key="1">
                                <b>Degree:</b> Computer Science B.S. <br/>
                                <b>Location:</b> Santa Cruz, California <br/>
                                <b>Attendance:</b> August 2020 &ndash; June 2022 <br/>
                                <b>Relevant Coursework Completed:</b>
                                {populateCourses(UCcourses)}
                        </TabPane>

                        <TabPane tab="Laney College" key="2">
                                <b>Studying:</b> Computer Science <br/>
                                <b>Location:</b> Oakland, California <br/>
                                <b>Attendance:</b> August 2018 &ndash; May 2020 <br/>
                                <b>Information:</b> <br/>
                                Completed General Education Requirements at Laney College before transferring to UC Santa Cruz.
                        </TabPane>

                        <TabPane tab="Ohlone College" key="3">
                                <b>Studying:</b> Computer Science <br/>
                                <b>Location:</b> Fremont, California <br/>
                                <b>Attendance:</b> August 2018 &ndash; December 2019 <br/>
                                <b>Information:</b> <br/>
                                Completed lower-division Major Requirements at Ohlone College before transferring to UC Santa Cruz.
                        </TabPane>
                    </Tabs>

                <div style={{height: '25px'}}/>

                <Description ref={textContainer}>
                    <b>Work Experience</b>
                </Description>
                    <Tabs defaultActiveKey='1' centered size='large' style={{fontSize: '16px'}}>
                        <TabPane tab="University of California, Santa Cruz" key="1">
                                <b>Position:</b> Computer Science Group Tutor <br/>
                                <b>Location:</b> Santa Cruz, California <br/>
                                <b>Duration:</b> March 2021 &ndash; June 2021 <br/>
                                <b>Information:</b> <br/>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em'}}>
                                    <li>Organized and hosted multiple additional lectures and study sessions accessed by 20+ students every week.</li>
                                    <li>Worked with students to complete coding assignments and projects with high standards.</li>
                                    <li>Covered fundamental C topics such as data structures, algorithms, and multi-threading.</li>
                                    <li> Assisted the lead professor with grading exams, assignments, and lab reports for 200+ students.</li>
                                </ul>
                        </TabPane>
                        <TabPane tab="Network Jupiter LLC" key="2">
                                <b>Position:</b> IT Technician <br/>
                                <b>Location:</b> Alameda, California <br/>
                                <b>Duration:</b> June 2017 &ndash; May 2019 <br/>
                                <b>Information:</b> <br/>
                                <ul style={{listStylePosition: 'outside', marginLeft: '1em'}}>
                                    <li>Maintained company infrastructure, and identified and troubleshooted network issues.</li>
                                    <li>Provided technical training and support on software and hardware to end users.</li>
                                    <li>Performed computer repair and maintenance, including parts replacement, software management, and system backup</li>
                                </ul>
                        </TabPane>
                    </Tabs>
            </Content>
        </Card>
    )
}

export default Experience;