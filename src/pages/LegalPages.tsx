import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, AlertCircle, FileText, Scale } from 'lucide-react';

interface LegalPagesProps {
  type: 'terms' | 'privacy';
  onNavigate: (page: PageId) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, onNavigate }) => {
  return (
    <div className="bg-[#F8FAF8] min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D382A]/10 text-[#0D382A]">
            <Scale className="w-3.5 h-3.5" />
            <span>Statutory Legal & Policy Documents</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#191C1B]">
            {type === 'terms' ? 'Terms of Engagement & Service Policy' : 'Privacy & Data Protection Policy'}
          </h1>
          <p className="text-xs text-[#717974] font-mono">
            Delight Solution Service (DSS) • Last Updated: March 2025 • Governing Law: Jurisdiction of Jaipur, Rajasthan, India
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-[#CFDDD3] p-8 sm:p-10 shadow-sm space-y-8 text-xs text-[#414844] font-body leading-relaxed">
          {type === 'terms' ? (
            <>
              {/* Mandatory Non-Lender Disclaimer */}
              <div className="p-4 rounded-xl bg-[#FFF8E1] border border-[#FFE082] text-[#6D4C41] space-y-1">
                <strong className="text-sm font-display font-bold text-[#E65100] block">
                  1. Statutory Non-Lender & Financial Intermediary Clarification
                </strong>
                <p>
                  Delight Solution Service (DSS), founded by {COMPANY_INFO.founder}, operates strictly as an independent loan assistance, documentation, and advisory facilitation partner. DSS is not a banking institution, non-banking financial company (NBFC), microfinance institution, or direct lender registered under RBI Act 1934. DSS does not disburse loans, sanction credit, or determine lending interest rates. All loan sanctioning is conducted solely at the discretion of partner banks and RBI-registered NBFCs.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  2. Insurance Advisory Network Demarcation
                </h3>
                <p>
                  DSS facilitates connections and introductory handoffs to certified, independent insurance advisors holding valid licenses issued by the Insurance Regulatory and Development Authority of India (IRDAI). DSS does not underwrite insurance risk or collect insurance premium payments directly.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  3. Digital Products & Intellectual Property Handover
                </h3>
                <p>
                  For software engineering, website development, custom CRM systems, and data analytics work, 100% intellectual property rights, repository codes, and design files are transferred to the client upon full settlement of contracted milestone invoices. DSS retains the right to cite anonymized architecture patterns in its internal demonstration repository unless bound by a strict reciprocal Non-Disclosure Agreement (NDA).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  4. Professional Collaboration Network Engagement
                </h3>
                <p>
                  Specialists participating in the DSS Professional Collaboration Network are independent contractors. Projects executed via the network operate under structured DSS project management, with compensation tied to agreed milestone delivery schedules (Fixed project fee or Specialist service fee).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  5. Dispute Resolution & Jurisdiction
                </h3>
                <p>
                  Any dispute, claim, or controversy arising out of or relating to this agreement shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  1. Commitment to Data Privacy & Protection
                </h3>
                <p>
                  Delight Solution Service respects client privacy and upholds data minimization principles in alignment with the Digital Personal Data Protection Act, 2023 (DPDP Act). We only collect information strictly required to evaluate your financial profile, commission custom software, or review network applications.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  2. Information We Collect
                </h3>
                <p>
                  Through our 5 Enquiry Pathways, we may collect your name, mobile phone number, email address, city, employment status, loan category, technical skills, or business problem descriptions. We do NOT store debit/credit card numbers or banking passwords.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  3. Strict Non-Sale of Client Data
                </h3>
                <p>
                  DSS never sells, rents, or commercializes client databases to third-party telemarketing firms. Financial inquiry details are transmitted exclusively to authorized partner banks or certified insurance advisors with your explicit intake consent.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  4. Data Retention & Deletion Requests
                </h3>
                <p>
                  You have the right to request access to, correction of, or permanent deletion of your stored inquiry records at any time by emailing us at{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#006D43] font-bold underline">
                    {COMPANY_INFO.email}
                  </a>. We process data deletion requests within 7 business days.
                </p>
              </div>
            </>
          )}

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => onNavigate('overview')}
              className="text-xs font-label font-bold text-[#0D382A] hover:underline"
            >
              ← Back to Overview
            </button>
            <div className="text-[11px] text-[#717974]">
              For statutory queries: {COMPANY_INFO.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
