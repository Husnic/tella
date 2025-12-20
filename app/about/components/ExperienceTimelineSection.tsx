"use client";

import { useMemo, useState } from "react";

import {
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Search,
  Star,
} from "lucide-react";

import type { ExperienceItem } from "@/lib/experience";
import { EXPERIENCE_CATEGORIES } from "@/lib/experience";

type CategoryId = (typeof EXPERIENCE_CATEGORIES)[number]["id"];

function CategoryIcon({
  id,
  className = "h-4 w-4",
}: {
  id: CategoryId;
  className?: string;
}) {
  switch (id) {
    case "research":
      return <Search className={className} aria-hidden />;
    case "teaching":
      return <GraduationCap className={className} aria-hidden />;
    case "leadership":
      return <Star className={className} aria-hidden />;
    case "volunteer":
      return <Heart className={className} aria-hidden />;
    case "education":
      return <BookOpen className={className} aria-hidden />;
    case "awards":
      return <Award className={className} aria-hidden />;
    default:
      return null;
  }
}

function iconForItem(item: ExperienceItem, fallback: CategoryId): CategoryId {
  const pill = item.pill?.toLowerCase() ?? "";

  if (pill.includes("teach") || pill.includes("mentor")) return "teaching";
  if (pill.includes("leader")) return "leadership";
  if (pill.includes("volunteer")) return "volunteer";
  if (pill.includes("award") || pill.includes("commend")) return "awards";
  if (
    pill.includes("education") ||
    pill.includes("phd") ||
    pill.includes("msc")
  ) {
    return "education";
  }

  return fallback;
}

function ExperienceCards({
  items,
  fallbackIcon,
}: {
  items: ReadonlyArray<ExperienceItem>;
  fallbackIcon: CategoryId;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <article
          key={`${item.period}-${item.title}`}
          className="rounded-2xl border border-border border-b-primary bg-background p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-semibold text-foreground/80">
              {item.period}
            </p>
            {item.pill ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <CategoryIcon
                  id={iconForItem(item, fallbackIcon)}
                  className="h-3.5 w-3.5"
                />
                {item.pill}
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 flex items-start gap-2 text-base font-semibold">
            <span className="mt-0.5 text-foreground/70">
              <CategoryIcon id={iconForItem(item, fallbackIcon)} />
            </span>
            <span>{item.title}</span>
          </h3>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
          {item.description ? (
            <p className="mt-3 text-sm leading-7 text-foreground/80">
              {item.description}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export default function ExperienceTimelineSection() {
  const categories = useMemo(() => EXPERIENCE_CATEGORIES, []);
  const [activeId, setActiveId] = useState<CategoryId>(categories[0].id);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section
      id="experience"
      aria-labelledby="about-experience-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Experience
          </p>
          <h2
            id="about-experience-heading"
            className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Roles, Education & Awards
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Browse through categories to explore research, teaching, leadership,
            volunteer work, education, and honours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-secondary p-4">
              <div className="lg:hidden">
                <label
                  htmlFor="experience-category"
                  className="text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  Category
                </label>
                <select
                  id="experience-category"
                  value={activeId}
                  onChange={(event) =>
                    setActiveId(event.target.value as CategoryId)
                  }
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold outline-none focus:border-primary"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <nav
                aria-label="Experience categories"
                className="relative hidden lg:block"
              >
                <div className="absolute bottom-4 left-4 top-4 w-px bg-border" />
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = category.id === active.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveId(category.id)}
                        className={`relative flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                          isActive
                            ? "bg-background text-foreground"
                            : "text-foreground/80 hover:bg-background/60"
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${
                            isActive
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground/70"
                          }`}
                        >
                          <CategoryIcon id={category.id} />
                        </span>
                        <span
                          className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                            isActive
                              ? "border-primary bg-primary"
                              : "border-border bg-background"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive ? "bg-primary-foreground" : "bg-muted"
                            }`}
                          />
                        </span>
                        <span className="text-sm font-semibold">
                          {category.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">{active.label}</h3>
            </div>
            <ExperienceCards items={active.items} fallbackIcon={active.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
