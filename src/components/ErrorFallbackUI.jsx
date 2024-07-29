import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

const ErrorFallbackUI = (props) => {
  const { errorMessage } = props;
  return (
    <div className="error-boundary">
      Something went wrong.
      <p>{errorMessage}</p>
      <p>Check console for more details.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

ErrorFallbackUI.propTypes = propTypes;

export default ErrorFallbackUI;
