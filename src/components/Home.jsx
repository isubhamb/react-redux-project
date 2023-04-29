import React from 'react';
import { Card,Container } from 'react-bootstrap';
import { FaThumbsUp,FaSistrix } from 'react-icons/fa';
import SortingVisualizer from './Sorting/Visualizer/SortingVisualizer';

const Home = () => {


  return <Container className='mt-3'>
    <Card.Body className='bg-warning border border-dark p-4'>
      <h2 className='text-center'>Welcome to Subham Bhattacharya's Projects. <FaThumbsUp /></h2>
    </Card.Body>
    <Card.Header className='bg-success border border-dark mt-2 p-2'>
      <h2 className='text-center text-light'>Algorithm Visualizer <FaSistrix /></h2>
    </Card.Header>
    <Card.Body className='bg-light border border-dark p-4'>
        <SortingVisualizer />
    </Card.Body>
  </Container>;
};

export default Home;
