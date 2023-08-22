import React from 'react'
import Navbarcom from "../components/Navbarcom"
import Homebg from "../components/Homebg"
import Product from "../components/Productoftheweek"
import Section3 from "../components/Section3"
import Section4 from"../components/Section4"
import SectionFilosofi from"../components/SectionFilosofi"
import Footer from"../components/Footer"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div>
        <Navbarcom />
        <Homebg />
        <div className="py-5">
          <h1>Lorem Ipsum</h1>
          <Section3 />
          <Section4 />
        </div>
        <div className="py-5">
          <h1>Our Product</h1>
          <Product />
        </div>
        <div className="py-5">
          <h1>Filosofi Logo</h1>
          <SectionFilosofi />
        </div>
        <Footer />
    </div>
  )
}

export default Home