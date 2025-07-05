// components/MainErrorBoundary.tsx
"use client";

import React, { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export default class MainErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Error caught in MainErrorBoundary:", error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex-1 overflow-auto p-4 bg-red-100 text-red-800 w-full h-full">
          <h2>Something went wrong.</h2>
          <pre>{this.state.error?.message}</pre>
          <button
            onClick={this.reset}
            className="mt-4 px-3 py-1 border rounded"
          >
            Try again
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
