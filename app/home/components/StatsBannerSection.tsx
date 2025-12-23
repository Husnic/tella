import { EXPERIENCE_STATS } from "@/lib/experience";
import Image from "next/image";

const stats = [
  { value: EXPERIENCE_STATS.publications, label: "Publications" },
  { value: EXPERIENCE_STATS.yearsOfExperience, label: "Years of\nexperience" },
  { value: EXPERIENCE_STATS.conferences, label: "Conference" },
  { value: EXPERIENCE_STATS.awards, label: "Awards" },
] as const;

export default function StatsBannerSection() {
  return (
    <section
      aria-labelledby="stats-banner-heading"
      className="relative border-t border-border bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-foreground to-foreground/95 shadow-2xl">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80"
              alt=""
              fill
              className="object-cover opacity-50"
              priority={false}
            />
            <div className="absolute inset-0 bg-dot-pattern-dark opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/80 to-primary/30" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
          </div>

          <div className="relative px-5 py-12 sm:px-10">
            <div className="mx-auto mb-6 w-fit rounded-full bg-primary/20 px-4 py-1.5 ring-1 ring-primary/30">
              <span className="text-xs font-bold uppercase tracking-wide text-primary-foreground">
                Impact & Achievements
              </span>
            </div>
            <h2
              id="stats-banner-heading"
              className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Abdulwaheed Tella{" "}
              <span className="text-primary">Geospatial Analyst</span> &
              Researcher based in Malaysia
            </h2>

            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="group text-center">
                  <div className="mx-auto w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-lg backdrop-blur transition-all hover:bg-white/10 hover:shadow-xl">
                    <p className="text-4xl font-bold tracking-tight text-background sm:text-5xl">
                      {item.value}
                    </p>
                    <p className="mt-2 whitespace-pre-line text-xs font-semibold uppercase tracking-wide text-background/90">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="/images/CV_Abdulwaheed Tella_2025.pdf"
                download="CV_Abdulwaheed_Tella_2025.pdf"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
