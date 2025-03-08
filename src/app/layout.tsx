import type { Metadata } from "next";
import "./globals.css";
import { Drawer } from "@/layout";
import ClientWrapper from "@/components/ui/ClientWrapper";

export const metadata: Metadata = {
  title: "Track Fitness",
  description: "Track your fitness journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen bg-base-100" suppressHydrationWarning>
        <ClientWrapper>
          <Drawer />
        </ClientWrapper>
        <main className="ml-14 transition-all duration-300">{children}</main>
      </body>
    </html>
  );
}
