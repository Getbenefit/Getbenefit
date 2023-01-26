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
        <div className="heading">Welcome to Wakanda</div>
        <div className="header-image">
          <img src={ManPic} alt="ManPic" />
        </div>
      </div>
      <div className="header-footer">
        With only <span className="pink">30,000 Naira</span> you can get the
        benefit from you need from a company
      </div>
    </header>
  );
};

export default Header;
