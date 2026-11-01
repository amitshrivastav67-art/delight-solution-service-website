import React from 'react';
import { PageId } from '../types';
import { HOW_WE_WORK_STEPS } from '../data/mockData';
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Code2,
  Users2,
  Headphones,
  Laptop,
} from 'lucide-react';

interface HowWeWorkPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#002117] to-[#0A261D] text-white py-16 px-4 sm:px-6 border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#75F8B3]">
            <Clock className="w-3.5 h-3.5" />
            <span>PRD Section 10 • Delivery Methodology</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            How We Work: The 7-Step Delivery Process
          </h1>

          <p className="font-body text-sm sm:text-base text-[#C0ECD7] max-w-2xl leading-relaxed">
            From initial intake and architecture mapping to agile sprints, QA validation, and full intellectual property handover, DSS follows a structured process ensuring total transparency and zero surprises.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all shadow-md"
            >
              Start Step 1: Schedule Requirement Intake
            </button>
          </div>
        </div>
      </section>

      {/* 7-Step Interactive Roadmap */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div className="space-y-8">
          {HOW_WE_WORK_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start gap-8"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D382A] to-[#006D43] text-white flex items-center justify-center font-display font-extrabold text-2xl shrink-0 shadow-md">
                {stepItem.step}
              </div>

              {/* Step Details */}
              <div className="space-y-4 flex-1">
                <div>
                  <span className="text-xs font-mono font-bold text-[#006D43] uppercase tracking-wider">
                    Stage {stepItem.step} of 07
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#191C1B] mt-0.5">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0D382A] font-semibold mt-1">
                    {stepItem.shortDesc}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#414844] font-body leading-relaxed">
                  {stepItem.fullDetails}
                </p>

                {/* Deliverables List */}
                <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] space-y-2">
                  <span className="text-[11px] font-bold text-[#717974] uppercase tracking-wider block">
                    Tangible Deliverables at This Stage:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {stepItem.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#191C1B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006D43] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="p-8 rounded-2xl bg-[#0D382A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              100% Intellectual Property Ownership Guaranteed
            </h3>
            <p className="text-xs sm:text-sm text-[#C0ECD7] max-w-xl">
              Upon final milestone settlement, complete source code, GitHub repository access, Figma source files, and Excel master workbooks are signed over unconditionally to your company.
            </p>
          </div>
          <button
            onClick={() => onNavigate('enquiry')}
            className="px-6 py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all shrink-0"
          >
            Initiate Project Intake
          </button>
        </div>
      </div>
    </div>
  );
};
