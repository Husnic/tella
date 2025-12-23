import Image from "next/image";
import Link from "next/link";

import ExperienceTimelineSection from "@/app/about/components/ExperienceTimelineSection";

const aboutItems = [
  { label: "Name", value: "Abdulwaheed Tella" },
  {
    label: "LinkedIn",
    value: "abdulwaheedtella",
    href: "https://ng.linkedin.com/in/abdulwaheedtella",
  },
  { label: "Personal Email", value: "abdulwaheedtella@gmail.com" },
  { label: "Institutional Email", value: "abdulwaheed.tella@monash.edu" },
  { label: "Experience", value: "5+ years" },
  { label: "Freelance", value: "Available" },
  { label: "Skype", value: "tellaabdulwaheed01_1" },
  { label: "Language", value: "English" },
] as const;

export default function AboutPageContent() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-secondary px-5 py-10 shadow-xl sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-40" />
            <div className="absolute right-0 top-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  About
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Abdulwaheed{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Tella
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Researcher and data scientist specializing in geospatial
                analytics, GeoAI, climate change adaptation, and disaster risk
                reduction.
              </p>
            </div>

            <div className="relative mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="space-y-4 text-sm leading-7 text-foreground/80 sm:text-base">
                  <p>
                    I&apos;m Abdulwaheed, a passionate researcher and data
                    scientist driven by a commitment to solving real-world
                    problems through data.
                  </p>
                  <p>
                    Currently pursuing a PhD in Civil Engineering, I specialize
                    in integrating geospatial artificial intelligence (GeoAI)
                    and machine learning with environmental and urban datasets
                    to better understand and manage risks such as flooding, land
                    degradation, and climate-induced hazards.
                  </p>
                  <p>
                    Over the years, I&apos;ve cultivated advanced skills in data
                    science, remote sensing, GIS, and statistical modeling using
                    tools such as Python, R, Google Earth Engine, and ArcGIS.
                  </p>
                  <p>
                    Beyond academia, I&apos;m passionate about mentoring,
                    collaboration, and leveraging data for social good.
                  </p>
                </div>

                <dl className="mt-10 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  {aboutItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-medium text-foreground">
                        {"href" in item ? (
                          <a
                            href={item.href}
                            className="text-primary hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="md:col-span-5">
                <div className="relative mx-auto aspect-square w-full h-[384px] max-w-sm">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                  <div className="relative h-full overflow-hidden rounded-2xl border-4 border-white bg-secondary shadow-2xl ring-1 ring-border">
                    <Image
                      src="/images/AbdulWaheed_Tella1.png"
                      alt="Abdulwaheed Tella"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceTimelineSection />

      <section className="border-t border-border bg-gradient-to-b from-secondary to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-secondary px-5 py-10 shadow-xl sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-40" />
            <div className="absolute left-0 bottom-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  Contact
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s work{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  together
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Interested in collaboration, consulting, or research
                opportunities? Send a message and I&apos;ll respond as soon as
                possible.
              </p>
            </div>

            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Contact me
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
              <a
                href="/images/CV_Abdulwaheed Tella_2025.pdf"
                download="CV_Abdulwaheed_Tella_2025.pdf"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-8 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
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
      </section>
    </>
  );
}
