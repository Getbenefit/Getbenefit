import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Border from "../../assets/border.png";
import ManPic from "../../assets/manpic.png";
import Man1 from "../../assets/man1.png";
import Man2 from "../../assets/man2.png";
import Man3 from "../../assets/man3.png";
import Man4 from "../../assets/man4.png";
import Navigation from "../Navigation/Navigation";
import { ReactComponent as Dart } from "../../assets/dart.svg";
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
          <img src={ManPic} alt="ManPic" className="image-main" />
          <img src={Man1} alt="ManPic" className="image-1" />
          <img src={Man2} alt="ManPic" className="image-2" />
          <img src={Man3} alt="ManPic" className="image-3" />
          <img src={Man4} alt="ManPic" className="image-4" />
          <img src={Border} alt="ManPic" className="image-border" />
        </div>
      </div>
      <div className="header-footer">
        <div>
          <Dart />
        </div>
        <div>
          With as little as <span className="pink">30,000 Naira</span> you get
          the benefits of working for a big company, even if you are not...
        </div>
      </div>
    </header>
  );
};

export default Header;
