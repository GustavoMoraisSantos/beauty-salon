import { aboutCard, business } from "@/data/business";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="sobre" className="bg-ink py-20 md:py-28">
      <div className="container-px grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <SectionTitle
            eyebrow="Sobre"
            title="Paixão por valorizar a beleza única de cada cliente"
            description={business.description}
          />
          <div className="mt-6 space-y-2">
            {business.credentials.map((cred) => (
              <p key={cred} className="text-sm text-muted">
                • {cred}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-brand/20 bg-ink-soft/80 p-8 backdrop-blur-sm">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand">
            {business.shortName}
          </p>
          <ul className="space-y-4">
            {aboutCard.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
                />
                <span className="text-base text-cloud">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
