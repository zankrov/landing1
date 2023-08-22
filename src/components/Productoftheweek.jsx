import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from "../components/ProductCard"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spice1 from '../assets/spice1.jpg'
import spice2 from '../assets/spice2.jpg'
import spice3 from '../assets/spice3.jpg'

const Productoftheweek = () => {
  return (

    <Container className='p-5'>
        <Row>
            <Col sm={12} lg={3} className='text-start'>
                <h3>This is our best product list</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolorem, voluptatibus animi vitae aliquam porro nemo tempore perferendis, provident libero eligendi accusantium inventore? Tempora, quisquam.</p>
            </Col>
            <Col sm={12}  lg={3}>
                <Card image={spice1} title={"Spice 1"} price={"500.000"}/>
            </Col>
            <Col sm={12}  lg={3}>
                <Card image={spice2} title={"Spice 2"} price={"500.000"}/>    
            </Col>
            <Col sm={12}  lg={3}>
                <Card image={spice3} title={"Spice 3"} price={"500.000"}/>
            </Col>
        </Row>
        
        
        
    </Container>

  )
}

export default Productoftheweek