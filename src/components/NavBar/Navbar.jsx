import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoImg} alt="logo"></img>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
