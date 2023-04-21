import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = ({ setStorage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [umessage, setUM] = useState('Your username must be: Admin');
  const [pmessage, setPM] = useState('Your password must be: Admin');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/dashboard';
  if (localStorage.getItem('USERNAME') === 'Admin') {
    navigate(from, { replace: true });
  }
  const changeUsername = (e) => {
    setUsername(e.target.value);

    if (e.target.value === 'Admin') {
      setUM('Perfect');
    }
  };
  const changePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value === 'Admin') {
      setPM('Perfect');
    }
  };

  const enableButton = () => {
    if (username === 'Admin' && password === 'Admin') {
      return false;
    }
    return true;
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md="3"></Col>
        <Col md="6">
          <Card>
            <Card.Header className="p-3" style={{ textAlign: 'center' }}>
              <h4>LOGIN HERE</h4>
            </Card.Header>
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate(from, { replace: true });
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    className="mb-2"
                    type="text"
                    required="true"
                    onChange={(e) => changeUsername(e)}
                    value={username}
                    placeholder="Enter your username here"
                  />
                  <Form.Text>{umessage}</Form.Text>
                  <Form.Control
                    className="mb-2"
                    type="password"
                    required="true"
                    onChange={(e) => changePassword(e)}
                    value={password}
                    placeholder="Enter your password"
                  />
                  <Form.Text>{pmessage}</Form.Text>
                  <Form.Control
                    className="btn btn-block btn-primary mb-3"
                    disabled={enableButton()}
                    onClick={() => setStorage(true)}
                    type="submit"
                    value="Login"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3"></Col>
      </Row>
    </Container>
  );
};

export default Login;
