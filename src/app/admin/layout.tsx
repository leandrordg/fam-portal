import { NavigationMenu } from "@/components/navigation";
import { auth } from "@clerk/nextjs/server";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { sessionClaims } = auth();

  // the middleware already prevents this route for those who are not administrators, however this code is an extra to protect the system, it may be removed in the future
  const isAdmin = sessionClaims?.metadata.isAdmin!!;

  return (
    <div className="flex p-6 lg:p-10 gap-6 max-w-screen-2xl mx-auto">
      {/* Sidebar */}
      <nav className="hidden lg:block min-w-64">
        <NavigationMenu isAdmin={isAdmin} />
      </nav>

      {/* Content */}
      {children}
    </div>
  );
}
