import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Young Founders Club</title>
        <meta name='description' content='Young Founders Club' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='d-flex justify-content-center flex-column' style={{height: '75vh', width: '600px'}}>
        <h1 className={styles.title}>Young Founders Club</h1>
        <p>Learn about startups, generate ideas and do startup pitches, and more!</p>
      </div>
    </Container>
  );
};

export default Home;
