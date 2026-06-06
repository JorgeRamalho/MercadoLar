import type { BeneficioCartao } from '@typescript/types';

export const beneficiosClube: BeneficioCartao[] = [
  { icone: '⭐', titulo: 'Pontos em toda compra', descricao: '1 ponto por real gasto', valor: '1pt/R$1' },
  { icone: '🎁', titulo: 'Prêmios exclusivos', descricao: 'Troque pontos por eletro e vales', valor: '800+ prêmios' },
  { icone: '🎂', titulo: 'Bônus de aniversário', descricao: 'Surpresa especial no seu dia', valor: '2x pontos' },
];

export const beneficiosMercadoCash: BeneficioCartao[] = [
  { icone: '💰', titulo: 'Cashback automático', descricao: 'Crédito na próxima compra', valor: 'até 5%' },
  { icone: '⚡', titulo: 'Saque imediato', descricao: 'Use no caixa ou no app', valor: 'Na hora' },
  { icone: '🔄', titulo: 'Cashback dobrado', descricao: 'Em compras acima de R$ 150', valor: '4% extra' },
];

export const beneficiosCartaoCredito: BeneficioCartao[] = [
  { icone: '💳', titulo: 'Limite pré-aprovado', descricao: 'Análise rápida na hora', valor: 'até R$ 8.000' },
  { icone: '📅', titulo: 'Até 40 dias para pagar', descricao: 'Sem anuidade no 1º ano', valor: 'Grátis' },
  { icone: '✨', titulo: 'Pontos em dobro', descricao: 'Compras com cartão Mercadolar', valor: '2x pts' },
];

export const ofertaCartaoDestaque = {
  titulo: 'Pacote Completo Mercadolar',
  subtitulo: 'Clube + MercadoCash + Cartão de Crédito',
  economia: 'Economize até R$ 1.200/ano',
  itens: [
    '100 pontos de boas-vindas',
    '1% cashback imediato no MercadoCash',
    'Limite pré-aprovado em até 2 minutos',
    'Encarte digital personalizado',
    'Ofertas Do Chão à Mesa exclusivas',
  ],
};
