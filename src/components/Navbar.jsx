import React from "react";
import "./Navbar.css"; 
import logo from "../assets/imgs/Logo.png"; 
import { Link } from "react-router-dom"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <ul className="nav-list">
        <li><NavLink className={(e)=>{return e.isActive?"isActive":""}}to="/">HOME</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"isActive":""}}to="/about">ABOUT</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"isActive":""}}to="/contact">CONTACT</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"isActive":""}}to="/privacy">PRIVACY POLICY</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"isActive":""}}to="/jobs">JOBS</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive?"isActive":""}}to="/signin"><span className="sign-button">SignIn</span></NavLink></li>
      </ul>
    </div>
   
 
    </>
  );
};

export default Navbar;
