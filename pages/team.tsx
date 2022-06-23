import React from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import Board from '../components/board';

const Team: React.FC = () => {
    return (
        <>
            <Head>
                <title>Team</title>
                <meta name='description' content='Team' />
            </Head>
            <Container>
                <h1>Team</h1>
                <p>
                    We are a club for students who are interested in developing
                    their real-world entrepreneurship skills
                </p>
                <div>
                    <h2>What we do</h2>
                    <ul>
                        <li>
                            <b>Learn team startups</b> - What a startup is to
                            launching a startup
                        </li>
                        <li>
                            <b>Business planning</b> - Learn how to plan a
                            startup
                        </li>
                        <li>
                            <b>Startup pitches</b> - Gain startup pitching
                            experience needed in the real world
                        </li>
                        <li>
                            <b>Guest speakers</b> - Learn from people who have
                            created successful startups
                        </li>
                        <li>
                            <b>Hackathons</b> - Apply your coding skills to
                            build a startup
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Board</h2>
                    <Board />
                </div>
            </Container>
        </>
    );
};

export default Team;
