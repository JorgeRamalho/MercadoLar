import { MapPin, Phone, Store, Truck } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { lojas } from '@typescript/data/lojas';

const tipoLabel = {
  varejo: 'Varejo',
  atacado: 'Atacado',
  ambos: 'Varejo & Atacado',
} as const;

export function LojasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-merca-blue-900 to-merca-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <MapPin size={40} className="mx-auto mb-4" aria-hidden />
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Nossas Lojas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Mais de 280 unidades no Brasil. Encontre varejo, atacado ou ambos na sua região.
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl" id="contato">
        <SectionTitle
          badge="Rede Mercadolar"
          title="Unidades em destaque"
          subtitle="Lista representativa — consulte o app para todas as lojas da sua cidade."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lojas.map((loja) => (
            <article
              key={loja.id}
              className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h2 className="font-display text-lg font-bold text-merca-blue-900">{loja.nome}</h2>
                <span className="shrink-0 rounded-full bg-merca-blue-50 px-2 py-1 text-xs font-semibold text-merca-blue-700">
                  {tipoLabel[loja.tipo]}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-merca-green-500" aria-hidden />
                  <span>
                    {loja.endereco} — {loja.cidade}/{loja.uf}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0 text-merca-blue-700" aria-hidden />
                  <a href={`tel:${loja.telefone.replace(/\D/g, '')}`} className="hover:underline">
                    {loja.telefone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  {loja.tipo === 'atacado' ? (
                    <Truck size={16} aria-hidden />
                  ) : (
                    <Store size={16} aria-hidden />
                  )}
                  <span>{tipoLabel[loja.tipo]}</span>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
