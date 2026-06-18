import { business } from "@/data/business";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-base-soft py-24 md:py-32">
      <div className="container-px grid items-center gap-16 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-dark md:text-4xl">
            Paixão por valorizar a beleza de cada cliente
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {business.description}
          </p>
          <div className="mt-8 space-y-3">
            {business.credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm text-dark-soft">{cred}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-accent-subtle p-8 text-center">
                  <p className="font-display text-3xl font-bold text-accent">4+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">Anos de experiência</p>
                </div>
                <div className="bg-dark p-8 text-center">
                  <p className="font-display text-3xl font-bold text-white">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Dedicação</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="bg-dark p-8 text-center">
                  <p className="font-display text-3xl font-bold text-accent">3</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Certificações</p>
                </div>
                <div className="bg-accent-subtle p-8 text-center">
                  <p className="font-display text-3xl font-bold text-accent">4</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">Especialidades</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
