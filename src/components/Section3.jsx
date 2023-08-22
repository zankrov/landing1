import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import spicefull1 from '../assets/spicefull1.png';
const Section3 = () => {
  return (
    <Container className='p-5 border-bottom'>

        <Row>
            <Col sm={12} lg={6} className='p-5'>
                <img src={spicefull1} className='gambar' alt="" />
            </Col>
            <Col sm={12} lg={6} className='d-flex flex-column align-items-center justify-content-center p-5'>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam sequi mollitia eveniet voluptas veritatis atque tenetur quia, quae facere.</p>
                <Button variant="outline-dark rounded-0">Buy Now</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Section3