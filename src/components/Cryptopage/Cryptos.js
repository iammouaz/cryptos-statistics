import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsArrowRightCircle } from 'react-icons/bs';

const Crypto = (data) => {
  const {
    id, symbol, name, price, img,
  } = data;
  return (
    <Col>
      <Card>
        <BsArrowRightCircle className="align-self-end" />
        <Card.Img variant="top" src={img} className="align-self-center" />
        <Card.Body>
          <Card.Title>
            <a href={`/${id}`} className="stretched-link">
              {name}
              {` (${symbol})`}
            </a>
          </Card.Title>
          <Card.Text>
            Price: $
            {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Crypto;
