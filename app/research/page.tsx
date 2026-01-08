import type { Metadata } from "next";

import PageHeaderBanner from "@/app/components/PageHeaderBanner";
import ResearchIndex from "./components/ResearchIndex";

export const metadata: Metadata = {
  title: "Research Blog",
  description:
    "Research updates and project progress by Abdulwaheed Tella, sharing insights from ongoing work in GeoAI and environmental resilience.",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
  return (
    <main className="pt-28">
      <PageHeaderBanner
        title="Research Blog"
        eyebrow="Updates"
        description="Updates on ongoing research projects, methodologies, and field work in GeoAI and environmental resilience."
        imageSrc="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2400&q=80"
      />
      <ResearchIndex showHeader={false} />
    </main>
  );
}
