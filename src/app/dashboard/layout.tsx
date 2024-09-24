import { NavigationMenu } from "@/components/navigation";
import { auth } from "@clerk/nextjs/server";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { sessionClaims } = auth();

  const isAdmin = sessionClaims?.metadata.isAdmin!!;

  return (
    <div className="flex p-6 lg:p-10 gap-6">
      {/* Sidebar */}
      <nav className="hidden lg:block min-w-64">
        <NavigationMenu isAdmin={isAdmin} />
      </nav>

      {/* Content */}
      {children}
    </div>
  );
}
