import { NavigationMenu } from "@/components/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex p-6 lg:p-10 gap-6">
      {/* Sidebar */}
      <nav className="hidden lg:block min-w-64">
        <NavigationMenu />
      </nav>

      {/* Content */}
      {children}
    </div>
  );
}
