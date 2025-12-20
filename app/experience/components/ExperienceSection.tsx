import { EXPERIENCE_CATEGORIES } from "@/lib/experience";

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        {subtitle}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function ExperienceGrid({
  items,
}: {
  items: ReadonlyArray<{
    period: string;
    pill?: string;
    title: string;
    org: string;
    description?: string;
  }>;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={`${item.period}-${item.title}`}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-semibold text-foreground/80">
              {item.period}
            </p>
            {item.pill ? (
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
                {item.pill}
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
          {item.description ? (
            <p className="mt-3 text-sm leading-7 text-foreground/80">
              {item.description}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeader title="Experience" subtitle="Resume" />

        <div className="mt-12 space-y-16">
          {EXPERIENCE_CATEGORIES.map((category) => (
            <div key={category.id}>
              <h3 className="text-lg font-semibold">{category.label}</h3>
              <ExperienceGrid items={category.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
