import Link from "next/link";

const services = [
  {
    title: "Geospatial Analysis",
    subtitle: "Data-driven insights",
    description:
      "Spatial analytics, remote sensing, and GIS workflows to turn complex environmental and urban datasets into clear decisions.",
    bullets: [
      "GIS & spatial data pipelines",
      "Remote sensing analysis",
      "Risk mapping & dashboards",
    ],
  },
  {
    title: "Research & Development",
    subtitle: "Applied GeoAI",
    description:
      "Research-backed experimentation and prototyping—bridging academic methods with practical, real-world implementation.",
    bullets: [
      "GeoAI / ML prototyping",
      "Model evaluation & reporting",
      "Reproducible research workflows",
    ],
  },
  {
    title: "Environmental Consulting",
    subtitle: "Resilience planning",
    description:
      "Support for organizations working on sustainability, climate adaptation, and disaster risk reduction.",
    bullets: [
      "Climate adaptation support",
      "Flood & hazard modelling",
      "Stakeholder-ready deliverables",
    ],
  },
] as const;

const processSteps = [
  {
    title: "Discovery",
    description:
      "Clarify goals, constraints, and success metrics. Align scope, timeline, and expected outputs.",
  },
  {
    title: "Analysis & Modelling",
    description:
      "Develop the workflow: data processing, spatial modelling, validation, and interpretation.",
  },
  {
    title: "Delivery",
    description:
      "Ship results with clear documentation—maps, reports, notebooks, and recommendations.",
  },
] as const;

export default function ServicesPageContent() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service, idx) => {
              const colors = [
                {
                  border: "border-primary/20",
                  bg: "bg-gradient-to-br from-primary/5 to-white",
                  text: "text-primary",
                },
                {
                  border: "border-accent/20",
                  bg: "bg-gradient-to-br from-accent/5 to-white",
                  text: "text-accent",
                },
                {
                  border: "border-success/20",
                  bg: "bg-gradient-to-br from-success/5 to-white",
                  text: "text-success",
                },
              ];
              const color = colors[idx % colors.length];
              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl border ${color.border} ${color.bg} p-6 shadow-md transition-all hover:shadow-lg`}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-white/40 blur-2xl" />
                  <p
                    className={`relative text-xs font-bold uppercase tracking-wide ${color.text}`}
                  >
                    {service.subtitle}
                  </p>
                  <h2 className="relative mt-3 text-lg font-bold">
                    {service.title}
                  </h2>
                  <p className="relative mt-3 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <ul className="relative mt-5 space-y-2 text-sm text-foreground/80">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${color.text}`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Process
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              How I{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                work
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              A simple, collaborative workflow that keeps projects transparent
              and focused on outcomes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-primary">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/80">
                  {step.description}
                </p>
              </div>
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
                    Let's talk
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Need help with a <span className="text-primary">GeoAI</span>{" "}
                  or GIS project?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-background/90 sm:text-lg">
                  Share a quick overview and I'll suggest a clear next step.
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
