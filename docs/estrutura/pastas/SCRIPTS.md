# `scripts/` — Automação e utilitários

Scripts auxiliares que **não** fazem parte do bundle da aplicação.

## Inventário

| Arquivo | Função |
|---------|--------|
| `optimize-images.mjs` | Gera WebP em 400/800/1200px a partir de PNGs em `public/brand/` |
| `iniciar-site.bat` | Atalho Windows: `npm install` (se necessário) + `npm run dev` |

## Comandos npm relacionados

```bash
npm run optimize-images   # node scripts/optimize-images.mjs
npm run dev               # vite (use em vez do Live Server)
```

## `iniciar-site.bat`

- Executa a partir de `scripts/` mas faz `cd` para a raiz do projeto (`%~dp0..`)
- Instala dependências na primeira execução
- Abre Vite em `http://localhost:5173`
