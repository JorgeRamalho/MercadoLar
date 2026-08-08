export interface Loja {
  id: string;
  nome: string;
  endereco: string;
  cidade: string;
  uf: string;
  telefone: string;
  tipo: 'varejo' | 'atacado' | 'ambos';
}

export const lojas: Loja[] = [
  {
    id: '1',
    nome: 'Mercadolar Centro SP',
    endereco: 'Av. Paulista, 1500',
    cidade: 'São Paulo',
    uf: 'SP',
    telefone: '(11) 3000-1000',
    tipo: 'ambos',
  },
  {
    id: '2',
    nome: 'Mercadolar Guarulhos',
    endereco: 'Rua dos Lírios, 420',
    cidade: 'Guarulhos',
    uf: 'SP',
    telefone: '(11) 3000-1001',
    tipo: 'varejo',
  },
  {
    id: '3',
    nome: 'Mercadolar Campinas',
    endereco: 'Av. das Amoreiras, 88',
    cidade: 'Campinas',
    uf: 'SP',
    telefone: '(19) 3000-1002',
    tipo: 'ambos',
  },
  {
    id: '4',
    nome: 'Mercadolar Rio Norte',
    endereco: 'Av. Brasil, 2500',
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    telefone: '(21) 3000-1003',
    tipo: 'varejo',
  },
  {
    id: '5',
    nome: 'Mercadolar Curitiba Atacado',
    endereco: 'Rod. dos Pinhais, 1200',
    cidade: 'Curitiba',
    uf: 'PR',
    telefone: '(41) 3000-1004',
    tipo: 'atacado',
  },
  {
    id: '6',
    nome: 'Mercadolar Belo Horizonte',
    endereco: 'Av. Afonso Pena, 900',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    telefone: '(31) 3000-1005',
    tipo: 'ambos',
  },
];
