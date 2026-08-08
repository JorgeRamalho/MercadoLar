# Plano de Ação — Mercadolar

Backlog priorizado derivado da auditoria completa (08/08/2026).

---

## Fase 1 — Correções críticas (Sprint 1, ~1 semana)

### 1.1 Performance de imagens 🔴

- [ ] Exportar PNGs em múltiplos tamanhos (400w, 800w, 1200w)
- [ ] Converter a WebP com fallback PNG
- [ ] Adicionar `loading="lazy"` em imagens below-the-fold
- [ ] `fetchpriority="high"` no mascote (LCP candidate)
- [ ] Documentar pipeline de assets em `public/brand/README.md`

**Critério de aceite:** Lighthouse Performance ≥ 80 em mobile.

### 1.2 SEO básico

- [ ] Meta title/description dinâmicos por rota (`react-helmet-async` ou Vite plugin)
- [ ] `public/robots.txt`
- [ ] `public/sitemap.xml` (6 rotas)
- [ ] `link rel="canonical"` em produção

**Critério de aceite:** Cada página com title único; sitemap acessível em `/sitemap.xml`.

### 1.3 Acessibilidade rápida

- [ ] `aria-label="Ver carrinho"` no botão carrinho
- [ ] Skip link: `<a href="#main" class="sr-only focus:not-sr-only">`
- [ ] `id="main"` no `<main>`
- [ ] Substituir links `#` de termos por páginas ou modais

---

## Fase 2 — UX e funcionalidade (Sprint 2, ~2 semanas)

### 2.1 Header e navegação

- [ ] Implementar página `/lojas` ou modal de lojas
- [ ] Link "Minha Conta" → `/cadastro` ou login futuro
- [ ] Carrinho: remover ou implementar estado vazio com mensagem
- [ ] Menu mobile: incluir ações de Lojas/Conta

### 2.2 Home e interatividade

- [ ] Categorias → link a `/promocoes?categoria=X` ou filtro
- [ ] Carrossel: `aria-hidden="true"` em slides não ativos
- [ ] Unificar ou reduzir duplo hero (carrossel + bloco institucional)

### 2.3 Cadastro

- [ ] Integração ViaCEP no campo CEP
- [ ] Páginas estáticas: Termos de Uso, Política de Privacidade
- [ ] Estado de loading no submit
- [ ] Backend mock → API real (quando disponível)

---

## Fase 3 — Arquitetura e qualidade (Sprint 3, ~2 semanas)

### 3.1 Organização de código

- [x] Consolidar `react/` + `typescript/` + `css/` + `javascript/` → `src/`
- [x] Documentar inventário por pasta em `docs/estrutura/pastas/`
- [x] Mover `iniciar-site.bat` → `scripts/`
- [x] Unificar `src/data/brand.ts` + `src/config/config.js` → `src/config/index.ts`
- [x] Bootstrap (`data-app`) movido para `src/main.tsx`; `app.js` removido
- [x] Helpers JS migrados para `src/utils/format.ts`
- [ ] Adicionar `src/components/ui/sr-only` utility

### 3.2 Testes e CI

- [ ] Vitest + @testing-library/react
- [ ] Testes: validação CPF, CadastroForm steps, rotas
- [ ] GitHub Actions: `npm run lint && npm run build`
- [ ] Preview deploy (Vercel/Netlify)

### 3.3 SEO avançado

- [ ] JSON-LD Organization + LocalBusiness
- [ ] `og:image` com URL absoluta em build
- [ ] Meta `theme-color` (#002855)

---

## Fase 4 — Evolução de produto (Backlog)

| Item | Descrição | Prioridade |
|------|-----------|------------|
| E-commerce | Catálogo + carrinho funcional | Alta |
| Auth | Login de cliente existente | Alta |
| PWA | Service worker + offline encarte | Média |
| i18n | Suporte multilíngue | Baixa |
| Dark mode | Tema escuro opcional | Baixa |
| Analytics | PostHog / GA4 | Média |
| CMS | Promoções dinâmicas | Média |

---

## Cronograma visual

```
Semana 1    │ Fase 1: Imagens + SEO + A11y básico
Semana 2-3  │ Fase 2: UX header, cadastro, links
Semana 4-5  │ Fase 3: Arquitetura, testes, CI
Contínuo    │ Fase 4: Produto (e-commerce, auth)
```

---

## Métricas de sucesso

| Métrica | Baseline (ago/2026) | Target |
|---------|---------------------|--------|
| Lighthouse Performance | ~55 (estimado) | ≥ 85 |
| Lighthouse Accessibility | ~71 | ≥ 90 |
| Lighthouse SEO | ~62 | ≥ 90 |
| Lighthouse Best Practices | — | ≥ 90 |
| Erros console (prod) | 0 | 0 |
| Imagens > 500KB | 4 | 0 |
| Links mortos `#` | 3+ | 0 |

---

## Responsáveis sugeridos

| Área | Responsável |
|------|-------------|
| Front-end / React | Dev front-end |
| Design / Brand | Designer (assets WebP) |
| Backend / API | Dev back-end (cadastro) |
| QA | Testes Playwright e Lighthouse |
| DevOps | CI/CD e deploy |

---

## Registro de mudanças

| Data | Versão | Alteração |
|------|--------|-----------|
| 08/08/2026 | 1.1 | Migração para `src/`, raiz enxuta, docs por pasta |
