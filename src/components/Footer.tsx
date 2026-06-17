import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-12">
      <div className="container-px">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="text-base font-bold text-cloud">
              {business.name}
            </span>
            <p className="mt-3 text-sm text-muted">
              {business.segment}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={business.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  Instagram: {business.social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={business.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  WhatsApp: {business.phone.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-muted/70">
            Site institucional desenvolvido para apresentação profissional.
          </p>
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} {business.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
