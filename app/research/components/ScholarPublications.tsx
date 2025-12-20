import {
  getScholarPublications,
  getScholarCitationStats,
} from "@/lib/google-scholar";
import Link from "next/link";
import CitationGraph from "@/app/components/CitationGraph";

export default async function ScholarPublications() {
  const publications = await getScholarPublications();
  const stats = await getScholarCitationStats();
  const scholarId = process.env.GOOGLE_SCHOLAR_ID;

  if (publications.length === 0) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 text-sm text-muted shadow-md">
        Set `SERP_API_KEY` and `GOOGLE_SCHOLAR_ID` in your environment to load
        publications from Google Scholar.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Citation Stats */}
      {stats ? (
        <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-secondary p-6 shadow-lg">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground">
                Citation Metrics
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-primary">
                    {stats.totalCitations}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    Citations
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-accent">
                    {stats.hIndex}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    h-index
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-success">
                    {stats.i10Index}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    i10-index
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-warning">
                    {stats.citationsSince2020}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    Since 2020
                  </p>
                </div>
              </div>
            </div>

            {scholarId ? (
              <div className="flex items-center">
                <a
                  href={`https://scholar.google.com/citations?user=${scholarId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z" />
                  </svg>
                  View Google Scholar
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
              </div>
            ) : null}
          </div>

          {/* Citation Graph */}
          {stats.citationGraph && stats.citationGraph.length > 0 ? (
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-bold text-foreground">
                Citations per year
              </h4>
              <CitationGraph data={stats.citationGraph} />
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Publications List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">
          All Publications ({publications.length})
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {publications.map((pub, idx) => {
            const citedBy = pub.cited_by?.value || 0;
            const year = pub.year || "N/A";

            return (
              <article
                key={pub.citation_id || idx}
                className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold leading-tight text-foreground">
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
                    </h4>

                    {pub.authors || pub.publication ? (
                      <p className="mt-2 text-sm text-muted">
                        {pub.authors}
                        {pub.authors && pub.publication ? " - " : ""}
                        {pub.publication}
                      </p>
                    ) : null}

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {year}
                      </span>

                      {citedBy > 0 ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                          <svg
                            className="h-3 w-3"
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
                          {citedBy}
                        </span>
                      ) : null}

                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          View
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {scholarId ? (
          <div className="flex items-center">
            <a
              href={`https://scholar.google.com/citations?user=${scholarId}`}
              target="_blank"
              rel="noreferrer"
              className="group flex mx-auto h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              View More on Google Scholar
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
