/** Configuração centralizada — marca, app, rotas e assets */

export const APP_CONFIG = {
  nome: 'Mercadolar',
  slogan: 'Economia de verdade',
  tagline: 'Varejo & Atacado',
  mascote: 'Dolarzinho',
  telefone: '0800 123 4567',
  email: 'contato@mercadolar.com.br',
  pontosBoasVindas: 100,
  cashbackInicial: '1%',
  siteUrl:
    (import.meta.env.VITE_SITE_URL as string | undefined) ??
    'https://www.mercadolar.com.br',
} as const;

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mercadolar',
  whatsapp: 'https://wa.me/5511999999999',
  youtube: 'https://www.youtube.com/@mercadolar',
} as const;

export const ROTAS = {
  inicio: '/',
  varejo: '/varejo',
  atacado: '/atacado',
  clube: '/clube',
  promocoes: '/promocoes',
  cadastro: '/cadastro',
  lojas: '/lojas',
  termos: '/termos',
  privacidade: '/privacidade',
} as const;

export const BRAND = {
  nome: APP_CONFIG.nome,
  slogan: APP_CONFIG.slogan,
  tagline: APP_CONFIG.tagline,
  descricao:
    'Rede de supermercados brasileira com forte presença no varejo e atacado. Qualidade, preço justo e benefícios para toda a família.',
  mascote: {
    nome: APP_CONFIG.mascote,
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

export const IMAGE_WIDTHS = [400, 800, 1200] as const;

export type OptimizedImageAsset =
  | 'mercadolar-logo'
  | 'mercadolar-avatar'
  | 'mercadolar-mascot'
  | 'mercadolar-hero-banner';

export const BRAND_ASSETS = {
  logo: '/brand/logo.svg',
  logoWhite: '/brand/logo-white.svg',
  logoIcon: '/brand/logo-icon.svg',
  logoPng: '/brand/mercadolar-logo.png',
  avatar: '/brand/mercadolar-avatar.png',
  mascote: '/brand/mercadolar-mascot.png',
  heroBanner: '/brand/mercadolar-hero-banner.png',
  favicon: '/brand/logo-icon.svg',
} as const;

/** @deprecated Use BRAND_ASSETS — mantido para compatibilidade */
export const BRAND_PATHS = BRAND_ASSETS;

export const OPTIMIZED_ASSETS = {
  logoPng: 'mercadolar-logo',
  avatar: 'mercadolar-avatar',
  mascote: 'mercadolar-mascot',
  heroBanner: 'mercadolar-hero-banner',
} as const satisfies Record<string, OptimizedImageAsset>;

export const BRAND_GALLERY = [
  {
    id: 'logo',
    titulo: 'Logomarca',
    descricao: 'Logo principal horizontal com ícone, nome e slogan.',
    asset: OPTIMIZED_ASSETS.logoPng,
    tipo: 'logo',
  },
  {
    id: 'avatar',
    titulo: 'Avatar / Ícone',
    descricao: 'Marca reduzida para redes sociais, app e favicon.',
    asset: OPTIMIZED_ASSETS.avatar,
    tipo: 'avatar',
  },
  {
    id: 'mascote',
    titulo: 'Mascote Dolarzinho',
    descricao: 'Figura amigável que representa o atendimento Mercadolar.',
    asset: OPTIMIZED_ASSETS.mascote,
    tipo: 'mascote',
  },
  {
    id: 'hero',
    titulo: 'Banner Institucional',
    descricao: 'Imagem hero para site, campanhas e materiais digitais.',
    asset: OPTIMIZED_ASSETS.heroBanner,
    tipo: 'banner',
  },
] as const;
