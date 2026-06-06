# Mercadolar — Site Institucional

Site para a rede de supermercados **Mercadolar**, com foco em varejo e atacado, programa de fidelidade, promoções e cadastro de clientes.

## Estrutura de Pastas

```
Projeto-Mercadolar/
├── html/                  # Arquivos HTML
│   └── index.html
├── css/                   # Estilos
│   └── style.css
├── javascript/            # JavaScript puro
│   ├── app.js
│   ├── config.js
│   ├── helpers.js
│   └── config.d.ts
├── typescript/            # TypeScript (tipos, dados, utilitários)
│   ├── types/
│   ├── utils/
│   └── data/
├── react/                 # Componentes e páginas React
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   └── pages/
└── public/                # Assets estáticos (favicon, imagens)
```

## Funcionalidades

- **Home** — Hero, estatísticas, categorias, promoções em destaque
- **Clube Mercadolar** — Níveis, cashback, prêmios, cartão de crédito
- **Promoções** — Encartes, combos, cashback com filtros
- **Cadastro** — Formulário com validação e geração de cartão virtual
- **Varejo** / **Atacado** — Páginas dedicadas por perfil de compra

## Executar

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```
