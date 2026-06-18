"use client";

import { useState } from "react";
import Link from "next/link";
import { business, navLinks } from "@/data/business";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-base/80 backdrop-blur-md">
      <div className="container-px flex h-20 items-center justify-between">
        <Link
          href="#inicio"
          className="font-display text-xl font-bold tracking-tight text-dark"
          onClick={() => setOpen(false)}
        >
          {business.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={business.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-light md:block"
        >
          Agendar
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center text-dark md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-dark/5 bg-base md:hidden">
          <nav className="container-px flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium uppercase tracking-wider text-dark transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-primary text-center"
            >
              Agendar horário
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
