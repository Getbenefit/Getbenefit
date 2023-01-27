import React from "react";
import "./Info.css";

const Info = ({ image, heading, text }) => {
  return (
    <div className="info">
      <div className="info-heading">
        <img src={image} alt="illustration" />
        <h3>{heading}</h3>
      </div>
      <div className="info-text">{text}</div>
    </div>
  );
};

export default Info;
