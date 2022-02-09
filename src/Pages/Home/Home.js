import React from "react";
import "./home.css";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  var counter = 1;

  const [hasClicked, setHasClicked] = useState(false);

  const galleryClicked = () => {
    if (!hasClicked) {
      setHasClicked(true);
      console.log("gallery clicked");
      setTimeout(() => {
        setHasClicked(false);
        console.log("click timer up");
      }, 7000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 5) {
          counter = 1;
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rmnw__home-wrapper">
      <div className="rmnw__home-header" id="home">
        <div className="rmnw__home-header_image">
          <div className="rmnw__home-header_image-overlay">
            <div className="rmnw__home-header_info">
              <div className="rmnw__home-header_title">
                <h1>Railmakers NW LLC</h1>
              </div>
              <div className="rmnw__home-header_subtext">
                <h2>
                  High-quality stainless steel rails, custom fit to your needs
                </h2>
              </div>

              <div className="rmnw__home-header_buttons">
                <div className="rmnw__home-header_button ">
                  <p>Know what you're looking for?</p>
                  <Link to="/contact">
                    <button className="button1" type="button">
                      Get A Quote
                    </button>
                  </Link>
                </div>

                <p className="button-separator">OR</p>

                <div className="rmnw__home-header_button ">
                  <p>See what we can do for you!</p>
                  <Link to="/services">
                    <button className="button2" type="button">
                      See Our Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rmnw__home-header_image1">
              <div className="header-image1_tint">
                {/* <img src="/media/welding1.png" alt="image of person welding" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rmnw__home-body_container">
        <div className="rmnw__home-body_services">
          <h1 className="rmnw__home-body_services-title">Services We Offer</h1>
          <div className="rmnw__home_service-section-container">
            <div className="home_service s1">
              <h2>Commercial Fabrication</h2>
              <p>
                Here at the Railmakers Northwest we are dedicated to delivering
                you only the highest quality stainless steel safety railings.
                Whether for your boat, vehicle, home, or commercial building, we
                guarantee you will be satisfied with our craftsmanship and your
                product.
              </p>
            </div>
            <div className="home_service s2">
              <h2>Custom Fabrication</h2>
              <p>
                Have a more specific need? Worried that odd angle might not be
                doable? If you can picture it, we can make it happen. Show us
                your vision, and let us take care of the measuring and cutting
                (and welding)!
              </p>
            </div>
            <div className="home_service s3">
              <h2>Electro Polish</h2>
              <p>
                Maybe you're already all set -- let us help keep your stainless
                steel looking like the day you got it. With a _____ ____ electro
                polish vat and an expert technician, you can be sure that your
                parts are in good hands. You might need sunglasses the next time
                you look at them.
              </p>
            </div>
            <div className="home_service s4">
              <h2>Repair</h2>
              <p>
                Life happens. In the case that the damage is more than cosmetic,
                we've got you covered there too. Whether it's reshaping,
                patching up, or just attaching something that's no longer
                attached, we take the utmost care with our repairs. Don't be
                surprised if it shines a little more when you get it back too.
              </p>
            </div>
          </div>
        </div>
        <h1 className="rmnw__home-body_title1">Some of Our Work</h1>
        <div className="rmnw__home-body_section1">
          <div className="rmnw__home_section1-slider">
            <div className="slides">
              <input
                type="radio"
                name="radio-btn"
                id="radio1"
                onClick={galleryClicked}
              ></input>
              <input
                type="radio"
                name="radio-btn"
                id="radio2"
                onClick={galleryClicked}
              ></input>
              <input
                type="radio"
                name="radio-btn"
                id="radio3"
                onClick={galleryClicked}
              ></input>
              <input
                type="radio"
                name="radio-btn"
                id="radio4"
                onClick={galleryClicked}
              ></input>
              <input
                type="radio"
                name="radio-btn"
                id="radio5"
                onClick={galleryClicked}
              ></input>

              <div className="slide first">
                <img src="/media/gallery-img3.JPG" alt="product  1"></img>
              </div>
              <div className="slide">
                <img src="/media/gallery-img2.jpg" alt="product  2"></img>
              </div>
              <div className="slide">
                <img src="/media/gallery-img1.jpg" alt="product  3"></img>
              </div>
              <div className="slide">
                <img src="/media/gallery-img4.JPG" alt="product  4"></img>
              </div>
              <div className="slide">
                <img src="/media/gallery-img5.JPG" alt="product  5"></img>
              </div>

              <div className="rmnw__home_gallery_navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
              </div>
            </div>
            <div className="rmnw__home_gallery_navigation-manual">
              <label for="radio1" class="manual-btn b1"></label>
              <label for="radio2" class="manual-btn b2"></label>
              <label for="radio3" class="manual-btn b3"></label>
              <label for="radio4" class="manual-btn b4"></label>
              <label for="radio5" class="manual-btn b5"></label>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
