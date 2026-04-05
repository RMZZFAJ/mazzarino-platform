# Mazzarino Platform

Plataforma central da Mazzarino Corp para CRM, gestão de casos, protocolos, processos, documentos, negociações e portais externos. O projeto nasce como um sistema próprio, unificado e orientado à visão 360° do cliente, evitando fragmentação entre múltiplos sistemas desconectados.

---

## Visão do projeto

A Mazzarino Platform foi concebida para ser a aplicação central da operação da empresa, reunindo em um único ecossistema:

- CRM de clientes e empresas
- gestão de casos e contratos
- protocolos e processos administrativos
- timeline operacional e jurídica
- documentos e evidências
- negociações e propostas
- portal externo para clientes
- portal externo para bancos
- relatórios, métricas e inteligência operacional

O objetivo é garantir:

- visão 360° do cliente
- integração nativa entre módulos
- coerência visual e operacional
- controle de acesso por perfil
- rastreabilidade completa de eventos
- base sólida para evolução contínua

---

## Princípios do sistema

Este sistema está sendo construído com os seguintes princípios:

1. **All-in-one de verdade**  
   CRM, casos, documentos, negociação e portais externos devem viver no mesmo produto.

2. **Mesma base de dados, mesma lógica, mesma identidade visual**  
   Nada de “salada de sistemas” com experiências desconectadas.

3. **Integrações externas apenas onde fizer sentido**  
   Assinatura, AR, OCR, e-mail, WhatsApp e pagamentos serão integrados por API, sem reinventar essas camadas.

4. **Arquitetura moderna e simples para desenvolvimento assistido por IA**  
   O projeto foi desenhado para ser desenvolvido com apoio intensivo de IA, priorizando stack amplamente conhecida e bem documentada.

5. **Segurança, rastreabilidade e segregação de acesso desde o início**  
   O sistema deve ser preparado para operação real, com políticas de acesso por perfil e histórico auditável.

---

## Escopo principal

### Módulos internos
- CRM
- Casos
- Protocolos
- Processos administrativos
- Documentos
- Timeline unificada
- Negociação
- Relatórios
- Dashboard operacional

### Portais externos
- Portal do cliente
- Portal do banco

### Integrações previstas
- assinatura eletrônica/digital
- AR digital
- OCR de contratos
- e-mail transacional
- WhatsApp/SMS
- geração de PDF
- webhooks e automações

---

## Stack principal

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- Next.js App Router
- Node.js
- TypeScript

### Banco de dados e serviços centrais
- Supabase
  - PostgreSQL
  - Auth
  - Storage
  - Realtime
  - Row Level Security

### Infraestrutura
- Vercel
- Google Cloud Document AI (OCR)
- serviços externos via API conforme necessidade

---

## Arquitetura esperada

A plataforma será construída como uma aplicação principal com múltiplas áreas de acesso:

- `app.mazzarino.com.br` → operação interna
- `cliente.mazzarino.com.br` → portal do cliente
- `banco.mazzarino.com.br` → portal do banco

Essas áreas compartilharão:

- o mesmo backend
- a mesma base de dados
- o mesmo núcleo de autenticação
- a mesma lógica de negócio

A diferença entre elas estará no:

- perfil do usuário
- permissões
- escopo visual
- dados acessíveis
- fluxos disponíveis

---

## Conceito funcional

A lógica central do sistema parte da relação entre:

- cliente
- contrato
- caso
- protocolo
- processo
- evento
- documento
- negociação

Exemplo de fluxo esperado:

1. um cliente entra no sistema
2. um ou mais contratos são vinculados a ele
3. um caso é aberto
4. o caso pode gerar protocolo
5. o protocolo pode evoluir para processo administrativo
6. o processo recebe despachos, documentos, movimentações e comunicações
7. a negociação ocorre dentro do mesmo ecossistema
8. cliente e banco acompanham apenas o que lhes for permitido

---

## Diretrizes visuais

A experiência visual desejada para a plataforma segue como referência:

- ecossistema Microsoft Enterprise
- Microsoft Dynamics 365
- organização visual inspirada em sistemas corporativos robustos
- timeline operacional rica e clara
- navegação profissional, sóbria e consistente
- foco em legibilidade, produtividade e sensação de plataforma premium

---

## Estrutura planejada do repositório

```txt
.
├── README.md
├── docs/
│   ├── arquitetura/
│   ├── backlog/
│   ├── regras-negocio/
│   ├── fluxos/
│   └── modelos/
├── app/                  # Next.js App Router
├── src/
│   ├── components/
│   ├── features/
│   ├── lib/
│   ├── services/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   └── styles/
├── supabase/
│   ├── migrations/
│   ├── seed/
│   └── functions/
├── public/
├── tests/
└── scripts/
```

> A estrutura final poderá evoluir conforme o projeto amadurecer.

---

## Status atual

**Fase atual:** fundação do projeto

O repositório foi criado para servir como base da construção da plataforma. Nesta etapa inicial, o foco está em:

- definição da arquitetura
- organização do repositório
- definição do schema do banco
- modelagem das entidades principais
- preparação do bootstrap técnico
- documentação inicial

---

## Roadmap macro

### Fase 1 — Fundação
- criação do repositório
- definição da stack
- modelagem do banco
- autenticação e perfis
- estrutura base do projeto
- documentação inicial

### Fase 2 — Núcleo operacional
- CRM básico
- cadastro de clientes
- cadastro de casos
- protocolos
- timeline inicial
- upload de documentos

### Fase 3 — Evolução jurídica e operacional
- processos administrativos
- controle de tramitação
- visibilidade por perfil
- negociações
- histórico de propostas
- geração de dossiês

### Fase 4 — Portais externos
- portal do cliente
- portal do banco
- acesso restrito por contexto
- consulta segura de documentos e andamento

### Fase 5 — Integrações e inteligência
- assinatura digital
- AR digital
- OCR de contratos
- comunicações automatizadas
- métricas, relatórios e dashboards

---

## Integrações previstas

A plataforma poderá integrar, entre outros:

- ZapSign / Clicksign / DocuSign
- WeSend / AR Online
- Resend / SendGrid
- Z-API / Twilio
- Google Document AI
- gateways de pagamento
- webhooks de terceiros

Essas integrações serão adicionadas gradualmente, conforme a maturidade do sistema.

---

## Segurança e acesso

Este projeto será construído com atenção especial a:

- segregação de acesso por perfil
- Row Level Security no banco
- autenticação centralizada
- rastreabilidade de eventos
- proteção de documentos
- armazenamento seguro
- visibilidade contextual de dados
- preparação para requisitos de conformidade e LGPD

---

## Convenções iniciais

### Linguagem
- TypeScript em toda a aplicação sempre que possível

### Estilo de código
- legibilidade acima de “esperteza”
- componentes reutilizáveis
- nomes claros
- separação por domínio funcional

### Commits
Padrão sugerido:

- `feat:`
- `fix:`
- `refactor:`
- `docs:`
- `chore:`

Exemplos:
- `feat: cria estrutura inicial do módulo de clientes`
- `fix: corrige validação de autenticação no portal`
- `docs: adiciona modelagem inicial do banco`

### Branches
Padrão sugerido:

- `main`
- `dev`
- `feature/nome-da-feature`
- `fix/nome-do-ajuste`

---

## Documentação do projeto

A pasta `docs/` deverá concentrar a documentação viva do sistema, incluindo:

- arquitetura
- backlog
- regras de negócio
- fluxos operacionais
- contratos de integração
- decisões técnicas
- modelagem de banco
- wireframes e referências visuais

---

## Ambiente local

O ambiente local será documentado após o bootstrap inicial do projeto.

Itens previstos:

- Node.js
- pnpm
- projeto Next.js
- Supabase local ou remoto
- variáveis de ambiente
- scripts de desenvolvimento
- convenções de execução

---

## Variáveis de ambiente

As variáveis reais serão definidas conforme o projeto for inicializado.

Exemplos esperados:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=
SUPABASE_SERVICE_ROLE_KEY=

GOOGLE_CLOUD_PROJECT_ID=
GOOGLE_APPLICATION_CREDENTIALS=

RESEND_API_KEY=
ZAPSIGN_API_KEY=
AR_ONLINE_API_KEY=
ZAPI_INSTANCE_ID=
ZAPI_TOKEN=
```

> Nunca versionar arquivos `.env` reais com segredos.

---

## Objetivo estratégico

A Mazzarino Platform não é apenas um software interno.  
Ela é a base digital da operação da Mazzarino Corp.

O sistema deve permitir que a empresa tenha:

- visão centralizada da operação
- padronização dos fluxos
- ganho real de produtividade
- experiência premium e coerente
- independência de ecossistemas engessados
- crescimento progressivo com base própria

---

## Licenciamento e uso

Este repositório é de uso interno e proprietário.

Todos os direitos relacionados ao código, regras de negócio, arquitetura, documentação e ativos vinculados a este projeto pertencem à Mazzarino Corp, salvo quando houver dependências ou bibliotecas de terceiros sob suas respectivas licenças.

---

## Observação

Este README descreve a visão inicial, a arquitetura-base e o direcionamento estratégico do projeto.  
Ele será atualizado continuamente à medida que a plataforma evoluir.
