import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Homebg = () => {
  return (


    <div className="background mx-auto">
        <Row className='Container'>
            <Col className="text-wrap heroText">
                <Row>
                    <h1>PT. SRIKANDI WIJAYA ABADI</h1>
                </Row>
                <Row>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam odio possimus soluta beatae. Labore sapiente iste voluptates atque possimus!</p>
                </Row>
                <Row>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi natus dolore placeat beatae maiores deleniti.
                    </p>
                    
                </Row>
                <Button variant="outline-light rounded-0">View More</Button>{' '}
               
            </Col>
        </Row>
        
    </div>


  )
}

export default Homebg