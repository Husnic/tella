import AboutSection from "./home/components/AboutSection";
import BlogSection from "./home/components/BlogSection";
import ExperiencePreviewSection from "./home/components/ExperiencePreviewSection";
import HeroSection from "./home/components/HeroSection";
import HomeContactSection from "./home/components/HomeContactSection";
import ResearchSection from "./home/components/ResearchSection";
import ServicesSection from "./home/components/ServicesSection";
import StatsBannerSection from "./home/components/StatsBannerSection";
import TestimonialsSection from "./home/components/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperiencePreviewSection />
      <ResearchSection />
      <ServicesSection />
      <StatsBannerSection />
      <TestimonialsSection />
      <BlogSection />
      <HomeContactSection />
    </main>
  );
}
