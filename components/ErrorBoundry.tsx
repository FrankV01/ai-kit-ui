import React, { ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

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

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryWrapperProps> = ({ children }) => {
  return <_ErrorBoundary>{children}</_ErrorBoundary>;
};

export default ErrorBoundary;
