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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
