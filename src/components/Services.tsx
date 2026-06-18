import Image from "next/image";
import { services } from "@/data/business";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container-px">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Serviços
            </p>
            <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
              Do olhar ao visual completo
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted">
              Cada detalhe faz a diferença. Conheça os serviços que vão transformar o seu visual.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <article className="group relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {service.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
