import React from "react";
import "./Tags.css";

const Tags = ({ image, text }) => {
  return (
    <figure className="tag">
      <img src={image} alt="illust" />
      <p>{text}</p>
    </figure>
  );
};

export default Tags;
