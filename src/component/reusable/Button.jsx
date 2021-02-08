import React from "react";
import "./Button.css";

const Button = ({ onClick, text, className }) => {
  return (
    <button
      className={`reusable-button ${className}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
