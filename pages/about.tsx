import React from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name='description' content='About' />
      </Head>
      <Container>
        <h1>About</h1>
      </Container>
    </>
  );
};

export default About;
