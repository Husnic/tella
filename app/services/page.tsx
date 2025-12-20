import type { Metadata } from "next";

import PageHeaderBanner from "@/app/components/PageHeaderBanner";
import ServicesPageContent from "@/app/services/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Geospatial analysis, research & development, and environmental consulting services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <PageHeaderBanner
        title="Services"
        eyebrow="What I do"
        description="Geospatial analysis, applied GeoAI research & development, and environmental consulting for resilience and impact."
      />
      <ServicesPageContent />
    </main>
  );
}
