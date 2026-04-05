# Entidades centrais do domínio

## Objetivo

Este documento registra a modelagem conceitual inicial das principais entidades de negócio da Mazzarino Platform.

A intenção aqui não é fechar o schema técnico definitivo, mas organizar a linguagem do domínio e a relação entre os objetos centrais do sistema.

---

## Núcleo conceitual

A lógica principal da plataforma gira em torno das seguintes entidades:

- cliente
- contrato
- caso
- protocolo
- processo administrativo
- evento
- documento
- negociação
- usuário
- organização relacionada

---

## Cliente

Representa a pessoa física ou jurídica atendida pela Mazzarino Corp.

### Possíveis atributos iniciais
- id
- tipo de cliente (PF/PJ)
- nome ou razão social
- CPF/CNPJ
- contato principal
- e-mail
- telefone
- endereço
- observações
- origem do lead
- status de relacionamento

### Relações esperadas
- um cliente pode ter vários contratos
- um cliente pode ter vários casos
- um cliente pode ter histórico de comunicações

---

## Contrato

Representa o contrato ou operação que originou a necessidade de análise, revisão, disputa ou negociação.

### Possíveis atributos iniciais
- id
- cliente_id
- tipo de contrato
- instituição relacionada
- número do contrato
- data da contratação
- valor original
- status
- metadados extraídos

### Relações esperadas
- um contrato pertence a um cliente
- um contrato pode estar vinculado a um ou mais casos, conforme a modelagem final
- um contrato pode gerar documentos, análises e eventos

---

## Caso

Representa a unidade principal de trabalho operacional vinculada a um cliente, podendo nascer de um contrato, de uma demanda administrativa ou de um contexto negocial.

### Possíveis atributos iniciais
- id
- cliente_id
- titulo
- descricao
- tipo de caso
- status
- prioridade
- responsavel_atual
- data_abertura
- data_encerramento

### Relações esperadas
- um caso pertence a um cliente
- um caso pode envolver um ou mais contratos
- um caso pode gerar protocolo
- um caso possui eventos, documentos e negociações

---

## Protocolo

Representa o registro formal inicial de uma tramitação administrativa ou interna.

### Possíveis atributos iniciais
- id
- caso_id
- numero_protocolo
- data_criacao
- status
- setor_origem
- setor_destino
- observacoes

### Relações esperadas
- um protocolo nasce de um caso
- um protocolo pode evoluir para processo administrativo
- um protocolo possui eventos e documentos próprios

---

## Processo administrativo

Representa a evolução formal do protocolo em uma tramitação administrativa estruturada.

### Possíveis atributos iniciais
- id
- protocolo_id
- numero_processo
- fase_atual
- status
- data_inicio
- data_fim
- resumo

### Relações esperadas
- um processo administrativo nasce de um protocolo
- um processo possui eventos, despachos, documentos e comunicações
- um processo pode estar vinculado a negociação e desfechos diversos

---

## Evento

Representa qualquer fato relevante na timeline do sistema.

### Exemplos
- criação de caso
- criação de protocolo
- despacho
- anexação de documento
- envio de e-mail
- assinatura concluída
- proposta enviada
- contraproposta recebida

### Possíveis atributos iniciais
- id
- entidade_pai_tipo
- entidade_pai_id
- tipo_evento
- titulo
- descricao
- visibilidade
- autor_id
- data_evento
- metadados

### Relações esperadas
- eventos podem estar ligados a caso, protocolo, processo ou negociação
- eventos alimentam a timeline unificada

---

## Documento

Representa qualquer arquivo ou artefato documental associado ao sistema.

### Possíveis atributos iniciais
- id
- nome_arquivo
- tipo_documento
- entidade_pai_tipo
- entidade_pai_id
- storage_path
- mime_type
- tamanho
- data_upload
- usuario_upload_id
- visibilidade

### Relações esperadas
- documentos podem estar ligados a cliente, contrato, caso, protocolo ou processo
- documentos podem participar de eventos de timeline

---

## Negociação

Representa o fluxo de propostas, contrapropostas e condições entre as partes.

### Possíveis atributos iniciais
- id
- caso_id
- status
- valor_proposto
- valor_aceito
- condicoes
- data_inicio
- data_fim

### Relações esperadas
- uma negociação pertence a um caso
- uma negociação possui eventos próprios
- uma negociação pode envolver múltiplas propostas ao longo do tempo

---

## Usuário

Representa a pessoa autenticada no sistema.

### Perfis esperados
- interno
- cliente
- banco
- administrador

### Relações esperadas
- usuário pode criar eventos
- usuário pode anexar documentos
- usuário pode ter permissões específicas por contexto

---

## Organização relacionada

Representa entidades como bancos, empresas, parceiros e outras instituições vinculadas à operação.

### Possíveis atributos iniciais
- id
- tipo
- nome
- documento
- contato
- observacoes

### Relações esperadas
- contratos podem apontar para uma organização relacionada
- negociações podem envolver organizações relacionadas
- processos podem citar organizações relacionadas

---

## Observações importantes

1. A modelagem final do banco poderá normalizar ou expandir essas entidades.
2. Algumas relações podem mudar quando o schema técnico for desenhado.
3. A linguagem do domínio deve permanecer consistente entre documentação, banco e interface.

---

## Próximo passo

O próximo documento crítico será a tradução destas entidades para um schema relacional inicial no Supabase/PostgreSQL.
