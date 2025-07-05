"use client";

import { useState } from "react";

function ProblematicComponent({ error }: { error: Error }) {
  throw error; // ❗ This will trigger the error boundary
  return null;
}

export function StateError() {
  const [error, setError] = useState<Error | null>(null);

  const handleClick = () => {
    setError(new Error("This is a render-time error"));
  };

  if (error) {
    return <ProblematicComponent error={error} />;
  }

  return (
    <button type="button" onClick={handleClick}>
      Throw Error
    </button>
  );
}
