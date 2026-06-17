import { serviceCategories } from "@/data/business";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="servicos" className="bg-ink-soft py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow="Serviços"
            title="Do olhar ao visual completo"
            description="Serviços especializados para realçar a sua beleza com técnica, cuidado e produtos de qualidade."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-white/5 bg-ink p-6 transition-colors hover:border-brand/40">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-cloud">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
