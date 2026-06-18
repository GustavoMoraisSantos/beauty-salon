/**
 * Dados editáveis do negócio.
 *
 * Centralize aqui todas as informações comerciais. Os componentes consomem
 * este arquivo — para atualizar o site basta editar os valores abaixo.
 */

const whatsappNumber = "5544999442114";
const whatsappMessage =
  "Olá! Vim pelo site e gostaria de agendar um horário.";

export const business = {
  name: "Monica Bonifácio",
  shortName: "Monica Bonifácio",
  segment: "Sobrancelhas, Cílios, Maquiagem e Penteados",
  tagline: "A arte de realçar a sua beleza",
  description:
    "Especialista em design de sobrancelhas, extensão de cílios (Lash Designer), maquiagem profissional e penteados. Com formação certificada e paixão por valorizar a beleza única de cada cliente.",

  profilePhoto: "/monica-perfil.png",

  phone: {
    display: "(44) 99944-2114",
    raw: "5544999442114",
  },

  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    get url() {
      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    },
  },

  social: {
    instagram: {
      handle: "@m_monicabonifacio",
      url: "https://www.instagram.com/m_monicabonifacio/",
    },
  },

  credentials: [
    "Artista em Sobrancelhas por @nanda.gamma",
    "Promotora/Mentora de Saúde Ocular @dr.marcelobrito",
    "Curso Lash Designer / Ct.Ntl e Int @beautyeyes_produtoss",
  ],

  openingHours: "Atendimento com hora marcada – agende pelo WhatsApp.",
} as const;

export const services = [
  {
    title: "Design de Sobrancelhas",
    text: "Modelagem personalizada com técnicas de visagismo para harmonizar o rosto e realçar o olhar.",
    image: "/galeria/sobrancelhas.png",
  },
  {
    title: "Extensão de Cílios",
    text: "Lash Design com fios de alta qualidade. Efeitos naturais, boneca ou fox eyes sob medida.",
    image: "/galeria/cilios-aplicacao.png",
  },
  {
    title: "Maquiagem Profissional",
    text: "Maquiagem para eventos, noivas, formaturas e ensaios fotográficos com produtos premium.",
    image: "/galeria/modelo-ruiva.png",
  },
  {
    title: "Penteados",
    text: "Penteados sofisticados para casamentos, festas e ocasiões especiais.",
    image: "/galeria/noiva-penteado.png",
  },
] as const;

export const galleryItems = [
  { image: "/galeria/noiva-penteado.png", alt: "Noiva com penteado elegante" },
  { image: "/galeria/noiva-maquiagem.png", alt: "Maquiagem para noiva" },
  { image: "/galeria/sobrancelhas.png", alt: "Design de sobrancelhas" },
  { image: "/galeria/modelo-ruiva.png", alt: "Maquiagem editorial" },
  { image: "/galeria/cilios-aplicacao.png", alt: "Extensão de cílios" },
] as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
] as const;
