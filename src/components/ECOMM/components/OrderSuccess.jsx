import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/Slices/cartSlice';

const OrderSuccess = () => {

  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <Container style={{height:"150px",width:"100%"}} className='p-2 mt-5'><Card.Header style={{height:"150px", display:"flex", justifyContent:"center",alignItems:"center"}} className='bg-warning'><strong><h3>Thank You For Shopping with us. Please pay COD.</h3></strong></Card.Header></Container>
  );
};

export default OrderSuccess;