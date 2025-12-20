import Image from "next/image";

export default function PageHeaderBanner({
  title,
  eyebrow,
  description,
  imageSrc = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=80",
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  imageSrc?: string;
}) {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 md:pt-12">
        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-foreground">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover opacity-20"
              priority={false}
            />
            <div className="absolute inset-0 bg-dot-pattern-dark opacity-90" />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          <div className="relative px-5 py-12 sm:px-10">
            {eyebrow ? (
              <p className="inline-flex rounded-full border border-primary/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-background/80 sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
