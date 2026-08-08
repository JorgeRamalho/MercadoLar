# Auditoria Completa — Mercadolar

**Data:** 08/08/2026  
**Ambiente:** `http://localhost:5173/` (Vite dev server)  
**Ferramenta:** Playwright MCP + análise estática do código-fonte  
**Páginas avaliadas:** Home, Cadastro (+ snapshot de rotas via código)

---

## 1. Metodologia

### 1.1 Varredura Playwright

- Navegação em desktop (1280×720) e mobile (375×812)
- Captura de snapshot de acessibilidade (árvore ARIA)
- Avaliação de meta tags, headings, imagens e links
- Verificação de console (0 erros, 0 warnings)
- Análise de requisições de rede (assets de brand)

### 1.2 Análise de código

- Estrutura de pastas e aliases Vite
- Componentes React, dados TypeScript e estilos Tailwind
- Formulários, validação e rotas

---

## 2. SEO (Search Engine Optimization)

**Nota: 62/100**

### ✅ Pontos positivos

| Item | Detalhe |
|------|---------|
| `lang="pt-BR"` | Definido em `index.html` |
| Meta description | Presente e descritiva |
| Open Graph básico | `og:title`, `og:description`, `og:image` |
| Viewport | `width=device-width, initial-scale=1.0` |
| H1 único na Home | "Economia de verdade no varejo e atacado" |
| URLs limpas | Rotas semânticas (`/clube`, `/promocoes`, etc.) |
| Favicon SVG | `/favicon.svg` |

### ⚠️ Problemas identificados

| Prioridade | Problema | Impacto | Recomendação |
|------------|----------|---------|--------------|
| Alta | Título idêntico em todas as páginas | SEO por página prejudicado | `react-helmet-async` ou meta dinâmica por rota |
| Alta | Sem `link rel="canonical"` | Duplicidade em deploy | Canonical por URL em produção |
| Alta | Sem `robots.txt` / `sitemap.xml` | Indexação limitada | Adicionar em `public/` |
| Média | `og:image` com path relativo | Preview social pode falhar | URL absoluta em produção |
| Média | Sem JSON-LD (Organization, LocalBusiness) | Rich results perdidos | Schema.org para supermercado |
| Média | Múltiplos `<h2>` do carrossel no DOM | Hierarquia confusa para crawlers | Usar `aria-hidden` nos slides ocultos ou `role="region"` |
| Baixa | Sem meta `keywords` | Baixo impacto (Google ignora) | Opcional |
| Baixa | Sem `hreflang` | N/A se só pt-BR | Manter se monolíngue |

### Meta tags atuais (Home)

```
title: Mercadolar — Economia de verdade | Varejo & Atacado
description: Mercadolar — Rede de supermercados com varejo e atacado...
og:title: Mercadolar — Economia de verdade
og:description: Rede de supermercados com varejo, atacado...
og:image: /brand/mercadolar-logo.png
canonical: (ausente)
robots: (ausente)
```

---

## 3. Acessibilidade (WCAG 2.1)

**Nota: 71/100**

### ✅ Pontos positivos

- Landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`
- Carrossel com `aria-label` em botões (Anterior, Próximo, Slide N)
- Imagens principais com `alt` descritivo
- Formulário com `<label>` associados aos inputs
- Foco visível em inputs (`focus:ring-2`)
- Contraste adequado em textos principais (azul escuro / branco)

### ⚠️ Problemas identificados

| Prioridade | Problema | Local | Recomendação |
|------------|----------|-------|--------------|
| Alta | Botão carrinho sem texto nem `aria-label` | `Header.tsx` | `aria-label="Ver carrinho"` |
| Alta | 3 links `href="#"` | Footer (redes sociais), Cadastro (termos) | URLs reais ou `button` |
| Média | Sem skip link | Layout global | `<a href="#main">` no topo |
| Média | Categorias são `<div>` clicáveis | `HomePage.tsx` | `<button>` ou `<a>` com role |
| Média | Botões "Lojas" e "Minha Conta" sem destino | `Header.tsx` | Implementar ou desabilitar |
| Baixa | Emoji 🎉 na faixa promocional | `Header.tsx` | Ícone Lucide + texto |
| Baixa | `fieldset` sem `aria-describedby` para erros | `CadastroForm.tsx` | Associar mensagens de erro |

---

## 4. Responsividade

**Nota: 78/100**

### Breakpoints utilizados (Tailwind)

| Prefixo | Largura | Uso principal |
|---------|---------|---------------|
| default | < 640px | Mobile first |
| `sm` | ≥ 640px | Botões em linha |
| `md` | ≥ 768px | Grids 2–4 colunas |
| `lg` | ≥ 1024px | Nav desktop, layout cadastro |
| `xl` | — | Não utilizado |

### Desktop (1280px)

- Header completo com navegação horizontal
- Carrossel com mini-marcas na base
- Grid 6 colunas para categorias
- Painel lateral no cadastro (desktop)

### Mobile (375px)

- Menu hamburger funcional
- Carrossel com indicador "N/6"
- Logo e CTA empilhados
- Formulário em coluna única
- **Problema:** botões Lojas/Conta/Carrinho ocultos (`hidden md:flex`) sem alternativa mobile

### Teste Playwright — mobile

- Faixa promocional legível
- Carrossel navegável com setas
- Texto do hero truncado parcialmente na viewport inicial (scroll necessário)

---

## 5. Layout e composição visual

**Nota: 82/100**

### Estrutura da Home (ordem vertical)

1. Header sticky (faixa vermelha + nav)
2. HeroCarousel (campanha + 6 slides)
3. Hero institucional (gradiente + mascote)
4. Stats (4 métricas)
5. Categorias (6 departamentos)
6. Promoções em destaque
7. Varejo vs Atacado (cards)
8. Níveis do Clube (4 tiers)
9. BrandShowcase (identidade visual)
10. CTA final cadastro
11. Footer

### Observações de layout

| Aspecto | Avaliação |
|---------|-----------|
| Hierarquia visual | Clara — badges → títulos → subtítulos |
| Espaçamento | Consistente via `.section-padding` |
| Grid system | Tailwind grid responsivo |
| Redundância | Logo Mercadolar aparece 3× na home (header, hero, showcase) — aceitável para branding |
| Duplo hero | Carrossel + bloco hero podem competir por atenção — considerar unificar |

---

## 6. Identidade visual

**Nota: 85/100**

### Paleta oficial (implementada em `css/style.css`)

| Nome | Hex | Uso |
|------|-----|-----|
| Azul 900 | `#002855` | Header, fundos escuros |
| Azul 700 | `#003D7A` | CTAs secundários |
| Verde 500 | `#2D8A4E` | Ações primárias, frescor |
| Vermelho 500 | `#E31E24` | Promoções, badges |
| Dourado 500 | `#FFB800` | Destaques, ofertas |
| Laranja 500 | `#F47B20` | Impulso, atacado |

### Tipografia

| Função | Fonte | Pesos | Fonte |
|--------|-------|-------|-------|
| Display (h1–h6) | Poppins | 600, 700, 800 | Google Fonts |
| Body | Inter | 400, 500, 600, 700 | Google Fonts |

**Recomendação:** adicionar `&display=swap` (já presente) e considerar self-hosting para performance.

### Assets de marca (`public/brand/`)

| Arquivo | Status | Dimensões detectadas |
|---------|--------|----------------------|
| `logo.svg` | ✅ | Vetorial |
| `logo-white.svg` | ✅ | 300×75 renderizado |
| `logo-icon.svg` | ✅ | Vetorial |
| `mercadolar-logo.png` | ✅ | 1536×1024 |
| `mercadolar-avatar.png` | ✅ | 1536×1024 |
| `mercadolar-mascot.png` | ✅ | 1536×1024 |
| `mercadolar-hero-banner.png` | ✅ | 1536×1024 |

### Mascote

- **Dolarzinho** — personagem ilustrado, uniforme Mercadolar, cesta de vegetais
- Uso consistente em hero, showcase e footer

---

## 7. UX e usabilidade

**Nota: 74/100**

### Jornadas principais

| Jornada | Fluxo | Avaliação |
|---------|-------|-----------|
| Descoberta | Home → Promoções | ✅ Clara com CTAs visíveis |
| Cadastro | Home → Cadastro (4 steps) | ✅ Boa progressão |
| Clube | Home → Clube | ✅ Níveis bem explicados |
| Varejo/Atacado | Nav direta | ✅ Cards diferenciados |

### Formulário de cadastro (UX)

- 4 etapas com indicador visual
- Validação por etapa (CPF, e-mail, CEP)
- Painel lateral de ofertas (desktop)
- Cartão virtual gerado ao final
- **Falta:** autocomplete de CEP (ViaCEP), feedback de loading no submit

### Pontos de friction

1. Botões "Lojas" e "Minha Conta" não fazem nada
2. Carrinho sem funcionalidade (e-commerce não implementado)
3. Categorias na home não navegam a lugar algum
4. Links de termos e privacidade apontam a `#`
5. Redes sociais no footer sem URLs

---

## 8. Estratégias de desenvolvimento

**Nota: 70/100**

### Stack atual

```
React 19.2 + TypeScript 6 + Vite 8 + Tailwind CSS 4
react-router-dom 7 + lucide-react
```

### Padrões adotados

| Padrão | Implementação |
|--------|---------------|
| Componentização | `react/components/` por domínio |
| Dados estáticos | `typescript/data/` |
| Tipos | `typescript/types/` |
| Aliases Vite | `@react`, `@typescript`, `@css`, `@js` |
| Estilos | Tailwind + `@theme` tokens em `css/style.css` |
| Validação | `typescript/utils/validation.ts` |

### Pontos de atenção arquitetural

| Item | Situação | Recomendação |
|------|----------|--------------|
| Pastas na raiz (`react/`, `typescript/`) | Fora do padrão `src/` | Migrar gradualmente ou documentar |
| Duplicação brand | `brand.ts` + `config.js` (`BRAND_PATHS`) | Unificar em um módulo |
| `javascript/` legado | `app.js` só loga no console | Remover ou expandir uso |
| `html/index.html` | Redirect para raiz | Manter como atalho documentado |
| Sem testes | 0 arquivos de teste | Vitest + Testing Library |
| Sem CI | — | GitHub Actions (lint + build) |
| Imagens | PNG full-res | WebP + `srcset` + lazy load |

---

## 9. Performance (imagens e assets)

**Nota: 55/100** 🔴

### Problema crítico

Todas as imagens rasterizadas são **1536×1024 PNG** servidas em elementos que exibem ~300px de largura.

| Imagem | Uso visual | Tamanho real | Impacto |
|--------|------------|--------------|---------|
| `mercadolar-mascot.png` | max-w-sm (~384px) | 1536px | LCP prejudicado |
| `mercadolar-hero-banner.png` | background opacity 20% | 1536px | Download desnecessário |
| `mercadolar-logo.png` | gallery card | 1536px | Excesso |

### Recomendações

1. Exportar versões: `thumb` (400w), `medium` (800w), `full` (1200w)
2. Converter a WebP/AVIF
3. `loading="lazy"` em imagens below-the-fold
4. `fetchpriority="high"` apenas no LCP
5. Considerar SVG para mascote simplificado

---

## 10. Conteúdo e texto

### Tom de voz

- Direto, comercial, focado em economia e benefícios
- Uso de números concretos (280+ lojas, 2M+ clientes, R$ 2bi cashback)
- Campanha "Do Chão à Mesa" — orgânico, zero agrotóxicos

### Consistência

| Termo | Uso |
|-------|-----|
| Mercadolar | Nome da marca |
| Economia de verdade | Slogan |
| Varejo & Atacado | Tagline |
| Dolarzinho | Mascote |
| Clube Mercadolar | Programa fidelidade |
| MercadoCash | Cashback |

### Ortografia

- Português brasileiro correto
- "SKUs", "cashback" — termos de negócio aceitos

---

## 11. Páginas do site (mapa de rotas)

| Rota | Componente | H1 |
|------|------------|-----|
| `/` | `HomePage` | Economia de verdade no varejo e atacado |
| `/varejo` | `VarejoPage` | (verificar) |
| `/atacado` | `AtacadoPage` | (verificar) |
| `/clube` | `ClubePage` | (verificar) |
| `/promocoes` | `PromocoesPage` | Promoções |
| `/cadastro` | `CadastroPage` | Cadastre-se no Mercadolar |

---

## 12. Console e erros

```
[INFO] React DevTools suggestion (dev only)
[INFO] [Mercadolar] Mercadolar — Economia de verdade
```

**0 erros JavaScript** durante a varredura.

---

## 13. Matriz de prioridades (resumo)

| # | Ação | Esforço | Impacto |
|---|------|---------|---------|
| 1 | Otimizar imagens PNG | Médio | Alto |
| 2 | Títulos/meta por página | Baixo | Alto |
| 3 | `aria-label` no carrinho | Baixo | Médio |
| 4 | Resolver links `#` | Baixo | Médio |
| 5 | `robots.txt` + `sitemap.xml` | Baixo | Médio |
| 6 | Skip link + `#main` id | Baixo | Médio |
| 7 | Unificar config brand | Médio | Baixo |
| 8 | Testes automatizados | Alto | Médio |
| 9 | JSON-LD Schema.org | Médio | Médio |
| 10 | Autocomplete CEP | Baixo | Médio |

---

*Relatório gerado por auditoria automatizada (Playwright) + revisão de código-fonte.*
