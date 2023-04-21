import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { backtoHome } from '../../../redux/Slices/appSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          DEMO STORE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
          <select className="me-5">
               <option>Select Category</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
          </select>
          <form class="navbar-form navbar-left me-5">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-btn">
                <button class=" btn btn-success ms-2" type="submit">
                  Search
                </button>
                </div>
               </div>
              </form>
            <Link to="/cart" className='nav-link active'>CART: 0</Link>&nbsp;
            <Nav.Link className='btn btn-warning text-dark' onClick={()=>dispatch(backtoHome())}>BACK TO APP HOMEPAGE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
