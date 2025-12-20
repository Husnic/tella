import type { Metadata } from "next";

import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Research, teaching, mentoring, leadership, volunteer experience, education, and awards of Abdulwaheed Tella.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  notFound();
}
