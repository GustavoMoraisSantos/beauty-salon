import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-dark/5 bg-base-soft py-12">
      <div className="container-px">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-dark">
              {business.name}
            </p>
            <p className="mt-1 text-sm text-muted">{business.segment}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={business.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Instagram
            </a>
            <span className="h-4 w-px bg-dark/10" />
            <a
              href={business.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-dark/5 pt-6 text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {business.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
