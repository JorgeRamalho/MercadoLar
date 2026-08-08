# Pasta raiz — Arquivos essenciais

A raiz do repositório contém **apenas** configuração, entrada do projeto e diretórios de primeiro nível. Todo código-fonte vive em `src/`.

## Inventário de arquivos na raiz

| Arquivo | Função |
|---------|--------|
| `index.html` | Entrada HTML do Vite (SPA) — aponta para `src/main.tsx` |
| `package.json` | Dependências npm e scripts (`dev`, `build`, `test`, `lint`) |
| `package-lock.json` | Lockfile de dependências |
| `vite.config.ts` | Bundler, aliases, plugins React + Tailwind |
| `vitest.config.ts` | Configuração de testes unitários |
| `tsconfig.json` | Referências TypeScript (app + node) |
| `tsconfig.app.json` | TS strict para código em `src/` |
| `tsconfig.node.json` | TS para arquivos de config (Vite, Vitest) |
| `eslint.config.js` | Linting ESLint 10 (React hooks, TypeScript) |
| `.editorconfig` | Consistência de indentação e charset entre editores |
| `.gitignore` | Exclusões Git (`node_modules`, `dist`, `.env`) |
| `.env.example` | Template de variáveis (`VITE_SITE_URL`) |
| `README.md` | Visão geral e quick start |

## Diretórios de primeiro nível

| Pasta | Documentação |
|-------|--------------|
| `src/` | [SRC.md](./SRC.md) — código-fonte da aplicação |
| `public/` | [PUBLIC.md](./PUBLIC.md) — assets estáticos servidos em `/` |
| `docs/` | [DOCS.md](./DOCS.md) — documentação técnica |
| `scripts/` | [SCRIPTS.md](./SCRIPTS.md) — automação e utilitários |
| `.github/` | [GITHUB.md](./GITHUB.md) — CI/CD |

## Pastas geradas (não versionadas)

| Pasta | Função |
|-------|--------|
| `node_modules/` | Dependências npm |
| `dist/` | Build de produção (`npm run build`) |

## O que **não** fica na raiz

- Código React, TypeScript, CSS ou JS → `src/`
- Imagens e favicon → `public/`
- Documentação longa → `docs/`
- Scripts de build/otimização → `scripts/`
- Atalho Windows para dev → `scripts/iniciar-site.bat`

## Executar o projeto

```bash
npm install
npm run dev          # http://localhost:5173
```

Ou duplo clique em `scripts/iniciar-site.bat`.
