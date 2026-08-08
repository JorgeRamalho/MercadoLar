/** Formatadores e utilitários de DOM */

export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

export function formatarPontos(pontos: number): string {
  return new Intl.NumberFormat('pt-BR').format(pontos);
}

export function scrollParaSecao(id: string): void {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}
