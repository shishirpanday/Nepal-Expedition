import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerr">
          <div className="terms-licenses">
            <h2>
              NEPAL EXPEDITIONS
              <ul>
                <li>
                  <Link to="/terms&conditions">Terms</Link>
                </li>
                <li>
                  <Link to="#">Licenses</Link>
                </li>
              </ul>
            </h2>
          </div>
          <div className="help">
            <h2>
              HELP
              <ul>
                <li>
                  <Link to="#">Help center</Link>
                </li>
                <li>
                  <Link to="#">Authors</Link>
                </li>
              </ul>
            </h2>
          </div>
          <div className="community">
            <h2>
              OUR COMMUNITY
              <ul>
                <li>
                  <Link to="#">Community</Link>
                </li>
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Forums</Link>
                </li>
              </ul>
            </h2>
          </div>
          <h2 className="foot-link">
            Links
            <ul>
              <li className="home">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/adventure">Adventure Activities</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/share-experience">Share Experience</Link>
              </li>
              <li>
                <Link to="#">News</Link>
              </li>
              <li>
                <Link to="/Contactus">Contact</Link>
              </li>
            </ul>
          </h2>
          <div className="support">
            <h2>SUPPORT US</h2>
            <div className="icons">
              <div className="social-media">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="social-media">
                <i class="fa-brands fa-instagram "></i>
              </div>
              <div className="social-media">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="social-media">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div className="social-media">
                <i class="fa-brands fa-tiktok"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            All price is in NEPALESE Rupee.
            <br />© 2023 NEPAL EXPEDITIONS pvt. ltd. Trademarks and brands are
            the property of their respective owners. <br />
            "Unlock the Hidden Charms of Nepal with Us"
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
