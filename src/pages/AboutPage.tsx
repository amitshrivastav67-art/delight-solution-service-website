import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import {
  User,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  Target,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#002117] to-[#0A261D] text-white py-16 px-4 sm:px-6 border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#75F8B3]">
            <Compass className="w-3.5 h-3.5" />
            <span>PRD Section 01 • About Delight Solution Service</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            Integrated Business Solutions Across Finance, Technology and Digital Growth
          </h1>

          <p className="font-body text-sm sm:text-base text-[#C0ECD7] max-w-2xl leading-relaxed">
            Founded by Amit Shrivastav and based in Jaipur, Rajasthan, Delight Solution Service (DSS) bridges the gap between complex business challenges and practical execution.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all shadow-md"
            >
              Get in Touch with Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Founder & Leadership Profile Card */}
        <div className="p-8 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm flex flex-col md:flex-row items-start gap-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0D382A] to-[#006D43] text-white flex items-center justify-center font-display font-bold text-4xl shrink-0 shadow-lg">
            AS
          </div>

          <div className="space-y-4 flex-1">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-display font-bold text-2xl text-[#191C1B]">
                  {COMPANY_INFO.founder}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                  Founder & Managing Director
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#717974] mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00A86B]" />
                  <span>{COMPANY_INFO.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#00A86B]" />
                  <span>{COMPANY_INFO.phone}</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#414844] font-body leading-relaxed">
              Amit Shrivastav established Delight Solution Service to solve a fundamental dilemma facing modern businesses: traditional advisory firms are too rigid and costly, while fragmented freelancers lack cohesive accountability. DSS unites specialized financial facilitation, digital product development, data analytics, and creative media into a streamlined, results-oriented practice.
            </p>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-xs text-[#191C1B] space-y-1">
              <strong className="block text-[#0D382A]">Operating Ethics & Truthful Positioning:</strong>
              DSS refuses to inflate numbers or publish synthetic corporate claims. We present our real capabilities, working prototypes, and verified contact channels with 100% transparency.
            </div>
          </div>
        </div>

        {/* Official Brand Identity & Logo Presentation Card */}
        <div className="p-8 rounded-2xl bg-[#0B1015] text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-80 shrink-0 overflow-hidden rounded-xl bg-[#070b0e] border border-slate-700/80 shadow-2xl p-3 flex items-center justify-center">
            <img
              src={COMPANY_INFO.logoHorizontalUrl}
              alt="Delight Solution Service Official Logo"
              className="w-full h-auto object-contain rounded"
            />
          </div>

          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Official Trademark & Visual Identity</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white">
              The Platinum Shield & Interlocking DSS Knot
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
              The Delight Solution Service emblem integrates a brushed platinum protective shield symbolizing fiduciary trust and risk governance, enclosing an interlocking infinity knot monogram that represents the seamless symbiosis between Financial Advisory, Technology Engineering, and Professional Collaboration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Shield Iconography</span>
                <span className="text-emerald-400 font-bold">Fiduciary Protection</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Interlocking Monogram</span>
                <span className="text-emerald-400 font-bold">Finance • AI • Network</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Palette Metallurgy</span>
                <span className="text-emerald-400 font-bold">Monochrome Platinum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Model Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#006D43] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#191C1B]">
              Direct + Collaboration Network
            </h3>
            <p className="text-xs text-[#414844] font-body leading-relaxed">
              We balance core in-house steering with a flexible network of verified specialists in code, data, creative media, and finance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#006D43] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#191C1B]">
              Online & Remote Delivery
            </h3>
            <p className="text-xs text-[#414844] font-body leading-relaxed">
              Headquartered in Jaipur, Rajasthan, DSS operates seamlessly via digital channels, delivering loans across India and digital products globally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#006D43] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#191C1B]">
              Statutory Compliance
            </h3>
            <p className="text-xs text-[#414844] font-body leading-relaxed">
              Clear legal demarcation: DSS facilitates borrowing with partner banks and pairs clients with certified insurance advisors, upholding full regulatory trust.
            </p>
          </div>
        </div>

        {/* Direct Contact Details Box */}
        <div className="p-8 rounded-2xl bg-[#002117] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl">
              Connect Directly with Delight Solution Service
            </h3>
            <p className="text-xs sm:text-sm text-[#C0ECD7] max-w-xl">
              Have a specific question or want to explore an engagement? We are available Monday to Saturday, 9:30 AM to 6:30 PM IST.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-5 py-3 rounded-lg bg-[#0D382A] text-white border border-[#00A86B]/40 font-label font-bold text-xs hover:bg-[#134E3B] transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email DSS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
