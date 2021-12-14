import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Young Founders Club</title>
        <meta name='description' content='Young Founders Club' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

        <Row
          style={{height: '60vh'}}
          className='align-items-center'
        >
          <Col>
            <h1 className={styles.title}>Young Founders Club</h1>
            <p>
              Learn about startups, generate ideas and do startup pitches, and
              more!
            </p>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
          <Image src='/startup_icon.png' width={300} height={300} alt='startup icon' className={styles.startup} />
          </Col>
        </Row>
    </Container>
  );
};

export default Home;
