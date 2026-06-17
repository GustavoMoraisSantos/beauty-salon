/**
 * Dados editáveis do negócio.
 *
 * Centralize aqui todas as informações comerciais (nome, contatos, textos,
 * diferenciais, serviços e redes sociais). Os componentes consomem este
 * arquivo, então para atualizar o site basta editar os valores abaixo.
 */

const whatsappNumber = "5544999442114";
const whatsappMessage =
  "Olá! Vim pelo site e gostaria de agendar um horário.";

export const business = {
  name: "Monica Bonifácio",
  shortName: "Monica Bonifácio",
  segment: "Sobrancelhas, Cílios, Maquiagem e Penteados",
  tagline: "Realçando a sua beleza natural",
  description:
    "Especialista em design de sobrancelhas, extensão de cílios (Lash Designer), maquiagem profissional e penteados. Com formação certificada e paixão por valorizar a beleza única de cada cliente, oferecendo atendimento personalizado e resultados que encantam.",

  logo: "/logo-monica.png",

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

  /** Certificações e formações */
  credentials: [
    "Artista em Sobrancelhas por @nanda.gamma",
    "Promotora/Mentora de Saúde Ocular @dr.marcelobrito",
    "Curso Lash Designer / Ct.Ntl e Int @beautyeyes_produtoss",
  ],

  openingHours: "Atendimento com hora marcada – agende pelo WhatsApp.",
} as const;

export const differentials = [
  {
    title: "Atendimento personalizado",
    text: "Cada cliente é única. O atendimento é feito com atenção aos detalhes para valorizar o que você tem de melhor.",
  },
  {
    title: "Técnicas atualizadas",
    text: "Formação contínua com referências nacionais para oferecer as técnicas mais modernas do mercado.",
  },
  {
    title: "Saúde e segurança",
    text: "Produtos de qualidade e protocolos de higiene para garantir resultados seguros e duradouros.",
  },
  {
    title: "Ambiente acolhedor",
    text: "Espaço pensado para o seu conforto e bem-estar durante todo o procedimento.",
  },
] as const;

export const serviceCategories = [
  {
    title: "Design de Sobrancelhas",
    text: "Modelagem personalizada com técnicas de visagismo para harmonizar o rosto e realçar o olhar.",
  },
  {
    title: "Extensão de Cílios",
    text: "Lash Design com fios de alta qualidade. Efeitos naturais, boneca ou fox eyes sob medida.",
  },
  {
    title: "Maquiagem Profissional",
    text: "Maquiagem para eventos, noivas, formaturas e ensaios fotográficos com produtos premium.",
  },
  {
    title: "Penteados",
    text: "Penteados sofisticados para casamentos, festas e ocasiões especiais.",
  },
] as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;

export const aboutCard = [
  "Especialista em design de sobrancelhas",
  "Lash Designer certificada",
  "Maquiadora e penteadista profissional",
  "Promotora de saúde ocular",
] as const;

export const heroBadges = [
  "Sobrancelhas",
  "Cílios",
  "Maquiagem",
  "Penteados",
] as const;
