import React from 'react';
import { Container,Card } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className='mt-3'>
    <Card.Body className='bg-warning border border-dark p-4'>
      <h2 className='text-center'> Page Not Found ...Sorry try some other url.</h2>
    </Card.Body>
    </Container>
  );
};

export default NotFound;