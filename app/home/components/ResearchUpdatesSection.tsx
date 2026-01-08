import { fetchBloggerPosts } from "@/lib/blogger";
import Link from "next/link";
import ResearchUpdateCard from "./ResearchUpdateCard";

export default async function ResearchUpdatesSection() {
  const researchBlogId = process.env.BLOGGER_PORTFOLIO_ID;
  const posts = researchBlogId ? await fetchBloggerPosts(researchBlogId) : [];

  return (
    <section
      id="research-updates"
      className="relative border-b border-border bg-gradient-to-b from-primary/20 via-primary/10 to-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Research Blog
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Research Updates
              </span>
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Updates on ongoing projects, methodologies, and field work.
            </p>
          </div>
          <Link
            href="/research"
            className="group hidden h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 lg:inline-flex"
          >
            View all updates
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts
              .slice(0, 3)
              .map((post) => <ResearchUpdateCard key={post.id} post={post} />)
          ) : (
            <div className="rounded-2xl border border-border bg-white p-6 text-sm text-muted md:col-span-2 lg:col-span-3">
              Set BLOGGER_PORTFOLIO_ID in your environment to load research
              updates.
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            href="/research"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            View all updates
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
