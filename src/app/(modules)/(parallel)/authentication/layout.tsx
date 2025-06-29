// app/layout.tsx
export default function RootLayout({
  children,
  auth, // <-- this is your @auth parallel route slot
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      {auth}
    </>
  );
}
