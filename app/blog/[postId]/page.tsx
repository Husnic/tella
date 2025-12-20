import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchBloggerPost } from "@/lib/blogger";

type PageProps = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { postId } = await params;

  const blogId = process.env.BLOGGER_BLOG_ID;

  if (!blogId) {
    return {
      title: "Blog",
      description: "Blog post",
    };
  }

  const post = await fetchBloggerPost(blogId, postId);

  if (!post) {
    return {
      title: "Blog",
      description: "Blog post",
    };
  }

  return {
    title: post.title,
    description: `Blog post: ${post.title}`,
    openGraph: {
      title: post.title,
      description: `Blog post: ${post.title}`,
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
    twitter: {
      title: post.title,
      description: `Blog post: ${post.title}`,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { postId } = await params;

  const blogId = process.env.BLOGGER_BLOG_ID;

  if (!blogId) {
    notFound();
  }

  const post = await fetchBloggerPost(blogId, postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <a
        href="/#blog"
        className="text-sm font-semibold text-primary hover:underline"
      >
        ← Back
      </a>

      <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight">
        {post.title}
      </h1>

      <div
        className="mt-6 space-y-4 text-sm leading-7 text-foreground/80 sm:text-base"
        // This content originates from your Blogger posts.
        // Ensure only trusted content is published.
        dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
      />
    </div>
  );
}
