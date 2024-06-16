import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: Error, componentStack: React.ErrorInfo) => void;
  FallbackComponent?: React.ComponentType<{ resetError: () => void }>;
}

class ErrorBoundary extends React.Component {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (typeof this.props.onError === 'function') {
      this.props.onError(error, info.componentStack);
    }
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { FallbackComponent } = this.props;
    if (this.state.hasError) {
      return FallbackComponent ? (
        <FallbackComponent resetError={this.resetError} />
      ) : null;
    }

    return this.props.children;
  }
}

export default React.memo(ErrorBoundary);
