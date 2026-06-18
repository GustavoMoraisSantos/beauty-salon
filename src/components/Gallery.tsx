import Image from "next/image";
import { galleryItems } from "@/data/business";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="portfolio" className="bg-dark py-24 md:py-32">
      <div className="container-px">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Portfólio
            </p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Alguns dos meus trabalhos
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 columns-2 gap-4 sm:columns-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.alt} delay={index * 80}>
              <div className="mb-4 break-inside-avoid overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
