import React from "react";
import "./Navbar.css"; 
import logo from "../assets/imgs/Logo.png"; 
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo Here" />
        </div>
        <div className="list-container">
          <ul className="nav-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li><Link to="/privacy">PRIVACY POLICY</Link></li>
            <li><Link to="/jobs">JOBS</Link></li>
            <li>
              <Link to="/signin">
                <span className="sign-button">SignIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
