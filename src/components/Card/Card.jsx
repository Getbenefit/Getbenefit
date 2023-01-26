import React from "react";
import "./Card.css";

const Card = ({ color, header, text }) => {
  return (
    <div className={`card-${color} card`}>
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
