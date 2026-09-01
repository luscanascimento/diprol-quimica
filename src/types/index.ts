export type SegmentId = 'alimenticia' | 'lavanderia' | 'automotiva' | 'metalurgica' | 'institucional';

export interface ProductItem {
  name: string;
  category: string;
  description: string;
  dilution: string;
  ph: string;
  anvisaReg?: string;
  featured?: boolean;
}

export interface SegmentData {
  id: SegmentId;
  title: string;
  subtitle: string;
  shortDesc: string;
  iconName: string;
  accentColor: 'cyan' | 'orange' | 'emerald' | 'blue' | 'indigo';
  heroBadge: string;
  fullDescription: string;
  applications: string[];
  keyBenefits: string[];
  phRange: string;
  dilutionRatio: string;
  standards: string[];
  products: ProductItem[];
}

export interface AuthorityMetric {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  decimals?: number;
}

export interface CompetitiveAdvantage {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface CustomEngineeringStep {
  step: string;
  title: string;
  badge: string;
  description: string;
  deliverable: string;
  costSavingEstimate: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  city: string;
  segment: string;
  quote: string;
  savingAchieved: string;
  rating: number;
  badge: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  segment: SegmentId | '';
  volumeEstimate: string;
  customRequirements: string;
  lgpdConsent: boolean;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof QuoteFormData, string>>;
}
