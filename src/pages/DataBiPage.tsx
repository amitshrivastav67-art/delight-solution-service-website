import React, { useState } from 'react';
import { PageId } from '../types';
import {
  BarChart3,
  FileSpreadsheet,
  TrendingUp,
  Database,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Filter,
  Layers,
  Sparkles,
  Table,
} from 'lucide-react';

interface DataBiPageProps {
  onNavigate: (page: PageId) => void;
}

export const DataBiPage: React.FC<DataBiPageProps> = ({ onNavigate }) => {
  // Interactive mini-BI demo metrics
  const [selectedMonth, setSelectedMonth] = useState<string>('Q4 (Current)');
  const [activeCategory, setActiveCategory] = useState<'all' | 'retail' | 'services'>('all');

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white py-16 px-4 sm:px-6 border-b border-[#334155]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#7DD3FC]">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Division 03 • Data & Business Intelligence</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            Advanced Excel Financial Engineering & Executive Power BI Dashboards
          </h1>

          <p className="font-body text-sm sm:text-base text-[#CBD5E1] max-w-2xl leading-relaxed">
            Eliminate chaotic spreadsheets and blind-spot decision-making. DSS builds audit-ready Excel models, automated VBA scripts, and unified Power BI analytics dashboards connecting your transactional records to actionable executive insights.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#38BDF8] text-[#0F172A] font-label font-bold text-xs hover:bg-[#7DD3FC] transition-all shadow-md"
            >
              Request Data Scoping Brief (Pathway 5)
            </button>
            <button
              onClick={() => onNavigate('projects-experiments')}
              className="px-6 py-3 rounded-lg bg-[#0F172A] text-[#CBD5E1] border border-[#334155] font-label font-bold text-xs hover:text-white hover:border-[#38BDF8] transition-all"
            >
              Explore Excel & BI Demos
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Dual Pillar Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Advanced Excel */}
          <div className="p-8 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-[#191C1B]">
                Advanced Excel & Financial Modeling
              </h2>
              <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                We engineer scalable, error-free spreadsheets built with dynamic array formulas, clean data entry rules, and one-click VBA macro automations.
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>3-Statement Financial Models:</strong> Integrated P&L, Balance Sheet, and Cash Flow models ready for banks and investors.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>CMA Bank Loan Data Formatting:</strong> Tailored credit appraisal spreadsheets aligned with Indian PSU & private bank norms.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>VBA Macro Automation:</strong> Click one button to import 10+ ERP exports, clean inconsistencies, and compile monthly reports.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>Data Cleansing & Normalization:</strong> Fix broken formulas (#REF!, #VALUE!), eliminate duplicate rows, and structure raw inputs.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-xs">
              <strong className="text-[#0D382A] block mb-1">Audit-Ready Deliverables:</strong>
              Protected formula structures, distinct color-coded inputs vs calculations, and a built-in user guide tab inside every workbook.
            </div>
          </div>

          {/* Pillar 2: Power BI */}
          <div className="p-8 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-2xl text-[#191C1B]">
                Power BI & Executive Analytics
              </h2>
              <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                Connect disparate data sources into automated, visually compelling executive dashboards with real-time drill-through capabilities.
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>Unified Single Source of Truth:</strong> Merge SQL databases, Google Sheets, Tally ERP, and Excel into one clean star-schema.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>Custom DAX Business Logic:</strong> Calculate Year-over-Year (YoY) growth, customer churn, gross margin percentages, and inventory age.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>Executive KPI Summary Views:</strong> High-level visual cards with color-coded benchmark alerts for leadership reviews.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#191C1B]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0 mt-0.5" />
                  <span><strong>Automated Scheduled Refreshes:</strong> Set up gateway sync so your dashboards refresh automatically without manual file uploads.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-xs">
              <strong className="text-[#0D382A] block mb-1">Mobile & Boardroom Ready:</strong>
              Dashboards are optimized for desktop projectors, iPad executive browsing, and automated weekly PDF snapshot distribution.
            </div>
          </div>
        </div>

        {/* Interactive Sample Analytics Simulator */}
        <div className="bg-white rounded-2xl border border-[#CFDDD3] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
                Live Demonstration
              </span>
              <h3 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                Interactive Power BI KPI Visualizer
              </h3>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-[#717974] font-label">
                <Filter className="w-3.5 h-3.5" />
                <span>Period:</span>
              </div>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="text-xs bg-[#F2F4F2] border border-[#CFDDD3] rounded-lg px-3 py-1.5 font-label font-semibold text-[#191C1B]"
              >
                <option>Q4 (Current)</option>
                <option>Q3 (Previous)</option>
                <option>Q2 (Mid-Year)</option>
                <option>Full Year 2025</option>
              </select>

              <div className="flex items-center bg-[#F2F4F2] p-0.5 rounded-lg border border-[#E2EBE5] text-xs font-label">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-2.5 py-1 rounded ${
                    activeCategory === 'all' ? 'bg-[#0D382A] text-white font-bold' : 'text-[#717974]'
                  }`}
                >
                  All Channels
                </button>
                <button
                  onClick={() => setActiveCategory('retail')}
                  className={`px-2.5 py-1 rounded ${
                    activeCategory === 'retail' ? 'bg-[#0D382A] text-white font-bold' : 'text-[#717974]'
                  }`}
                >
                  Retail Store
                </button>
                <button
                  onClick={() => setActiveCategory('services')}
                  className={`px-2.5 py-1 rounded ${
                    activeCategory === 'services' ? 'bg-[#0D382A] text-white font-bold' : 'text-[#717974]'
                  }`}
                >
                  B2B Services
                </button>
              </div>
            </div>
          </div>

          {/* Interactive KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5]">
              <span className="text-[11px] font-bold text-[#717974] uppercase tracking-wider block">
                Total Revenue
              </span>
              <div className="text-2xl font-display font-extrabold text-[#0D382A] mt-1">
                {activeCategory === 'retail' ? '₹42.8 Lakhs' : activeCategory === 'services' ? '₹31.4 Lakhs' : '₹74.2 Lakhs'}
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#006D43] font-bold mt-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+18.4% vs last period</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5]">
              <span className="text-[11px] font-bold text-[#717974] uppercase tracking-wider block">
                Gross Profit Margin
              </span>
              <div className="text-2xl font-display font-extrabold text-[#0D382A] mt-1">
                {activeCategory === 'retail' ? '28.5%' : activeCategory === 'services' ? '54.2%' : '39.4%'}
              </div>
              <div className="text-[11px] text-[#006D43] font-bold mt-1">
                Above benchmark target (+3.2%)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5]">
              <span className="text-[11px] font-bold text-[#717974] uppercase tracking-wider block">
                Operating Cash Flow
              </span>
              <div className="text-2xl font-display font-extrabold text-[#0D382A] mt-1">
                ₹19.6 Lakhs
              </div>
              <div className="text-[11px] text-[#717974] mt-1">
                DSCR Ratio: 2.15x (Bank Healthy)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5]">
              <span className="text-[11px] font-bold text-[#717974] uppercase tracking-wider block">
                Reporting Automation
              </span>
              <div className="text-2xl font-display font-extrabold text-[#006D43] mt-1">
                100% Sync
              </div>
              <div className="text-[11px] text-[#717974] mt-1">
                Auto-refreshed 2 hrs ago via Gateway
              </div>
            </div>
          </div>
        </div>

        {/* Talent Callout */}
        <div className="p-6 rounded-xl bg-[#1E293B]/5 border border-[#1E293B]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-base text-[#1E293B]">
              Are you an Advanced Excel Modeler or Certified Power BI Specialist?
            </h4>
            <p className="text-xs text-[#414844] mt-1">
              Join DSS’s Professional Collaboration Network to work on corporate data projects with pre-scoped requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('enquiry')}
            className="px-5 py-2.5 rounded-lg bg-[#1E293B] text-white font-label font-bold text-xs hover:bg-[#334155] transition-colors shrink-0"
          >
            Join as Data Specialist (Pathway 4)
          </button>
        </div>
      </div>
    </div>
  );
};
