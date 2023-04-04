import React, { useState } from "react";
import logowhite from "../.././images/logowhite.jpg"
import "./navbar.css";
import {
    FaSearchLocation,
    FaShoppingCart,
    
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        
        <div className="logo">
          <img src={logowhite} style={{height:"60px",width:"100px"}}></img>
        </div>

        
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
                <a><FaSearchLocation></FaSearchLocation></a>
              <NavLink to="/"style={{textDecoration: 'none'}} ><b>Location</b></NavLink>
            </li>
            <li>
              <NavLink to="/"style={{textDecoration: 'none'}} ><b>Menu</b></NavLink>
            </li>
            <li>
              <NavLink to="/"style={{textDecoration: 'none'}} ><b>Offers</b></NavLink>
            </li>
            <li>
              <NavLink to="/"style={{textDecoration: 'none'}} ><b>Delivery/Takeaway</b></NavLink>
            </li>
            <li>
                <NavLink to="/"style={{textDecoration: 'none'}} ><b>Review</b></NavLink>
            </li>
            <li>
              <NavLink to="/"style={{textDecoration: 'none'}} ><b>Deals</b></NavLink>
            </li>
          </ul>
        </div>

        
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
            <NavLink to="/"style={{textDecoration: 'none'}} ><b>Login</b></NavLink>
            </li>
            <li>
              <a href="#"><FaShoppingCart></FaShoppingCart></a>
            </li>
            <li>
            <NavLink to="/"style={{textDecoration: 'none'}} ><b>..</b></NavLink>
            </li>
          </ul>

        
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;