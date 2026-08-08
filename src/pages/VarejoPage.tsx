import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Clock,
  Heart,
  Leaf,
  ArrowRight,
  Smartphone,
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';

export function VarejoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-merca-green-500 to-merca-green-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ShoppingBag size={40} className="mb-4" />
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Varejo Mercadolar</h1>
          <p className="mt-4 max-w-2xl text-lg text-green-100">
            Supermercado completo para o dia a dia da sua família — frescor, variedade e preço justo.
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Experiência"
          title="Compras do dia a dia"
          subtitle="Layout intuitivo, produtos frescos e atendimento que você merece."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: 'Hortifruti Premium',
              desc: 'Recebimento diário de frutas, verduras e legumes selecionados. Feira da semana com até 40% off.',
            },
            {
              icon: Heart,
              title: 'Padaria & Açougue',
              desc: 'Pães assados na loja e carnes com padronização de qualidade. Cortes especiais às quartas para o clube.',
            },
            {
              icon: Clock,
              title: 'Caixa Express',
              desc: 'Filas rápidas, autoatendimento e identificação por CPF para pontos automáticos.',
            },
            {
              icon: Smartphone,
              title: 'Encarte Digital',
              desc: 'Ofertas personalizadas no app baseadas no seu histórico de compras.',
            },
            {
              icon: ShoppingBag,
              title: 'Clube Integrado',
              desc: 'Cashback, pontos e cupons ativados automaticamente ao informar CPF no caixa.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-hover rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-merca-green-500/10 p-3 text-merca-green-600">
                <Icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-merca-blue-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-merca-green-500/5">
        <div className="section-padding mx-auto max-w-7xl text-center">
          <h2 className="font-display text-3xl font-bold text-merca-blue-900">
            Economize no varejo com o Clube
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-600">
            1 ponto por real gasto, cashback de até 5% e cupons exclusivos toda semana.
          </p>
          <Link
            to="/cadastro"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-merca-green-500 px-8 py-4 font-display font-bold text-white shadow-lg transition hover:bg-merca-green-600"
          >
            Cadastre-se grátis <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
