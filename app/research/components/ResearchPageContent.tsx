import { fetchBloggerPosts } from "@/lib/blogger";
import Link from "next/link";

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
  const portfolioId = process.env.BLOGGER_PORTFOLIO_ID;
  const posts = portfolioId ? await fetchBloggerPosts(portfolioId) : [];

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          {showHeader ? (
            <div className="text-center">
              <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Publications
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Research
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Selected publications and research outputs.
              </p>
            </div>
          ) : null}

          <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${
              showHeader ? "mt-12" : "mt-0"
            }`}
          >
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h2 className="text-base font-semibold leading-6">
                    {post.url ? (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {post.title}
                      </a>
                    ) : (
                      post.title
                    )}
                  </h2>

                  {post.html ? (
                    <div
                      className="prose mt-4 max-w-none text-sm text-foreground/80"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  ) : null}
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted md:col-span-2">
                Set keys in your environment to load research posts from
                Blogger.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Focus
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Areas of research
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              The themes that guide my research and collaborations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="text-base font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/80">
                  {area.description}
                </p>
              </article>
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
                  Collaboration
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Interested in collaborating on research?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-background/80 sm:text-base">
                  I'm open to academic collaborations, applied research, and
                  data-driven projects in GeoAI and environmental resilience.
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
