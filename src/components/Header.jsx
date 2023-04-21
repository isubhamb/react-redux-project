import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gotoStore } from '../redux/Slices/appSlice';
function Header({ setStorage }) {
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Subham's Projects
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {localStorage.getItem('USERNAME') === 'Admin' ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link
                  className="btn btn-success"
                  onClick={() => setStorage(false)}
                  to="/"
                >
                  LOGOUT
                </Link>
              </>
            ) : (
              <>
              <Button onClick={()=> dispatch(gotoStore())} className="btn btn-success">STORE DEMO</Button>
              &nbsp;
              <Link  className="btn btn-success" to="/login">
                LOGIN
              </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
