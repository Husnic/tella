"use client";

import { useState } from "react";

export default function ContactSection({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:abdulwaheedtella@gmail.com?subject=${encodeURIComponent(
    `Portfolio contact from ${name || ""}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  return (
    <section id="contact" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background px-5 py-10 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern-light opacity-60" />

          {showHeader ? (
            <div className="relative text-center">
              <p className="inline-flex rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Contact Me
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Get in Touch
              </h2>
            </div>
          ) : null}

          <div
            className={`relative grid grid-cols-1 gap-6 md:grid-cols-12 ${
              showHeader ? "mt-10" : "mt-0"
            }`}
          >
            <div className="rounded-2xl border border-border bg-card p-6 md:col-span-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Your Message"
                  />
                </div>

                <a
                  href={mailtoHref}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  Send Message
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:col-span-6">
              <h3 className="text-base font-semibold">Contact Information</h3>

              <dl className="mt-4 space-y-3 text-sm text-foreground/80">
                <div>
                  <dt className="font-semibold text-foreground">Email:</dt>
                  <dd className="mt-1">
                    <a
                      className="text-primary hover:underline"
                      href="mailto:abdulwaheedtella@gmail.com"
                    >
                      abdulwaheedtella@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">LinkedIn:</dt>
                  <dd className="mt-1">
                    <a
                      className="text-primary hover:underline"
                      href="https://ng.linkedin.com/in/abdulwaheedtella"
                      target="_blank"
                      rel="noreferrer"
                    >
                      abdulwaheedtella
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Phone:</dt>
                  <dd className="mt-1">+60102486014</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Location:</dt>
                  <dd className="mt-1">Selangor, Malaysia</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
