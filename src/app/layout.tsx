import { Metadata } from "next";
import "./globals.css";
import { Drawer } from "@/components/core/layout/Drawer";

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
        <Drawer />
        <main className="ml-14 transition-all duration-300">{children}</main>
      </body>
    </html>
  );
}
