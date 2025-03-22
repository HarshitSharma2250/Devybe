import React from "react";
import logo from "../../src/assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-lg py-5 my-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-content text-center">
              <img src={logo} alt="logo" />
              <p>
              Devybe enhances event transparency and trust through a credits and trust score system, fostering a community-driven ecosystem. It benefits organizers and attendees while ensuring a scalable and sustainable business model.
              </p>
              <div className="hr"></div>
              <h6>Copyright @Devybe | 2025</h6>
              <h6>
               +91-9670444579
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
