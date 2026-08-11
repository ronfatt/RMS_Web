export type IndustryType =
  | 'restaurant'
  | 'beauty'
  | 'renovation'
  | 'consultant'
  | 'personal'
  | 'creative'
  | 'other';

export interface LeadFormData {
  industry: string;
  brandName: string;
  hasWebsite: string;
  websiteType: string;
}
