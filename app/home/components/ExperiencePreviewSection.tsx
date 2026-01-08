import Link from "next/link";

const highlights = [
  {
    title: "Doctoral Researcher",
    org: "Monash University",
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
    title: "Research Scientist",
    org: "Foresight Institute of Research and Translation, Nigeria",
    period: "2018 - 2022",
    pill: "Volunteer",
  },
] as const;

export default function ExperiencePreviewSection() {
  return (
    <section
      className="relative border-t border-border bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-foreground to-foreground/95 px-5 py-10 shadow-2xl sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark opacity-60" />
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-32 translate-x-32 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 ring-1 ring-primary/30">
                <span className="text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Experience
                </span>
              </div>
              <h2
                id="experience-heading"
                className="mt-6 text-3xl font-bold tracking-tight text-background sm:text-4xl"
              >
                Roles & Highlights
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-background/90 sm:text-lg">
                A quick snapshot of research, teaching, leadership, and
                volunteer work. Explore the full resume for details.
              </p>
            </div>

            <Link
              href="/about#experience"
              className="group hidden h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 lg:inline-flex"
            >
              View full experience
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

          <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur transition-all hover:bg-white/10 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold text-background/80">
                    {item.period}
                  </p>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-foreground ring-1 ring-primary/30">
                    {item.pill}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold leading-6 text-background">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-background/80">{item.org}</p>
              </article>
            ))}
          </div>
        </div>

        <Link
          href="/about#experience"
          className="group mx-auto mt-4 flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 lg:hidden"
        >
          View full experience
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
    </section>
  );
}
