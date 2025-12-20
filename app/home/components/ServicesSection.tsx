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
    <section
      id="services"
      className="relative border-t border-border bg-gradient-to-b from-secondary to-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-secondary px-5 py-10 shadow-xl sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-50" />
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-32 -translate-y-32 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 ring-1 ring-primary/20">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">
                Services
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <div className="mt-6 hidden flex-col gap-3 lg:flex lg:flex-row lg:items-center">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
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
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border-2 border-primary bg-white px-6 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const colors = [
                {
                  border: "border-primary/20",
                  bg: "bg-gradient-to-br from-primary/5 to-primary/10",
                  icon: "bg-primary/10",
                  shadow: "hover:shadow-primary/10",
                },
                {
                  border: "border-accent/20",
                  bg: "bg-gradient-to-br from-accent/5 to-accent/10",
                  icon: "bg-accent/10",
                  shadow: "hover:shadow-accent/10",
                },
                {
                  border: "border-success/20",
                  bg: "bg-gradient-to-br from-success/5 to-success/10",
                  icon: "bg-success/10",
                  shadow: "hover:shadow-success/10",
                },
              ];
              const color = colors[idx % colors.length];
              return (
                <div
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl border ${color.border} ${color.bg} p-6 shadow-md transition-all hover:shadow-lg ${color.shadow}`}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-white/20 blur-2xl" />
                  <div className="relative flex items-center gap-3">
                    <div
                      className={`relative h-12 w-12 overflow-hidden rounded-xl ${color.icon} shadow-sm`}
                    >
                      <Image
                        src={service.iconSrc}
                        alt=""
                        fill
                        className="object-contain p-2.5"
                      />
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {service.title}
                    </span>
                  </div>

                  <h3 className="relative mt-4 text-base font-bold text-foreground">
                    {service.subtitle}
                  </h3>
                  <p className="relative mt-2 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative mt-10 flex flex-col gap-3 lg:hidden">
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
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-primary bg-white px-8 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
