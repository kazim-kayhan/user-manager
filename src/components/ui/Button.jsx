import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.btn} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
