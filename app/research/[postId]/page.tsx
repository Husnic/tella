import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchBloggerPost } from "@/lib/blogger";
import ShareButtons from "./components/ShareButtons";
import Link from "next/link";

type PageProps = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { postId } = await params;

  const researchBlogId = process.env.BLOGGER_RESEARCH_ID;

  if (!researchBlogId) {
    return {
      title: "Research Update",
      description: "Research update post",
    };
  }

  const post = await fetchBloggerPost(researchBlogId, postId);

  if (!post) {
    return {
      title: "Research Update",
      description: "Research update post",
    };
  }

  const siteUrl = "https://abdulwaheedtella.com";
  const postUrl = `${siteUrl}/research/${postId}`;

  return {
    title: post.title,
    description: `Research update: ${post.title}`,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: `Research update: ${post.title}`,
      url: postUrl,
      type: "article",
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
    twitter: {
      title: post.title,
      description: `Research update: ${post.title}`,
      card: "summary_large_image",
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export default async function ResearchPostPage({ params }: PageProps) {
  const { postId } = await params;

  const researchBlogId = process.env.BLOGGER_PORTFOLIO_ID;

  if (!researchBlogId) {
    notFound();
  }

  const post = await fetchBloggerPost(researchBlogId, postId);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://abdulwaheedtella.com";
  const postUrl = `${siteUrl}/research/${postId}`;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <Link
        href="/research"
        className="text-sm font-semibold text-primary hover:underline"
      >
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight">
        {post.title}
      </h1>

      <div
        className="mt-6 space-y-4 text-sm leading-7 text-foreground/80 sm:text-base"
        // This content originates from your Blogger posts.
        // Ensure only trusted content is published.
        dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
      />

      <ShareButtons title={post.title} url={postUrl} />
    </div>
  );
}
