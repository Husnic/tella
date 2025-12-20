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
    <section id="work" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Research
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Selected publications and research outputs.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.length > 0 ? (
            posts.slice(0, 2).map((post: NormalizedPost) => (
              <article
                key={post.id}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold leading-6">
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
                </h3>

                {post.html ? (
                  <p className="mt-4 text-sm leading-7 text-foreground/80">
                    {truncate(toPlainText(post.html), 220)}
                  </p>
                ) : null}
              </article>
            ))
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted md:col-span-2">
              Set `BLOGGER_API_KEY` and `BLOGGER_PORTFOLIO_ID` in your
              environment to automatically load research posts from Blogger.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
