import type { NormalizedPost } from "@/lib/blogger";
import { fetchBloggerPosts } from "@/lib/blogger";
import Link from "next/link";

function toPlainText(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}

export default async function ResearchSection() {
  const portfolioId = process.env.BLOGGER_PORTFOLIO_ID;
  const posts = portfolioId ? await fetchBloggerPosts(portfolioId) : [];

  return (
    <section
      id="work"
      className="relative border-b border-border bg-gradient-to-b from-white to-secondary"
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
            href="/research"
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
          {posts.length > 0 ? (
            posts.slice(0, 2).map((post: NormalizedPost, idx: number) => {
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
              return (
                <article
                  key={post.id}
                  className={`group relative overflow-hidden rounded-2xl border ${color.border} ${color.bg} p-6 shadow-md transition-all hover:shadow-lg ${color.shadow}`}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-white/40 blur-2xl" />
                  <h3 className="relative text-lg font-bold leading-6 text-foreground">
                    {post.url ? (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </a>
                    ) : (
                      post.title
                    )}
                  </h3>

                  {post.html ? (
                    <p className="relative mt-4 text-sm leading-7 text-muted">
                      {truncate(toPlainText(post.html), 220)}
                    </p>
                  ) : null}
                </article>
              );
            })
          ) : (
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 text-sm text-muted shadow-md md:col-span-2">
              Set `BLOGGER_API_KEY` and `BLOGGER_PORTFOLIO_ID` in your
              environment to automatically load research posts from Blogger.
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/research"
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
