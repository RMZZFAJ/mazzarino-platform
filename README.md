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
