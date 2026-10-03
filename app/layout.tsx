import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wiliantodev.my.id"),
  title: {
    default: "WiliantoDev — Full-Stack Developer Laravel & Flutter",
    template: "%s | WiliantoDev",
  },
  description:
    "Portfolio Wilianto, full-stack developer dengan fokus Laravel dan Flutter untuk website, aplikasi Android, dan backend API.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://wiliantodev.my.id",
    siteName: "WiliantoDev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WiliantoDev — Full-Stack Developer Laravel & Flutter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased selection:bg-accent/30">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}