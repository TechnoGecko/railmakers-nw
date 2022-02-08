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
            Our dedicated team brings years of experience custom fitting safety
            rails for your boat -- big or small. If it doesn't fit
            <i> perfectly</i> the first time, we'll come out and set it right!
          </p>
          <h1>Custom/Personal Fabrication</h1>
          <p>
            Have a more specific need? Worried that odd angle might not be
            doable? If you can picture it, we can make it happen. Show us your
            vision, and let us take care of the measuring and cutting (and
            welding)!
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
            Maybe you're already all set -- let us help keep your stainless
            steel looking like the day you got it. With a _____ ____ electro
            polish vat and an expert technician, you can be sure that your parts
            are in good hands. You might need sunglasses the next time you look
            at them.
          </p>
        </div>
      </div>

      <div className="rmnw__service service3">
        <div className="service_content-wrapper wrapper3">
          <h1>Repair</h1>
          <p>
            Life happens. In the case that the damage is more than cosmetic,
            we've got you covered there too. Whether it's reshaping, patching
            up, or just attaching something that's no longer attached, we take
            the utmost care with our repairs. Don't be surprised if it shines a
            little more when you get it back too.
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
