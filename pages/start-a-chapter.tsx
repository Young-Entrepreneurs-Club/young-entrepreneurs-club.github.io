import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';

const StartAChapter: React.FC = () => {
  return (
    <>
      <Head>
        <title>Start a Chapter!</title>
        <meta name='description' content='Start a Chapter' />
      </Head>
      <Container>
        <h1>Start a chapter!</h1>
        <div className='d-flex justify-content-center'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdWjbp7f9xaNFohJUEGDyWbvfybFf3D1G5DBZlcXYd-kpjhDg/viewform?embedded=true'
            width='640'
            height='995'
            frameBorder='0'
          >
            Loading...
          </iframe>
        </div>
      </Container>
    </>
  );
};

export default StartAChapter;
