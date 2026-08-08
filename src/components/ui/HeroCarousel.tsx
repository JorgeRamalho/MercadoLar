import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Leaf, ShieldCheck } from 'lucide-react';
import { carouselMarcas, campanhaChaoAMesa } from '@typescript/data/carousel';

export function HeroCarousel() {
  const [ativo, setAtivo] = useState(0);
  const total = carouselMarcas.length;

  const proximo = useCallback(() => setAtivo((i) => (i + 1) % total), [total]);
  const anterior = () => setAtivo((i) => (i - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(proximo, 5000);
    return () => clearInterval(timer);
  }, [proximo]);

  return (
    <div className="relative w-full overflow-hidden bg-merca-blue-900">
      {/* Campanha Do Chão à Mesa — faixa superior */}
      <div className="flex items-center justify-center gap-2 bg-emerald-800 px-4 py-2 text-center text-xs font-semibold text-white md:text-sm">
        <Leaf size={14} className="shrink-0 text-emerald-300" />
        <span>
          <strong className="text-emerald-200">{campanhaChaoAMesa.titulo}</strong>
          {' — '}
          {campanhaChaoAMesa.subtitulo}
        </span>
        <ShieldCheck size={14} className="shrink-0 text-emerald-300" />
      </div>

      {/* Carrossel */}
      <div className="relative h-[220px] md:h-[280px]">
        {carouselMarcas.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === ativo ? 'opacity-100 translate-x-0' : 'pointer-events-none opacity-0 translate-x-8'
            }`}
            aria-hidden={i !== ativo}
          >
            <div className={`flex h-full items-center bg-gradient-to-r ${item.cor}`}>
              <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-6 py-6 md:gap-10 md:px-10">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-5xl backdrop-blur-sm md:h-28 md:w-28 md:text-6xl">
                  {item.icone}
                </div>
                <div className="min-w-0 flex-1 text-white">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm md:text-xs">
                      {item.selo}
                    </span>
                    {item.destaque && (
                      <span className="rounded-full bg-emerald-400 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-900">
                        Zero agrotóxicos
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-2xl font-extrabold md:text-4xl">{item.marca}</h2>
                  <p className="text-sm font-medium text-white/80 md:text-base">{item.tagline}</p>
                  <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-white/70 md:block">
                    {item.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={anterior}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={proximo}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicadores + mini marcas */}
      <div className="flex items-center justify-between bg-merca-blue-900/80 px-4 py-3 md:px-8">
        <div className="flex gap-1.5">
          {carouselMarcas.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setAtivo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === ativo ? 'w-8 bg-merca-gold-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {carouselMarcas.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setAtivo(i)}
              className={`rounded-lg px-2 py-1 text-xs font-medium transition ${
                i === ativo
                  ? 'bg-white/15 text-merca-gold-400'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {m.marca}
            </button>
          ))}
        </div>
        <p className="text-xs text-white/50 md:hidden">
          {ativo + 1}/{total}
        </p>
      </div>
    </div>
  );
}
