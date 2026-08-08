import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  Percent,
  Gift,
  Star,
  Shield,
  Zap,
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PromoCard } from '../components/ui/PromoCard';
import { HeroCarousel } from '../components/ui/HeroCarousel';
import { BrandShowcase } from '../components/brand/BrandShowcase';
import { promocoes, stats, categorias, niveisClube } from '@typescript/data/content';
import { BRAND, BRAND_ASSETS, OPTIMIZED_ASSETS } from '@/config';
import { OptimizedImage } from '../components/ui/OptimizedImage';

export function HomePage() {
  const destaques = promocoes.filter((p) => p.destaque);

  return (
    <>
      <HeroCarousel />

      <section className="relative overflow-hidden bg-gradient-to-br from-merca-blue-900 via-merca-blue-700 to-merca-green-600 text-white">
        <OptimizedImage
          asset={OPTIMIZED_ASSETS.heroBanner}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-merca-blue-900/90 via-merca-blue-900/70 to-merca-green-600/80" />

        <div className="section-padding relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 text-center lg:text-left">
            <img
              src={BRAND_ASSETS.logoWhite}
              alt="Mercadolar"
              className="mx-auto mb-6 h-14 w-auto object-contain lg:mx-0"
            />
            <span className="promo-badge mb-4 bg-merca-gold-500 text-merca-blue-900">
              {BRAND.tagline}
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              {BRAND.slogan} no{' '}
              <span className="text-merca-gold-400">varejo</span> e{' '}
              <span className="text-merca-gold-400">atacado</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Cashback, pontos, prêmios e promoções exclusivas. Cadastre-se grátis e comece a
              economizar em mais de 280 lojas pelo Brasil.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-merca-gold-500 px-8 py-4 font-display font-bold text-merca-blue-900 shadow-lg transition hover:bg-merca-gold-400"
              >
                Cadastre-se grátis
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/promocoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                Ver promoções
              </Link>
            </div>
          </div>

          <div className="relative flex-1">
            <OptimizedImage
              asset={OPTIMIZED_ASSETS.mascote}
              alt={BRAND.mascote.nome}
              className="mx-auto w-full max-w-sm rounded-3xl border-4 border-merca-gold-400/50 object-cover shadow-2xl"
              priority
              sizes="(max-width: 768px) 90vw, 384px"
            />
            <p className="mt-4 text-center text-sm font-medium text-merca-gold-400">
              Olá! Eu sou o {BRAND.mascote.nome}, mascote do Mercadolar
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: Percent, label: 'Cashback 5%', color: 'bg-merca-green-500' },
                { icon: Gift, label: 'Prêmios', color: 'bg-merca-red-500' },
                { icon: Truck, label: 'Entrega', color: 'bg-merca-orange-500' },
                { icon: Shield, label: 'Cartão', color: 'bg-merca-blue-500' },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <div className={`rounded-lg ${color} p-1.5`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-merca-blue-700 md:text-4xl">
                {stat.valor}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Departamentos"
          title="Tudo que sua família precisa"
          subtitle="Do hortifruti fresco ao atacado para revenda — categorias completas com ofertas semanais."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categorias.map((cat) => (
            <Link
              key={cat.nome}
              to={`/promocoes?departamento=${encodeURIComponent(cat.nome)}`}
              className="card-hover group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
            >
              <div
                className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white ${cat.cor} transition group-hover:scale-110`}
              >
                {cat.icon}
              </div>
              <p className="font-display font-semibold text-merca-blue-900">{cat.nome}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section-padding mx-auto max-w-7xl">
          <SectionTitle
            badge="Ofertas"
            title="Promoções em destaque"
            subtitle="Encartes, combos, cashback e descontos exclusivos para membros do clube."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {destaques.map((p) => (
              <PromoCard key={p.id} promocao={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/promocoes"
              className="inline-flex items-center gap-2 font-semibold text-merca-blue-700 hover:underline"
            >
              Ver todas as promoções <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl">
        <SectionTitle
          badge="Varejo & Atacado"
          title="Do dia a dia ao grande volume"
          subtitle="Duas experiências de compra pensadas para cada necessidade."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card-hover overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg">
            <div className="bg-gradient-to-r from-merca-green-500 to-merca-green-600 px-8 py-6 text-white">
              <ShoppingBag size={32} className="mb-2" />
              <h3 className="font-display text-2xl font-bold">Varejo</h3>
              <p className="text-green-100">Compras do dia a dia para sua família</p>
            </div>
            <ul className="space-y-3 p-8 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> Hortifruti fresco diariamente</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> Padaria e açougue próprios</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> Caixas express e autoatendimento</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> Clube com pontos e cashback</li>
            </ul>
            <div className="px-8 pb-8">
              <Link to="/varejo" className="font-semibold text-merca-green-600 hover:underline">
                Explorar varejo →
              </Link>
            </div>
          </div>

          <div className="card-hover overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg">
            <div className="bg-gradient-to-r from-merca-blue-700 to-merca-blue-900 px-8 py-6 text-white">
              <Truck size={32} className="mb-2" />
              <h3 className="font-display text-2xl font-bold">Atacado</h3>
              <p className="text-blue-200">Grandes volumes com preço de atacado</p>
            </div>
            <ul className="space-y-3 p-8 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> +15.000 SKUs para revenda</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> Desconto progressivo por volume</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> CNPJ com condições especiais</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-merca-gold-500" /> Logística para comerciantes</li>
            </ul>
            <div className="px-8 pb-8">
              <Link to="/atacado" className="font-semibold text-merca-blue-700 hover:underline">
                Explorar atacado →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-merca-blue-900 text-white">
        <div className="section-padding mx-auto max-w-7xl">
          <SectionTitle
            badge="Clube Mercadolar"
            title="Compre, ganhe bônus e suba de nível"
            subtitle="Programa de fidelidade com cashback progressivo, prêmios e cartão de crédito."
            light
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {niveisClube.map((nivel) => (
              <div
                key={nivel.nome}
                className={`card-hover rounded-2xl bg-gradient-to-br ${nivel.cor} p-6 shadow-lg`}
              >
                <h3 className="font-display text-xl font-bold">{nivel.nome}</h3>
                <p className="mt-1 text-sm opacity-80">{nivel.pontosMinimos}+ pontos</p>
                <p className="mt-4 font-display text-3xl font-bold">{nivel.cashback}</p>
                <p className="text-sm opacity-80">cashback</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {nivel.beneficios.slice(0, 2).map((b) => (
                    <li key={b}>✓ {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/clube"
              className="inline-flex items-center gap-2 rounded-xl bg-merca-gold-500 px-8 py-4 font-display font-bold text-merca-blue-900 transition hover:bg-merca-gold-400"
            >
              <Zap size={20} />
              Conhecer o Clube Mercadolar
            </Link>
          </div>
        </div>
      </section>

      <BrandShowcase />

      <section className="section-padding mx-auto max-w-7xl text-center">
        <h2 className="font-display text-3xl font-bold text-merca-blue-900 md:text-4xl">
          Pronto para economizar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Cadastre-se em menos de 2 minutos. Ganhe 100 pontos de boas-vindas e comece a acumular
          cashback na sua primeira compra.
        </p>
        <Link
          to="/cadastro"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-merca-green-500 px-10 py-4 font-display text-lg font-bold text-white shadow-lg transition hover:bg-merca-green-600"
        >
          Criar minha conta grátis
          <ArrowRight size={22} />
        </Link>
      </section>
    </>
  );
}
