/**
 * Delight Solution Service (DSS) - Types & Domain Models
 * Strictly aligned with DSS Updated Website PRD Version 3.0
 */

export type PageId =
  | 'overview'
  | 'financial-solutions'
  | 'ai-digital-products'
  | 'data-bi'
  | 'creative-marketing'
  | 'collaboration-network'
  | 'projects-experiments'
  | 'how-we-work'
  | 'about'
  | 'enquiry'
  | 'prd-audit'
  | 'privacy'
  | 'terms';

export type DivisionId =
  | 'division-1-finance'
  | 'division-2-ai-digital'
  | 'division-3-data-bi'
  | 'division-4-marketing-creative'
  | 'division-5-collaboration';

export type ProjectStatus =
  | 'Available'
  | 'Pilot'
  | 'Developing'
  | 'Learning / Research'
  | 'Planned';

export type ProjectType =
  | 'Real DSS client project'
  | 'Internal DSS project'
  | 'Demonstration'
  | 'Prototype'
  | 'Concept design';

export type ProjectCategory =
  | 'Loans & Credit Assistance'
  | 'Insurance Network'
  | 'Website Development'
  | 'Web Application'
  | 'CRM Development'
  | 'UI/UX Design'
  | 'AI Agents & Automation'
  | 'Advanced Excel & Data'
  | 'Power BI & Analytics'
  | 'AI Creative & Marketing';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  divisionId: DivisionId;
  status: ProjectStatus;
  type: ProjectType;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  deliverables: string[];
  outcomes?: string;
  demoUrl?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

export interface ServiceOffering {
  id: string;
  name: string;
  divisionId: DivisionId;
  shortDesc: string;
  details: string[];
  targetAudience: string;
  keyBenefits: string[];
  disclaimer?: string;
}

export type PathwayId =
  | 'financial-customer'
  | 'insurance-advisor'
  | 'loan-partner'
  | 'tech-creative-pro'
  | 'business-solutions';

export interface FinancialCustomerEnquiry {
  pathway: 'financial-customer';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  loanCategory:
    | 'Personal Loan'
    | 'Business Loan'
    | 'Home Loan'
    | 'Home Construction Loan'
    | 'Used-Car Loan'
    | 'Loan Against Property (LAP)'
    | 'Balance Transfer'
    | 'Overdraft Facility (OD)'
    | 'Credit Card Assistance';
  estimatedAmount: string;
  employmentType: 'Salaried' | 'Self-Employed Professional' | 'Business Owner / MSME';
  monthlyIncome: string;
  existingLoans: string;
  notes?: string;
}

export interface InsuranceAdvisorEnquiry {
  pathway: 'insurance-advisor';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  yearsOfExperience: string;
  insuranceCategories: string[];
  hasIrdaiLicense: 'Yes' | 'In Process' | 'Seeking Collaboration';
  associatedInsurers?: string;
  notes?: string;
}

export interface LoanPartnerEnquiry {
  pathway: 'loan-partner';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  partnerType: 'Direct Selling Agent (DSA)' | 'Independent Financial Advisor' | 'Connector' | 'Broker';
  yearsInLending: string;
  loanTypesHandled: string[];
  notes?: string;
}

export interface TechCreativeProEnquiry {
  pathway: 'tech-creative-pro';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  primaryDomain:
    | 'Website / Web App Developer'
    | 'CRM / Full-Stack Developer'
    | 'UI/UX Designer'
    | 'No-Code / Low-Code Specialist'
    | 'AI Agent / RAG Developer'
    | 'n8n / Make.com Specialist'
    | 'Excel / Financial Modeler'
    | 'Power BI & BI Developer'
    | 'Video Editor / Creative Animator'
    | 'Digital Marketer / Social Strategist';
  keySkills: string;
  portfolioUrl?: string;
  availability: 'Full-time Freelance' | 'Part-time Evenings/Weekends' | 'Project-by-Project';
  experienceYears: string;
  notes?: string;
}

export interface BusinessSolutionsEnquiry {
  pathway: 'business-solutions';
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  businessType: 'Startup' | 'SME / MSME' | 'Enterprise' | 'Independent Creator / Agency';
  requiredService:
    | 'Website or Web Application'
    | 'Custom CRM System'
    | 'UI/UX Product Design'
    | 'AI Agent or Workflow Automation (n8n/Make)'
    | 'Advanced Excel & Data Modeling'
    | 'Power BI Dashboard & Analytics'
    | 'AI-Assisted Video Ads & Marketing'
    | 'Integrated Multi-Division Solution';
  problemDescription: string;
  budgetRange: string;
  timeline: string;
  notes?: string;
}

export type AnyEnquiry =
  | FinancialCustomerEnquiry
  | InsuranceAdvisorEnquiry
  | LoanPartnerEnquiry
  | TechCreativeProEnquiry
  | BusinessSolutionsEnquiry;

export interface PRDAuditChecklistItem {
  sectionNumber: string;
  sectionTitle: string;
  prdPageNumber: number;
  requirementSummary: string;
  status: 'Compliant' | 'Updated' | 'Verified';
  notes: string;
}
