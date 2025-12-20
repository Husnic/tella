"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/about#experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = useMemo(() => navLinks, []);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY >= 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSticky
          ? "border-b border-border bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="inline-flex items-center justify-center rounded-lg bg-white p-2 shadow-md ring-1 ring-border transition-all group-hover:shadow-lg group-hover:ring-primary/20">
            <Image
              src="/images/logo-dark.png"
              alt="Abdulwaheed Tella"
              width={132}
              height={32}
              priority
              className="h-7 w-auto transition-transform group-hover:scale-105"
            />
          </span>
          <span className="sr-only">Abdulwaheed Tella</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-white sm:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Menu
        </button>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-foreground/80 transition-all hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl shadow-lg sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
