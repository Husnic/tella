import Image from "next/image";
import Link from "next/link";

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

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            About Me
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Abdulwaheed Tella
          </h2>
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
            <h3 className="text-lg font-semibold">
              Geospatial Analyst & Researcher
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              I&apos;m a researcher and data scientist focused on GeoAI,
              geospatial analytics, climate change adaptation, and disaster risk
              reduction.
            </p>

            <div className="mt-6">
              <Link
                href="/about"
                className="hidden h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground lg:inline-flex"
              >
                Read full bio
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {aboutItems.slice(0, 4).map((item) => (
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
