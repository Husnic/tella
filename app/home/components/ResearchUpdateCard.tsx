"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ResearchUpdateCardProps {
  post: {
    id: string;
    title: string;
    imageUrl?: string;
  };
}

export default function ResearchUpdateCard({ post }: ResearchUpdateCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-md transition-all hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
        {!imageError && post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <svg
              className="h-16 w-16 text-primary/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold leading-6 text-foreground">
          <Link
            href={`/research/${post.id}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/research/${post.id}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
          >
            Read update
            <svg
              className="h-3 w-3 transition-transform group-hover:translate-x-1"
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
  );
}
