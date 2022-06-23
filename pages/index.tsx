import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import DesignedButton from '../components/DesignedButton';

const Home: NextPage = () => {
    return (
        <div className={styles.background}>
            <Container>
                <Head>
                    <title>National Founders Club</title>
                    <meta name='description' content='National Founders Club' />
                </Head>

                <Row style={{ height: '85vh' }} className='align-items-center'>
                    <Col>
                        <h1 className={styles.title}>National Founders Club</h1>
                        <p className={styles.description}>
                            Learn about entrepreneurship and startups, generate
                            ideas, practice startup pitches, and more!
              </p>
              <DesignedButton text='Start Chapter!' />
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

                <footer
                    className='d-flex flex-row justify-content-between'
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
                            alt='National Founders Club Instagram'
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
                            alt='National Founders Club Discord Server'
                        />
                    </a>
                </footer>
            </Container>
        </div>
    );
};

export default Home;
