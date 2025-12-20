import Link from "next/link";

export default function HomeContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="home-contact-heading"
      className="border-t border-border bg-primary text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-primary px-5 py-10 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-dark opacity-70" />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                Contact
              </p>
              <h2
                id="home-contact-heading"
                className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Let&apos;s talk about your project
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-primary-foreground/80 sm:text-base">
                For collaborations, consulting, or research opportunities, send
                a quick note and I will get back to you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-primary"
                >
                  Open contact form
                </Link>
                <a
                  href="mailto:abdulwaheedtella@gmail.com"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 text-sm font-semibold text-primary-foreground"
                >
                  Email directly
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-6">
                <h3 className="text-base font-semibold text-primary-foreground">
                  Quick contact
                </h3>
                <dl className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                  <div>
                    <dt className="font-semibold text-primary-foreground">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        className="text-primary-foreground hover:underline"
                        href="mailto:abdulwaheedtella@gmail.com"
                      >
                        abdulwaheedtella@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary-foreground">
                      LinkedIn
                    </dt>
                    <dd className="mt-1">
                      <a
                        className="text-primary-foreground hover:underline"
                        href="https://ng.linkedin.com/in/abdulwaheedtella"
                        target="_blank"
                        rel="noreferrer"
                      >
                        abdulwaheedtella
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary-foreground">
                      Phone
                    </dt>
                    <dd className="mt-1">+60102486014</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary-foreground">
                      Location
                    </dt>
                    <dd className="mt-1">Selangor, Malaysia</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
