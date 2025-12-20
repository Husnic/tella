import type { Metadata } from "next";

import ContactSection from "@/app/home/components/ContactSection";
import PageHeaderBanner from "@/app/components/PageHeaderBanner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Abdulwaheed Tella for collaborations, consulting, or research opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <PageHeaderBanner
        title="Contact"
        eyebrow="Let’s connect"
        description="Reach out for collaboration, consulting, or research opportunities."
        imageSrc="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=2400&q=80"
      />
      <ContactSection showHeader={false} />
    </main>
  );
}
