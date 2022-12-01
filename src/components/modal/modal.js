import React from "react";
import classes from "./modal.module.css";

const Modal = ({ children }) => {
  return <div className={classes.backdrop}>{children}</div>;
};

export default Modal;
