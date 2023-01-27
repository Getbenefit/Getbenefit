import React from "react";
import "./Card.css";

const Card = ({ color, header, text, image }) => {
  return (
    <div className={`card-${color} card`}>
      <img src={image} alt="illustration" />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
