import { Link } from 'react-router-dom';
import {
  Truck,
  Package,
  Building2,
  BarChart3,
  ArrowRight,
  Boxes,
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';

export function AtacadoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-merca-blue-700 to-merca-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Truck size={40} className="mb-4" />
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Atacado Mercadolar</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-200">
            Grandes volumes, preços de atacado e condições especiais para comerciantes, restaurantes
            e revendedores.
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Operação"
          title="Atacado para todos os perfis"
          subtitle="Do autônomo ao grande comerciante — estrutura pensada para volume e eficiência."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Package,
              title: '+15.000 Produtos',
              desc: 'Ampla variedade em alimentos, bebidas, limpeza, higiene, bazar e pet shop para revenda.',
            },
            {
              icon: BarChart3,
              title: 'Desconto Progressivo',
              desc: 'Quanto maior o volume por SKU, maior o desconto — até 25% em compras acima de 6 unidades.',
            },
            {
              icon: Building2,
              title: 'CNPJ Especial',
              desc: 'Condições diferenciadas de pagamento, faturamento e crédito para empresas cadastradas.',
            },
            {
              icon: Boxes,
              title: 'Logística Otimizada',
              desc: 'Corredores amplos, empilhadeiras e área de carga para facilitar grandes volumes.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-hover flex gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-merca-blue-50 text-merca-blue-700">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-merca-blue-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-merca-blue-50">
        <div className="section-padding mx-auto max-w-7xl">
          <SectionTitle
            badge="Tabela de Descontos"
            title="Quanto mais compra, mais economiza"
          />
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-merca-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-display font-semibold">Quantidade (mesmo SKU)</th>
                  <th className="px-6 py-4 font-display font-semibold">Desconto</th>
                  <th className="px-6 py-4 font-display font-semibold">Público</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['3 a 5 unidades', '10%', 'Todos'],
                  ['6 a 11 unidades', '15%', 'Clube + CNPJ'],
                  ['12 a 23 unidades', '20%', 'CNPJ cadastrado'],
                  ['24+ unidades', '25%', 'Parceiros atacado'],
                ].map(([qtd, desc, pub]) => (
                  <tr key={qtd} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">{qtd}</td>
                    <td className="px-6 py-4 font-bold text-merca-red-500">{desc}</td>
                    <td className="px-6 py-4 text-slate-600">{pub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl text-center">
        <h2 className="font-display text-3xl font-bold text-merca-blue-900">
          Cadastre seu CNPJ e ganhe condições especiais
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-slate-600">
          Integração com o Clube Mercadolar para acumular pontos mesmo em compras de atacado.
        </p>
        <Link
          to="/cadastro"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-merca-blue-700 px-8 py-4 font-display font-bold text-white shadow-lg transition hover:bg-merca-blue-900"
        >
          Solicitar cadastro atacado <ArrowRight size={20} />
        </Link>
      </section>
    </>
  );
}
