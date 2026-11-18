import type { Metadata } from "next";
import { Header, Footer } from "@/components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-tanzil811.github.io"),
  title: "Ashraful Islam Tanzil — AI & Software Engineer",
  description: "AI/ML research and software engineering portfolio by Ashraful Islam Tanzil.",
  alternates: { canonical: "/PORTFOLIO2/" },
  openGraph: {
    title: "Ashraful Islam Tanzil — AI & Software Engineer",
    description: "Research and engineering across Green AI, spatial proteomics, medical imaging, and full-stack systems.",
    url: "https://ai-tanzil811.github.io/PORTFOLIO2/",
  },
  twitter: {
    card: "summary",
    title: "Ashraful Islam Tanzil — AI & Software Engineer",
    description: "AI/ML research and software engineering portfolio.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashraful Islam Tanzil",
              url: "https://ai-tanzil811.github.io/PORTFOLIO2/",
              jobTitle: "AI/ML Researcher and Software Engineer",
              address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
              sameAs: ["https://github.com/ai-tanzil811", "https://linkedin.com/in/ai-tanzil"],
            }),
          }}
        />
      </body>
    </html>
  );
}
