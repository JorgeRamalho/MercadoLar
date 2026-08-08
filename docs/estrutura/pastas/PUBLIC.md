# `public/` — Assets estáticos

Arquivos copiados **verbatim** para o build. URLs começam com `/` (ex: `/brand/logo.svg`).

## Inventário

| Arquivo / Pasta | Função |
|-----------------|--------|
| `favicon.svg` | Favicon principal do site |
| `icons.svg` | Sprite de ícones SVG |
| `robots.txt` | Regras para crawlers |
| `sitemap.xml` | Mapa de URLs para SEO |
| `brand/README.md` | Guia da identidade visual e pipeline de imagens |
| `brand/logo.svg` | Logo colorido (vetor) |
| `brand/logo-white.svg` | Logo branco para fundos escuros |
| `brand/logo-icon.svg` | Ícone isolado (favicon, avatar) |
| `brand/mercadolar-logo-{400,800,1200}.webp` | Logo raster otimizado |
| `brand/mercadolar-avatar-{400,800,1200}.webp` | Avatar da marca |
| `brand/mercadolar-mascot-{400,800,1200}.webp` | Mascote (candidato LCP) |
| `brand/mercadolar-hero-banner-{400,800,1200}.webp` | Banner hero |

> PNGs fonte (quando presentes) são processados por `npm run optimize-images` → WebP em múltiplos tamanhos.

## Uso no código

- Referência direta: `/brand/logo.svg`
- Componente `OptimizedImage` usa `BRAND_ASSETS` / `OPTIMIZED_ASSETS` de `src/data/brand.ts`
- Meta `og:image` em `index.html` aponta para asset em `/brand/`

## Regras

- Não duplicar assets de marca fora desta pasta
- Após alterar PNGs fonte, rodar `npm run optimize-images`
- Manter `README.md` em `brand/` atualizado com specs de exportação
