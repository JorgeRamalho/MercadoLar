import { Sparkles, Check, CreditCard, Wallet, Crown } from 'lucide-react';
import {
  beneficiosClube,
  beneficiosMercadoCash,
  beneficiosCartaoCredito,
  ofertaCartaoDestaque,
} from '@typescript/data/beneficios';

interface CardOfferPanelProps {
  programaClube: boolean;
  programaMercadoCash: boolean;
  cartaoCredito: boolean;
  aceitaCartao: boolean;
  onToggle: (field: 'programaClube' | 'programaMercadoCash' | 'cartaoCredito' | 'aceitaCartao', value: boolean) => void;
}

export function CardOfferPanel({
  programaClube,
  programaMercadoCash,
  cartaoCredito,
  aceitaCartao,
  onToggle,
}: CardOfferPanelProps) {
  const pacoteCompleto = programaClube && programaMercadoCash && cartaoCredito;

  const selecionarPacoteCompleto = () => {
    onToggle('programaClube', true);
    onToggle('programaMercadoCash', true);
    onToggle('cartaoCredito', true);
    onToggle('aceitaCartao', true);
  };

  return (
    <div className="space-y-5">
      {/* Oferta destaque */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-merca-blue-900 via-merca-blue-700 to-merca-green-600 p-6 text-white shadow-xl">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-merca-gold-400/20" />
        <div className="relative">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles size={18} className="text-merca-gold-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-merca-gold-400">
              Oferta especial
            </span>
          </div>
          <h3 className="font-display text-xl font-bold">{ofertaCartaoDestaque.titulo}</h3>
          <p className="mt-1 text-sm text-slate-300">{ofertaCartaoDestaque.subtitulo}</p>
          <p className="mt-3 font-display text-2xl font-extrabold text-merca-gold-400">
            {ofertaCartaoDestaque.economia}
          </p>
          <ul className="mt-4 space-y-2">
            {ofertaCartaoDestaque.itens.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <Check size={14} className="shrink-0 text-merca-gold-400" />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={selecionarPacoteCompleto}
            className={`mt-5 w-full rounded-xl py-3 font-display font-bold transition ${
              pacoteCompleto
                ? 'bg-merca-gold-400 text-merca-blue-900'
                : 'bg-merca-gold-500 text-merca-blue-900 hover:bg-merca-gold-400'
            }`}
          >
            {pacoteCompleto ? '✓ Pacote selecionado!' : 'Quero o pacote completo grátis'}
          </button>
        </div>
      </div>

      {/* Programas individuais */}
      {[
        {
          field: 'programaClube' as const,
          ativo: programaClube,
          icon: Crown,
          cor: 'border-merca-blue-700 bg-merca-blue-50',
          titulo: 'Clube Mercadolar',
          subtitulo: 'Fidelidade & pontos',
          beneficios: beneficiosClube,
        },
        {
          field: 'programaMercadoCash' as const,
          ativo: programaMercadoCash,
          icon: Wallet,
          cor: 'border-merca-green-500 bg-merca-green-500/5',
          titulo: 'MercadoCash',
          subtitulo: 'Cashback na hora',
          beneficios: beneficiosMercadoCash,
        },
        {
          field: 'cartaoCredito' as const,
          ativo: cartaoCredito,
          icon: CreditCard,
          cor: 'border-merca-gold-500 bg-amber-50',
          titulo: 'Cartão de Crédito',
          subtitulo: 'Limite pré-aprovado',
          beneficios: beneficiosCartaoCredito,
        },
      ].map(({ field, ativo, icon: Icon, cor, titulo, subtitulo, beneficios }) => (
        <label
          key={field}
          className={`block cursor-pointer rounded-2xl border-2 p-4 transition ${
            ativo ? cor + ' shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
        >
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={ativo}
              onChange={(e) => onToggle(field, e.target.checked)}
              className="mt-1 accent-merca-blue-700"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Icon size={18} className="text-merca-blue-700" />
                <span className="font-display font-bold text-merca-blue-900">{titulo}</span>
              </div>
              <p className="text-xs text-slate-500">{subtitulo}</p>
              <div className="mt-3 grid gap-2">
                {beneficios.map((b) => (
                  <div key={b.titulo} className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      {b.icone} {b.titulo}
                    </span>
                    {b.valor && (
                      <span className="font-bold text-merca-green-600">{b.valor}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </label>
      ))}

      {/* Aceite do cartão */}
      <label
        className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-5 transition ${
          aceitaCartao
            ? 'border-merca-gold-400 bg-merca-gold-400/10 shadow-lg'
            : 'border-dashed border-merca-gold-400/50 bg-amber-50/50 hover:border-merca-gold-400'
        }`}
      >
        <input
          type="checkbox"
          checked={aceitaCartao}
          onChange={(e) => onToggle('aceitaCartao', e.target.checked)}
          className="mt-1 accent-merca-gold-500"
        />
        <div>
          <p className="font-display font-bold text-merca-blue-900">
            Sim! Quero receber meu cartão Mercadolar
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Envio gratuito em até 7 dias úteis. Ative no app e comece a usar na mesma hora com cartão virtual.
          </p>
        </div>
      </label>
    </div>
  );
}
