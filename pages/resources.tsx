import React from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

const Resources: React.FC = () => {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta name='description' content='Resources' />
      </Head>
      <Container>
        <h1>Resources</h1>
      </Container>
    </>
  );
};

export default Resources;
