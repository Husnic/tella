import Image from "next/image";
import Link from "next/link";

import { fetchBloggerPosts } from "@/lib/blogger";

export default async function BlogSection() {
  const blogId = process.env.BLOGGER_BLOG_ID;
  const posts = blogId ? await fetchBloggerPosts(blogId) : [];

  return (
    <section
      id="blog"
      className="relative border-t border-border bg-gradient-to-b from-secondary to-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-secondary px-5 py-10 shadow-xl sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />
          <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-32 translate-y-32 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  Blog
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Recent{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Insights
                </span>
              </h2>
            </div>
            <Link
              href="/blog"
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

          <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.slice(0, 3).map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                    <Image
                      src={post.imageUrl ?? "/images/13.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-bold leading-6 text-foreground">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary hover:gap-3 transition-all"
                      >
                        Read More
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
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-6 text-sm text-muted shadow-md sm:col-span-2 lg:col-span-3">
                Set `BLOGGER_API_KEY` and `BLOGGER_BLOG_ID` in your environment
                to load blog posts.
              </div>
            )}
          </div>

          <div className="relative mt-10 lg:hidden">
            <Link
              href="/blog"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
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
        </div>
      </div>
    </section>
  );
}
