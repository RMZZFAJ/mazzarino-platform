// ============================================================
// DOMAIN TYPES — Mazzarino Platform
// Tipos de domínio da aplicação (camelCase, orientados ao produto)
// NÃO confundir com database.types.ts que reflete o schema do banco
// ============================================================

export type ProfileType =
  | "admin" | "supervisor" | "analyst" | "legal"
  | "commercial" | "financial" | "negotiator" | "operator"
  | "client" | "bank_rep";

export type VisibilityType = "internal" | "client" | "bank" | "public";

export type CasePhase =
  | "protocol" | "analysis" | "proposal"
  | "process" | "negotiation" | "agreement" | "closed";

export type CaseStatus = "active" | "on_hold" | "closed_won" | "closed_lost" | "archived";
export type CasePriority = "low" | "normal" | "high" | "urgent";

export type ProtocolStatus =
  | "open" | "in_analysis" | "awaiting_signature" | "awaiting_payment"
  | "converted" | "rejected" | "archived";

export type ProcessStatus =
  | "open" | "in_progress" | "negotiating" | "awaiting_agreement"
  | "awaiting_payment" | "closed_won" | "closed_no_deal" | "archived";

export type ProcessPhase =
  | "opening" | "notification" | "negotiation" | "agreement" | "payment" | "closed";

export type ContractStatus =
  | "pending_analysis" | "viable" | "not_viable" | "viable_with_caveats" | "archived";

export type DocumentStatus =
  | "pending_review" | "validated" | "signed" | "sent" | "in_progress" | "archived";

export type NegotiationStatus =
  | "open" | "awaiting_response" | "counter_received"
  | "accepted" | "rejected" | "suspended" | "closed";

// ============================================================
// PROFILE
// ============================================================
export interface Profile {
  id: string;
  fullName: string;
  email: string;
  profileType: ProfileType;
  sector?: string | null;
  isActive: boolean;
  avatarUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

// ============================================================
// ORGANIZATION (bank, company, partner)
// ============================================================
export interface Organization {
  id: string;
  type: "bank" | "company" | "partner" | "other";
  name: string;
  document?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  isActive: boolean;
  metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

// ============================================================
// CLIENT
// ============================================================
export interface Client {
  id: string;
  kind: "pf" | "pj";
  name: string;
  document: string;
  email?: string | null;
  phone?: string | null;
  phoneSecondary?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  birthDate?: string | null;
  organizationId?: string | null;
  leadSource?: string | null;
  leadNotes?: string | null;
  isActive: boolean;
  metadata?: Record<string, unknown> | null;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;
  // relations (when loaded)
  organization?: Organization;
  cases?: Case[];
  contracts?: Contract[];
}

// ============================================================
// CONTRACT
// ============================================================
export interface Contract {
  id: string;
  clientId: string;
  organizationId?: string | null;
  contractNumber?: string | null;
  type?: string | null;
  modality?: string | null;
  status: ContractStatus;
  originalValue?: number | null;
  currentBalance?: number | null;
  interestRate?: number | null;
  cet?: number | null;
  installmentsTotal?: number | null;
  installmentsPaid?: number | null;
  contractDate?: string | null;
  expiryDate?: string | null;
  irregularities?: string[];
  ocrData?: Record<string, unknown> | null;
  humanValidated: boolean;
  humanValidatedBy?: string | null;
  humanValidatedAt?: string | null;
  notes?: string | null;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;
  // relations
  organization?: Organization;
}

// ============================================================
// CASE
// ============================================================
export interface Case {
  id: string;
  caseNumber: string;
  year: number;
  clientId: string;
  title: string;
  status: CaseStatus;
  priority: CasePriority;
  phase: CasePhase;
  channel?: string | null;
  responsibleId?: string | null;
  openedBy?: string | null;
  closedAt?: string | null;
  closedReason?: string | null;
  notes?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  // relations
  client?: Client;
  contracts?: Contract[];
  protocols?: Protocol[];
  negotiations?: Negotiation[];
  responsible?: Profile;
}

// ============================================================
// PROTOCOL
// ============================================================
export interface Protocol {
  id: string;
  caseId: string;
  protocolNumber: string;
  externalToken: string;
  status: ProtocolStatus;
  viability?: "high" | "medium" | "low" | "none" | null;
  phase: string;
  proposalValue?: number | null;
  feePercent?: number | null;
  feeAmount?: number | null;
  advanceRequired: boolean;
  advanceAmount?: number | null;
  advancePaidAt?: string | null;
  proposalSentAt?: string | null;
  proposalExpiresAt?: string | null;
  proposalSignedAt?: string | null;
  convertedTo?: string | null;
  responsibleId?: string | null;
  openedBy?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
  // relations
  case?: Case;
  process?: AdministrativeProcess;
  timelineEvents?: TimelineEvent[];
}

// ============================================================
// ADMINISTRATIVE PROCESS
// ============================================================
export interface AdministrativeProcess {
  id: string;
  protocolId: string;
  caseId: string;
  processNumber: string;
  externalToken: string;
  status: ProcessStatus;
  phase: ProcessPhase;
  organizationId?: string | null;
  organizationContact?: string | null;
  organizationContactEmail?: string | null;
  notificationSentAt?: string | null;
  notificationDeadline?: string | null;
  agreedValue?: number | null;
  paymentExpectedAt?: string | null;
  paymentConfirmedAt?: string | null;
  responsibleId?: string | null;
  currentSector?: string | null;
  slaDeadline?: string | null;
  notes?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  // relations
  organization?: Organization;
  protocol?: Protocol;
  timelineEvents?: TimelineEvent[];
  negotiations?: Negotiation[];
  documents?: Document[];
}

// ============================================================
// NEGOTIATION
// ============================================================
export interface Negotiation {
  id: string;
  caseId: string;
  processId?: string | null;
  organizationId?: string | null;
  status: NegotiationStatus;
  proposedValue?: number | null;
  acceptedValue?: number | null;
  conditions?: string | null;
  startedAt?: string | null;
  endedAt?: string | null;
  responsibleId?: string | null;
  notes?: string | null;
  metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  // relations
  case?: Case;
  process?: AdministrativeProcess;
  organization?: Organization;
  responsible?: Profile;
  timelineEvents?: TimelineEvent[];
  documents?: Document[];
}

// ============================================================
// TIMELINE EVENT
// ============================================================
export interface TimelineEvent {
  id: string;
  caseId?: string | null;
  protocolId?: string | null;
  processId?: string | null;
  type: string;
  title: string;
  body?: string | null;
  fromSector?: string | null;
  toSector?: string | null;
  fromProfileId?: string | null;
  toProfileId?: string | null;
  visibility: VisibilityType;
  authorId?: string | null;
  authorName?: string | null;
  externalRef?: string | null;
  createdAt: string;
  // relations
  documents?: Document[];
  fromProfile?: Profile;
  toProfile?: Profile;
}

// ============================================================
// DOCUMENT
// ============================================================
export interface Document {
  id: string;
  name: string;
  documentType: string;
  parentEntityType: "client" | "contract" | "case" | "protocol" | "process" | "negotiation";
  parentEntityId: string;
  storagePath: string;
  mimeType?: string | null;
  sizeBytes?: number | null;
  status: DocumentStatus;
  visibility: VisibilityType;
  uploadedById?: string | null;
  uploadedAt: string;
  createdAt: string;
  updatedAt: string;
  // relations
  uploadedBy?: Profile;
}
