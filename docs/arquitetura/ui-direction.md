# Direção visual e estratégia de componentes

## Objetivo

Definir a direção visual da Mazzarino Platform para garantir consistência, escalabilidade e aderência real à experiência Microsoft desejada para o produto.

---

## Decisão recomendada

A Mazzarino Platform deve adotar **Fluent 2** como base principal da camada visual.

Na prática, isso significa priorizar:

- `@fluentui/react-components` como biblioteca de componentes primária
- tokens, padrões de spacing e semântica visual próximos do ecossistema Microsoft
- experiência mais coerente com o objetivo estético inspirado em Microsoft 365 e Dynamics

---

## O que isso resolve

### 1. Consistência de linguagem visual

Se o objetivo do produto é transmitir experiência Microsoft Enterprise, usar Fluent 2 reduz a distância entre a intenção visual e a implementação real.

### 2. Menos reinvenção desnecessária

Criar do zero tabelas, formulários, sidebars, command bars, dialogs, badges e padrões de navegação aumenta custo de design e tende a gerar inconsistências.

### 3. Base madura para produto corporativo

Fluent 2 já nasce com mentalidade de software empresarial, o que ajuda bastante em:

- formulários densos
- navegação lateral
- tabelas e listas
- painéis de detalhe
- ações contextuais
- estados visuais previsíveis

### 4. Escalabilidade da UI

Quanto mais módulos o sistema ganhar, mais importante será ter uma base de componentes realmente padronizada.

---

## Recomendação prática de uso

### Fluent 2 deve ser a camada principal para:

- shell da aplicação
- app frame
- sidebar
- topbar
- botões
- inputs
- selects
- comboboxes
- dialogs
- drawers
- tabs
- badges
- toasts
- tabelas e grids
- cards administrativos
- componentes de detalhe de registro

### Tailwind deve continuar como camada auxiliar para:

- layout fino
- utilidades rápidas
- espaçamento pontual
- prototipação
- ajustes localizados

### shadcn/ui não deve ser a linguagem principal do produto

Ele pode até continuar existindo em casos específicos, mas não deve ditar a identidade visual principal se o objetivo estratégico é experiência Microsoft.

---

## Estratégia de adoção

### Fase 1
- manter a base atual do projeto
- introduzir Fluent 2 no shell principal
- criar Provider e theme base
- padronizar topbar, sidebar e layout principal

### Fase 2
- migrar componentes estruturais para Fluent 2
- formulários
- tabelas
- painéis de detalhe
- componentes de ação

### Fase 3
- consolidar design tokens próprios da Mazzarino Corp em cima do Fluent 2
- ajustar branding sem romper a base Microsoft-like

---

## Observação importante

Usar Fluent 2 não significa copiar a Microsoft literalmente.

Significa aproveitar uma base visual e técnica que já conversa com a experiência desejada, para então personalizar a plataforma com identidade própria da Mazzarino Corp.

---

## Veredito

Para este projeto, a melhor decisão é:

- **Fluent 2 como base principal de componentes**
- **Tailwind como apoio**
- **componentes custom próprios apenas onde o domínio exigir**

Essa combinação tende a produzir um resultado mais consistente, mais rápido e muito mais próximo da estética Microsoft Enterprise do que seguir construindo tudo manualmente.
