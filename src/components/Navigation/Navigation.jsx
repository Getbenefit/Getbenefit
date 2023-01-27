import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="header-logo">
        <img src={Logo} alt="Getbenefit logo" />
      </div>
      <ul className="header-links">
        <li className="header-link purple">Home</li>
        <li className="header-link purple">Offers</li>
        <li className="header-link purple">Why GetBenefits</li>
        <li className="header-link purple">FAQs</li>
      </ul>
      <div>
        <CustomButton text="Get Benefits" />
      </div>
    </nav>
  );
};

export default Navigation;
