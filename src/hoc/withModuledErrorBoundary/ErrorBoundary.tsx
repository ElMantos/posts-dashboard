import { Component, ReactNode } from "react";

import { Error } from "@components";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error text="Ooops, looks like something went wrong on our side :( Luckily this error boundary cought the error and the rest of the application still works as intended :)" />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
