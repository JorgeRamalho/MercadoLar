# Documentação — Projeto Mercadolar

Índice central da documentação técnica, auditoria e planejamento do site institucional Mercadolar.

## Estrutura da documentação

| Documento | Descrição |
|-----------|-----------|
| [Auditoria Completa](./auditoria/AUDITORIA-COMPLETA.md) | Relatório Playwright + análise de código (SEO, UX/UI, responsividade, identidade visual) |
| [Mapa do Projeto](./estrutura/MAPA-PROJETO.md) | Árvore de pastas, responsabilidades e convenções |
| [Inventário por pasta](./estrutura/pastas/) | Arquivo a arquivo em cada diretório (`RAIZ`, `SRC`, `PUBLIC`, `SCRIPTS`…) |
| [Ecossistema Externo](./estrutura/ECOSSISTEMA.md) | Pastas fora da raiz do repositório e relação com o projeto |
| [Plano de Ação](./plano/PLANO-ACAO.md) | Prioridades, backlog e cronograma sugerido |

## Resumo executivo (auditoria — ago/2026)

| Área | Nota | Status |
|------|------|--------|
| SEO | 62/100 | ⚠️ Melhorias necessárias |
| Acessibilidade | 71/100 | ⚠️ Melhorias necessárias |
| Responsividade | 78/100 | ✅ Aceitável |
| UI / Identidade visual | 85/100 | ✅ Bom |
| UX / Usabilidade | 74/100 | ⚠️ Melhorias necessárias |
| Arquitetura / Código | 70/100 | ⚠️ Melhorias necessárias |
| Performance (imagens) | 55/100 | 🔴 Crítico |

**Pontos fortes:** identidade visual consistente, stack moderna (React 19 + Vite 8 + Tailwind 4), formulário de cadastro multi-step bem estruturado, dados centralizados em `src/data/`.

**Pontos críticos:** imagens PNG em 1536×1024 sem otimização, títulos de página estáticos, links mortos (`#`), botões sem rótulo acessível.

## Como executar

```bash
npm install
npm run dev    # http://localhost:5173
```

## Manutenção da documentação

- Atualizar a auditoria após cada release significativa.
- Registrar mudanças de estrutura em `MAPA-PROJETO.md`.
- Revisar `PLANO-ACAO.md` ao fechar itens do backlog.
