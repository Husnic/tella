import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-primary/5 pt-28"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-40" />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 ring-1 ring-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <p className="text-sm font-semibold text-primary">
              Available for consulting
            </p>
          </div>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Researcher | Data Scientist |{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GeoAI Enthusiast
            </span>
          </h1>

          <div className="mt-6 space-y-4 text-base leading-7 text-muted sm:text-lg">
            <p>
              I&apos;m Abdulwaheed, a researcher and data scientist focused on
              geospatial analytics and GeoAI for sustainable development.
            </p>
            <p>
              My work bridges science and society—translating complex
              environmental and urban data into actionable insights.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Explore my work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-primary bg-background px-8 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full h-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-full h-full border-4 border-white bg-secondary shadow-2xl ring-1 ring-border">
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
      </div>
    </section>
  );
}

export default HeroSection;
