export type TipoCliente = 'varejo' | 'atacado' | 'ambos';

export interface CadastroCliente {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  whatsapp: string;
  dataNascimento: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  tipoCliente: TipoCliente;
  programaClube: boolean;
  programaMercadoCash: boolean;
  cartaoCredito: boolean;
  rendaMensal: string;
  aceitaCartao: boolean;
  aceitaTermos: boolean;
  aceitaPromocoes: boolean;
}

export interface Promocao {
  id: string;
  titulo: string;
  descricao: string;
  desconto: string;
  categoria: string;
  validade: string;
  tipo: 'encarte' | 'clube' | 'cashback' | 'combo' | 'atacado';
  destaque?: boolean;
}

export interface NivelClube {
  nome: string;
  pontosMinimos: number;
  cashback: string;
  beneficios: string[];
  cor: string;
}

export interface Premio {
  id: string;
  nome: string;
  pontos: number;
  categoria: string;
  imagem: string;
}

export interface CarouselSlide {
  id: string;
  marca: string;
  tagline: string;
  descricao: string;
  selo: string;
  cor: string;
  icone: string;
  destaque?: boolean;
}

export interface BeneficioCartao {
  icone: string;
  titulo: string;
  descricao: string;
  valor?: string;
}
