import Image from "next/image";
import Link from "next/link";

const aboutItems = [
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

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            About Me
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Turning geospatial data into decisions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            I use GeoAI, remote sensing, and spatial analytics to translate
            complex environmental and urban data into actionable insights for
            sustainable development, climate resilience, and disaster risk
            reduction.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:order-1 md:col-span-6">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background">
              <Image
                src="/images/AbdulWaheed_Tella.png"
                alt="Abdulwaheed Tella"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:order-2 md:col-span-6">
            <h3 className="text-lg font-semibold">What I focus on</h3>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background px-4 py-4">
                <p className="text-sm font-semibold text-foreground">
                  GeoAI & spatial ML
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Feature engineering, model evaluation, and deployment-ready
                  pipelines for spatial problems.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-4">
                <p className="text-sm font-semibold text-foreground">
                  Remote sensing
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Satellite-derived indicators for land use, exposure, and
                  environmental change.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-4">
                <p className="text-sm font-semibold text-foreground">
                  Risk & resilience
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Evidence for climate adaptation, disaster risk reduction, and
                  urban planning.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-4">
                <p className="text-sm font-semibold text-foreground">
                  Data storytelling
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Clear narratives and visuals that help teams act with
                  confidence.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="hidden h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground lg:inline-flex"
              >
                Read full bio
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {aboutItems.slice(0, 3).map((item) => (
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
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Read full bio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
