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
      <section className="bg-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary px-5 py-10 sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-60" />

            <div className="relative text-center">
              <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                About
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Abdulwaheed Tella
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
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
                      className="rounded-lg border border-border bg-background px-4 py-3"
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
                <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-background">
                  <Image
                    src="/images/AbdulWaheed_Tella.jpg"
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
      </section>

      <ExperienceTimelineSection />

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="rounded-3xl border border-border bg-secondary px-5 py-10 sm:px-10">
            <div className="text-center">
              <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Contact
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s work together
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Interested in collaboration, consulting, or research
                opportunities? Send a message and I&apos;ll respond as soon as
                possible.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                Contact me
              </Link>
              <a
                href="/CV_Abdulwaheed_Tella_2025.pdf"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
