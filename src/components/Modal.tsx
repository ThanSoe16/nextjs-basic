import Link from "next/link";

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Link href="/">Close modal</Link>
        {children}
      </div>
    </>
  );
}
