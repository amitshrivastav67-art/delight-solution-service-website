import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, DIVISIONS_DATA } from '../data/mockData';
import { BrandLogo } from './BrandLogo';
import {
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  return (
    <footer className="bg-[#002117] text-[#C0ECD7] pt-14 pb-8 border-t border-[#0D382A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Founder */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <BrandLogo theme="dark" size="lg" />
            </div>

            <p className="text-xs text-[#A4D0BC] leading-relaxed max-w-md font-body">
              Delight Solution Service delivers practical business solutions across Financial Assistance, Custom Software Engineering, Data Analytics, and Creative Marketing. Operating remotely from Jaipur, Rajasthan to serve clients nationwide and globally.
            </p>

            <div className="p-3 rounded-xl bg-[#061610] border border-[#0D382A] space-y-1 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
                <span>Founder & Leadership:</span>
              </div>
              <p className="text-[#C0ECD7] pl-4">
                {COMPANY_INFO.founder} ({COMPANY_INFO.founderTitle})
              </p>
              <div className="flex items-center gap-2 text-[#78A28F] pl-4 text-[11px]">
                <MapPin className="w-3 h-3 text-[#00A86B]" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D382A] text-white text-xs hover:bg-[#134E3B] transition-colors border border-[#00A86B]/30"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A86B]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D382A] text-white text-xs hover:bg-[#134E3B] transition-colors border border-[#00A86B]/30"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A86B]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: 5 Business Divisions */}
          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-wider text-white font-bold border-b border-[#0D382A] pb-2">
              5 Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('financial-solutions')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>1. Financial Solutions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai-digital-products')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>2. AI & Digital Products</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('data-bi')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>3. Data & BI Analytics</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('creative-marketing')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>4. Creative Marketing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collaboration-network')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
                  <span>5. Professional Network</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 5 Enquiry Pathways */}
          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-wider text-white font-bold border-b border-[#0D382A] pb-2">
              5 Enquiry Pathways
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  • Financial Customer Intake
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  • Insurance Advisor Network
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  • Loan Partner / Connector
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  • Tech & Creative Pro Application
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  • Business Client Project Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Audit */}
          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-wider text-white font-bold border-b border-[#0D382A] pb-2">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  About DSS & Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-we-work')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  How We Work (7 Steps)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects-experiments')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  Projects & Experiments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  Terms of Engagement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white text-[#A4D0BC] transition-colors text-left"
                >
                  Privacy & Data Policy
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAuditModal}
                  className="px-2.5 py-1 rounded bg-[#006D43] text-white text-[11px] font-bold hover:bg-[#008f58] transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Check PRD v3.0 Audit</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Clarity & Anti-Claims Disclaimer Strip (PRD Section 11 & 15) */}
        <div className="p-4 rounded-xl bg-[#061610] border border-[#0D382A] space-y-2 text-xs text-[#78A28F]">
          <div className="flex items-center gap-2 text-white font-semibold">
            <ShieldAlert className="w-4 h-4 text-[#E65100]" />
            <span className="text-xs uppercase font-label tracking-wider">
              Mandatory Regulatory & Non-Lender Disclosure
            </span>
          </div>
          <p className="text-[11px] leading-relaxed">
            <strong>Delight Solution Service (DSS)</strong> operates as an independent loan assistance, documentation, and advisory facilitation partner. DSS is not a bank, Non-Banking Financial Company (NBFC), or direct lending institution. DSS does not make loan sanction decisions, approve interest rates, or guarantee credit disbursals. All financial underwriting and approvals remain the sole prerogative of RBI-regulated partner lending institutions. Insurance advisory is conducted exclusively in matchmaking alignment with IRDAI-certified, licensed independent advisors. DSS claims zero fabricated past metrics or unverified institutional licensing.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-4 border-t border-[#0D382A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78A28F]">
          <div>
            © {new Date().getFullYear()} Delight Solution Service. All rights reserved. Founded by {COMPANY_INFO.founder}, Jaipur, India.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
              Terms of Engagement
            </button>
            <span>•</span>
            <button onClick={onOpenAuditModal} className="text-[#00A86B] hover:text-white font-semibold">
              PRD Compliance Report
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
