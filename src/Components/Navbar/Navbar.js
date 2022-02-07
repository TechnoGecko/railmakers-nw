import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rmnw__navbar-container">
      <div className="rmnw__navbar-home">
        <Link to="/">Home</Link>
      </div>
      <div className="rmnw__navbar-services">
        <Link to="/services">Services</Link>
      </div>
      <div className="rmnw__navbar-about">
        <Link to="/about">About Us</Link>
      </div>
      <div className="rmnw__navbar-contact">
        <Link to="/contact">Contact Us</Link>
      </div>
      {toggleMenu && (
        <div className="rmnw__navbar-dropdown">
          <p>
            <Link className="dropdown-item" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="dropdown-item" to="/services">
              Services
            </Link>
          </p>
          <p>
            <Link className="dropdown-item" to="/about">
              About Us
            </Link>
          </p>
          <p>
            <Link className="dropdown-item" to="/contact">
              Contact Us
            </Link>
          </p>
        </div>
      )}
      <div className="rmnw__navbar-image">
        <img src="/media/rmnwLogo.png" alt="logo" />
      </div>
      <div className="rmnw__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
