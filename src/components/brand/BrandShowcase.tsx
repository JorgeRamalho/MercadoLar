import { BRAND, BRAND_ASSETS, OPTIMIZED_ASSETS, BRAND_GALLERY } from '@/config';
import { SectionTitle } from '../ui/SectionTitle';
import { OptimizedImage } from '../ui/OptimizedImage';

export function BrandShowcase() {
  return (
    <section className="section-padding mx-auto max-w-7xl" id="marca">
      <SectionTitle
        badge="Identidade Visual"
        title="Nossa Marca"
        subtitle={`${BRAND.nome} — ${BRAND.slogan}. Conheça logo, mascote, avatar e materiais da rede.`}
      />

      <div className="mb-12 overflow-hidden rounded-3xl bg-merca-blue-900 shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[400px]">
            <OptimizedImage
              asset={OPTIMIZED_ASSETS.heroBanner}
              alt="Interior do supermercado Mercadolar"
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-merca-blue-900/80 to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8 text-white lg:p-12">
            <img
              src={BRAND_ASSETS.logoWhite}
              alt="Logo Mercadolar"
              className="mb-6 h-16 w-auto max-w-xs object-contain object-left"
            />
            <p className="text-2xl font-display font-bold text-merca-gold-400">
              &ldquo;{BRAND.slogan}&rdquo;
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">{BRAND.descricao}</p>
            <div className="mt-8 flex items-center gap-4">
              <OptimizedImage
                asset={OPTIMIZED_ASSETS.mascote}
                alt={BRAND.mascote.nome}
                className="h-20 w-20 rounded-2xl border-2 border-merca-gold-400 object-cover shadow-lg"
                sizes="80px"
              />
              <div>
                <p className="font-display font-bold">{BRAND.mascote.nome}</p>
                <p className="text-sm text-slate-400">{BRAND.mascote.descricao}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BRAND_GALLERY.map((item) => (
          <article
            key={item.id}
            className="card-hover overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md"
          >
            <div className="aspect-square overflow-hidden bg-slate-50 p-4">
              <OptimizedImage
                asset={item.asset}
                alt={item.titulo}
                className="h-full w-full object-contain"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold uppercase tracking-wide text-merca-blue-700">
                {item.tipo}
              </span>
              <h3 className="mt-1 font-display font-semibold text-merca-blue-900">
                {item.titulo}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{item.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
