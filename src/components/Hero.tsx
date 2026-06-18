import Image from "next/image";
import { business } from "@/data/business";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-20"
    >
      <div className="container-px grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-in-up py-12 lg:py-20">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {business.segment}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-dark sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {business.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar horário
            </a>
            <a href="#portfolio" className="btn-outline">
              Ver portfólio
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="animate-fade-in relative aspect-[3/4] w-full max-w-md ml-auto overflow-hidden">
            <div className="absolute inset-0 border-2 border-accent/20 translate-x-4 translate-y-4" />
            <Image
              src={business.profilePhoto}
              alt={business.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 0vw, 400px"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
