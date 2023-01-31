import React from "react";
import "./Tags.css";

const Tags = ({ image, heading, text }) => {
  return (
    <figure className="tag">
      <img src={image} alt="illust" />
      <h3>{heading}</h3>
      <p>{text}</p>
    </figure>
  );
};

export default Tags;
