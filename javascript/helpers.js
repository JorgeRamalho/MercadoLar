/** Funções auxiliares em JavaScript puro */

export function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

export function formatarPontos(pontos) {
  return new Intl.NumberFormat('pt-BR').format(pontos);
}

export function scrollParaSecao(id) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}
