import Image from "next/image";

const stats = [
  { value: "13", label: "Publications" },
  { value: "7+", label: "Years of\nexperience" },
  { value: "6+", label: "Conference" },
  { value: "9+", label: "Awards" },
] as const;

export default function StatsBannerSection() {
  return (
    <section
      aria-labelledby="stats-banner-heading"
      className="border-t border-border bg-foreground text-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-foreground">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80"
              alt=""
              fill
              className="object-cover opacity-25"
              priority={false}
            />
            <div className="absolute inset-0 bg-dot-pattern-dark opacity-90" />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          <div className="relative px-5 py-12 sm:px-10">
            <h2
              id="stats-banner-heading"
              className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Abdulwaheed Tella Geospatial Analyst & Researcher based in
              Malaysia
            </h2>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-xs font-medium text-background/80">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/CV_Abdulwaheed_Tella_2025.pdf"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
