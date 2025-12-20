import Link from "next/link";

const highlights = [
  {
    title: "Doctoral Researcher",
    org: "Monash University Malaysia",
    period: "2023 - 2027",
    pill: "Research",
  },
  {
    title: "Teaching Assistant",
    org: "Department of Civil Engineering, Monash University",
    period: "2023 - 2027",
    pill: "Teaching",
  },
  {
    title: "Editor-in-Chief",
    org: "SYNC Magazine, Monash University",
    period: "2024 - 2025",
    pill: "Leadership",
  },
  {
    title: "Volunteer Research Scientist",
    org: "Foresight Institute of Research and Translation, Nigeria",
    period: "2018 - 2022",
    pill: "Volunteer",
  },
] as const;

export default function ExperiencePreviewSection() {
  return (
    <section
      className="border-t border-border bg-foreground text-background"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-foreground px-5 py-10 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark opacity-80" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex rounded-full border border-primary/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                Experience
              </p>
              <h2
                id="experience-heading"
                className="mt-4 text-2xl font-semibold tracking-tight text-background sm:text-3xl"
              >
                Roles & Highlights
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-background/80 sm:text-base">
                A quick snapshot of research, teaching, leadership, and
                volunteer work. Explore the full resume for details.
              </p>
            </div>

            <Link
              href="/experience"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              View full experience
            </Link>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="rounded-2xl border border-border/40 bg-background/5 p-5 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold text-background/70">
                    {item.period}
                  </p>
                  <span className="rounded-full bg-background/10 px-3 py-1 text-xs font-semibold text-background/80">
                    {item.pill}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-6 text-background">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-background/70">{item.org}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
