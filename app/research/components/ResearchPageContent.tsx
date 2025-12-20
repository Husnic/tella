import Link from "next/link";
import ScholarPublications from "./ScholarPublications";

const focusAreas = [
  {
    title: "GeoAI & Remote Sensing",
    description:
      "Applying ML and geospatial intelligence to satellite imagery and spatial data for practical decision-making.",
  },
  {
    title: "Flood & Risk Modelling",
    description:
      "Hazard assessment and risk mapping with an emphasis on interpretability and real-world resilience outcomes.",
  },
  {
    title: "Climate Adaptation",
    description:
      "Data-driven insights to support adaptation planning, vulnerability understanding, and evidence-based policy.",
  },
  {
    title: "Urban & Environmental Analytics",
    description:
      "Spatial analysis across environmental and urban datasets—turning complex signals into actionable insights.",
  },
] as const;

export default async function ResearchPageContent({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          {showHeader ? (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  Publications
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Research
                </span>{" "}
                & Publications
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Selected publications and research outputs.
              </p>
            </div>
          ) : null}

          <div className={showHeader ? "mt-12" : "mt-0"}>
            <ScholarPublications />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Focus
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Areas of{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                research
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              The themes that guide my research and collaborations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/80">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-foreground to-foreground/95 px-5 py-10 shadow-2xl sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark opacity-60" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 ring-1 ring-primary/30">
                  <span className="text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    Collaboration
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Interested in{" "}
                  <span className="text-primary">collaborating</span> on
                  research?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-background/90 sm:text-lg">
                  I'm open to academic collaborations, applied research, and
                  data-driven projects in GeoAI and environmental resilience.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
                >
                  Contact me
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
                <a
                  href="/images/CV_Abdulwaheed Tella_2025.pdf"
                  download="CV_Abdulwaheed_Tella_2025.pdf"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 text-sm font-semibold text-background backdrop-blur transition-all hover:bg-white/20"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
