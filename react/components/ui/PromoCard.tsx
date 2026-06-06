import type { Promocao } from '@typescript/types';

const tipoColors: Record<Promocao['tipo'], string> = {
  encarte: 'bg-merca-red-500',
  clube: 'bg-merca-blue-700',
  cashback: 'bg-merca-green-500',
  combo: 'bg-merca-orange-500',
  atacado: 'bg-merca-gold-500 text-merca-blue-900',
};

const tipoLabels: Record<Promocao['tipo'], string> = {
  encarte: 'Encarte',
  clube: 'Clube',
  cashback: 'Cashback',
  combo: 'Combo',
  atacado: 'Atacado',
};

interface PromoCardProps {
  promocao: Promocao;
}

export function PromoCard({ promocao }: PromoCardProps) {
  return (
    <article
      className={`card-hover relative overflow-hidden rounded-2xl border bg-white p-6 shadow-md ${
        promocao.destaque ? 'border-merca-gold-400 ring-2 ring-merca-gold-400/30' : 'border-slate-100'
      }`}
    >
      {promocao.destaque && (
        <div className="absolute -right-8 top-4 rotate-45 bg-merca-gold-500 px-10 py-1 text-xs font-bold text-merca-blue-900">
          DESTAQUE
        </div>
      )}

      <div className="mb-4 flex items-start justify-between">
        <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${tipoColors[promocao.tipo]}`}>
          {tipoLabels[promocao.tipo]}
        </span>
        <span className="font-display text-2xl font-bold text-merca-red-500">{promocao.desconto}</span>
      </div>

      <h3 className="font-display text-lg font-semibold text-merca-blue-900">{promocao.titulo}</h3>
      <p className="mt-2 text-sm text-slate-600">{promocao.descricao}</p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span className="font-medium text-merca-green-600">{promocao.categoria}</span>
        <span>{promocao.validade}</span>
      </div>
    </article>
  );
}
