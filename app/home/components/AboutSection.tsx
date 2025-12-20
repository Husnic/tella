import Image from "next/image";
import Link from "next/link";

const aboutItems = [
  {
    label: "LinkedIn",
    value: "abdulwaheedtella",
    href: "https://ng.linkedin.com/in/abdulwaheedtella",
  },
  { label: "Personal Email", value: "abdulwaheedtella@gmail.com" },
  { label: "Institutional Email", value: "abdulwaheed.tella@monash.edu" },
  { label: "Experience", value: "5+ years" },
  { label: "Freelance", value: "Available" },
  { label: "Skype", value: "tellaabdulwaheed01_1" },
  { label: "Language", value: "English" },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-border bg-gradient-to-b from-white to-secondary"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              About Me
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Turning geospatial data into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              decisions
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            I use GeoAI, remote sensing, and spatial analytics to translate
            complex environmental and urban data into actionable insights for
            sustainable development, climate resilience, and disaster risk
            reduction.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:order-1 md:col-span-6">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white bg-background shadow-xl ring-1 ring-border">
                <Image
                  src="/images/AbdulWaheed_Tella.png"
                  alt="Abdulwaheed Tella"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="md:order-2 md:col-span-6">
            <h3 className="text-xl font-bold text-foreground">
              What I focus on
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold text-foreground">
                  GeoAI & spatial ML
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Feature engineering, model evaluation, and deployment-ready
                  pipelines for spatial problems.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold text-foreground">
                  Remote sensing
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Satellite-derived indicators for land use, exposure, and
                  environmental change.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold text-foreground">
                  Risk & resilience
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Evidence for climate adaptation, disaster risk reduction, and
                  urban planning.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold text-foreground">
                  Data storytelling
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Clear narratives and visuals that help teams act with
                  confidence.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="group hidden h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 lg:inline-flex"
              >
                Read full bio
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
              </Link>
            </div>
          </div>
        </div>

        {/* <dl className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {aboutItems.slice(0, 3).map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {item.label}
              </dt>
              <dd className="mt-1 font-medium text-foreground">
                {"href" in item ? (
                  <a href={item.href} className="text-primary hover:underline">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl> */}

        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/about"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            Read full bio
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
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
