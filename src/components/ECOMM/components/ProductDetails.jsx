import React from 'react';
import { useEffect } from 'react';
import { Card,Row, Col, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/Slices/productSlice';
import { addToCart } from '../../../redux/Slices/cartSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const { data } = useSelector(state=>state.productlist);
    const cart = useSelector(state=>state.cartactions);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const item = data.filter((i)=> i.id === Number(id));
    const presentInCart = cart.filter((x)=>{
        if(x.id===Number(id)){
            return true;
        }
        else{
            return false;
        }
    });
  return (
    <Container className='mt-5'>
        <Row>
        <Col md="5" className='bg-white'>
            <Card.Img className='p-2' height="500px" variant="top" src={item[0].image}></Card.Img>
        </Col>
        <Col md="7">
            <Card.Body className='bg-white p-4'>
                <div className='mb-2'><h4> {item[0].title}</h4></div>
                <div className='mb-2'><h5>Rated {item[0].rating.rate}/5 by {item[0].rating.count} customers.</h5></div>
            <div className='mb-2'><h5>Description:</h5><strong>{item[0].description}</strong></div>
            <div className='mb-4'><h5>Price: ${item[0].price}</h5></div>
            <div className='d-grid mb-2'><Button disabled={(presentInCart.length>0)?true:false} onClick={()=>{
                dispatch(addToCart(item[0]));
                navigate("/cart");
            }} className='btn btn-success'>{(presentInCart.length>0)?"Already added to cart":"Add to cart"}</Button></div>
            </Card.Body>
        </Col>
        </Row>
    </Container>
  );
};

export default ProductDetails;