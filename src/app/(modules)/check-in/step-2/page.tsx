"use client";
import Link from "next/link";

export default function StepTwoPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>Step -2 Page</div>
        <Link
          href={`/check-in/step-3`}
          onNavigate={(e) => {
            alert("Navigating to Step 3");
            // You can add any additional logic here before navigation
          }}
        >
          Next
        </Link>
      </main>
    </div>
  );
}
