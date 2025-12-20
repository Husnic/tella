import type { Metadata } from "next";

import AboutPageContent from "@/app/about/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Abdulwaheed Tella, a researcher and data scientist specializing in GeoAI, geospatial analytics, and environmental risk modeling.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      <AboutPageContent />
    </main>
  );
}
