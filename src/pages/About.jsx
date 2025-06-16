import React from 'react'
import Navbar from '../components/Navbar'
import './About.css' 
import img from '../assets/imgs/aboutpage.jpg' ;
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
<div className="header">

      <h1 style={{ fontWeight: 'normal' }}>About Us</h1>
      <h1 style={{color:'grey', fontFamily:'sans-serif', fontWeight:'normal'}}>Great products for great people</h1>
</div>
<div className="main">
  <div className="left"><p style={{fontFamily:'sans-serif'}}>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
   <br />
   <br />

Our products are designed for small to medium size companies willing to optimize their performance.</p></div>
  <div className="right"><img src={img} alt="" style={{width:'80%', height:'auto', borderRadius: '4px' } } /></div>
</div>
      </div>
    <Footer/>
    </div>
   
  )
}

export default About
