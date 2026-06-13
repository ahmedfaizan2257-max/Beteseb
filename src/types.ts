export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  relationship: string;
  languages: string[];
  religionTraditions?: string;
  careFocus?: string;
  preferredSchedule?: string;
  expectations?: string;
  status: string;
  createdAt: string;
  matchResult?: MatchResult;
}

export interface MatchResult {
  matchPercentage: number;
  carerName: string;
  carerLang: string;
  carerBio: string;
  culturalAlignment: string;
}

export type PageId =
  | "home"
  | "about"
  | "services"
  | "navigation"
  | "languagematch"
  | "funding"
  | "training"
  | "blog"
  | "contact"
  | "admin";
