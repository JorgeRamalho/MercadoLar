# `.github/` — CI/CD

Configuração de integração contínua no GitHub.

## Inventário

| Arquivo | Função |
|---------|--------|
| `workflows/ci.yml` | Pipeline: lint → test → build em push/PR para `main`/`master` |

## Pipeline CI

1. `actions/checkout@v4`
2. Node.js 22 com cache npm
3. `npm ci`
4. `npm run lint`
5. `npm run test`
6. `npm run build` (com `VITE_SITE_URL=https://www.mercadolar.com.br`)

## Extensões futuras

- Preview deploy (Vercel/Netlify) — ver Fase 3 em `docs/plano/PLANO-ACAO.md`
- Lighthouse CI para métricas de performance
