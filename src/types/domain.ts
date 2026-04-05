export type ProfileType = "admin" | "internal" | "client" | "bank";

export interface Organization {
  id: string;
  type: "bank" | "company" | "partner" | "other";
  name: string;
  document?: string | null;
}

export interface Client {
  id: string;
  kind: "pf" | "pj";
  name: string;
  document: string;
  email?: string | null;
  phone?: string | null;
  organizationId?: string | null;
}

export interface Contract {
  id: string;
  clientId: string;
  organizationId?: string | null;
  contractNumber?: string | null;
  type?: string | null;
  status: string;
}

export interface CaseRecord {
  id: string;
  clientId: string;
  title: string;
  status: string;
  priority: "low" | "medium" | "high" | "urgent";
}

export interface Protocol {
  id: string;
  caseId: string;
  number: string;
  status: string;
}

export interface AdministrativeProcess {
  id: string;
  protocolId: string;
  number: string;
  phase: string;
  status: string;
}

export interface TimelineEvent {
  id: string;
  parentType: "case" | "protocol" | "process" | "negotiation";
  parentId: string;
  type: string;
  title: string;
  description?: string | null;
  visibility: "internal" | "client" | "bank" | "public";
  createdAt: string;
}
