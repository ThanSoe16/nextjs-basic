export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  const role = "user";
  return (
    <div className="grid grid-cols-2">
      {children}
      {role === "user" ? team : analytics}
    </div>
  );
}
