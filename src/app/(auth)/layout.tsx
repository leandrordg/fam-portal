export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full items-center justify-center p-6 lg:p-10">
      {children}
    </main>
  );
}
