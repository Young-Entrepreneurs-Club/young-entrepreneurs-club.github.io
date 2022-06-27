import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';
import styles from '../styles/StartAChapter.module.css';

const StartAChapter: React.FC = () => {
    return (
        <div className={styles.background}>
            <Head>
                <title>Start a Chapter!</title>
                <meta name='description' content='Start a Chapter' />
            </Head>
            <Container>
                <h1>Start an NFC Chapter!</h1>
                <div className='d-flex justify-content-center'>
                    <iframe
                        src='https://docs.google.com/forms/d/e/1FAIpQLScC01oZJHhDXIUDRAWlJ8mkmyHFfJqT5qYb2D3Z89mwMISUxg/viewform?embedded=true'
                        width='640'
                        height='1872'
                        frameBorder='0'
                    >
                        Loading…
                    </iframe>
                </div>
            </Container>
        </div>
    );
};

export default StartAChapter;
