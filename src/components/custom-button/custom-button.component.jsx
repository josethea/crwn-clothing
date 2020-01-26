import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSigIn, ...otherProps }) => (
  <button
    className={`${isGoogleSigIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
