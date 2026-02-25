import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Your Exact Age | Free Online Tool",
  description: "Calculate your exact age in years, months, days, hours, minutes, and seconds. Find out how old you are, days until your next birthday, and more with our free age calculator.",
  keywords: "age calculator, calculate age, how old am I, birthday calculator, age in days, age in months, exact age calculator, date of birth calculator",
  authors: [{ name: "Larry's World" }],
  creator: "Larry's World",
  publisher: "Larry's World",
  openGraph: {
    title: "Age Calculator - Calculate Your Exact Age",
    description: "Free online age calculator to find your exact age in years, months, days, hours, and seconds. Calculate days until your next birthday!",
    url: "https://larrys-world.github.io/age-calculator/",
    siteName: "Larry's World Tools",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator - Calculate Your Exact Age",
    description: "Free online age calculator to find your exact age in years, months, days, hours, and seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://larrys-world.github.io/age-calculator/",
  },
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
              "@type": "WebApplication",
              "name": "Age Calculator",
              "description": "Calculate your exact age in years, months, days, hours, minutes, and seconds",
              "url": "https://larrys-world.github.io/age-calculator/",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Larry's World",
                "url": "https://larrys-world.github.io"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}