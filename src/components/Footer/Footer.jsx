import React from "react";
import Social from "../Social/social";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <Logo />
      </div>
      <div className="footer-body">
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
        </div>
        <div className="footer-side">
          <div>
            <h6 className="footer-heading__2">Company</h6>
            <ul className="footer-links">
              <li className="footer-link">Contact Us</li>
              <li className="footer-link">Privacy Policy</li>
              <li className="footer-link">Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <h6 className="footer-heading__2">Customer Support</h6>
            <p>support@getbenefit.io</p>
          </div>
          <div>
            <h6 className="footer-heading__2">Contact</h6>
            <ul className="footer-links">
              <li className="footer-link">Lagos, Nigeria</li>
              <li className="footer-link">info@getbenefit.io</li>
              <li className="footer-link">+234 8148 401 699</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div>
          Getbenefit.io &copy; {new Date().getFullYear()}. ALL RIGHTS RESERVED
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
