# Backlog inicial do MVP

## Objetivo do MVP

O MVP da Mazzarino Platform deve validar o núcleo operacional do sistema com foco em:

- cadastro e gestão de clientes
- abertura e acompanhamento de casos
- criação de protocolos
- timeline inicial de eventos
- autenticação por perfil
- base para evolução futura

O MVP não precisa cobrir todo o ecossistema final, mas deve nascer com a arquitetura correta.

---

## Escopo do MVP

### 1. Fundação técnica
- bootstrap do projeto Next.js com TypeScript
- configuração inicial do Supabase
- estrutura base de pastas
- variáveis de ambiente
- setup de lint e formatação
- definição inicial de design system

### 2. Autenticação e perfis
- login de usuários internos
- estrutura para perfis de acesso
- proteção de rotas
- sessão autenticada

### 3. CRM básico
- cadastro de cliente pessoa física
- cadastro de cliente pessoa jurídica
- listagem de clientes
- tela de detalhe do cliente
- campos básicos de contato e identificação

### 4. Casos
- criação de caso vinculado a cliente
- listagem de casos
- tela de detalhe do caso
- status inicial do caso
- vínculo com contrato quando aplicável

### 5. Protocolos
- criação de protocolo a partir do caso
- número interno do protocolo
- status do protocolo
- vínculo entre protocolo e caso

### 6. Timeline inicial
- registro de eventos do caso/protocolo
- exibição cronológica
- tipos básicos de evento
- data, autor e descrição

### 7. Documentos básicos
- upload de arquivos
- vínculo do arquivo ao caso ou protocolo
- listagem simples de documentos

---

## Fora do MVP inicial

Estes itens são importantes, mas podem ficar para fases posteriores:

- portal do cliente
- portal do banco
- negociação avançada
- OCR com Document AI
- assinatura digital integrada
- AR digital
- dossiê em PDF
- dashboards analíticos
- automações complexas

---

## Ordem sugerida de execução

### Etapa 1
- criar aplicação base
- configurar Supabase
- autenticação inicial
- estrutura de layout

### Etapa 2
- módulo de clientes
- listagem e detalhe
- navegação básica

### Etapa 3
- módulo de casos
- vínculo cliente → caso
- listagem e detalhe

### Etapa 4
- módulo de protocolos
- vínculo caso → protocolo
- timeline inicial

### Etapa 5
- upload de documentos
- refinamentos visuais
- revisão da base para próxima fase

---

## Critérios de sucesso do MVP

O MVP será considerado bem sucedido quando permitir:

1. autenticar um usuário interno
2. cadastrar clientes
3. abrir casos para clientes
4. gerar protocolos vinculados
5. registrar eventos em timeline
6. anexar documentos básicos
7. navegar de forma fluida entre cliente, caso e protocolo

---

## Observações

O MVP deve ser construído com mentalidade de produção, mas com escopo controlado.

A prioridade não é colocar todas as funcionalidades no ar rapidamente.
A prioridade é estabelecer uma fundação correta para que a evolução do sistema não vire retrabalho estrutural.
