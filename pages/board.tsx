import React from 'react';
import { Container } from 'react-bootstrap';

const Board: React.FC = () => {
  return (
    <Container>
      <h1>Board</h1>
      <div>
        <ul>
          <li>President: Azam Ahmed</li>
          <li>Vice President: Ekam Bhatia</li>
          <li>Treasurer: TBD</li>
          <li>Public Relations: TBD</li>
        </ul>
      </div>
    </Container>
  );
};

export default Board;