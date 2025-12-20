"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

const testimonials = [
  {
    name: "Robert Beck",
    role: "Product Designer",
    quote:
      "Abdulwaheed's expertise in geospatial analysis has significantly improved our project outcomes. His insights are invaluable.",
    imageSrc: "/images/client/img-1.jpg",
  },
  {
    name: "William Appel",
    role: "Founder & CEO",
    quote:
      "Working with Abdulwaheed was a game-changer for our environmental initiatives. His research is top-notch.",
    imageSrc: "/images/client/img-2.jpg",
  },
  {
    name: "Earlene Mart",
    role: "Digital Marketer",
    quote:
      "Abdulwaheed's dedication to sustainable practices has made a significant impact on our projects. Highly recommended!",
    imageSrc: "/images/client/img-3.jpg",
  },
  {
    name: "Timothy Green",
    role: "Marketing Officer",
    quote:
      "His analytical skills and attention to detail are exceptional. Abdulwaheed is a true asset to any team.",
    imageSrc: "/images/client/img-4.jpg",
  },
] as const;

export default function TestimonialsSection() {
  const items = useMemo(() => testimonials, []);
  const [index, setIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (nextIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const normalizedIndex =
      ((nextIndex % items.length) + items.length) % items.length;
    const target = track.querySelector<HTMLDivElement>(
      `[data-index="${normalizedIndex}"]`
    );
    if (!target) return;

    const left = target.offsetLeft;
    track.scrollTo({ left, behavior: "smooth" });
    setIndex(normalizedIndex);
  };

  return (
    <section id="testimonial" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Testimonials
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Clients Feedback
          </h2>
        </div>

        <div className="mt-10">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, idx) => (
              <div
                key={`${item.name}-${item.role}`}
                data-index={idx}
                className="w-[88%] shrink-0 snap-start sm:w-[60%] lg:w-[42%]"
              >
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border bg-secondary">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-muted">{item.role}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-foreground/80 sm:text-base">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              onClick={() => scrollToIndex(index - 1)}
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              onClick={() => scrollToIndex(index + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
