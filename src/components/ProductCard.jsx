import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const ProductCard = (props) => {
  return (
    <Card style={{ width: '15rem', border:'0'}} className='mx-auto p-2'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Rp. {props.price}</Card.Text>
        <Button variant="outline-dark rounded-0">Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard