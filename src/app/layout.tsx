import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = `${business.name} | ${business.segment}`;
const description = `Site institucional de ${business.name} – ${business.segment}. Atendimento personalizado com hora marcada.`;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://monicabonifacio.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Monica Bonifácio",
    "Design de sobrancelhas",
    "Extensão de cílios",
    "Lash Designer",
    "Maquiagem profissional",
    "Penteados",
    "Sobrancelhas",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    images: [
      {
        url: business.logo,
        alt: `Logo – ${business.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
