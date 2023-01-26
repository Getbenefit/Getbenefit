import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import ManPic from "../../assets/manpic.png";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navigation />
      <div className="header-main">
        <div className="heading">
          bundled <span className="purple">benefit</span> for the{" "}
          <span className="pink">gig</span> economy
          <CustomButton text="Get Benefit" />
        </div>
        <div className="header-image">
          <img src={ManPic} alt="ManPic" />
        </div>
      </div>
      <div className="header-footer">
        With as little as <span className="pink">30,000 Naira</span> you get the
        benefits of working for a big company, even if you are not...
      </div>
    </header>
  );
};

export default Header;
