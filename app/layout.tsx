import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

import Footer from "@/app/home/components/Footer";
import Navbar from "@/app/home/components/Navbar";

const lora = Lora({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default:
      "Abdulwaheed Tella - Researcher | Data Scientist | GeoAI Enthusiast",
    template: "%s | Abdulwaheed Tella",
  },
  description:
    "Abdulwaheed Tella is a researcher and data scientist specializing in geospatial analytics, GeoAI, climate change adaptation, and disaster risk reduction.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Abdulwaheed Tella - Researcher | Data Scientist | GeoAI Enthusiast",
    description:
      "Researcher and data scientist focused on GeoAI, geospatial analytics, climate change adaptation, and disaster risk reduction.",
    siteName: "Abdulwaheed Tella",
    images: [
      {
        url: "/images/AbdulWaheed_Tella.jpg",
        width: 1200,
        height: 630,
        alt: "Abdulwaheed Tella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulwaheed Tella - Researcher | Data Scientist | GeoAI Enthusiast",
    description:
      "Researcher and data scientist focused on GeoAI, geospatial analytics, climate change adaptation, and disaster risk reduction.",
    images: ["/images/AbdulWaheed_Tella.jpg"],
  },
  authors: [{ name: "Abdulwaheed Tella" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abdulwaheed Tella",
      description:
        "Researcher and data scientist specializing in geospatial analytics, GeoAI, climate change adaptation, and disaster risk reduction.",
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Abdulwaheed Tella",
      url: siteUrl,
      jobTitle: ["Researcher", "Data Scientist"],
      email: "mailto:abdulwaheedtella@gmail.com",
      sameAs: ["https://ng.linkedin.com/in/abdulwaheedtella"],
    },
  ],
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
