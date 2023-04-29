import React from 'react';
import { useEffect } from 'react';
import { Card, Col,Row, Container, Spinner } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { fetchFlights } from '../../../redux/Slices/flightSlice';

const DashBoard = () => {

    const {data, status} = useSelector(state=>state.flights);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(data.length===0)
        {
            // dispatch(fetchFlights());
        } 
    },[dispatch,data]);
    
    if(status==="idle"){
        console.log(data);
    }
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
        <div className="content">
                <Container className='p-5'>
                    <Row>
                        <Col md="4"><Card className='bg-dark text-white'><Card.Header><h5>1234</h5></Card.Header><Card.Footer>Flights Currently Scheduled</Card.Footer></Card></Col>
                        <Col md="4"><Card className='bg-dark text-white'><Card.Header><h5>1234</h5></Card.Header><Card.Footer>Countries</Card.Footer></Card></Col>
                        <Col md="4"><Card className='bg-dark text-white'><Card.Header><h5>1234</h5></Card.Header><Card.Footer>Airlines</Card.Footer></Card></Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col md="4"><Card className='bg-dark text-white'><Card.Header><h5>1234</h5></Card.Header><Card.Footer>Airports</Card.Footer></Card></Col>
                        <Col md="4"><Card className='bg-dark text-white'><Card.Header><h5>1234</h5></Card.Header><Card.Footer>Timezones</Card.Footer></Card></Col>
                        <Col md="4"><Card className='bg-dark text-white'><Card.Header><h5>1234</h5></Card.Header><Card.Footer>IATA Codes</Card.Footer></Card></Col>
                    </Row>
                </Container>
            </div>
      );
}
};

export default DashBoard;