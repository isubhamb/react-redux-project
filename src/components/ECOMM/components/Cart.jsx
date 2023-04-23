import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Button,Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../redux/Slices/cartSlice';

const Cart = () => {
    const selector = useSelector(state=>state.cartactions);
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(true);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        let sum = selector.reduce((t,item)=>{
            return t+item.price;
        },0);
        setTotal(sum); 
        if(selector.length>0){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    },[selector]);
    
  return (
    <Container style={{paddingTop:"20px",paddingBottom:"20px",backgroundColor:"white"}} className='mt-5'>
        <Row>
            
            <Col md='3'>
            <h4> Product ID </h4>
            </Col>
            <Col md='3'>
            <h4>  Product Name </h4>
            </Col>
            <Col md='3'>
            <h4> Price </h4>
            </Col>
            <Col md='3'>
            <h4>  Action </h4>
            </Col>
        </Row>
        <divider></divider>
        <Row>
            {
                selector.map((item)=>{
                    return(
                        <>
                        <Col className='mb-3' md="3" key={item.id}>{item.id}</Col>
                        <Col className='mb-3' md="3" key={item.id}>{item.title}</Col>
                        <Col className='mb-3' md="3" key={item.id}>${item.price}</Col>
                        <Col className='mb-3' md="3" key={item.id}><Button onClick={()=>dispatch(removeFromCart(item))}>Delete</Button></Col>
                        </>
                    );
                })
            }
        </Row>
        <div class="d-grid mt-5">
        <Row><Col md="4"></Col><Col md="4"></Col><Col md="4"><Card.Body className='bg-warning mb-2 p-2'><strong>Total Price:${total}</strong></Card.Body></Col></Row>
        <Link type='button' disabled={disable} to="/success" className='btn btn-warning text-dark'>Checkout</Link>
        </div>
    </Container>
  );
};

export default Cart;