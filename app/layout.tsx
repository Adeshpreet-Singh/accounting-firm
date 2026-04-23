import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whitfield & Associates | Certified Public Accountants",
  description:
    "Premier Chicago accounting firm delivering strategic tax planning, audit services, bookkeeping, and financial advisory for businesses and high-net-worth individuals since 1992.",
  keywords:
    "accounting firm, CPA, tax planning, audit, bookkeeping, Chicago accountant",
  openGraph: {
    title: "Whitfield & Associates | Certified Public Accountants",
    description:
      "Premier Chicago accounting firm delivering strategic tax planning, audit services, bookkeeping, and financial advisory for businesses and high-net-worth individuals since 1992.",
    url: "[WEBSITE]",
    siteName: "Whitfield & Associates",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Whitfield & Associates | Certified Public Accountants",
    description:
      "Premier Chicago accounting firm delivering strategic tax planning, audit services, bookkeeping, and financial advisory since 1992.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Whitfield & Associates",
              url: "[WEBSITE]",
              telephone: "[PHONE]",
              email: "[EMAIL]",
              address: {
                "@type": "PostalAddress",
                streetAddress: "233 S. Wacker Drive, Suite 4200",
                addressLocality: "Chicago",
                addressRegion: "IL",
                postalCode: "60606",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              priceRange: "$$$",
              sameAs: [
                "[LINKEDIN_URL]/whitfield-associates",
                "[FACEBOOK_URL]",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.prg-reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.prg-reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        `,
          }}
        />
      </body>
    </html>
  );
}