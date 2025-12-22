import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['600', '700', '900'],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "2XG - Content That Doubles Growth",
  description: "We build content systems for mobility & retail brands. From 25M views to predictable sales. Proven track record with BCH and EM Doodle.",
  keywords: ["content marketing", "growth agency", "mobility marketing", "retail marketing", "content systems", "2XG"],
  authors: [{ name: "2XG" }],
  openGraph: {
    title: "2XG - Content That Doubles Growth",
    description: "We build content systems for mobility & retail brands. 25M+ monthly views.",
    type: "website",
    url: "https://2xg.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "2XG - Content That Doubles Growth",
    description: "We build content systems for mobility & retail brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
