import type { Metadata } from "next";

import BlogIndex from "@/app/blog/components/BlogIndex";
import PageHeaderBanner from "@/app/components/PageHeaderBanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and writing by Abdulwaheed Tella on GeoAI, GIS, data science, and environmental resilience.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="pt-28">
      <PageHeaderBanner
        title="Blog"
        eyebrow="Writing"
        description="Articles and notes on GeoAI, GIS, data science, and environmental resilience."
        imageSrc="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=80"
      />
      <BlogIndex showHeader={false} />
    </main>
  );
}
