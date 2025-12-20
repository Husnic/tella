"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

const testimonials = [
  {
    name: "Abdul-Lateef Balogun, PhD",
    role: "Geospatial Intelligence | Digital Leadership & Strategy | Consulting",
    meta: "Manager",
    quote:
      "Abdulwaheed is a smart, diligent and conscientious self-starter who's keen to deliver outstanding outcomes. I found him to be resilient, resourceful and very reliable. He received feedback positively and showed capacity to work well independently and as part of a team. I was impressed by his commitment to continuous improvement and I will not hesitate to hire him again for a suitable opportunity.",
    imageSrc: "/images/client/img-1.jpg",
  },
  {
    name: "Chukwuma Okolie, Ph.D",
    role: "AI | Geospatial Science",
    meta: "Collaborator",
    quote:
      "I have a very good relationship with Abdulwaheed. We have collaborated on several scientific initiatives, and have co-authored several research articles. His exceptional qualifications, track record of achievements, and commitment to excellence make him an outstanding individual and researcher. Abdulwaheed possesses a combination of intellectual rigor, creativity, and dedication, which makes him a highly valuable asset to academic and professional settings. I am confident that he will excel in future endeavors.",
    imageSrc: "/images/client/chukwuma.png",
  },
  {
    name: "Naheem Adebisi, Ph.D.",
    role: "Imagery Product Engineer at Esri",
    meta: "Colleague",
    quote:
      "Abdulwaheed Tella is an exceptional colleague with extraordinary skills, research capabilities and experience. In terms of skills, He possesses a remarkable proficiency in remote sensing, GIS analysis and Artificial Intelligence particularly machine and deep learning. His ability to work with complex geospatial dataset, utilize varios GIS tools and coding skills helped him to authored many highly cited papers in top journal some of which I had the honor of co-authoring. This also speaks to his collaborative skills.",
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
    <section id="testimonial" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Testimonials
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            LinkedIn Recommendations
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
                <div className="h-full flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 min-w-14 overflow-hidden rounded-full border border-border bg-secondary">
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
                      {"meta" in item ? (
                        <p className="mt-1 text-xs text-muted">{item.meta}</p>
                      ) : null}
                    </div>
                  </div>

                  <p className="my-auto text-sm leading-7 text-foreground/80 sm:text-base">
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
