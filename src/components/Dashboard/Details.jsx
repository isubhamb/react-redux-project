import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Details = ({ data }) => {
  let results;
  if (Object.keys(data).length !== 0) {
    const { first_name, last_name, email, avatar } = data;
    console.log(data);
    results = (
      <Card>
        <Card.Header>
          {first_name} {last_name}
        </Card.Header>
        <Card.Img src={avatar} />
        <Card.Footer>{email}</Card.Footer>
      </Card>
    );
  } else {
    results = <div>NO DATA RECIEVED</div>;
  }

  return (
    <>
      <Col md="6" style={{ height: '500px', width: '500px' }}>
        {results}
      </Col>
      <Col md="6"></Col>
    </>
  );
};

export default Details;
