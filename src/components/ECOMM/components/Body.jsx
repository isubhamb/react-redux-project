import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button,Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/Slices/productSlice';
import { addToCart } from '../../../redux/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Body = () => {
    const {data, status} = useSelector(state=>state.productlist);
    const [hovered , setHovered] = useState(-1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hoverHandle = (k) => setHovered(k);

    useEffect(()=>{
        if(data.length===0)
        {
            dispatch(fetchProducts());
        } 
    },[]);

    if(status==="loading"){
        return(<Container style={{display:"flex",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"}} className='text-light'><h1>
            <Spinner as="span" animation="grow" size="lg" role="status" aria-hidden="true"/>LOADING...</h1></Container>);
    }
    else if(status==="error"){
        return(<Container style={{display:"flex",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"}} className='text-light'><h1>Error occured while fetching...</h1></Container>);
    }
else
{
  return (
    <Container className='mt-3'>
        <Row>
            {
                data.map((d,index)=>{
                    return (
                        <Col key={d.id} style={{marginBottom:"20px"}} md="3">
                        <Card style={{boxShadow:(hovered===index)?"-3px 10px 16px -1px rgba(255,255,255,0.5)":"none",cursor:(hovered===index)?"pointer":"none"}} onMouseEnter={()=>hoverHandle(index)} onMouseLeave={()=>setHovered(-1)} onClick={()=> navigate(`/details/${d.id}`)} maxHeight="500px">
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