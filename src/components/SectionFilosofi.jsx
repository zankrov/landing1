import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import filosofi from '../assets/logo1.png';
import filosofi2 from '../assets/logo2.png';
import filosofi3 from '../assets/logo3.png';
import filosofi4 from '../assets/logo4.png';
const Section3 = () => {
  return (
    <Container className='p-5 border-bottom'>

        <Row>
            <Col sm={12} lg={3} className='p-3'>
                <img src={filosofi} className='gambar2' alt="" />
                <h3>Lorem Ipsum</h3>
                <p>rempah mempersatukan bangsa dan mengawali terbentuknya NKRI, dengan peran sepenting itu, rempah - rempah menjadi komoditas utama yang mampu mempengaruhi kondisi politik, ekonomi, maupun sosial budaya dalam skala global</p>
            </Col>
            <Col sm={12} lg={3} className='p-3'>
                <img src={filosofi2} className='gambar2' alt="" />
                <h3>Lorem Ipsum</h3>
                <p>rempah mempersatukan bangsa dan mengawali terbentuknya NKRI, dengan peran sepenting itu, rempah - rempah menjadi komoditas utama yang mampu mempengaruhi kondisi politik, ekonomi, maupun sosial budaya dalam skala global</p>
            </Col>
            <Col sm={12} lg={3} className='p-3'>
                <img src={filosofi3} className='gambar2' alt="" />
                <h3>Lorem Ipsum</h3>
                <p>rempah mempersatukan bangsa dan mengawali terbentuknya NKRI, dengan peran sepenting itu, rempah - rempah menjadi komoditas utama yang mampu mempengaruhi kondisi politik, ekonomi, maupun sosial budaya dalam skala global</p>
            </Col>
            <Col sm={12} lg={3} className='p-3'>
                <img src={filosofi4} className='gambar2' alt="" />
                <h3>Lorem Ipsum</h3>
                <p>rempah mempersatukan bangsa dan mengawali terbentuknya NKRI, dengan peran sepenting itu, rempah - rempah menjadi komoditas utama yang mampu mempengaruhi kondisi politik, ekonomi, maupun sosial budaya dalam skala global</p>
            </Col>

          
        </Row>
    </Container>
  )
}

export default Section3