import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/*Es una función que toma algún componente que queremos envolver con la funcionalidad de nuestro spinner. */
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
 
export default WithSpinner;
