import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button,Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/Slices/productSlice';
import { addToCart } from '../../../redux/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';


const Body = () => {
    const {data, status} = useSelector(state=>state.productlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(data.length===0)
        {
            dispatch(fetchProducts());
        } 
    },[]);

    if(status==="loading"){
        return(<Container className='mt-3 text-light'><h1>
            <Spinner as="span" animation="grow" size="xxl" role="status" aria-hidden="true"/>LOADING...</h1></Container>);
    }
    else if(status==="error"){
        return(<Container className='mt-3 text-light'><h1>Error occured while fetching...</h1></Container>);
    }
else
{
  return (
    <Container className='mt-3'>
        <Row>
            {
                data.map((d)=>{
                    return (
                        <Col key={d.id} style={{marginBottom:"20px"}} md="3">
                        <Card onClick={()=> navigate(`/details/${d.id}`)} maxHeight="500px">
                        <Card.Img height="300px" variant="top" src={d.image} />
                        <Card.Body>
                        <Card.Title className='text-center'>{d.title.slice(0,25)}</Card.Title>
                        <Card.Text className='text-center'><strong>Price: ${d.price}</strong></Card.Text>
                        <div class="d-grid">
                        <Button onClick={(e)=>{
                            dispatch(addToCart(d));
                            e.stopPropagation();
                            }} className="btn btn-primary">Add to cart</Button>
                        </div>
                        </Card.Body>
                        </Card>
                        </Col>);
                    })
            }
            </Row>
    </Container>
  );
};
};
export default Body;