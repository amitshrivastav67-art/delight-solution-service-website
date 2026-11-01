import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import {
  Landmark,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Calculator,
  FileCheck,
  FileText,
  BadgeCheck,
  HeartHandshake,
  Car,
  Home,
  Building,
  CreditCard,
  Briefcase,
  Shield,
  Phone,
  Sparkles,
} from 'lucide-react';

interface FinancialSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiryPathway?: (pathway: string) => void;
}

export const FinancialSolutionsPage: React.FC<FinancialSolutionsPageProps> = ({
  onNavigate,
}) => {
  // Interactive EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // 10 Lakhs
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5%
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years

  // EMI Calculation: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi =
    loanAmount > 0 && monthlyRate > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const loanCategories = [
    {
      title: 'Personal Loans',
      desc: 'Unsecured credit assistance for medical, wedding, higher education, or urgent liquidity needs.',
      features: ['Tenures up to 5 years', 'Minimal paperwork for salaried employees', 'Multi-bank rate comparison'],
      icon: <Briefcase className="w-5 h-5 text-[#0D382A]" />,
      target: 'Salaried & Self-Employed individuals with regular documented income',
    },
    {
      title: 'Business Loans',
      desc: 'Growth capital for MSMEs, manufacturers, traders, and service enterprises.',
      features: ['Collateral-free options available', 'Working capital & inventory financing', 'CMA file and balance-sheet alignment'],
      icon: <Building className="w-5 h-5 text-[#0D382A]" />,
      target: 'Registered GST entities, proprietorships, partnerships, and private limited companies',
    },
    {
      title: 'Home Loans & Construction',
      desc: 'Assistance for purchasing ready properties, under-construction apartments, or independent home building.',
      features: ['Long tenures up to 30 years', 'Tax benefit advisory under Section 80C & 24b', 'Technical map & registry verification'],
      icon: <Home className="w-5 h-5 text-[#0D382A]" />,
      target: 'Prospective home buyers and residential plot owners across India',
    },
    {
      title: 'Used-Car Loans & Refinance',
      desc: 'Financing for certified pre-owned vehicles and equity unlock from your existing automobile.',
      features: ['Up to 85% vehicle valuation funding', 'Quick RTO transfer coordination', 'Competitive reducing interest rates'],
      icon: <Car className="w-5 h-5 text-[#0D382A]" />,
      target: 'Car buyers and vehicle owners seeking liquidity against existing vehicles',
    },
    {
      title: 'Loan Against Property (LAP)',
      desc: 'Substantial long-term financing by mortgaging residential or commercial property.',
      features: ['Lower interest rate than unsecured loans', 'High sanction limits up to ₹15+ Crore', 'Property remains in your productive use'],
      icon: <Landmark className="w-5 h-5 text-[#0D382A]" />,
      target: 'Commercial shop owners, factory holders, and residential homeowners',
    },
    {
      title: 'Balance Transfer & Debt Consolidation',
      desc: 'Transfer high-interest loans to lower interest partner institutions to slash monthly EMIs.',
      features: ['Significant monthly savings on existing loans', 'Top-up loan facility alongside transfer', 'DSS manages foreclosure paper trail'],
      icon: <FileCheck className="w-5 h-5 text-[#0D382A]" />,
      target: 'Borrowers servicing loans with interest rates above current market averages',
    },
    {
      title: 'Overdraft Facility (OD / CC)',
      desc: 'Flexible credit limit linked to your current account where interest is charged only on utilized funds.',
      features: ['Pay interest only for days of fund utilization', 'Revolving limit renewed annually', 'Ideal for seasonal business cycles'],
      icon: <Calculator className="w-5 h-5 text-[#0D382A]" />,
      target: 'Traders, wholesalers, distributors, and seasonal contractors',
    },
    {
      title: 'Credit Card Assistance',
      desc: 'Assistance in selecting and applying for lifestyle, travel, and business rewards credit cards.',
      features: ['Zero annual fee card options', 'Complimentary airport lounge access', 'Fuel surcharge waivers & cashback perks'],
      icon: <CreditCard className="w-5 h-5 text-[#0D382A]" />,
      target: 'Young professionals, business executives, and frequent domestic travelers',
    },
  ];

  const insuranceCategories = [
    {
      type: 'Life & Term Insurance',
      coverage: 'Income replacement, pure risk term cover, and family breadwinner protection.',
      whyAdvisor: 'Independent certified advisors evaluate your exact Human Life Value (HLV) without biased single-company sales quotas.',
    },
    {
      type: 'Health Insurance',
      coverage: 'Individual, family floater, and critical illness indemnity against catastrophic hospital bills.',
      whyAdvisor: 'Advisors explain room-rent capping, co-pay clauses, pre-existing disease waiting periods, and network hospital cashless lists.',
    },
    {
      type: 'General & Commercial Assets',
      coverage: 'Factory machinery, warehouse fire & theft, shopkeeper inventory, and marine cargo transit.',
      whyAdvisor: 'Essential for business owners to properly value insurable stock and ensure valid claim admissibility under surveyor audits.',
    },
    {
      type: 'Motor & Fleet Insurance',
      coverage: 'Zero-depreciation bumper-to-bumper coverage for two-wheelers, private cars, and commercial transport fleets.',
      whyAdvisor: 'Immediate renewal assistance, NCB retention support, and fast cashless settlement coordination.',
    },
  ];

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#002117] to-[#0D382A] text-white py-16 px-4 sm:px-6 border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#75F8B3]/10 border border-[#75F8B3]/30 text-[#75F8B3]">
            <Landmark className="w-3.5 h-3.5" />
            <span>Division 01 • Financial Solutions</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            Loan & Credit Assistance and Certified Insurance Advisor Network
          </h1>

          <p className="font-body text-sm sm:text-base text-[#C0ECD7] max-w-2xl leading-relaxed">
            Delight Solution Service assists individuals, professionals, and MSMEs across India in navigating borrowing options and connecting with certified, licensed insurance advisors.
          </p>

          {/* Regulatory Disclaimer Callout */}
          <div className="p-4 rounded-xl bg-[#061610]/80 border border-[#00A86B]/30 max-w-3xl flex items-start gap-3 text-xs text-[#A4D0BC]">
            <ShieldCheck className="w-5 h-5 text-[#00A86B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-label uppercase tracking-wider text-[11px] mb-0.5">
                Statutory Transparency & Non-Lender Role (PRD Section 11 & 15)
              </strong>
              DSS is an independent assistance and facilitation partner. DSS does not approve loans, determine interest rates, or disburse funds directly. All lending decisions are made strictly by partner banks and RBI-registered NBFCs. Insurance advisory is conducted exclusively in matchmaking alignment with IRDAI-certified professionals.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#00A86B] text-[#002117] font-label font-bold text-xs hover:bg-[#75F8B3] transition-all shadow-md"
            >
              Submit Financial Requirement (Pathway 1)
            </button>
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#061610] text-[#C0ECD7] border border-[#0D382A] font-label font-bold text-xs hover:text-white hover:border-[#00A86B] transition-all"
            >
              Join as Loan Partner / Advisor (Pathway 2 & 3)
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Section 1: 9 Loan & Credit Categories */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
                Assistance Portfolio
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B] mt-1">
                Loan & Credit Assistance Options
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#414844] max-w-md">
              We pre-screen your financial documentation, compute debt service ratios, and submit your profile to institutions with the highest probability of approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#CFDDD3] hover:border-[#006D43] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D382A]/10 border border-[#0D382A]/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#191C1B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#414844] font-body leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-bold text-[#717974] uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-[#191C1B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006D43] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-[#717974] italic">
                  <strong>Ideal for:</strong> {item.target}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Loan EMI Calculator */}
        <section className="bg-white rounded-2xl border border-[#CFDDD3] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="lg:max-w-md space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0D382A] bg-[#0D382A]/10">
                <Calculator className="w-3.5 h-3.5" />
                <span>Financial Planning Tool</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#191C1B]">
                Estimate Your Monthly Loan Commitment
              </h3>
              <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
                Use this planning simulator to budget your monthly repayment. Pre-determining your EMI ensures your Debt-to-Income (DTI) ratio stays comfortably below 50% for optimal bank clearance.
              </p>
              <div className="p-4 rounded-xl bg-[#F2F4F2] border border-[#E2EBE5] text-xs space-y-2">
                <div className="font-bold text-[#191C1B]">
                  How DSS Optimizes Your Application:
                </div>
                <div className="flex items-center gap-2 text-[#414844]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0" />
                  <span>Cleanses bank statements to remove transaction anomalies</span>
                </div>
                <div className="flex items-center gap-2 text-[#414844]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0" />
                  <span>Matches your income bracket to specific bank policy criteria</span>
                </div>
                <div className="flex items-center gap-2 text-[#414844]">
                  <CheckCircle2 className="w-4 h-4 text-[#006D43] shrink-0" />
                  <span>Prevents multiple simultaneous inquiries damaging CIBIL score</span>
                </div>
              </div>
            </div>

            {/* Interactive Sliders & Results */}
            <div className="w-full lg:max-w-xl space-y-6 bg-[#F8FAF8] p-6 rounded-xl border border-[#E2EBE5]">
              {/* Slider 1: Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-label">
                  <span className="font-bold text-[#191C1B]">Desired Loan Amount:</span>
                  <span className="font-mono font-bold text-[#0D382A] text-sm">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="25000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#00A86B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#717974] font-mono">
                  <span>₹50,000</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1 Crore</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-label">
                  <span className="font-bold text-[#191C1B]">Estimated Interest Rate (p.a.):</span>
                  <span className="font-mono font-bold text-[#0D382A] text-sm">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="7.5"
                  max="24.0"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#00A86B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#717974] font-mono">
                  <span>7.5% (Home/LAP)</span>
                  <span>14% (Business)</span>
                  <span>24% (Unsecured)</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-label">
                  <span className="font-bold text-[#191C1B]">Loan Tenure:</span>
                  <span className="font-mono font-bold text-[#0D382A] text-sm">
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-[#00A86B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#717974] font-mono">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Calculation Output Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#CFDDD3]">
                <div className="p-3 bg-white rounded-lg border border-[#E2EBE5]">
                  <span className="text-[10px] text-[#717974] uppercase font-bold block">
                    Monthly EMI
                  </span>
                  <span className="text-xl font-display font-extrabold text-[#0D382A]">
                    ₹{emi.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E2EBE5]">
                  <span className="text-[10px] text-[#717974] uppercase font-bold block">
                    Principal Amount
                  </span>
                  <span className="text-sm font-display font-bold text-[#191C1B]">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E2EBE5]">
                  <span className="text-[10px] text-[#717974] uppercase font-bold block">
                    Total Repayment
                  </span>
                  <span className="text-sm font-display font-bold text-[#191C1B]">
                    ₹{totalPayment.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('enquiry')}
                className="w-full py-3 rounded-lg bg-[#0D382A] text-white font-label font-bold text-xs hover:bg-[#134E3B] transition-colors flex items-center justify-center gap-2"
              >
                <span>Check Real Eligibility for ₹{loanAmount.toLocaleString('en-IN')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Certified Insurance Advisor Network */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-wider text-[#006D43] font-bold">
                Protection Ecosystem
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#191C1B] mt-1">
                Insurance Advisor Network
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#414844] max-w-md">
              Connecting policy seekers with certified, licensed independent insurance professionals across Life, Health, Commercial, and Motor domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insuranceCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#CFDDD3] shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#006D43]" />
                  <h3 className="font-display font-bold text-lg text-[#191C1B]">
                    {item.type}
                  </h3>
                </div>
                <p className="text-xs text-[#414844] font-body leading-relaxed">
                  <strong className="text-[#191C1B]">Scope:</strong> {item.coverage}
                </p>
                <div className="p-3 rounded-lg bg-[#F2F4F2] text-xs text-[#191C1B] font-body">
                  <span className="font-bold text-[#0D382A]">Why Advisor Matchmaking Matters:</span>{' '}
                  {item.whyAdvisor}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#0D382A]/5 border border-[#0D382A]/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display font-bold text-base text-[#0D382A]">
                Are you an IRDAI-Certified Insurance Advisor or Financial Consultant?
              </h4>
              <p className="text-xs text-[#414844] mt-1">
                Join our verified professional referral network to receive serious client inquiries in your region.
              </p>
            </div>
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-5 py-2.5 rounded-lg bg-[#0D382A] text-white font-label font-bold text-xs hover:bg-[#134E3B] transition-colors shrink-0"
            >
              Apply as Advisor (Pathway 2)
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
