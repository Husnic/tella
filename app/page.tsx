import AboutSection from "./home/components/AboutSection";
import BlogSection from "./home/components/BlogSection";
import ExperiencePreviewSection from "./home/components/ExperiencePreviewSection";
import HeroSection from "./home/components/HeroSection";
import HomeContactSection from "./home/components/HomeContactSection";
import PublicationsSection from "./home/components/PublicationSection";
import ResearchUpdatesSection from "./home/components/ResearchUpdatesSection";
import ServicesSection from "./home/components/ServicesSection";
import StatsBannerSection from "./home/components/StatsBannerSection";
import TestimonialsSection from "./home/components/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperiencePreviewSection />
      <PublicationsSection />
      <ResearchUpdatesSection />
      <ServicesSection />
      <StatsBannerSection />
      <TestimonialsSection />
      <BlogSection />
      <HomeContactSection />
    </main>
  );
}
