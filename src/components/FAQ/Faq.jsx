import React, { useState } from "react";
import "./Faq.css";
import { ReactComponent as Up } from "../../assets/up.svg";
import { ReactComponent as Down } from "../../assets/down.svg";

const Faq = ({ question, answer }) => {
  const [isHidden, hide] = useState("hidden");

  const hideFaq = () => {
    return isHidden === "hidden" ? hide("") : hide("hidden");
  };

  return (
    <div className="faq" onClick={hideFaq}>
      <div className="faq-main">
        <div className="faq-head">{`Q:${question}`}</div>
        <div className={`faq-body ${isHidden}`}>{`A:   ${answer}`}</div>
      </div>
      <div className="faq-sub">{isHidden === "hidden" ? <Down /> : <Up />}</div>
    </div>
  );
};

export default Faq;
