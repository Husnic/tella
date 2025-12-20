"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

const testimonials = [
  {
    name: "Abdul-Lateef Balogun, PhD",
    role: "Geospatial Intelligence | Digital Leadership & Strategy | Consulting",
    meta: "Manager",
    quote:
      "Abdulwaheed is a smart, diligent and conscientious self-starter who's keen to deliver outstanding outcomes. I found him to be resilient, resourceful and very reliable. I was impressed by his commitment to continuous improvement and I will not hesitate to hire him again for a suitable opportunity.",
    imageSrc: "/images/client/img-1.jpg",
  },
  {
    name: "Chukwuma Okolie, Ph.D",
    role: "AI | Geospatial Science",
    meta: "Collaborator",
    quote:
      "I have a very good relationship with Abdulwaheed. We have collaborated on several scientific initiatives, and have co-authored several research articles. His exceptional qualifications, track record of achievements, and commitment to excellence make him an outstanding individual and researcher.",
    imageSrc: "/images/client/chukwuma.png",
  },
  {
    name: "Naheem Adebisi, Ph.D.",
    role: "Imagery Product Engineer at Esri",
    meta: "Colleague",
    quote:
      "Abdulwaheed Tella is an exceptional colleague with extraordinary skills, research capabilities and experience. His ability to work with complex geospatial dataset, utilize varios GIS tools and coding skills helped him to authored many highly cited papers in top journal some of which I had the honor of co-authoring.",
    imageSrc: "/images/client/naheem.png",
  },
  {
    name: "Shamsudeen Yekeen",
    role: "Ph.D Candidate | GIS & Remote Sensing",
    meta: "Teammate",
    quote:
      "I have collaborated with Abdulwaheed on various geospatial analysis projects, and his commitment, meticulousness, and collaborative spirit consistently position him as my preferred partner.",
    imageSrc: "/images/client/shamsudeen.png",
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
    <section
      id="testimonial"
      className="relative border-t border-border bg-gradient-to-b from-white to-secondary"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Colleagues Say
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Recommendations from collaborators and colleagues.
          </p>
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
                <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative flex items-center gap-4">
                    <div className="relative h-14 w-14 min-w-14 overflow-hidden rounded-full border-2 border-primary/20 bg-secondary shadow-md">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-muted">{item.role}</p>
                      {"meta" in item ? (
                        <p className="mt-1 text-xs font-semibold text-primary">
                          {item.meta}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="relative my-auto">
                    <svg
                      className="absolute -left-2 -top-2 h-8 w-8 text-primary/20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                    </svg>
                    <p className="relative py-3 text-sm leading-7 text-muted sm:text-base">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full border-2 border-primary bg-white px-6 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              onClick={() => scrollToIndex(index - 1)}
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
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
