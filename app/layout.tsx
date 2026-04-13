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
      <body className="antialiased">{children}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.prg-reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        ` }} />
      </body>
    </html>
  );
}
