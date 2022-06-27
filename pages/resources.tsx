import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Head from 'next/head';
import styles from '../styles/Resources.module.css';

const Resources: React.FC = () => {
    return (
        <div className={styles.background}>
            <Head>
                <title>Resources</title>
                <meta name='description' content='Resources' />
            </Head>
            <Container>
                <h1>Resources</h1>
                <Col>
                    <Col className='m-4'>
                        <h2>Presentations</h2>
                    </Col>
                </Col>
            </Container>
        </div>
    );
};

export default Resources;
