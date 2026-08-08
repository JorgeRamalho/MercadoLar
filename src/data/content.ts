import type { NivelClube, Premio, Promocao } from '@typescript/types';

export const promocoes: Promocao[] = [
  {
    id: '1',
    titulo: 'Feira da Semana',
    descricao: 'Hortifruti selecionado com preços de atacado para todos os clientes do clube.',
    desconto: 'até 40%',
    categoria: 'Hortifruti',
    validade: 'Até domingo',
    tipo: 'encarte',
    destaque: true,
  },
  {
    id: '2',
    titulo: 'Cashback Dobrado',
    descricao: 'Compre acima de R$ 150 e ganhe 4% de cashback na próxima compra.',
    desconto: '4% cashback',
    categoria: 'Clube Mercadolar',
    validade: 'Válido este mês',
    tipo: 'cashback',
    destaque: true,
  },
  {
    id: '3',
    titulo: 'Combo Família',
    descricao: 'Arroz 5kg + Feijão 1kg + Óleo 900ml por preço especial.',
    desconto: 'R$ 29,90',
    categoria: 'Mercearia',
    validade: 'Enquanto durar o estoque',
    tipo: 'combo',
  },
  {
    id: '4',
    titulo: 'Atacado Premium',
    descricao: 'Compras acima de 6 unidades do mesmo SKU com desconto progressivo.',
    desconto: 'até 25%',
    categoria: 'Atacado',
    validade: 'Permanente',
    tipo: 'atacado',
  },
  {
    id: '5',
    titulo: 'Clube Carnes',
    descricao: 'Membros Ouro ganham 15% off em cortes selecionados às quartas-feiras.',
    desconto: '15% off',
    categoria: 'Açougue',
    validade: 'Toda quarta',
    tipo: 'clube',
  },
  {
    id: '6',
    titulo: 'Leve 3 Pague 2',
    descricao: 'Produtos de limpeza participantes — ideal para revenda e consumo.',
    desconto: '33% off',
    categoria: 'Limpeza',
    validade: 'Até 30/06',
    tipo: 'encarte',
  },
];

export const niveisClube: NivelClube[] = [
  {
    nome: 'Bronze',
    pontosMinimos: 0,
    cashback: '1%',
    beneficios: ['Pontos em todas as compras', 'Encarte digital exclusivo', 'Aniversário com bônus'],
    cor: 'from-amber-600 to-amber-800',
  },
  {
    nome: 'Prata',
    pontosMinimos: 500,
    cashback: '2%',
    beneficios: ['Cashback em compras acima de R$ 80', 'Frete grátis 1x/mês', 'Cupons personalizados'],
    cor: 'from-slate-400 to-slate-600',
  },
  {
    nome: 'Ouro',
    pontosMinimos: 2000,
    cashback: '3%',
    beneficios: ['Prioridade no caixa express', 'Descontos no açougue e padaria', 'Acesso antecipado a ofertas'],
    cor: 'from-merca-gold-400 to-merca-gold-500',
  },
  {
    nome: 'Diamante',
    pontosMinimos: 5000,
    cashback: '5%',
    beneficios: ['Limite de crédito ampliado', 'Concierge de compras', 'Sorteios mensais de prêmios'],
    cor: 'from-merca-blue-500 to-merca-blue-900',
  },
];

export const premios: Premio[] = [
  { id: '1', nome: 'Cesta Básica Premium', pontos: 800, categoria: 'Alimentos', imagem: '🧺' },
  { id: '2', nome: 'Churrasqueira a Gás', pontos: 3500, categoria: 'Eletro', imagem: '🔥' },
  { id: '3', nome: 'Smart TV 50"', pontos: 8000, categoria: 'Eletro', imagem: '📺' },
  { id: '4', nome: 'Vale-compras R$ 100', pontos: 1200, categoria: 'Vale', imagem: '💳' },
  { id: '5', nome: 'Kit Churrasco Completo', pontos: 2000, categoria: 'Utilidades', imagem: '🥩' },
  { id: '6', nome: 'Micro-ondas 20L', pontos: 4500, categoria: 'Eletro', imagem: '🍽️' },
];

export const stats = [
  { valor: '280+', label: 'Lojas no Brasil' },
  { valor: '2M+', label: 'Clientes no Clube' },
  { valor: '15mil+', label: 'Produtos no atacado' },
  { valor: 'R$ 2bi', label: 'Cashback distribuído' },
];

export const categorias = [
  { nome: 'Hortifruti', icon: '🥬', cor: 'bg-merca-green-500' },
  { nome: 'Açougue', icon: '🥩', cor: 'bg-merca-red-500' },
  { nome: 'Padaria', icon: '🍞', cor: 'bg-merca-orange-500' },
  { nome: 'Bebidas', icon: '🥤', cor: 'bg-merca-blue-500' },
  { nome: 'Limpeza', icon: '🧴', cor: 'bg-sky-500' },
  { nome: 'Mercearia', icon: '🛒', cor: 'bg-merca-gold-500' },
];
