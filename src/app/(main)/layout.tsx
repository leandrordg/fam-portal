import { NavigationMenu } from "@/components/navigation";
import { currentRole } from "@/lib/role";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const role = currentRole();

  return (
    <div className="flex p-6 lg:p-10 gap-6 max-w-screen-2xl mx-auto">
      {/* Sidebar */}
      <nav className="hidden xl:block min-w-64">
        <NavigationMenu role={role} />
      </nav>

      {/* Content */}
      {children}
    </div>
  );
}
