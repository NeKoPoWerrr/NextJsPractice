export default function ParallelLayout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  const flag = true;
  return (
    <>
      {children}
      {flag ? team : analytics}
    </>
  );
}
