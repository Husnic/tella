import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Geospatial Analysis",
    subtitle: "Data-Driven Insights",
    description:
      "Utilizing geospatial data to provide actionable insights for environmental challenges.",
    iconSrc: "/images/service-icon/01.svg",
  },
  {
    title: "Research & Development",
    subtitle: "Innovative Solutions",
    description:
      "Conducting research to develop innovative solutions for environmental sustainability.",
    iconSrc: "/images/service-icon/02.svg",
  },
  {
    title: "Environmental Consulting",
    subtitle: "Sustainable Practices",
    description:
      "Advising on sustainable practices and strategies for environmental resilience.",
    iconSrc: "/images/service-icon/03.svg",
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary px-5 py-10 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-70" />

          <div className="relative">
            <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Services
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              My Expertise
            </h2>

            <div className="mt-6 hidden flex-col gap-3 lg:flex lg:flex-row lg:items-center">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                Contact me
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-secondary">
                    <Image
                      src={service.iconSrc}
                      alt=""
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground/70">
                    {service.title}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold">
                  {service.subtitle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-10 flex flex-col gap-3 lg:hidden">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Contact me
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
