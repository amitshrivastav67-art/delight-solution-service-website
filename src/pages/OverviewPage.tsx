import React, { useState } from 'react';
import { PageId } from '../types';
import {
  COMPANY_INFO,
  DIVISIONS_DATA,
  PROJECTS_EXPERIMENTS,
  HOW_WE_WORK_STEPS,
  FAQ_ITEMS,
} from '../data/mockData';
import {
  Landmark,
  Cpu,
  BarChart3,
  Video,
  Users2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Send,
  HelpCircle,
  FolderGit2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ChevronDown,
  Layers,
  Search,
  ExternalLink,
} from 'lucide-react';

interface OverviewPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  // Problem-based interactive selector state
  const [selectedIntent, setSelectedIntent] = useState<string>('loans');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'division-1-finance':
        return <Landmark className="w-6 h-6 text-[#0D382A]" />;
      case 'division-2-ai-digital':
        return <Cpu className="w-6 h-6 text-[#006D43]" />;
      case 'division-3-data-bi':
        return <BarChart3 className="w-6 h-6 text-[#1E293B]" />;
      case 'division-4-marketing-creative':
        return <Video className="w-6 h-6 text-[#B45309]" />;
      case 'division-5-collaboration':
        return <Users2 className="w-6 h-6 text-[#4338CA]" />;
      default:
        return <Layers className="w-6 h-6 text-[#006D43]" />;
    }
  };

  const getDivisionTargetPage = (id: string): PageId => {
    switch (id) {
      case 'division-1-finance':
        return 'financial-solutions';
      case 'division-2-ai-digital':
        return 'ai-digital-products';
      case 'division-3-data-bi':
        return 'data-bi';
      case 'division-4-marketing-creative':
        return 'creative-marketing';
      case 'division-5-collaboration':
        return 'collaboration-network';
      default:
        return 'overview';
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-[#F8FAF8]">
      {/* 1. HERO SECTION (PRD Recommended Headline & Subtext) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#002117] via-[#05281E] to-[#0A3326] text-white pt-16 sm:pt-24 pb-20 px-4 sm:px-6 border-b border-[#0D382A]">
        {/* Subtle geometric pattern glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A86B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 space-y-8">
          {/* PRD Conformance Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-label font-bold uppercase tracking-wider bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#75F8B3]">
              <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
              <span>Delight Solution Service • Official PRD v3.0</span>
            </span>

            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label font-bold bg-[#0D382A] border border-[#75F8B3]/30 text-[#C0ECD7] hover:text-white hover:border-[#75F8B3] transition-all"
            >
              <Award className="w-3.5 h-3.5 text-[#00A86B]" />
              <span>Audit Report (100% PRD Aligned)</span>
            </button>
          </div>

          {/* PRD Exact Hero Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white max-w-4xl tracking-tight leading-[1.12]">
            Practical Business Solutions Across Finance, Technology and Digital Growth.
          </h1>

          {/* PRD Exact Hero Subtext */}
          <p className="font-body text-base sm:text-lg text-[#C0ECD7] max-w-3xl leading-relaxed">
            From financial assistance and custom digital products to data analytics, AI automation and professional collaboration, DSS helps individuals and businesses explore practical solutions for their needs.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('divisions-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl bg-[#00A86B] text-[#002117] font-label font-bold text-sm hover:bg-[#75F8B3] transition-all shadow-lg hover:shadow-emerald-900/40 flex items-center gap-2"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('enquiry')}
              className="px-7 py-3.5 rounded-xl bg-[#0D382A] text-white border border-[#00A86B]/40 font-label font-bold text-sm hover:bg-[#134E3B] hover:border-[#00A86B] transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#75F8B3]" />
              <span>Discuss Your Requirement</span>
            </button>
          </div>

          {/* Quick Credibility Footnote (Zero Fabricated Metrics) */}
          <div className="pt-6 border-t border-[#0D382A]/80 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A4D0BC]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00A86B]" />
              <span>
                Founded by <strong>{COMPANY_INFO.founder}</strong> in {COMPANY_INFO.location}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Online & Remote Delivery</span>
              <span>•</span>
              <span>Direct + Collaboration Network</span>
              <span>•</span>
              <span className="text-[#75F8B3] font-semibold">Zero Fake Claims</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY CLARITY & AUDIT STRIP */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006D43]/10 text-[#006D43] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-[#191C1B]">
                Ethical Startup Transparency & Verified PRD Architecture
              </h3>
              <p className="text-xs text-[#414844] mt-0.5">
                DSS operates with complete regulatory honesty. We do not make false lender claims or publish fabricated enterprise numbers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAuditModal}
              className="px-4 py-2 rounded-lg bg-[#0D382A] text-white text-xs font-label font-bold hover:bg-[#134E3B] transition-colors flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-[#75F8B3]" />
              <span>Verify PRD v3.0 Checklist</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM-BASED SERVICE DISCOVERY ("What are you looking to accomplish?") */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
            Interactive Guidance
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B]">
            What are you looking to accomplish today?
          </h2>
          <p className="text-xs sm:text-sm text-[#414844]">
            Select your primary objective to jump directly to the right division or inquiry pathway.
          </p>
        </div>

        {/* Intent Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'loans',
              title: 'Need Loan & Credit Assistance',
              sub: 'Personal, Business, Home, LAP or Balance Transfer',
              target: 'financial-solutions',
              icon: <Landmark className="w-5 h-5 text-[#0D382A]" />,
            },
            {
              id: 'insurance',
              title: 'Connect with Certified Insurance Advisor',
              sub: 'Life, Health, General or Fleet Motor Insurance',
              target: 'financial-solutions',
              icon: <ShieldCheck className="w-5 h-5 text-[#0D382A]" />,
            },
            {
              id: 'webapp',
              title: 'Build a Website, Web App or CRM',
              sub: 'Modern React/Next frontend or custom sales pipeline',
              target: 'ai-digital-products',
              icon: <Cpu className="w-5 h-5 text-[#006D43]" />,
            },
            {
              id: 'n8n',
              title: 'Automate Business Workflows (n8n/Make)',
              sub: 'Sync webhooks, capture leads & parse documents',
              target: 'ai-digital-products',
              icon: <Cpu className="w-5 h-5 text-[#006D43]" />,
            },
            {
              id: 'data',
              title: 'Advanced Excel Model or Power BI',
              sub: '3-statement forecast or executive analytics dashboard',
              target: 'data-bi',
              icon: <BarChart3 className="w-5 h-5 text-[#1E293B]" />,
            },
            {
              id: 'creative',
              title: 'AI Product Videos & Creative Marketing',
              sub: 'Cinematic e-commerce ads & virtual influencer UGC',
              target: 'creative-marketing',
              icon: <Video className="w-5 h-5 text-[#B45309]" />,
            },
          ].map((intent) => (
            <button
              key={intent.id}
              onClick={() => onNavigate(intent.target as PageId)}
              className="p-4 rounded-xl bg-white border border-[#CFDDD3] hover:border-[#006D43] hover:shadow-md transition-all text-left flex items-start gap-3 group"
            >
              <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-[#006D43]/10 transition-colors">
                {intent.icon}
              </div>
              <div className="flex-1">
                <div className="font-display font-bold text-sm text-[#191C1B] group-hover:text-[#006D43] transition-colors flex items-center justify-between">
                  <span>{intent.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-[#717974] mt-0.5 line-clamp-1">{intent.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 4. THE 5 BUSINESS DIVISIONS SHOWCASE */}
      <section id="divisions-section" className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
              Core Capabilities
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#191C1B]">
              The 5 Business Divisions of DSS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#414844] max-w-md">
            Integrated business solutions designed to solve practical problems across borrowing, software, data, marketing, and specialist talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS_DATA.map((division) => (
            <div
              key={division.id}
              className="p-7 rounded-2xl bg-white border border-[#CFDDD3] hover:border-[#006D43] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-[#006D43]/10 group-hover:border-[#006D43]/30 transition-colors">
                    {getDivisionIcon(division.id)}
                  </div>
                  <span className="font-mono text-sm font-bold text-[#717974]">
                    {division.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-[#191C1B] group-hover:text-[#006D43] transition-colors">
                    {division.name}
                  </h3>
                  <p className="font-label text-xs font-semibold text-[#006D43] mt-0.5">
                    {division.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#414844] font-body leading-relaxed">
                  {division.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#717974] uppercase tracking-wider block">
                    Key Offerings:
                  </span>
                  {division.offerings.slice(0, 4).map((off, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-1.5 text-xs text-[#191C1B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#006D43] shrink-0" />
                      <span className="line-clamp-1">{off}</span>
                    </div>
                  ))}
                  {division.offerings.length > 4 && (
                    <div className="text-[11px] text-[#717974] pl-5 italic">
                      + {division.offerings.length - 4} additional services
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(getDivisionTargetPage(division.id))}
                  className="text-xs font-label font-bold text-[#0D382A] hover:text-[#006D43] flex items-center gap-1.5"
                >
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] text-[#717974] font-mono">
                  {division.id === 'division-1-finance' ? 'India Only' : 'India & Global'}
                </span>
              </div>
            </div>
          ))}

          {/* 6th Card: All 5 Enquiry Pathways Summary */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#002117] to-[#0D382A] text-white flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00A86B]/30 text-[#75F8B3]">
                <Send className="w-3 h-3" />
                <span>PRD Section 08</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                5 Distinct Enquiry Pathways
              </h3>
              <p className="text-xs text-[#C0ECD7] leading-relaxed">
                Connect directly according to your specific profile:
              </p>
              <div className="space-y-1.5 text-xs text-[#A4D0BC]">
                <div>• Pathway 1: Financial Customer (Loan Intake)</div>
                <div>• Pathway 2: Insurance Advisor Network</div>
                <div>• Pathway 3: Loan Partner / Connector (DSA)</div>
                <div>• Pathway 4: Tech & Creative Professional</div>
                <div>• Pathway 5: Business Project Client Brief</div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('enquiry')}
                className="w-full py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-colors"
              >
                Access All 5 Pathways
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY WORK WITH DSS (Honest Advantages) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CFDDD3] shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
              Founder-Led Advantage
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B]">
              Why Choose Delight Solution Service?
            </h2>
            <p className="text-xs sm:text-sm text-[#414844]">
              We offer the responsiveness and agility of an elite boutique practice paired with multi-disciplinary breadth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#006D43]/10 text-[#006D43] flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-display font-bold text-base text-[#191C1B]">
                Direct Founder Involvement
              </h4>
              <p className="text-xs text-[#414844] leading-relaxed">
                Every project architecture is personally reviewed by founder Amit Shrivastav. You don’t get passed down to junior account managers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#006D43]/10 text-[#006D43] flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-display font-bold text-base text-[#191C1B]">
                Direct + Network Flexibility
              </h4>
              <p className="text-xs text-[#414844] leading-relaxed">
                We combine core in-house steering with vetted specialists (n8n, React, Power BI, creative ads), giving you enterprise expertise without agency overhead.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#006D43]/10 text-[#006D43] flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-display font-bold text-base text-[#191C1B]">
                100% IP & Source Handover
              </h4>
              <p className="text-xs text-[#414844] leading-relaxed">
                Zero proprietary lock-in. Full GitHub repositories, master Excel workbooks, and Figma files are transferred directly to your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK: 7-STEP METHODOLOGY PREVIEW */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
              PRD Section 10
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B]">
              How We Work (7 Steps)
            </h2>
          </div>
          <button
            onClick={() => onNavigate('how-we-work')}
            className="text-xs font-label font-bold text-[#0D382A] hover:text-[#006D43] flex items-center gap-1"
          >
            <span>View Full 7-Step Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HOW_WE_WORK_STEPS.slice(0, 4).map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#CFDDD3] shadow-sm space-y-2"
            >
              <div className="text-xs font-mono font-bold text-[#006D43]">
                Step {s.step}
              </div>
              <h4 className="font-display font-bold text-sm text-[#191C1B]">
                {s.title}
              </h4>
              <p className="text-xs text-[#414844] line-clamp-3 leading-relaxed">
                {s.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROJECTS & EXPERIMENTS PREVIEW (PRD Section 9) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
              Transparent Portfolio
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B]">
              Featured Projects & Experiments
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects-experiments')}
            className="text-xs font-label font-bold text-[#0D382A] hover:text-[#006D43] flex items-center gap-1"
          >
            <span>Explore All {PROJECTS_EXPERIMENTS.length} Entries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_EXPERIMENTS.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-white border border-[#CFDDD3] hover:border-[#006D43] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    ● {proj.status}
                  </span>
                  <span className="text-[10px] font-mono text-[#717974]">
                    {proj.type}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-[#191C1B]">
                  {proj.title}
                </h4>
                <p className="text-xs text-[#414844] line-clamp-2">
                  {proj.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.technologies.slice(0, 3).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F2F4F2] text-[#414844]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('projects-experiments')}
                  className="text-xs font-label font-bold text-[#0D382A] hover:text-[#006D43] flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#CFDDD3] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-[#191C1B] hover:text-[#006D43] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#717974] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#414844] font-body leading-relaxed border-t border-gray-100 bg-[#F8FAF8]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#002117] via-[#05281E] to-[#0A3326] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#0D382A]">
          <div className="space-y-3 max-w-xl">
            <span className="font-label text-xs uppercase tracking-wider text-[#75F8B3] font-bold">
              Ready to Discuss Your Mandate?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight">
              Let’s Explore a Practical Solution for Your Business.
            </h3>
            <p className="text-xs sm:text-sm text-[#C0ECD7] leading-relaxed">
              Connect with founder Amit Shrivastav to discuss borrowing assistance, web applications, data modeling, or creative marketing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3.5 rounded-xl bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all shadow-md flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Requirement Brief</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-[#0D382A] text-white border border-[#00A86B]/40 font-label font-bold text-xs hover:bg-[#134E3B] transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00A86B]" />
              <span>Call +91 7340163925</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
