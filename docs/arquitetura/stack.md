# Stack e arquitetura técnica

## Objetivo

Este documento registra a base técnica inicial da Mazzarino Platform.

A proposta é manter uma stack moderna, simples de operar, bem documentada e altamente compatível com desenvolvimento assistido por IA.

---

## Stack principal

### Aplicação web
- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui

### Backend
- Next.js Route Handlers
- Server Actions quando fizer sentido
- Node.js
- TypeScript

### Banco e serviços centrais
- Supabase
  - PostgreSQL
  - Auth
  - Storage
  - Realtime
  - Row Level Security

### Infraestrutura
- Vercel para deploy da aplicação
- Supabase como backend gerenciado
- Google Cloud Document AI para OCR

### Integrações externas previstas
- ZapSign / Clicksign / DocuSign
- WeSend / AR Online
- Resend / SendGrid
- Z-API / Twilio
- gateways de pagamento

---

## Princípios técnicos

1. Uma aplicação principal, evitando fragmentação desnecessária.
2. Mesmo backend e mesma base para operação interna e portais externos.
3. TypeScript em toda a stack sempre que possível.
4. Preferência por serviços gerenciados para reduzir carga de infraestrutura.
5. Segurança e segregação de acesso como parte da arquitetura, não como remendo posterior.

---

## Estrutura de ambientes

### Desenvolvimento
- Vercel preview quando aplicável
- Supabase projeto de desenvolvimento
- variáveis de ambiente locais

### Produção
- Vercel produção
- Supabase produção
- integrações externas com credenciais próprias

---

## Domínios previstos

- `app.mazzarino.com.br`
- `cliente.mazzarino.com.br`
- `banco.mazzarino.com.br`

Todos devem compartilhar o mesmo núcleo de autenticação e lógica de negócio, com diferenças por perfil e permissão.

---

## Decisões iniciais

### Escolhas aprovadas
- Next.js em vez de separar frontend e backend em projetos distintos
- PostgreSQL via Supabase como base de dados principal
- Vercel como primeira camada de hospedagem da aplicação
- GCloud focado em OCR e serviços específicos, não como cloud principal da aplicação neste momento

### Escolhas descartadas por agora
- Zoho como base de desenvolvimento do sistema
- CRM comprado como centro da operação
- múltiplos sistemas independentes sem núcleo unificado
- AWS como prioridade inicial de operação

---

## Próximos documentos relacionados

- `docs/backlog/mvp.md`
- `docs/regras-negocio/entidades-centrais.md`
- `docs/arquitetura/modelo-de-acesso.md`
- `docs/arquitetura/integracoes-previstas.md`
