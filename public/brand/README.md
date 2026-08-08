# Identidade Visual — Mercadolar

## Marca

| Item | Valor |
|------|-------|
| **Nome** | Mercadolar |
| **Slogan** | Economia de verdade |
| **Tagline** | Varejo & Atacado |
| **Mascote** | Dolarzinho |

## Arquivos

| Arquivo | Uso |
|---------|-----|
| `logo.svg` | Logo horizontal (fundo claro) |
| `logo-white.svg` | Logo horizontal (fundo escuro) |
| `logo-icon.svg` | Ícone / favicon vetorial |
| `mercadolar-logo.png` | Logomarca rasterizada |
| `mercadolar-avatar.png` | Avatar redes sociais / app |
| `mercadolar-mascot.png` | Mascote Dolarzinho |
| `mercadolar-hero-banner.png` | Banner institucional |
| `*-400.webp`, `*-800.webp`, `*-1200.webp` | Versões WebP otimizadas (gerar com `npm run optimize-images`) |

## Otimização de imagens

```bash
npm run optimize-images
```

Gera WebP em 400w, 800w e 1200w para cada PNG raster. O componente `OptimizedImage` usa `<picture>` com fallback PNG.

## Paleta

- Azul `#003D7A` — confiança, preço justo
- Verde `#2D8A4E` — frescor, hortifruti
- Vermelho `#E31E24` — promoções
- Dourado `#FFB800` — ofertas
- Laranja `#F47B20` — impulso
