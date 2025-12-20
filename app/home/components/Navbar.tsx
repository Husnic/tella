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
  { href: "/contact", label: "Contact" },
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
        "fixed inset-x-0 top-0 z-50 transition-all",
        isSticky
          ? "border-b border-border bg-background/80 backdrop-blur"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="inline-flex items-center justify-center rounded-md bg-white p-1.5 shadow-sm ring-1 ring-border">
            <Image
              src="/images/logo-dark.png"
              alt="Abdulwaheed Tella"
              width={132}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </span>
          <span className="sr-only">Abdulwaheed Tella</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm sm:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-background sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground"
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
