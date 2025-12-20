import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="bg-background pt-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <p className="text-sm font-medium text-foreground/80">
            Hello, I am Abdulwaheed Tella
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Researcher | Data Scientist |{" "}
            <span className="text-primary">GeoAI Enthusiast</span>
          </h1>

          <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/80 sm:text-base">
            <p>
              I&apos;m Abdulwaheed, a researcher and data scientist focused on
              geospatial analytics and GeoAI for sustainable development.
            </p>
            <p>
              My work bridges science and society—translating complex
              environmental and urban data into actionable insights.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#about"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Scroll to explore
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border border-border bg-secondary">
            <Image
              src="/images/AbdulWaheed_Tella.jpg"
              alt="Abdulwaheed Tella"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
