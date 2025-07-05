import { Form } from "./_components/form";
import { notFound } from "next/navigation";
import { StateError } from "./_components/stateError";

export default function Home() {
  const user = false;

  if (user) {
    notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Form /> */}
        <StateError />
      </main>
    </div>
  );
}
