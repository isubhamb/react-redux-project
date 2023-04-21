import React from 'react';
import { Container } from 'react-bootstrap';
import TableComponent from './Dashboard/TableComponent';
import CreateUser from './Dashboard/CreateUser';

const DashBoard = () => {
  return (
    <Container className="mt-5">
      <CreateUser />
      <TableComponent />
    </Container>
  );
};

export default DashBoard;
