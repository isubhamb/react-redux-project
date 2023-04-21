import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [job, setJob] = useState('');
  const [umessage, setUM] = useState('value should be of length 3 or more');
  const [jmessage, setJM] = useState('value should be of length 3 or more');
  const [success, setSS] = useState(null);
  const [failure, setFL] = useState(null);

  const postData = () => {
    axios
      .post('https://reqres.in/api/users', {
        name: username,
        job: job,
      })
      .then((res) =>
        setSS(
          'Request posted successfully. ID:' +
            res.data['id'] +
            ' Name:' +
            res.data['name'] +
            ' Job:' +
            res.data['job']
        )
      )
      .catch((err) => setFL('Error while posting form.' + err.data));
  };

  const enableButton = () => {
    if (umessage && jmessage === 'Perfect') {
      return false;
    }
    return true;
  };

  return (
    <>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card>
            <Card.Header className="p-3" style={{ textAlign: 'center' }}>
              <h4>Create User</h4>
              {success && (
                <Alert key="success" variant="success">
                  {success}
                </Alert>
              )}
              {failure && (
                <Alert key="danger" variant="danger">
                  {failure}
                </Alert>
              )}
            </Card.Header>
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    className="mb-2"
                    type="text"
                    required="true"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (e.target.value.length >= 3) {
                        setUM('Perfect');
                      }
                    }}
                    value={username}
                    placeholder="Enter your username here"
                  />
                  <Form.Text>{umessage}</Form.Text>
                  <Form.Control
                    className="mb-2"
                    type="password"
                    required="true"
                    onChange={(e) => {
                      setJob(e.target.value);
                      if (e.target.value.length >= 3) {
                        setJM('Perfect');
                      }
                    }}
                    value={job}
                    placeholder="Enter your Job"
                  />
                  <Form.Text>{jmessage}</Form.Text>
                  <Form.Control
                    className="btn btn-block btn-primary mb-3"
                    disabled={enableButton()}
                    onClick={() => postData()}
                    type="submit"
                    value="Create User"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default CreateUser;
