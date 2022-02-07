import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="rmnw__about-wrapper">
      <h1>Page Under Construction</h1>
      <h2>
        Please check back soon to learn more about us! <br />
        (Or stop in and say hello!)
      </h2>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default About;
