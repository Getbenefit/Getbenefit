import React from "react";
import "./Section.css";

const Section = ({ children, className }) => {
  return (
    <section className={`section ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Section;
