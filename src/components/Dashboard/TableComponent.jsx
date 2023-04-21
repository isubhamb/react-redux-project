import React, { useEffect, useState } from 'react';
import { Button, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Details from './Details';

const TableComponent = () => {
  const [prevpage, setPrevPage] = useState();
  const [nextpage, setNextPage] = useState();
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState('');
  const [currentRecord, transferData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((res) => setTableData(res.data.data))
      .catch(() => setErrors('Could not fetch data from reqres.in.'));
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((res) => setTableData(res.data.data))
      .catch(() => setErrors('Could not fetch data from reqres.in.'));
    setLoading(false);
  }, [prevpage]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((res) => setTableData(res.data.data))
      .catch(() => setErrors('Could not fetch data from reqres.in.'));
    setLoading(false);
  }, [nextpage]);

  const loader = <Spinner animation="grow" />;

  const tablejsx = (
    <Table className='bg-light mt-3' striped bordered hover size="md">
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {errors}
        {Array.isArray(tableData)
          ? tableData.map((tdata) => {
              const { id, first_name, last_name } = tdata;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>
                    <Button onClick={() => transferData(tdata)}>Details</Button>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </Table>
  );

  return (
    <>
      <div>
        <Button disabled={nextpage} onClick={() => setPrevPage(!prevpage)}>
          Previous
        </Button>{'   '}
        <Button disabled={prevpage} onClick={() => setNextPage(!nextpage)}>
          Next
        </Button>
      </div>
      {loading ? loader : tablejsx}
      <Details className="mt-2" data={currentRecord} />
    </>
  );
};

export default TableComponent;
