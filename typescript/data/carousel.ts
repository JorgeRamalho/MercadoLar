import type { CarouselSlide } from '@typescript/types';

export const carouselMarcas: CarouselSlide[] = [
  {
    id: '1',
    marca: 'Do Chão à Mesa',
    tagline: 'Da terra à sua mesa',
    descricao:
      'Linha exclusiva zero agrotóxicos e zero pesticidas. Produtos orgânicos certificados com rastreabilidade total.',
    selo: '100% Orgânico',
    cor: 'from-emerald-800 via-emerald-600 to-green-500',
    icone: '🌱',
    destaque: true,
  },
  {
    id: '2',
    marca: 'Reserva Mercadolar',
    tagline: 'Alta gastronomia',
    descricao:
      'Seleção premium de queijos artesanais, vinhos finos e embutidos de produtores renomados.',
    selo: 'Premium',
    cor: 'from-amber-900 via-amber-700 to-yellow-600',
    icone: '🧀',
  },
  {
    id: '3',
    marca: 'Fazenda Viva',
    tagline: 'Hortifruti de excelência',
    descricao:
      'Frutas e verduras colhidas no dia, cultivadas com agricultura regenerativa e fino trato.',
    selo: 'Colheita do dia',
    cor: 'from-lime-800 via-green-700 to-emerald-500',
    icone: '🥬',
  },
  {
    id: '4',
    marca: 'Ouro Verde',
    tagline: 'Azeites & especiarias',
    descricao:
      'Azeite extra virgem premiado, temperos importados e molhos gourmet de padrão internacional.',
    selo: 'Gourmet',
    cor: 'from-olive-800 via-yellow-800 to-amber-600',
    icone: '🫒',
  },
  {
    id: '5',
    marca: 'Mar & Terra',
    tagline: 'Pescados e carnes nobres',
    descricao:
      'Salmão selvagem, cortes wagyu e frutos do mar com certificação de origem e qualidade superior.',
    selo: 'Seleção Chef',
    cor: 'from-sky-900 via-blue-800 to-cyan-600',
    icone: '🥩',
  },
  {
    id: '6',
    marca: 'Doçura Real',
    tagline: 'Confeitaria fina',
    descricao:
      'Chocolates belgas, doces artesanais e padaria premium com ingredientes nobres e sem conservantes.',
    selo: 'Artesanal',
    cor: 'from-rose-900 via-red-800 to-pink-600',
    icone: '🍫',
  },
];

export const campanhaChaoAMesa = {
  titulo: 'Campanha Do Chão à Mesa',
  subtitulo: 'Zero pesticidas. Zero agrotóxicos. 100% confiança.',
  descricao:
    'Produtos cultivados com respeito à terra e à sua saúde. Do chão à mesa da sua família, com rastreabilidade completa e selo de qualidade Mercadolar.',
  beneficios: [
    'Certificação orgânica',
    'Sem agrotóxicos',
    'Produtores locais parceiros',
    'Rastreio por QR Code',
  ],
};
