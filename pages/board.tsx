import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import Head from 'next/head';

const Board: React.FC = () => {
  return (
    <>
      <Head>
        <title>Board</title>
        <meta name='description' content='Board' />
      </Head>
      <Container>
        <h1>Board</h1>
        <Row className='justify-content-between'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' />
            <Card.Body>
              <Card.Title>President: Azam Ahmed</Card.Title>
              <Card.Text>
                Grade: 10th grade
                <br />
                Bio: Interested in entrepreneurship, coding, and investing.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' />
            <Card.Body>
              <Card.Title>Vice President: Ekam Bhatia</Card.Title>
              <Card.Text>
                Grade: 10th grade
                <br />
                Bio: Interested in entrepreneurship and investing.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' />
            <Card.Body>
              <Card.Title>Treasurer: TBD</Card.Title>
              <Card.Text>
                Grade: TBD
                <br />
                Bio: TBD
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' />
            <Card.Body>
              <Card.Title>Public Relations: TBD</Card.Title>
              <Card.Text>
                Grade: TBD
                <br />
                Bio: TBD
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Board;
