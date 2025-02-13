import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AGenC.ai",
  description: "Your AGenC.ai",
  openGraph: {
    title: "AGenC.ai - AI-powered Content",
    description: "Automate and streamline your content creation with AGenC.ai",
    url: "https://www.your-agenc.ai",
    siteName: "AGenC.ai",
    images: [
      {
        url: "https://www.your-agenc.ai/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "AGenC.ai - AI-powered Content",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "AGenC.ai",
    title: "AGenC.ai - AI-powered Content",
    description: "Automate and streamline your content creation with AGenC.ai",
    images: ["https://www.your-agenc.ai/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
