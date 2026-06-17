import { business, heroBadges } from "@/data/business";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pt-28 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
      />

      <div className="container-px relative grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            {business.segment}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-cloud sm:text-4xl md:text-5xl">
            {business.tagline},{" "}
            <span className="text-brand">com cuidado e técnica</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {business.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <a href="#servicos" className="btn-secondary">
              Conheça os serviços
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:max-w-lg">
            {heroBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-xl border border-white/5 bg-ink-soft px-4 py-3 text-sm font-medium text-cloud"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-brand/20 bg-ink-soft p-8 shadow-2xl sm:h-80 sm:w-80">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent"
            />
            <div className="relative flex flex-col items-center gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/20">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-brand" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-cloud">{business.shortName}</p>
              <p className="text-sm text-muted">{business.segment}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
