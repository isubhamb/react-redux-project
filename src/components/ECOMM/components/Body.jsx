import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/Slices/productSlice';


const Body = () => {
    const {data, status} = useSelector(state=>state.productlist);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);
    if(status==="loading"){
        return(<Container className='mt-3 text-light'><h1>LOADING...</h1></Container>);
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
                        <Card maxHeight="500px">
                        <Card.Img height="300px" variant="top" src={d.image} />
                        <Card.Body>
                        <Card.Title>{d.title.slice(0,25)}</Card.Title>
                        <div class="d-grid">
                        <Button o className="btn btn-primary">Add to cart</Button>
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