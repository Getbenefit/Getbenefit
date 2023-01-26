import React, { useState } from "react";
import "./Faq.css";

const Faq = ({ Question, answer }) => {
  const [isHidden, hide] = useState("hidden");

  const hideFaq = () => {
    return isHidden === "hidden" ? hide("") : hide("hidden");
  };

  return (
    <>
      <div className="faq" onClick={hideFaq}>
        <div className="faq-head">Q: {Question}</div>
        <div className={`faq-body ${isHidden}`}>A: {answer}</div>
      </div>
    </>
  );
};

export default Faq;
