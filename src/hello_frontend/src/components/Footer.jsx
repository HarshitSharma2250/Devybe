import React from "react";
import logo from "../../src/assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div class="container-lg py-5">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="contact-content text-center">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum
              </p>
              <div class="hr"></div>
              <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
              <h6>
                +01 2345 6789 12<span>|</span>+01 2345 6789 12
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
