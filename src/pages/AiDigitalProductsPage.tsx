import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Cpu,
  Globe,
  Database,
  Workflow,
  Sparkles,
  Bot,
  Layout,
  Code2,
  CheckCircle2,
  ArrowRight,
  Zap,
  Terminal,
  ShieldCheck,
  Server,
  Layers,
} from 'lucide-react';

interface AiDigitalProductsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AiDigitalProductsPage: React.FC<AiDigitalProductsPageProps> = ({
  onNavigate,
}) => {
  const [activeWorkflowDemo, setActiveWorkflowDemo] = useState<'n8n' | 'crm' | 'rag'>('n8n');

  const capabilities = [
    {
      title: 'Modern Website Development',
      badge: 'React • Next.js • Tailwind',
      desc: 'High-performance, responsive websites engineered with clean semantic code, 95+ Google Lighthouse scores, and structured SEO markup.',
      deliverables: ['Custom Jamstack Architecture', 'Core Web Vitals Optimization', 'Mobile-First Responsive Layouts', 'CMS Integration Options'],
      icon: <Globe className="w-5 h-5 text-[#006D43]" />,
    },
    {
      title: 'Web Application & SaaS Engineering',
      badge: 'Full-Stack Systems',
      desc: 'Scalable cloud applications, customer portals, internal administrative dashboards, and subscription-based web products.',
      deliverables: ['REST / GraphQL API Architecture', 'Role-Based Authentication (RBAC)', 'Real-Time Database Sync', 'Stripe / Razorpay Integration'],
      icon: <Layers className="w-5 h-5 text-[#006D43]" />,
    },
    {
      title: 'Custom CRM Development',
      badge: 'Zero Monthly SaaS Fees',
      desc: 'Bespoke sales and customer lifecycle tracking platforms tailored strictly to your company’s unique deal pipeline stages.',
      deliverables: ['Visual Kanban Deal Boards', 'Automated Lead Assignment Logic', 'WhatsApp & Email Triggers', 'Conversion Velocity Analytics'],
      icon: <Database className="w-5 h-5 text-[#006D43]" />,
    },
    {
      title: 'UI/UX Design & Design Systems',
      badge: 'Figma to Code',
      desc: 'Research-grounded digital product design, low-fidelity wireframing, high-fidelity prototypes, and cohesive design tokens.',
      deliverables: ['Interactive Clickable Prototypes', 'Accessible Component Libraries (WCAG)', 'Micro-Interactions & Animation Specs', 'Design-to-Code Developer Handoff'],
      icon: <Layout className="w-5 h-5 text-[#006D43]" />,
    },
    {
      title: 'AI Agents & Knowledge Assistants',
      badge: 'Autonomous & RAG',
      desc: 'Custom retrieval-augmented generation (RAG) agents that answer customer or employee inquiries using your internal documents.',
      deliverables: ['Vector Embeddings (Pinecone / Chroma)', 'Hallucination Guardrails & Source Citations', 'Multi-turn Chat Interfaces', 'Slack / WhatsApp Bot Integration'],
      icon: <Bot className="w-5 h-5 text-[#006D43]" />,
    },
    {
      title: 'Workflow Automation (n8n & Make.com)',
      badge: 'Low-Code Pipelines',
      desc: 'End-to-end automated workflows bridging disjointed apps—capturing leads, parsing PDF invoices, and notifying teams without manual work.',
      deliverables: ['Webhook Listener Scenarios', 'PDF Document OCR Data Extractors', 'Google Workspace Automated Sync', 'Error Alert Fallbacks & Logs'],
      icon: <Workflow className="w-5 h-5 text-[#006D43]" />,
    },
  ];

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#002117] to-[#0A261D] text-white py-16 px-4 sm:px-6 border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#75F8B3]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Division 02 • AI & Digital Product Development</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            High-Performance Websites, Custom CRMs & Autonomous Workflow Automation
          </h1>

          <p className="font-body text-sm sm:text-base text-[#C0ECD7] max-w-2xl leading-relaxed">
            From modern responsive web platforms and bespoke customer relationship management (CRM) software to low-code n8n pipelines and intelligent AI knowledge assistants, DSS builds practical software that drives operational velocity.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all shadow-md"
            >
              Discuss Your Tech Project (Pathway 5)
            </button>
            <button
              onClick={() => onNavigate('projects-experiments')}
              className="px-6 py-3 rounded-lg bg-[#061610] text-[#C0ECD7] border border-[#0D382A] font-label font-bold text-xs hover:text-white hover:border-[#00A86B] transition-all"
            >
              View Working Prototypes & Demos
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Capability Cards */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
                Engineering Capabilities
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B] mt-1">
                Full-Stack Product & Automation Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#414844] max-w-md">
              We deliver complete source code, deployment pipelines, and zero-lock-in architectures directly owned by your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#CFDDD3] hover:border-[#006D43] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#006D43]/10 border border-[#006D43]/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F2F4F2] text-[#414844] border border-[#E2EBE5]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#191C1B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#414844] font-body leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    <span className="text-[10px] font-bold text-[#717974] uppercase tracking-wider block">
                      Deliverables:
                    </span>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#191C1B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006D43] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => onNavigate('enquiry')}
                    className="text-xs font-label font-bold text-[#006D43] hover:text-[#0D382A] flex items-center gap-1 group"
                  >
                    <span>Request Scoping Session</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Architecture Simulator */}
        <section className="bg-white rounded-2xl border border-[#CFDDD3] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#006D43] bg-[#006D43]/10">
                <Workflow className="w-3.5 h-3.5" />
                <span>Interactive Technical Architecture Preview</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                How DSS Engineers Automated Systems
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-[#F2F4F2] p-1 rounded-lg border border-[#E2EBE5]">
              <button
                onClick={() => setActiveWorkflowDemo('n8n')}
                className={`px-3 py-1.5 rounded text-xs font-label font-bold transition-all ${
                  activeWorkflowDemo === 'n8n'
                    ? 'bg-white text-[#006D43] shadow-sm'
                    : 'text-[#717974] hover:text-[#191C1B]'
                }`}
              >
                n8n Multi-App Pipeline
              </button>
              <button
                onClick={() => setActiveWorkflowDemo('crm')}
                className={`px-3 py-1.5 rounded text-xs font-label font-bold transition-all ${
                  activeWorkflowDemo === 'crm'
                    ? 'bg-white text-[#006D43] shadow-sm'
                    : 'text-[#717974] hover:text-[#191C1B]'
                }`}
              >
                Custom CRM Deal Flow
              </button>
              <button
                onClick={() => setActiveWorkflowDemo('rag')}
                className={`px-3 py-1.5 rounded text-xs font-label font-bold transition-all ${
                  activeWorkflowDemo === 'rag'
                    ? 'bg-white text-[#006D43] shadow-sm'
                    : 'text-[#717974] hover:text-[#191C1B]'
                }`}
              >
                RAG Document Assistant
              </button>
            </div>
          </div>

          {/* Dynamic Workflow Viewer */}
          <div className="p-6 rounded-xl bg-[#061610] text-[#C0ECD7] border border-[#0D382A] font-mono text-xs space-y-4">
            {activeWorkflowDemo === 'n8n' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#0D382A] pb-3 text-xs">
                  <span className="text-[#75F8B3] font-bold">
                    [WORKFLOW BLUEPRINT: Website Lead to WhatsApp & CRM Sync]
                  </span>
                  <span className="text-[#78A28F]">Engine: n8n v1.40+ Low-Code</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-[#0D382A]/40 border border-[#00A86B]/30 space-y-1">
                    <span className="text-[10px] text-[#A4D0BC] uppercase">Step 1: Ingestion</span>
                    <div className="font-bold text-white">Webhook Listener</div>
                    <p className="text-[11px] text-[#78A28F]">Captures form submission JSON with phone & budget</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0D382A]/40 border border-[#00A86B]/30 space-y-1">
                    <span className="text-[10px] text-[#A4D0BC] uppercase">Step 2: Validation</span>
                    <div className="font-bold text-white">Deduplication Logic</div>
                    <p className="text-[11px] text-[#78A28F]">Checks existing database to prevent duplicate sales assignments</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0D382A]/40 border border-[#00A86B]/30 space-y-1">
                    <span className="text-[10px] text-[#A4D0BC] uppercase">Step 3: Dispatch</span>
                    <div className="font-bold text-white">CRM & WhatsApp Bot</div>
                    <p className="text-[11px] text-[#78A28F]">Creates CRM deal card & sends instant brochure to client on WhatsApp</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0D382A]/40 border border-[#00A86B]/30 space-y-1">
                    <span className="text-[10px] text-[#A4D0BC] uppercase">Step 4: Alert</span>
                    <div className="font-bold text-white">Executive Mobile Alert</div>
                    <p className="text-[11px] text-[#78A28F]">Sends Slack & Telegram notification to founder Amit Shrivastav</p>
                  </div>
                </div>
                <div className="text-[11px] text-[#75F8B3] pt-2">
                  ✓ Saves an estimated 25+ hours per month per sales team. Zero recurring SaaS fees for expensive middleware.
                </div>
              </div>
            )}

            {activeWorkflowDemo === 'crm' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#0D382A] pb-3 text-xs">
                  <span className="text-[#75F8B3] font-bold">
                    [CUSTOM CRM LIFECYCLE: Deal Pipeline Architecture]
                  </span>
                  <span className="text-[#78A28F]">Stack: Next.js + PostgreSQL + Tailwind</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800">
                    <div className="text-white font-bold text-xs">1. Inbound Prospect</div>
                    <p className="text-[11px] text-gray-400 mt-1">Lead status auto-assigned via source UTM tags</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800">
                    <div className="text-white font-bold text-xs">2. Technical Discovery</div>
                    <p className="text-[11px] text-gray-400 mt-1">Requirements note attached with budget range</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800">
                    <div className="text-white font-bold text-xs">3. Proposal Sent</div>
                    <p className="text-[11px] text-gray-400 mt-1">PDF quotation auto-generated with milestone breakdown</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-emerald-900">
                    <div className="text-emerald-400 font-bold text-xs">4. Closed & In Execution</div>
                    <p className="text-[11px] text-emerald-300 mt-1">Triggers client onboarding portal and kickoff sync</p>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflowDemo === 'rag' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#0D382A] pb-3 text-xs">
                  <span className="text-[#75F8B3] font-bold">
                    [ENTERPRISE RAG ARCHITECTURE: Document Intelligence]
                  </span>
                  <span className="text-[#78A28F]">Stack: LangChain + ChromaDB + Gemini</span>
                </div>
                <p className="text-xs text-[#A4D0BC] leading-relaxed">
                  Converts 1,000s of internal PDFs, policy manuals, product catalogues, and legal contracts into chunked vector embeddings. When staff or clients ask a query, the system extracts the exact source paragraphs, evaluates semantic similarity, and synthesizes an authoritative answer with verifiable page citations.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Tech Talent Network Callout */}
        <div className="p-6 rounded-xl bg-[#006D43]/5 border border-[#006D43]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-base text-[#006D43]">
              Are you a Web Developer, UI/UX Designer, or n8n Automation Specialist?
            </h4>
            <p className="text-xs text-[#414844] mt-1">
              Join DSS’s Professional Collaboration Network to work on vetted client projects with prompt milestone payouts.
            </p>
          </div>
          <button
            onClick={() => onNavigate('enquiry')}
            className="px-5 py-2.5 rounded-lg bg-[#006D43] text-white font-label font-bold text-xs hover:bg-[#008f58] transition-colors shrink-0"
          >
            Apply to Network (Pathway 4)
          </button>
        </div>
      </div>
    </div>
  );
};
