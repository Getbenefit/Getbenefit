import React, { ReactComponent } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="header-logo">
        <Logo />
      </div>
      <ul className="header-links">
        <li className="header-link purple">
          <a href="/" className="header-link_link">
            Home
          </a>
        </li>
        <li className="header-link purple">Offers</li>
        <li className="header-link purple">Why GetBenefits</li>
        <li className="header-link purple">
          <a href="/contact-us" className="header-link_link">
            Contact Us
          </a>
        </li>
      </ul>
      <div>
        <CustomButton text="Get Benefits" />
        <div className="hamburger">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
