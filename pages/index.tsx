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
                    <title>Monty Young Entrepreneurs Club</title>
                    <meta name='description' content='Young Entrepreneurs Club' />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff" />
                    
                    <meta name='title' content='Montgomery Young Entrepreneurs Club' />
                <meta
                    name='description'
                    content='Monty Young Entrepreneurs Club is a community of young people who are interested in becoming entrepreneurs and starting their own business. We are a group of people who are passionate about starting their own business and are looking to share their knowledge and experience with others. This club was founded by Azam Ahmed and Ekam Bhatia in 2022 for Montgomery High School. Monty Young Entrepreneurs Club. Montgomery Young Entrepreneurs Club. Monty Young Entrepreneurs Club. Montgomery Young Entrepreneurs Club. Monty Young Entrepreneurs Club. Montgomery Young Entrepreneurs Club. Monty Young Entrepreneurs Club. Montgomery Young Entrepreneurs Club. Monty Young Entrepreneurs Club. Montgomery Young Entrepreneurs Club. The founders of Montgomery Young Entrepreneurs Club are Azam Ahmed and Ekam Bhatia.'
                />
                <meta
                    name='keywords'
                    content='monty, montgomery, entrepreneurship, founder, young entrepreneurs club, montgomery young entrepreneurs club, monty young entrepreneurs club'
                />
                <meta name='robots' content='index, follow' />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta name='language' content='English' />
                </Head>

                <Row style={{ height: '85vh' }} className='align-items-center'>
                    <Col>
                        <h1 className={styles.title}>Monty Young Entrepreneurs Club</h1>
                        <p className={styles.description}>
                            Learn about entrepreneurship and startups, generate
                            ideas, practice startup pitches, and more!
                        </p>
                        <a href="https://forms.gle/EY52ZZaj6XxY3uPT8" className="text-decoration-none" target="_blank" rel="noreferrer">
                        <DesignedButton text='Join Now!' />
                        </a>
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
                        href='https://www.instagram.com/monty_yec/'
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
