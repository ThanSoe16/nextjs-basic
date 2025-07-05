// app/dashboard/layout.tsx

import BuggyComponent from "@/components/buggy";
import MainErrorBoundary from "@/components/error-boundary";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-gray-200 text-black p-4">Header</header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 text-black p-4">Sidebar</aside>

        {/* Main content wrapped in error boundary */}
        <MainErrorBoundary>
          <main className="flex-1 overflow-auto p-4">
            {/* <BuggyComponent /> */}
            {children}
          </main>
        </MainErrorBoundary>
      </div>
    </div>
  );
}
