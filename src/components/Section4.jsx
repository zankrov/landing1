import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import spicefull2 from '../assets/spicefull2.png';
const Section4 = () => {
  return (
    <Container className='p-5 border-bottom'>

        <Row>
            <Col sm={{span: 12,order:2}} lg={{span: 6,order:1}} className='d-flex flex-column align-items-center justify-content-center p-5'>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde repellendus error assumenda dolores est alias numquam earum veniam quod.</p>
                <Button variant="outline-dark rounded-0">Buy now</Button>
            </Col>
            <Col sm={{span: 12, order:1}} lg={{span: 6,order:2}} className='p-5'>
                <img src={spicefull2} className='gambar'/>
            </Col>
        </Row>
        
    </Container>
  )
}

export default Section4



