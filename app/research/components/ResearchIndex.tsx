import Image from "next/image";
import Link from "next/link";

import { fetchBloggerPosts } from "@/lib/blogger";

const topics = [
  "Research Updates",
  "Project Progress",
  "Methodology",
  "Field Work",
  "Data Analysis",
  "Collaborations",
] as const;

export default async function ResearchIndex({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const researchBlogId = process.env.BLOGGER_PORTFOLIO_ID;
  const posts = researchBlogId ? await fetchBloggerPosts(researchBlogId) : [];

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 1 ? posts.slice(1) : posts;

  return (
    <section className="bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {showHeader ? (
          <div className="text-center">
            <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Research Blog
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Research Updates
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Updates on ongoing research projects, methodologies, and field
              work in GeoAI and environmental resilience.
            </p>
          </div>
        ) : null}

        <div
          className={`flex flex-wrap items-center justify-center gap-2 ${
            showHeader ? "mt-10" : "mt-0"
          }`}
        >
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground/80"
            >
              {topic}
            </span>
          ))}
        </div>

        {featuredPost ? (
          <article className="mt-8 overflow-hidden rounded-3xl border border-border bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative aspect-[16/10] w-full bg-secondary lg:col-span-7 lg:aspect-auto">
                <Image
                  src={featuredPost.imageUrl ?? "/images/13.jpg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 lg:col-span-5 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Featured Update
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-tight tracking-tight">
                  <Link
                    href={`/research/${featuredPost.id}`}
                    className="hover:underline"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  The latest update from ongoing research—sharing progress,
                  insights, and methodologies from the field.
                </p>
                <div className="mt-6">
                  <Link
                    href={`/research/${featuredPost.id}`}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                  >
                    Read update
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            showHeader || featuredPost ? "mt-12" : "mt-10"
          }`}
        >
          {posts.length > 0 ? (
            remainingPosts.map((post) => (
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
                  <h2 className="text-base font-semibold leading-6">
                    <Link
                      href={`/research/${post.id}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <div className="mt-4">
                    <Link
                      href={`/research/${post.id}`}
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
              Set BLOGGER_PORTFOLIO_ID in your environment to load research
              updates.
            </div>
          )}
        </div>

        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-foreground px-5 py-10 text-background sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark opacity-80" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="inline-flex rounded-full border border-primary/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Collaborate
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Interested in the research?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-background/80 sm:text-base">
                  If you'd like to discuss ongoing projects or explore
                  collaboration opportunities, get in touch.
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
                  href="/images/CV_Abdulwaheed Tella_2025.pdf"
                  download="CV_Abdulwaheed_Tella_2025.pdf"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border/40 bg-background/5 px-6 text-sm font-semibold text-background"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
