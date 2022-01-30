import React from "react";
import "./App.css";
import "./index.css";
import About from "./Pages/About/About.js";
import Contact from "./Pages/Contact/Contact.js";
import Home from "./Pages/Home/Home.js";
import Services from "./Pages/ServicesPage/Services.js";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="rmnw__navbar-holder">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
