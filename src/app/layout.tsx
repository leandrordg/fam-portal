import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Header } from "@/components/header";
import { NavigationMenu } from "@/components/navigation";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portal da FAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${geistSans.className} antialiased`}>
          <Header />
          <div className="flex p-6 lg:p-10 gap-6">
            {/* Sidebar */}
            <nav className="hidden lg:block min-w-64">
              <NavigationMenu />
            </nav>
            
            {/* Content */}
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
