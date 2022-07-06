import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import DesignedButton from '../components/DesignedButton';
import InformationSection from '../components/InformationSection';

const Home: NextPage = () => {
    return (
        <div className={styles.background}>
            <Container>
                <Head>
                    <title>Young Entrepreneurs Club</title>
                    <meta name='description' content='Young Entrepreneurs Club' />
                </Head>

                <Row style={{ height: '85vh' }} className='align-items-center'>
                    <Col>
                        <h1 className={styles.title}>Young Entrepreneurs Club</h1>
                        <p className={styles.description}>
                            Learn about entrepreneurship and startups, generate
                            ideas, practice startup pitches, and more!
                        </p>
                        <DesignedButton text='Start A Chapter!' />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <Image
                            src='/rocket_icon.png'
                            width={300}
                            height={300}
                            alt='startup icon'
                            className={styles.startup}
                        />
                    </Col>
                </Row>

                <InformationSection
                    headingText='Learn about entrepreneurship'
                    descriptionText='Learn about the basics of entrepreneurship and how to think like an entrepreneur.'
                    image='/entrepreneurship.png'
                    imageAlt='entrepreneurship'
                    flip={true}
                />

                <InformationSection
                    headingText='Business Planning'
                    descriptionText='Generate innovative ideas and all the components that go into a successful business.'
                    image='/business_plan.png'
                    imageAlt='business planning'
                    flip={false}
                />

                <InformationSection
                    headingText='Mock Startup Pitches'
                    descriptionText='Get real-world experience by practicing startup pitches.'
                    image='/startup_pitch.png'
                    imageAlt='mock startup pitches'
                    flip={true}
                />

                <InformationSection
                    headingText='Guest Speakers'
                    descriptionText='Learn from successful entrepreneurs and industry leaders who have years of experience.'
                    image='/guest_speaker.png'
                    imageAlt='guest speakers'
                    flip={false}
                />

                <footer
                    className='d-flex flex-row justify-content-between mb-3'
                    style={{ width: '100px' }}
                >
                    <a
                        href='https://www.instagram.com/monty_nfc/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Image
                            src='/instagram_icon.png'
                            width={40}
                            height={40}
                            alt='Young Entrepreneurs Club Instagram'
                        />
                    </a>
                    <a
                        href='https://discord.gg/ybggaQhWhs'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Image
                            src='/discord_icon.svg'
                            width={40}
                            height={40}
                            alt='Young Entrepreneurs Club Discord Server'
                        />
                    </a>
                </footer>
            </Container>
        </div>
    );
};

export default Home;
