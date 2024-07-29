import React from "react";
import ErrorFallbackUI from "./ErrorFallbackUI";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    if (hasError) {
      console.error(error.message);
      console.error("Error stack: ", error.stack);
      console.error("Component stack: ", info.componentStack);
    }

    return hasError ? (
      <ErrorFallbackUI errorMessage={error.message} />
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
