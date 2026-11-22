import type { Metadata } from "next";
import { Header, Footer } from "@/components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aitanzil.me"),
  title: "Ashraful Islam Tanzil — AI & Data Science Researcher",
  description: "Official portfolio of Ashraful Islam Tanzil (ai-tanzil811), AI and Data Science researcher specializing in Parameter-Efficient Fine-Tuning (GreenPEFT), NLP, and machine learning systems.",
  keywords: "Ashraful Islam Tanzil, Tanzil, ai-tanzil811, AI Researcher, Data Science, GreenPEFT, Machine Learning",
  authors: [{ name: "Ashraful Islam Tanzil" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Ashraful Islam Tanzil — AI & Data Science Researcher",
    description: "Official portfolio, research publications, and open-source AI projects by Ashraful Islam Tanzil.",
    url: "https://aitanzil.me/",
    siteName: "Ashraful Islam Tanzil",
  },
  icons: { icon: "/icon.svg" },
  twitter: {
    card: "summary_large_image",
    title: "Ashraful Islam Tanzil — AI & Data Science Researcher",
    description: "Official portfolio, research publications, and open-source AI projects by Ashraful Islam Tanzil.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}}())`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main">Skip to content</a>
        <noscript>
          <nav>
            <h1>Ashraful Islam Tanzil</h1>
            <p>AI and Data Science researcher and software engineer working across efficient deep learning, spatial proteomics, medical imaging, open-source tools, and full-stack systems.</p>
            <ul>
              <li><a href="https://aitanzil.me/work/greenpeft/">GreenPEFT</a></li>
              <li><a href="https://aitanzil.me/work/cohere/">COHERE</a></li>
              <li><a href="https://github.com/ai-tanzil811">GitHub</a></li>
              <li><a href="https://huggingface.co/ai-tanzil">Hugging Face</a></li>
              <li><a href="https://pypi.org/user/aitanzil/">PyPI</a></li>
              <li><a href="https://www.kaggle.com/ashrafulislamtanzil">Kaggle</a></li>
            </ul>
          </nav>
        </noscript>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ashraful Islam Tanzil",
              "alternateName": ["Tanzil", "ai-tanzil811", "aitanzil"],
              "url": "https://aitanzil.me",
              "jobTitle": "AI & Data Science Researcher",
              "description": "AI & Data Science Researcher focused on efficient deep learning, GreenPEFT, and open-source ML tools.",
              "sameAs": [
                "https://github.com/ai-tanzil811",
                "https://huggingface.co/ai-tanzil",
                "https://pypi.org/user/aitanzil/",
                "https://www.kaggle.com/ashrafulislamtanzil",
                "https://www.linkedin.com/in/ai-tanzil/",
                "https://x.com/ai_tanzil",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
