import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";
import Frame from "../../assets/Frames.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <Navigation />
        <div className="header-main">
          <div className="header-main__text">
            <h1 className="header-heading">
              <span className="purple">Bundled Benefit For The </span>
              <span className="pink">Modern WorkForce</span>
            </h1>
            <CustomButton text="Get Benefit" />
          </div>
          <div className="header-main__image">
            <img src={Frame} alt="a lot" />
          </div>
        </div>
        <div className="header-footer">
          <div>
            With as little as <span>30,000 Naira</span>, you get the benefits of
            working for a big company, even if you are not...
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
