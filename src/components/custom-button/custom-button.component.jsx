import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSigIn, ...otherProps }) => (
  <button
    className={`
    ${inverted ? "inverted" : ""} 
    ${isGoogleSigIn ? "google-sign-in" : ""}
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
