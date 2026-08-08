import { Link } from 'react-router-dom';
import {
  Coins,
  CreditCard,
  Gift,
  Trophy,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { niveisClube, premios } from '@typescript/data/content';

export function ClubePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-merca-blue-900 to-merca-green-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <span className="promo-badge mb-4 bg-merca-gold-500 text-merca-blue-900">
            Programa de Fidelidade
          </span>
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Clube Mercadolar</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Compre, acumule pontos, ganhe cashback e troque por prêmios incríveis. Quanto mais você
            compra, mais benefícios desbloqueia.
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Coins,
              title: '1 ponto por R$ 1',
              desc: 'Acumule pontos em todas as compras identificadas com CPF ou cartão clube no caixa.',
              color: 'text-merca-gold-500',
            },
            {
              icon: TrendingUp,
              title: 'Cashback progressivo',
              desc: 'De 1% no Bronze até 5% no Diamante. Crédito automático na próxima compra.',
              color: 'text-merca-green-500',
            },
            {
              icon: Sparkles,
              title: 'Ofertas personalizadas',
              desc: 'Cupons digitais baseados no seu histórico — hortifruti, mercearia, limpeza e mais.',
              color: 'text-merca-blue-700',
            },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="card-hover rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
              <Icon size={36} className={`mb-4 ${color}`} />
              <h3 className="font-display text-xl font-bold text-merca-blue-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section-padding mx-auto max-w-7xl">
          <SectionTitle
            badge="Níveis"
            title="Evolua e ganhe mais"
            subtitle="Quatro níveis de membership com benefícios crescentes."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {niveisClube.map((nivel) => (
              <div
                key={nivel.nome}
                className={`card-hover overflow-hidden rounded-2xl bg-gradient-to-br ${nivel.cor} text-white shadow-lg`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold">{nivel.nome}</h3>
                    <Trophy size={24} className="opacity-70" />
                  </div>
                  <p className="mt-1 text-sm opacity-80">A partir de {nivel.pontosMinimos} pts</p>
                  <div className="my-6 border-t border-white/20 pt-4">
                    <p className="font-display text-4xl font-extrabold">{nivel.cashback}</p>
                    <p className="text-sm opacity-80">de cashback</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {nivel.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-merca-gold-400">✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Catálogo de Prêmios"
          title="Troque seus pontos"
          subtitle="Eletrodomésticos, cestas, vales-compras e muito mais."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {premios.map((premio) => (
            <div
              key={premio.id}
              className="card-hover flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-merca-blue-50 text-3xl">
                {premio.imagem}
              </div>
              <div>
                <span className="text-xs font-medium text-merca-green-600">{premio.categoria}</span>
                <h3 className="font-display font-semibold text-merca-blue-900">{premio.nome}</h3>
                <p className="mt-1 text-sm font-bold text-merca-gold-500">
                  <Gift size={14} className="mr-1 inline" />
                  {premio.pontos.toLocaleString('pt-BR')} pontos
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-merca-blue-50">
        <div className="section-padding mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                badge="Cartão de Crédito"
                title="Limite pré-aprovado Mercadolar"
                subtitle="Cartão exclusivo com benefícios integrados ao clube de fidelidade."
              />
              <div className="space-y-4">
                {[
                  { nivel: 'Bronze', limite: 'R$ 500' },
                  { nivel: 'Prata', limite: 'R$ 1.500' },
                  { nivel: 'Ouro', limite: 'R$ 3.500' },
                  { nivel: 'Diamante', limite: 'R$ 8.000' },
                ].map((item) => (
                  <div
                    key={item.nivel}
                    className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-sm"
                  >
                    <span className="font-display font-semibold text-merca-blue-900">
                      {item.nivel}
                    </span>
                    <span className="font-bold text-merca-green-600">{item.limite}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                * Limite sujeito à análise de crédito. Membros do clube têm condições especiais e
                pontos em dobro nas compras com cartão Mercadolar.
              </p>
            </div>

            <div className="card-hover mx-auto max-w-sm rounded-3xl bg-gradient-to-br from-merca-blue-900 via-merca-blue-700 to-merca-green-600 p-8 text-white shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-xl font-bold">Mercadolar</span>
                <CreditCard size={32} className="text-merca-gold-400" />
              </div>
              <p className="font-mono text-xl tracking-widest">6042 •••• •••• 0000</p>
              <p className="mt-6 text-sm text-white/70">Limite disponível</p>
              <p className="font-display text-3xl font-bold text-merca-gold-400">R$ 3.500,00</p>
              <div className="mt-6 flex justify-between text-sm">
                <div>
                  <p className="text-white/60">Cashback</p>
                  <p className="font-semibold">3% ativo</p>
                </div>
                <div>
                  <p className="text-white/60">Pontos</p>
                  <p className="font-semibold">2.450 pts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl text-center">
        <h2 className="font-display text-3xl font-bold text-merca-blue-900">
          Junte-se ao Clube Mercadolar
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-slate-600">
          Cadastro 100% gratuito. 100 pontos de boas-vindas e cartão virtual na hora.
        </p>
        <Link
          to="/cadastro"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-merca-green-500 px-10 py-4 font-display font-bold text-white shadow-lg transition hover:bg-merca-green-600"
        >
          Quero me cadastrar
          <ArrowRight size={20} />
        </Link>
      </section>
    </>
  );
}
