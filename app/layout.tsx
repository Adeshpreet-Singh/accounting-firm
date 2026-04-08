import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whitfield & Associates | Certified Public Accountants",
  description: "Premier accounting firm delivering strategic tax planning, audit services, and financial advisory for businesses and high-net-worth individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
