export interface ViaCEPAddress {
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface ViaCEPResponse {
  erro?: boolean;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

export async function fetchAddressByCEP(cep: string): Promise<ViaCEPAddress | null> {
  const digits = cep.replace(/\D/g, '');
  if (digits.length !== 8) return null;

  const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
  if (!response.ok) return null;

  const data = (await response.json()) as ViaCEPResponse;
  if (data.erro || !data.localidade) return null;

  return {
    endereco: data.logradouro ?? '',
    bairro: data.bairro ?? '',
    cidade: data.localidade,
    estado: data.uf ?? '',
  };
}
