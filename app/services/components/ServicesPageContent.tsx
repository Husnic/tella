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
      <section className="bg-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {service.subtitle}
                </p>
                <h2 className="mt-3 text-lg font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Process
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              How I work
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              A simple, collaborative workflow that keeps projects transparent
              and focused on outcomes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Step {idx + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-foreground px-5 py-10 sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark opacity-80" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="inline-flex rounded-full border border-primary/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Let's talk
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Need help with a GeoAI or GIS project?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-background/80 sm:text-base">
                  Share a quick overview and I'll suggest a clear next step.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  Contact me
                </Link>
                <a
                  href="/CV_Abdulwaheed_Tella_2025.pdf"
                  download
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border/40 bg-background/5 px-6 text-sm font-semibold text-background"
                >
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
