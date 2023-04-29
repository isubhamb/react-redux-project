import React from 'react';
import { FaGlasses,FaShoppingBasket,FaHouzz,FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { gotoStore } from '../redux/Slices/appSlice';
function Header({ setStorage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          <FaGlasses /> Subham's Projects
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {localStorage.getItem('USERNAME') === 'Admin' ? (
              <>
                <Link className="nav-link active" to="/dashboard">
                  <FaHouzz /> Dashboard
                </Link>
                <Link className="nav-link active" to="/flighttracker">
                  Flight Tracker
                </Link>
                <Link
                  className="btn btn-success"
                  onClick={() => setStorage(false)}
                  to="/"
                >
                  <FaArrowAltCircleLeft /> LOGOUT
                </Link>
              </>
            ) : (
              <>
              <Button onClick={()=> {
                dispatch(gotoStore());
                navigate("/");
                }} className="btn btn-success"><FaShoppingBasket /> STORE DEMO</Button>
              &nbsp;
              <Link  className="btn btn-success" to="/login">
                <FaArrowAltCircleRight /> LOGIN
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
