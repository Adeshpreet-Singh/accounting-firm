import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whitfield & Associates | Certified Public Accountants",
  description: "Premier Chicago accounting firm delivering strategic tax planning, audit services, bookkeeping, and financial advisory for businesses and high-net-worth individuals since 1992.",
  keywords: "accounting firm, CPA, tax planning, audit, bookkeeping, Chicago accountant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Whitfield & Associates",
              "url": "https://whitfieldcpa.com",
              "telephone": "(312) 555-0187",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "233 S. Wacker Drive, Suite 4200",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "postalCode": "60606"
              },
              "priceRange": "$$$"
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
