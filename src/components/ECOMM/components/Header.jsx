import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { FaCartPlus,FaArrowAltCircleLeft,FaShoppingBag,FaSearch } from 'react-icons/fa';
import { backtoHome } from '../../../redux/Slices/appSlice';
import { fetchProducts, fetchFromCategory,getProducts,setStatus } from '../../../redux/Slices/productSlice';
import { clearCart } from '../../../redux/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state=>state.cartactions);
  const {data} = useSelector(state=>state.productlist);
  const [ suggest, setSuggest ] = useState([]);
  const navigate = useNavigate();
  let productTitles = data.map((item)=>{
      return item.title;
  });
  const handleSuggestions = (event) => {
    setSuggest(productTitles.filter((item)=>item.includes(event.target.value)));
  }


  const selectHandler = (e)=>{
    if(e.target.value==="electronics")
    {
      dispatch(fetchFromCategory("electronics"));
      navigate("/");
    }
    else if(e.target.value==="jewelery"){
      dispatch(fetchFromCategory("jewelery"));
      navigate("/");
    }
    else if(e.target.value==="men's clothing")
    {
      dispatch(fetchFromCategory("men's clothing"));
      navigate("/");
    }
    else if(e.target.value==="women's clothing"){
      dispatch(fetchFromCategory("women's clothing"));
      navigate("/");
    }
    else{
      dispatch(fetchProducts());
      navigate("/");
    }
  };

  const backHomeHandler = () =>{
    dispatch(backtoHome());
    dispatch(getProducts([]));
    dispatch(setStatus("idle"));
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <FaShoppingBag /> DEMO STORE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
          <select onChange={(e)=>selectHandler(e)} className="me-5">
               <option value="all">All Categories</option>
               <option value="electronics">Electronics</option>
               <option value="jewelery">Jewelery</option>
               <option value="men's clothing">Men's Clothing</option>
               <option value="women's clothing">Women's Clothing</option>
          </select>
          <form class="navbar-form navbar-left me-5">
            <div class="input-group">
              <input type="text" style={{width:"300px"}} class="form-control" placeholder="Search" onChange={(e)=>handleSuggestions(e)} list='suggestions' />
              <datalist id='suggestions'>
              { suggest && suggest.map((item)=><option>{item.substring(0,10)}</option>) }
              </datalist>
              <div class="input-group-btn">
                <button class=" btn btn-success ms-2" type="submit">
                  <FaSearch /> Search
                </button>
                </div>
               </div>
              </form>
            <Link to="/cart" className='nav-link active'><FaCartPlus /> CART: {selector.length} </Link>&nbsp;
            <Nav.Link className='btn btn-warning text-dark' onClick={()=>backHomeHandler()}><FaArrowAltCircleLeft /> BACK TO APP HOMEPAGE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
