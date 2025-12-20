import type { Metadata } from "next";

import ResearchPageContent from "@/app/research/components/ResearchPageContent";
import PageHeaderBanner from "@/app/components/PageHeaderBanner";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research publications and outputs by Abdulwaheed Tella, including GeoAI and geospatial analytics work.",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
  return (
    <main className="pt-28">
      <PageHeaderBanner
        title="Research"
        eyebrow="Publications"
        description="Selected publications and research outputs across GeoAI, geospatial analytics, and environmental risk modelling."
        imageSrc="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2400&q=80"
      />
      <ResearchPageContent showHeader={false} />
    </main>
  );
}
