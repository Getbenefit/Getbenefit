import React from "react";
import "./Info.css";

const Info = ({ image, heading, text }) => {
  return (
    <div className="info">
      <img src={image} alt="illustration" className="info-image" />
      <h3 className="info-heading purple">{heading}</h3>
      <div className="info-text">{text}</div>
    </div>
  );
};

export default Info;
