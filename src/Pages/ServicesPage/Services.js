import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./services.css";

const Services = () => {
  return (
    <div className="rmnw__services-wrapper">
      <div className="rmnw__service service1">
        <div className="service_content-wrapper wrapper1">
          <h1>Commercial Fabrication</h1>
          <p>
            Cras tempus ex orci, ut hendrerit arcu sollicitudin sed. Integer
            nunc magna, hendrerit quis lacus ac, imperdiet pretium nulla. In
            efficitur malesuada sodales. Nulla semper massa a leo vehicula, eu
            laoreet lorem hendrerit. Curabitur molestie, lorem eget porttitor
            pulvinar, urna tellus elementum augue, id pharetra urna risus
            efficitur odio. Nulla sed posuere elit.
          </p>
          <h1>Custom/Personal Fabrication</h1>
          <p>
            Cras tempus ex orci, ut hendrerit arcu sollicitudin sed. Integer
            nunc magna, hendrerit quis lacus ac, imperdiet pretium nulla. In
            efficitur malesuada sodales. Nulla semper massa a leo vehicula, eu
            laoreet lorem hendrerit. Curabitur molestie, lorem eget porttitor
            pulvinar, urna tellus elementum augue, id pharetra urna risus
            efficitur odio. Nulla sed posuere elit.
          </p>
        </div>
        <div className="service_image-wrapper imgwrap1">
          <img src="/media/service-fabrication.jpg"></img>
        </div>
      </div>

      <div className="rmnw__service service2">
        <div className="service_image-wrapper imgwrap2">
          <img src="/media/service-polish.jpg"></img>
        </div>
        <div className="service_content-wrapper wrapper2">
          <h1>Electro Polish</h1>
          <p>
            Cras tempus ex orci, ut hendrerit arcu sollicitudin sed. Integer
            nunc magna, hendrerit quis lacus ac, imperdiet pretium nulla. In
            efficitur malesuada sodales. Nulla semper massa a leo vehicula, eu
            laoreet lorem hendrerit. Curabitur molestie, lorem eget porttitor
            pulvinar, urna tellus elementum augue, id pharetra urna risus
            efficitur odio. Nulla sed posuere elit.
          </p>
        </div>
      </div>

      <div className="rmnw__service service3">
        <div className="service_content-wrapper wrapper3">
          <h1>Repair</h1>
          <p>
            Cras tempus ex orci, ut hendrerit arcu sollicitudin sed. Integer
            nunc magna, hendrerit quis lacus ac, imperdiet pretium nulla. In
            efficitur malesuada sodales. Nulla semper massa a leo vehicula, eu
            laoreet lorem hendrerit. Curabitur molestie, lorem eget porttitor
            pulvinar, urna tellus elementum augue, id pharetra urna risus
            efficitur odio. Nulla sed posuere elit.
          </p>
        </div>
        <div className="service_image-wrapper imgwrap3">
          <img src="/media/service-repair.jpg"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
