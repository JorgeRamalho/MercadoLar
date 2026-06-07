import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Tag, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PromoCard } from '../components/ui/PromoCard';
import { promocoes } from '@typescript/data/content';
import type { Promocao } from '@typescript/types';

const filtros: { id: Promocao['tipo'] | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todas' },
  { id: 'encarte', label: 'Encarte' },
  { id: 'clube', label: 'Clube' },
  { id: 'cashback', label: 'Cashback' },
  { id: 'combo', label: 'Combos' },
  { id: 'atacado', label: 'Atacado' },
];

export function PromocoesPage() {
  const [filtro, setFiltro] = useState<Promocao['tipo'] | 'todos'>('todos');

  const filtradas =
    filtro === 'todos' ? promocoes : promocoes.filter((p) => p.tipo === filtro);

  return (
    <>
      <section className="bg-gradient-to-r from-merca-red-500 to-merca-orange-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <Tag size={40} className="mx-auto mb-4" />
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Promoções</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Encartes semanais, combos, cashback, ofertas de atacado e descontos exclusivos do clube.
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Como funcionam"
          title="Estratégias de promoção Mercadolar"
          subtitle="Padrões do varejo alimentar aplicados para maximizar sua economia."
        />

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: 'Encarte Semanal',
              desc: 'Ofertas rotativas por departamento publicadas toda terça-feira.',
              cor: 'border-merca-red-500',
            },
            {
              titulo: 'CPF na Nota',
              desc: 'Identifique-se no caixa e receba cupons personalizados via app.',
              cor: 'border-merca-blue-700',
            },
            {
              titulo: 'Leve X Pague Y',
              desc: 'Mecânica clássica de volume — ideal para famílias e revendedores.',
              cor: 'border-merca-orange-500',
            },
            {
              titulo: 'Cashback Progressivo',
              desc: 'Percentual crescente conforme nível do clube e valor da compra.',
              cor: 'border-merca-green-500',
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className={`rounded-2xl border-l-4 ${item.cor} bg-white p-6 shadow-sm`}
            >
              <h3 className="font-display font-bold text-merca-blue-900">{item.titulo}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Filter size={18} className="text-slate-500" />
          {filtros.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFiltro(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filtro === f.id
                  ? 'bg-merca-blue-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((p) => (
            <PromoCard key={p.id} promocao={p} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-merca-blue-900 p-8 text-center text-white md:p-12">
          <h3 className="font-display text-2xl font-bold">
            Membros do clube economizam até 30% a mais
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-slate-300">
            Cadastre-se gratuitamente e tenha acesso a ofertas exclusivas, cashback e encarte
            digital personalizado.
          </p>
          <Link
            to="/cadastro"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-merca-gold-500 px-8 py-3 font-bold text-merca-blue-900 transition hover:bg-merca-gold-400"
          >
            Cadastrar no clube <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
