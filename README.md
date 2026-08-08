📌 ## Mercadolar 🥬 - Lugar organico de comprar

🌐 ## Website Link do projeto online: https://mercadolar.vercel.app/

📂 ## Repositório: https://github.com/JorgeRamalho/Mercadolar

💻 ## Tecnologias

Html Css JavaScript React Typescript Node.js

📲 ## Funcionalidades

- **Home** — Hero, estatísticas, categorias, promoções em destaque
- **Clube Mercadolar** — Níveis, cashback, prêmios, cartão de crédito
- **Promoções** — Encartes, combos, cashback com filtros
- **Cadastro** — Formulário com validação e geração de cartão virtual
- **Varejo** / **Atacado** — Páginas dedicadas por perfil de compra
- **Lojas** — Unidades da rede
- **Termos** / **Privacidade** — Páginas legais

## Documentação

Documentação profissional completa em [`docs/`](./docs/README.md):

- [Auditoria Completa](./docs/auditoria/AUDITORIA-COMPLETA.md) — SEO, UX/UI, responsividade
- [Mapa do Projeto](./docs/estrutura/MAPA-PROJETO.md) — Estrutura de pastas e convenções
- [Inventário por pasta](./docs/estrutura/pastas/) — Arquivo a arquivo em cada diretório
- [Ecossistema Externo](./docs/estrutura/ECOSSISTEMA.md) — Pastas fora da raiz do repositório
- [Plano de Ação](./docs/plano/PLANO-ACAO.md) — Backlog priorizado

## Estrutura (raiz enxuta)

```
Projeto-Mercadolar/
├── index.html             # Entrada Vite
├── package.json           # Scripts e dependências
├── vite.config.ts         # Config bundler
├── tsconfig*.json         # TypeScript
├── eslint.config.js       # Lint
├── src/                   # Código-fonte (React, dados, estilos, config)
│   ├── main.tsx, App.tsx
│   ├── components/        # layout, brand, ui, forms, seo
│   ├── pages/             # Rotas da SPA
│   ├── data/              # Dados estáticos
│   ├── types/             # Tipos TypeScript
│   ├── utils/             # Validação, ViaCEP
│   ├── styles/            # Tailwind 4
│   └── config/            # Config centralizada (marca, app, rotas)
├── public/                # Assets estáticos (favicon, brand/*)
├── docs/                  # Documentação técnica
└── scripts/               # optimize-images, iniciar-site.bat
```

📠 ## Como executar

```bash
git clone https://github.com/JorgeRamalho/Mercadolar.git
cd Mercadolar
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173)

Ou duplo clique em `scripts/iniciar-site.bat`.

> Não use Live Server — o projeto precisa do Vite para processar `.tsx`.

## Build

```bash
npm run optimize-images   # gera WebP (após alterar PNGs)
npm run build
```

## Deploy

1. Copie `.env.example` → `.env` (dev) ou defina no host de produção:
   ```bash
   VITE_SITE_URL=https://www.mercadolar.com.br
   ```
2. `npm run optimize-images && npm run build`
3. Publique o conteúdo de `dist/`

## Testes e CI

```bash
npm run test    # Vitest
npm run lint
```

GitHub Actions em `.github/workflows/ci.yml` roda lint, test e build em cada push.

📄 ## Autor: Jorge R. Barbosa  
💼 LinkedIn: https://www.linkedin.com/in/jorge-r-barbosa-aabb0417b/  
👾 GitHub: https://github.com/JorgeRamalho  
☎️ Contato: +55 41 99143-4153
