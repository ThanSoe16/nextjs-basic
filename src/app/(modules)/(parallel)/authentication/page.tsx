// login/page.tsx
"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Authentication Page</h1>
      <Link href="/authentication/login" className="text-blue-500">
        Login
      </Link>
    </div>
  );
}
