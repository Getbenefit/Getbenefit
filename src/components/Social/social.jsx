import React from "react";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/Linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter.svg";
import { ReactComponent as Facebook } from "../../assets/Facebook.svg";
import "./social.css";

const Social = () => {
  return (
    <div className="social">
      <Twitter />
      <Instagram />
      <Facebook />
      <Linkedin />
    </div>
  );
};

export default Social;
