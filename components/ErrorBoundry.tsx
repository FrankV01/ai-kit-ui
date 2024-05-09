import React from "react";
import { ReactChildrenType } from "../lib/Types";

interface ErrorBoundaryState {
  hasError: boolean;
}

type ErrorBoundaryProps = ReactChildrenType;

class _ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return <_ErrorBoundary>{children}</_ErrorBoundary>;
};

export default ErrorBoundary;
