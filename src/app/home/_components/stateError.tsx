"use client";

import { useState, useTransition } from "react";

function ProblematicComponent({ error }: { error: Error }) {
  throw error; // ❗ This will trigger the error boundary
  return null;
}

export function StateError() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<Error | null>(null);

  const handleClick = () => {
    startTransition(() => {
      setError(new Error("This is a render-time error"));
    });
  };

  if (error) {
    return <ProblematicComponent error={error} />;
  }

  return (
    <button type="button" onClick={handleClick} disabled={pending}>
      Throw Error
    </button>
  );
}
