import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import {
  Users2,
  Code2,
  BarChart2,
  Palette,
  TrendingUp,
  Landmark,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';

interface CollaborationNetworkPageProps {
  onNavigate: (page: PageId) => void;
}

export const CollaborationNetworkPage: React.FC<CollaborationNetworkPageProps> = ({
  onNavigate,
}) => {
  const tracks = [
    {
      name: 'Technology Specialists',
      badge: 'Code & Systems',
      roles: [
        'Website Developers',
        'Web Application Developers',
        'CRM Developers',
        'UI/UX Designers',
        'No-Code / Low-Code Specialists',
        'AI Agent Developers',
        'RAG Developers',
        'n8n Specialists',
        'Make.com Specialists',
      ],
      icon: <Code2 className="w-5 h-5 text-[#4338CA]" />,
    },
    {
      name: 'Data Specialists',
      badge: 'Modeling & BI',
      roles: [
        'Excel Specialists',
        'Power BI Developers',
        'Data Analysts',
        'Reporting Professionals',
        'Data Automation Specialists',
      ],
      icon: <BarChart2 className="w-5 h-5 text-[#4338CA]" />,
    },
    {
      name: 'Creative Specialists',
      badge: 'Visual & Media',
      roles: [
        'Video Editors',
        'Graphic Designers',
        'AI Content Creators',
        'Product Advertising Creators',
      ],
      icon: <Palette className="w-5 h-5 text-[#4338CA]" />,
    },
    {
      name: 'Marketing Specialists',
      badge: 'Growth & Strategy',
      roles: [
        'Digital Marketers',
        'Social Media Strategists',
        'Brand Consultants',
        'Content Strategists',
      ],
      icon: <TrendingUp className="w-5 h-5 text-[#4338CA]" />,
    },
    {
      name: 'Financial Specialists',
      badge: 'Credit & Advisory',
      roles: [
        'Loan Advisors',
        'Loan Distribution Professionals (DSAs)',
        'Eligible Certified Insurance Advisors',
        'Financial Services Professionals',
      ],
      icon: <Landmark className="w-5 h-5 text-[#4338CA]" />,
    },
  ];

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#1E1B4B] to-[#312E81] text-white py-16 px-4 sm:px-6 border-b border-[#4338CA]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#C7D2FE]/20 border border-[#C7D2FE]/40 text-[#C7D2FE]">
            <Users2 className="w-3.5 h-3.5" />
            <span>Division 05 • Professional Collaboration Network</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            An Agile Ecosystem of Vetted Independent Specialists Across 5 Domains
          </h1>

          <p className="font-body text-sm sm:text-base text-[#E0E7FF] max-w-2xl leading-relaxed">
            DSS bridges customer requirements with pre-vetted domain specialists under unified project management. Delivering enterprise-grade solutions with agile, freelance economics.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#6366F1] text-white font-label font-bold text-xs hover:bg-[#818CF8] transition-all shadow-md"
            >
              Apply to Join the Network (Pathway 4)
            </button>
            <button
              onClick={() => onNavigate('how-we-work')}
              className="px-6 py-3 rounded-lg bg-[#1E1B4B] text-[#E0E7FF] border border-[#4338CA] font-label font-bold text-xs hover:text-white transition-all"
            >
              See How DSS Coordinates Projects
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Section 3.15 Collaboration Model */}
        <section className="bg-white rounded-2xl border border-[#CFDDD3] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-label text-xs uppercase tracking-wider text-[#4338CA] font-bold">
              PRD Section 3.15 Operating Blueprint
            </span>
            <h2 className="font-display font-bold text-2xl text-[#191C1B]">
              The DSS Hybrid Collaboration Model
            </h2>
            <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
              DSS receives incoming client mandates, formulates the technical architecture and scope, and coordinates execution with suitable independent professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#4338CA]/10 text-[#4338CA] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  Fixed Project Fee Arrangement
                </h3>
              </div>
              <p className="text-xs text-[#414844] font-body leading-relaxed">
                Clear milestone-based fee structure agreed upon before project kickoff. As milestones (e.g. wireframe approval, staging deployment, QA signoff) are completed, compensation is released promptly without negotiation friction.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#4338CA]/10 text-[#4338CA] flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h3 className="font-display font-bold text-base text-[#191C1B]">
                  Specialist Service Fee Arrangement
                </h3>
              </div>
              <p className="text-xs text-[#414844] font-body leading-relaxed">
                Dedicated retainers or ongoing specialist engagement fees for senior consultants, Power BI architects, or regulatory loan advisors who support recurring client needs over weekly or monthly cycles.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Specialist Tracks (PRD Page 8) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="font-label text-xs uppercase tracking-wider text-[#4338CA] font-bold">
              Network Composition
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B]">
              5 Specialized Professional Domains
            </h3>
            <p className="text-xs sm:text-sm text-[#414844]">
              Codified directly from Section 3.14 of the official PRD document.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#CFDDD3] hover:border-[#4338CA] shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                    {track.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {track.badge}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-[#191C1B]">
                  {track.name}
                </h4>

                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#717974] uppercase tracking-wider block">
                    Specialist Profiles:
                  </span>
                  {track.roles.map((role, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs text-[#191C1B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA]" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#1E1B4B] to-[#312E81] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Ready to Join the DSS Professional Network?
            </h3>
            <p className="text-xs sm:text-sm text-[#E0E7FF] max-w-xl">
              Fill out Pathway 4 to submit your skills, tools (n8n, React, Power BI, Blender, etc.), and portfolio. Our team reviews submissions within 48 hours.
            </p>
          </div>
          <button
            onClick={() => onNavigate('enquiry')}
            className="px-6 py-3 rounded-lg bg-white text-[#1E1B4B] font-label font-bold text-xs hover:bg-[#E0E7FF] transition-all shrink-0"
          >
            Submit Professional Application
          </button>
        </div>
      </div>
    </div>
  );
};
