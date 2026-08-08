# Mapa do Projeto — Estrutura de Pastas

Documentação da organização do repositório `Projeto-Mercadolar` após consolidação em `src/` (ago/2026).

> Inventário detalhado arquivo a arquivo: [`pastas/`](./pastas/)

---

## Raiz enxuta

A raiz contém **somente** configuração, entrada e diretórios de primeiro nível:

```
Projeto-Mercadolar/
├── index.html              ← Entrada HTML do Vite
├── package.json            ← Dependências e scripts
├── package-lock.json
├── vite.config.ts          ← Vite + aliases + Tailwind
├── vitest.config.ts          ← Testes unitários
├── tsconfig.json           ← Referências TS
├── tsconfig.app.json       ← TS para src/
├── tsconfig.node.json      ← TS para configs Node
├── eslint.config.js        ← ESLint 10
├── .editorconfig           ← Consistência entre editores
├── .gitignore
├── .env.example
├── README.md
│
├── src/                    ← TODO O CÓDIGO-FONTE ★
├── public/                 ← Assets estáticos (/favicon, /brand/*)
├── docs/                   ← Documentação profissional
├── scripts/                ← Automação (imagens, iniciar-site.bat)
└── .github/workflows/      ← CI (lint, test, build)
```

**Gerados (não versionados):** `node_modules/`, `dist/`

---

## `src/` — Aplicação

```
src/
├── main.tsx, App.tsx
├── components/     layout | brand | ui | forms | seo
├── pages/            9 rotas (Home, Clube, Promoções, Cadastro…)
├── data/             brand, content, carousel, beneficios, lojas, seo
├── types/            interfaces TypeScript
├── utils/            validation, viacep + testes
├── styles/           style.css (Tailwind 4)
├── config/           APP_CONFIG, BRAND, assets, rotas
```

Ver [pastas/SRC.md](./pastas/SRC.md) para inventário completo.

---

## Aliases Vite / TypeScript

| Alias | Caminho | Uso |
|-------|---------|-----|
| `@/` | `src/` | Import genérico |
| `@react/` | `src/` | Compatibilidade |
| `@typescript/` | `src/` | Dados, tipos, utils |
| `@css/` | `src/styles/` | Estilos |

---

## Fluxo de build

```
index.html
    └── src/main.tsx
            ├── @css/style.css
            └── App.tsx → Header / Footer / Routes → pages/*.tsx
    └── src/config/app.js (bootstrap paralelo)
```

**Output:** `dist/` via `npm run build`

---

## Convenções por camada

| Camada | Regra |
|--------|-------|
| `pages/` | Uma página = uma rota; compõe seções com dados de `data/` |
| `components/layout/` | Estrutura global (header, footer, skip link) |
| `components/ui/` | Componentes genéricos reutilizáveis |
| `components/forms/` | Formulários e painéis de input |
| `components/seo/` | Meta tags e JSON-LD |
| `data/` | Dados estáticos do protótipo → API em produção |
| `public/` | URLs absolutas a partir de `/` |

---

## Migração realizada (ago/2026)

| Antes (raiz) | Depois |
|--------------|--------|
| `react/` | `src/` (main, App, components, pages) |
| `typescript/` | `src/data`, `src/types`, `src/utils` |
| `css/` | `src/styles/` |
| `javascript/` | `src/config/` |
| `html/index.html` | **Removido** — usar `npm run dev` |
| `iniciar-site.bat` (raiz) | `scripts/iniciar-site.bat` |

Aliases `@react`, `@typescript`, `@css`, `@js` foram mantidos apontando para `src/`.

---

## Arquivos de configuração

| Arquivo | Função |
|---------|--------|
| `vite.config.ts` | Dev server porta 5173, aliases, React + Tailwind |
| `tsconfig.app.json` | Strict mode, paths para aliases |
| `vitest.config.ts` | Testes em `src/**/*.test.ts` |
| `eslint.config.js` | React hooks, TypeScript ESLint |
| `package.json` | `dev`, `build`, `lint`, `test`, `optimize-images` |

---

## Dependências principais

| Pacote | Uso |
|--------|-----|
| react 19 | UI |
| react-router-dom 7 | Navegação SPA |
| tailwindcss 4 | Utility CSS |
| lucide-react | Ícones |
| vite 8 | Bundler / dev server |
| vitest | Testes unitários |
