# `src/` — Código-fonte da aplicação

Diretório único de código. Substitui as antigas pastas `react/`, `typescript/`, `css/` e `javascript/` na raiz.

## Árvore

```
src/
├── main.tsx                 # Entry point React (monta #root)
├── App.tsx                  # Router + layout global
├── vite-env.d.ts            # Tipos Vite (import.meta.env)
│
├── components/              # Componentes React reutilizáveis
│   ├── layout/
│   │   ├── Header.tsx       # Nav sticky, menu mobile, ações
│   │   ├── Footer.tsx       # Links, contato, redes sociais
│   │   └── SkipLink.tsx     # Link de acessibilidade para #main
│   ├── brand/
│   │   ├── BrandLogo.tsx    # Logo com variantes (light/dark/icon)
│   │   └── BrandShowcase.tsx # Galeria da identidade visual
│   ├── ui/
│   │   ├── SectionTitle.tsx # Título padronizado de seção
│   │   ├── HeroCarousel.tsx # Carrossel de campanhas
│   │   ├── PromoCard.tsx    # Card de promoção
│   │   └── OptimizedImage.tsx # Imagem responsiva WebP + srcset
│   ├── forms/
│   │   ├── CadastroForm.tsx # Formulário multi-step de cadastro
│   │   └── CardOfferPanel.tsx # Painel de ofertas do cartão
│   └── seo/
│       ├── PageMeta.tsx     # Meta tags dinâmicas por rota
│       └── JsonLd.tsx       # Schema.org (Organization)
│
├── pages/                   # Uma página = uma rota
│   ├── HomePage.tsx         # / — Hero, stats, categorias, promoções
│   ├── VarejoPage.tsx       # /varejo
│   ├── AtacadoPage.tsx      # /atacado
│   ├── ClubePage.tsx        # /clube — Fidelidade e prêmios
│   ├── PromocoesPage.tsx    # /promocoes — Encartes e filtros
│   ├── CadastroPage.tsx     # /cadastro — Formulário de cliente
│   ├── LojasPage.tsx        # /lojas — Unidades da rede
│   ├── TermosPage.tsx       # /termos — Termos de uso
│   └── PrivacidadePage.tsx  # /privacidade — LGPD
│
├── data/                    # Dados estáticos (protótipo)
│   ├── content.ts           # promocoes, stats, categorias, niveisClube
│   ├── carousel.ts          # carouselMarcas, campanhaChaoAMesa
│   ├── beneficios.ts        # ofertas cartão, benefícios
│   ├── lojas.ts             # Lista de unidades
│   └── seo.ts               # SITE_URL, meta por rota
│
├── config/
│   └── index.ts             # APP_CONFIG, BRAND, BRAND_ASSETS, ROTAS, SOCIAL_LINKS
│
├── types/
│   └── index.ts             # CadastroCliente, Promocao, NivelClube...
│
├── utils/
│   ├── validation.ts        # CPF, e-mail, formatadores
│   ├── validation.test.ts   # Testes Vitest
│   ├── viacep.ts            # Integração API ViaCEP
│   └── format.ts            # formatarMoeda, formatarPontos, scrollParaSecao
│
├── styles/
│   └── style.css            # Tailwind 4 + @theme tokens Mercadolar
```

## Aliases de importação

| Alias | Caminho | Exemplo |
|-------|---------|---------|
| `@/` | `src/` | `import { APP_CONFIG } from '@/config'` |
| `@react/` | `src/` | (compatibilidade) |
| `@typescript/` | `src/` | `import { promocoes } from '@typescript/data/content'` |
| `@css/` | `src/styles/` | `import '@css/style.css'` |

## Fluxo de execução

```
index.html
  └── src/main.tsx
        ├── @css/style.css
        ├── data-app bootstrap (APP_CONFIG)
        └── App.tsx
```

## Convenções

- **pages/** — apenas composição de seções; lógica pesada em components/ ou utils/
- **data/** — dados mock; migrar para API em produção
- **components/ui/** — genéricos, sem regra de negócio
- **components/forms/** — inputs e validação
- **config/** — APP_CONFIG, marca, rotas, assets (fonte única)
