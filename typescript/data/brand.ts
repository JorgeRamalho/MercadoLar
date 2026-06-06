export const BRAND = {
  nome: 'Mercadolar',
  slogan: 'Economia de verdade',
  tagline: 'Varejo & Atacado',
  descricao:
    'Rede de supermercados brasileira com forte presença no varejo e atacado. Qualidade, preço justo e benefícios para toda a família.',
  mascote: {
    nome: 'Dolarzinho',
    descricao: 'Mascote oficial do Mercadolar — sempre pronto para ajudar você a economizar.',
  },
  cores: {
    azul: '#003D7A',
    verde: '#2D8A4E',
    vermelho: '#E31E24',
    dourado: '#FFB800',
    laranja: '#F47B20',
  },
} as const;

export const BRAND_ASSETS = {
  logo: '/brand/logo.svg',
  logoWhite: '/brand/logo-white.svg',
  logoIcon: '/brand/logo-icon.svg',
  logoPng: '/brand/mercadolar-logo.png',
  avatar: '/brand/mercadolar-avatar.png',
  mascote: '/brand/mercadolar-mascot.png',
  heroBanner: '/brand/mercadolar-hero-banner.png',
  favicon: '/favicon.svg',
} as const;

export const BRAND_GALLERY = [
  {
    id: 'logo',
    titulo: 'Logomarca',
    descricao: 'Logo principal horizontal com ícone, nome e slogan.',
    imagem: BRAND_ASSETS.logoPng,
    tipo: 'logo',
  },
  {
    id: 'avatar',
    titulo: 'Avatar / Ícone',
    descricao: 'Marca reduzida para redes sociais, app e favicon.',
    imagem: BRAND_ASSETS.avatar,
    tipo: 'avatar',
  },
  {
    id: 'mascote',
    titulo: 'Mascote Dolarzinho',
    descricao: 'Figura amigável que representa o atendimento Mercadolar.',
    imagem: BRAND_ASSETS.mascote,
    tipo: 'mascote',
  },
  {
    id: 'hero',
    titulo: 'Banner Institucional',
    descricao: 'Imagem hero para site, campanhas e materiais digitais.',
    imagem: BRAND_ASSETS.heroBanner,
    tipo: 'banner',
  },
] as const;
