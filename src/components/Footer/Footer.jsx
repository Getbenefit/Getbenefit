import React from "react";
import Logo from "../../assets/logo.png";
import { ReactComponent as Social } from "../../assets/Groupthirty.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-body">
        <div className="footer-side">
          <div>
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-links">
              <li className="footer-link">Contact Us</li>
              <li className="footer-link">Privacy Policy</li>
              <li className="footer-link">Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <h6 className="footer-heading">Customer Support</h6>
            <p>support@getbenefit.io</p>
          </div>
        </div>
        <div className="footer-main">
          <div>
            <h6 className="footer-heading">About Us</h6>
            <p>
              <span className="purple">Getbenefit's </span>mission is to
              revolutionize the gig economy by providing the most affordable and
              comprehensive benefits for remote workers, freelancers, and
              startups. We understand the unique challenges that come with the
              gig economy and we're committed to making it easier for gig
              workers to access the benefits they need. Our platform uses AI
              technology to make the process of finding, selecting and accessing
              benefits more efficient and personalized, ensuring that our users
              are getting the{" "}
              <span className="pink">best options that fit their needs</span>
            </p>
          </div>
          <div>
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-links">
              <li>Lagos, Nigeria</li>
              <li>info@getbenefit.io</li>
              <li>+234 8148 401 699</li>
              <li>
                <Social />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-end">
        Getbenefit.io &copy; {new Date().getFullYear()}. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
