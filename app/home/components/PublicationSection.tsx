import { getScholarPublications } from "@/lib/google-scholar";
import Link from "next/link";

export default async function PublicationsSection() {
  const publications = await getScholarPublications();

  return (
    <section
      id="work"
      className="relative border-b-1 border-primary bg-gradient-to-b from-white to-secondary"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Research
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Publications &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Outputs
              </span>
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Selected publications and research outputs.
            </p>
          </div>
          <Link
            href="/publications"
            className="group hidden h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 lg:inline-flex"
          >
            View all
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {publications.length > 0 ? (
            publications.slice(0, 2).map((pub, idx: number) => {
              const colors = [
                {
                  border: "border-primary/20",
                  bg: "bg-gradient-to-br from-primary/5 to-white",
                  shadow: "hover:shadow-primary/10",
                },
                {
                  border: "border-accent/20",
                  bg: "bg-gradient-to-br from-accent/5 to-white",
                  shadow: "hover:shadow-accent/10",
                },
              ];
              const color = colors[idx % colors.length];
              const citedBy = pub.cited_by?.value || 0;
              return (
                <article
                  key={pub.citation_id || idx}
                  className={`group relative overflow-hidden rounded-2xl border ${color.border} ${color.bg} p-6 shadow-md transition-all hover:shadow-lg ${color.shadow}`}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-white/40 blur-2xl" />
                  <h3 className="relative text-lg font-bold leading-6 text-foreground">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>

                  {pub.authors || pub.publication ? (
                    <p className="relative mt-2 text-xs text-muted">
                      {pub.authors}
                      {pub.authors && pub.publication ? " - " : ""}
                      {pub.publication}
                    </p>
                  ) : null}

                  {citedBy > 0 ? (
                    <div className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-xs font-bold text-primary">
                        Cited by {citedBy}
                      </span>
                    </div>
                  ) : null}
                </article>
              );
            })
          ) : (
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 text-sm text-muted shadow-md md:col-span-2">
              Set `SERP_API_KEY` and `GOOGLE_SCHOLAR_ID` in your environment to
              automatically load publications from Google Scholar.
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/publications"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            View all research
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
