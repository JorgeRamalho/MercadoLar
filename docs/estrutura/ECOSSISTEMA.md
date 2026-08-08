# Ecossistema Externo — Pastas fora da raiz do repositório

Mapeamento das pastas **fora** de `Projeto-Mercadolar/` e como se relacionam com o projeto.

---

## Hierarquia de diretórios

```
j:\area de trabalho\
└── Fron_End\                          ← Pasta de projetos front-end
    └── Projetos\                      ← Agrupamento de projetos
        └── Projeto-Mercadolar\        ← RAIZ DO REPOSITÓRIO GIT ★
            ├── (estrutura interna — ver MAPA-PROJETO.md)
            └── ...
```

---

## Pastas externas identificadas

### 1. `j:\area de trabalho\`

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Pasta de usuário Windows |
| **Relação** | Ancestral — contém `Fron_End` |
| **Impacto no projeto** | Nenhum direto |
| **Observação** | Caminho com espaços — usar aspas em CLI |

### 2. `j:\area de trabalho\Fron_End\`

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Workspace de front-end |
| **Relação** | Pasta pai de todos os projetos web |
| **Conteúdo atual** | Aparentemente apenas `Projetos/` |
| **Impacto** | Organização de múltiplos projetos futuros |

### 3. `j:\area de trabalho\Fron_End\Projetos\`

| Aspecto | Detalhe |
|---------|---------|
| **Tipo** | Container de projetos |
| **Relação** | Pasta imediatamente acima do repo |
| **Conteúdo atual** | Somente `Projeto-Mercadolar` |
| **Impacto** | Nome do projeto no path (`Projetos/Projeto-Mercadolar`) |

### 4. Pastas geradas (não versionadas)

| Pasta | Local | Função |
|-------|-------|--------|
| `node_modules/` | Raiz do projeto | Dependências npm |
| `dist/` | Raiz do projeto | Build de produção |
| `.playwright-mcp/` | Workspace Cursor | Screenshots da auditoria |

### 5. Ferramentas Cursor (IDE)

| Pasta | Local | Função |
|-------|-------|--------|
| `terminals/` | `.cursor/projects/.../` | Estado dos terminais |
| `agent-transcripts/` | `.cursor/projects/.../` | Histórico de agentes |
| `canvases/` | `.cursor/projects/.../` | Canvas interativos |

**Não fazem parte do repositório Git.**

---

## Diagrama de relações

```
┌─────────────────────────────────────────────────────────┐
│  Windows — j:\area de trabalho\                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Fron_End (workspace front-end)                   │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │  Projetos/                                  │  │  │
│  │  │  ┌───────────────────────────────────────┐  │  │  │
│  │  │  │  Projeto-Mercadolar/  ← GIT REPO      │  │  │  │
│  │  │  │  ├── react/ typescript/ css/ ...      │  │  │  │
│  │  │  │  ├── public/                        │  │  │  │
│  │  │  │  ├── docs/                          │  │  │  │
│  │  │  │  ├── node_modules/ (local)          │  │  │  │
│  │  │  │  └── dist/ (build)                  │  │  │  │
│  │  │  └───────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

        ↕ npm run dev
┌─────────────────────────────────────────────────────────┐
│  http://localhost:5173/  (Vite dev server)              │
│  Network: http://192.168.15.2:5173/                     │
└─────────────────────────────────────────────────────────┘
```

---

## Serviços externos referenciados (não locais)

| Serviço | Uso no projeto | Status |
|---------|----------------|--------|
| Google Fonts | Inter + Poppins | CDN em `index.html` |
| ViaCEP | Autocomplete CEP | Não implementado |
| Backend API | Cadastro de clientes | Não implementado (mock local) |
| Analytics | — | Não configurado |

---

## Recomendações de organização externa

### Manter

- `Fron_End/Projetos/` como container — padrão claro para novos projetos
- `Projeto-Mercadolar` como nome do repo — alinhado ao `package.json`

### Considerar

1. **Renomear** `Fron_End` → `Front_End` (ortografia) — apenas se não quebrar paths
2. **Adicionar** `.editorconfig` na raiz para consistência entre projetos
3. **Workspace VS Code/Cursor** em `Fron_End/` para multi-root se novos projetos surgirem

### Evitar

- Abrir `index.html` direto no navegador ou com Live Server — não processa `.tsx`; use `npm run dev`
- Commitar `node_modules/` ou `dist/`
- Duplicar assets de brand fora de `public/brand/`

---

## Checklist de paths importantes

| Path absoluto | Descrição |
|---------------|-----------|
| `j:\area de trabalho\Fron_End\Projetos\Projeto-Mercadolar` | Raiz Git |
| `...\Projeto-Mercadolar\index.html` | Entrada Vite |
| `...\Projeto-Mercadolar\src\` | Código-fonte (React, dados, estilos) |
| `...\Projeto-Mercadolar\public\brand\` | Assets de marca |
| `...\Projeto-Mercadolar\docs\` | Documentação |
| `...\Projeto-Mercadolar\src\main.tsx` | Entry React |
