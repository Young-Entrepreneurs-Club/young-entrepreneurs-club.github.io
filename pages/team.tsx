import React from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import styles from '../styles/Team.module.css';
import Image from 'next/image';

const Team: React.FC = () => {
    return (
        <div className={styles.background}>
            <Head>
                <title>Team</title>
                <meta name='description' content='Team' />
            </Head>
            <Container>
                <h1 className="mb-5">
                    <b>Team</b>
                </h1>
                <div className='d-flex align-items-center justify-content-around'>
                    <Image
                        className={styles.azam}
                        src='/azam.jpg'
                        width={310}
                        height={300}
                        alt='Team'
                    />
                    <h2>Co-Founder + President</h2>
                </div>
                <div className='d-flex align-items-center justify-content-around mt-5'>
                    <Image
                        className={styles.azam}
                        src='/ekam.jpeg'
                        width={310}
                        height={300}
                        alt='Team'
                    />
                    <h2>Co-Founder + Vice President</h2>
                </div>
            </Container>
        </div>
    );
};

export default Team;
