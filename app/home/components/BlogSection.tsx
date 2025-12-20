import Image from "next/image";
import Link from "next/link";

import { fetchBloggerPosts } from "@/lib/blogger";

export default async function BlogSection() {
  const blogId = process.env.BLOGGER_BLOG_ID;
  const posts = blogId ? await fetchBloggerPosts(blogId) : [];

  return (
    <section id="blog" className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary px-5 py-10 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-70" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Blog
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Recent Blog Posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              View all
            </Link>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.slice(0, 3).map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl border border-border bg-background"
                >
                  <div className="relative aspect-[16/10] w-full bg-secondary">
                    <Image
                      src={post.imageUrl ?? "/images/13.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-semibold leading-6">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-xs font-semibold uppercase tracking-wide text-foreground/80 hover:text-foreground"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-border bg-background p-6 text-sm text-muted sm:col-span-2 lg:col-span-3">
                Set `BLOGGER_API_KEY` and `BLOGGER_BLOG_ID` in your environment
                to load blog posts.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
