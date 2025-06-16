import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/imgs/Logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Our Products & Services</h4>
          <a href="/">Home</a>
        </div>

        <div className="footer-section">
          <h4>Connect with us</h4>
          <a href="/contact">Contact us</a>
          <p><FaPhoneAlt /> +91 8247738792</p>
          <p><FaEnvelope /> info@sdwot.ai</p>
        </div>

        <div className="footer-section">
          <h4>SD WOT LLP - <a href="/about">About us</a></h4>
          <p>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.</p>
          <p>Our products are designed for small to medium size companies willing to optimize their performance.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © SD WOT LLP</p>
        <p>Powered by
          <a href="/">
           <img className="logo" src={logo} alt="Logo" style={{ width: '20px', height:'20px', }} /></a></p>
      </div>
    </footer>
  );
};

export default Footer;
