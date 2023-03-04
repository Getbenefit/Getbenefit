import React from "react";
import "./Forminput.css";

const FormInput = ({ type, label, value, onInput }) => {
  let placeHolder;
  if (type === "email") {
    placeHolder = "you@company.com";
  } else if (type === "tel") {
    placeHolder = "+(234) 801-1234-556";
  }

  if (type === "textarea") {
    return (
      <div className="field">
        <label className="labels">{label}</label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={value}
          onInput={onInput}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="field">
      <label className="labels">{label}</label>
      <input
        type={type}
        className="inputs"
        placeholder={placeHolder || label}
        value={value}
        onInput={onInput}
      />
    </div>
  );
};

export default FormInput;
