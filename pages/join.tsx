import React from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

const Join: React.FC = () => {
  return (
    <>
      <Head>
        <title>Join</title>
        <meta name='description' content='Join' />
      </Head>
      <Container>
        <h1>Join the club!</h1>
        <div className='d-flex justify-content-center'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdWjbp7f9xaNFohJUEGDyWbvfybFf3D1G5DBZlcXYd-kpjhDg/viewform?embedded=true'
            width='640'
            height='995'
            frameBorder='0'
          >Loading...</iframe>
        </div>
      </Container>
    </>
  );
};

export default Join;
