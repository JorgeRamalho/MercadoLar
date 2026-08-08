import { APP_CONFIG } from '@/config';

export const SITE_URL = APP_CONFIG.siteUrl;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/brand/mercadolar-logo-800.webp`;

export interface PageMetaData {
  title: string;
  description: string;
  path: string;
}

const BASE_TITLE = APP_CONFIG.nome;

export const PAGE_META: Record<string, PageMetaData> = {
  '/': {
    title: `${BASE_TITLE} — Economia de verdade | Varejo & Atacado`,
    description:
      'Mercadolar — Rede de supermercados com varejo e atacado. Clube de fidelidade, cashback, promoções e cartão de crédito.',
    path: '/',
  },
  '/varejo': {
    title: `Varejo | ${BASE_TITLE}`,
    description:
      'Supermercado completo para o dia a dia — hortifruti fresco, padaria, açougue e clube com cashback.',
    path: '/varejo',
  },
  '/atacado': {
    title: `Atacado | ${BASE_TITLE}`,
    description:
      'Grandes volumes com preço de atacado. +15.000 SKUs, desconto progressivo e condições para CNPJ.',
    path: '/atacado',
  },
  '/clube': {
    title: `Clube Mercadolar — Fidelidade e Cashback | ${BASE_TITLE}`,
    description:
      'Programa de fidelidade com pontos, cashback progressivo, prêmios e cartão de crédito Mercadolar.',
    path: '/clube',
  },
  '/promocoes': {
    title: `Promoções e Ofertas | ${BASE_TITLE}`,
    description:
      'Encartes semanais, combos, cashback dobrado e ofertas exclusivas para membros do clube.',
    path: '/promocoes',
  },
  '/cadastro': {
    title: `Cadastre-se Grátis | ${BASE_TITLE}`,
    description:
      'Cadastro gratuito: Clube Mercadolar, MercadoCash e cartão de crédito em um único formulário.',
    path: '/cadastro',
  },
  '/termos': {
    title: `Termos de Uso | ${BASE_TITLE}`,
    description: 'Termos de uso do site e dos programas Mercadolar.',
    path: '/termos',
  },
  '/privacidade': {
    title: `Política de Privacidade | ${BASE_TITLE}`,
    description: 'Como o Mercadolar coleta, usa e protege seus dados pessoais.',
    path: '/privacidade',
  },
  '/lojas': {
    title: `Nossas Lojas | ${BASE_TITLE}`,
    description:
      'Encontre unidades Mercadolar no Brasil — varejo, atacado e lojas mistas com telefone e endereço.',
    path: '/lojas',
  },
};

export function getPageMeta(pathname: string): PageMetaData {
  return PAGE_META[pathname] ?? PAGE_META['/'];
}

export function getCanonicalUrl(pathname: string): string {
  const path = pathname === '/' ? '' : pathname;
  return `${SITE_URL}${path}`;
}
