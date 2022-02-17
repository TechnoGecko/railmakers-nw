import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="rmnw__footer-wrapper">
      <div className="rmnw__footer-main">
        <div className="rmnw__footer-logo">
          <img src="/media/rmnwLogo.png" alt="Railmakers Northwest logo" />
          <h2>Railmakers NW LLC</h2>
        </div>
        <div className="rmnw__footer-cta">
          <h1>
            Ready to get started?
            <br />
            <br /> So are we!
          </h1>
          <button type="button" className="rmnw__footer-cta_button">
            <p>Get Your Quote</p>
          </button>
        </div>
      </div>
      <div className="rmnw__footer-nav">
        <div className="rmnw__footer-nav_accent-line"></div>
        <div className="rmnw__footer-nav-list">
          <Link to="/" className="footer_nav-link link1">
            <p>Home</p>
          </Link>
          <Link to="/services" className="footer_nav-link link2">
            <p>Services</p>
          </Link>
          <Link to="/about" className="footer_nav-link link3">
            <p>About Us</p>
          </Link>
          <Link to="/contact" className="footer_nav-link link4">
            <p>Contact</p>
          </Link>
        </div>
        <div className="rmnw__footer-nav_accent-line2"></div>
        <div className="rmnw__footer-nav-list2">
          <div className="footer_contact-container c1">
            <i className="fas fa-phone"></i>{" "}
            <a className="contact_link" href="tel:4252599236">
              {" "}
              <p>(425) 259-9236</p>
            </a>
          </div>
          <div className="footer_contact-container c2">
            <i class="far fa-envelope"></i>{" "}
            <a className="contact_link" href="mailto: markr@railmakersnw.com">
              <p>markr@railmakersnw.com</p>
            </a>
          </div>
          <div className="footer_contact-container c3">
            <p> Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
