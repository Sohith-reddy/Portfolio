import { Inter } from "next/font/google";
import "./globals.css";

// Inter is the closest freely-available match to Apple's SF Pro.
// The CSS font stack in globals.css puts the real Apple system fonts
// (-apple-system / SF Pro Display) first, so Apple devices render genuine SF Pro
// and everyone else falls back to Inter.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.sohithreddy.dev"),
  title: "Sohith Reddy — Software Engineer",
  description:
    "Software Engineer building scalable backend systems with Spring Boot, Java, PostgreSQL and Redis. Projects, experience and live LeetCode / GitHub activity.",
  openGraph: {
    title: "Sohith Reddy — Software Engineer",
    description:
      "Backend systems that scale: Spring Boot, Java, PostgreSQL, Redis — plus RAG/LLM features where they genuinely help.",
    url: "https://www.sohithreddy.dev",
    siteName: "Sohith Reddy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohith Reddy — Software Engineer",
    description: "Backend systems that scale: Spring Boot, Java, PostgreSQL, Redis.",
  },
  authors: [{ name: "Sohith Reddy", url: "https://www.sohithreddy.dev" }],
  keywords: ["Sohith Reddy", "Software Engineer", "Backend", "Spring Boot", "Java", "PostgreSQL", "Redis", "Portfolio"],
  alternates: { canonical: "/" },
  // Favicon, apple-touch icon and social preview images are served by the
  // file conventions in this folder: favicon.ico, icon.png, apple-icon.png,
  // opengraph-image.png and twitter-image.png.
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Runs before first paint so the saved theme is applied with no flash of
// the wrong colours. Falls back to the OS preference when nothing is saved.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
