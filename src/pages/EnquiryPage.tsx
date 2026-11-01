import React, { useState } from 'react';
import { PageId, PathwayId } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Building,
  User,
  CreditCard,
  ShieldCheck,
  Code2,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
} from 'lucide-react';

interface EnquiryPageProps {
  onNavigate: (page: PageId) => void;
  initialPathway?: PathwayId;
}

export const EnquiryPage: React.FC<EnquiryPageProps> = ({
  onNavigate,
  initialPathway = 'financial-customer',
}) => {
  const [activePathway, setActivePathway] = useState<PathwayId>(initialPathway);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedDataSummary, setSubmittedDataSummary] = useState<string>('');

  // Pathway 1 Form State (Financial Customer)
  const [p1Name, setP1Name] = useState('');
  const [p1Phone, setP1Phone] = useState('');
  const [p1Email, setP1Email] = useState('');
  const [p1City, setP1City] = useState('');
  const [p1LoanCategory, setP1LoanCategory] = useState('Personal Loan');
  const [p1Amount, setP1Amount] = useState('₹5,00,000');
  const [p1Employment, setP1Employment] = useState('Salaried');
  const [p1MonthlyIncome, setP1MonthlyIncome] = useState('₹50,000 - ₹1,00,000');
  const [p1Notes, setP1Notes] = useState('');

  // Pathway 2 Form State (Insurance Advisor)
  const [p2Name, setP2Name] = useState('');
  const [p2Phone, setP2Phone] = useState('');
  const [p2Email, setP2Email] = useState('');
  const [p2City, setP2City] = useState('');
  const [p2Exp, setP2Exp] = useState('3-5 Years');
  const [p2Categories, setP2Categories] = useState<string[]>(['Health Insurance', 'Life Insurance']);
  const [p2License, setP2License] = useState('Yes (Active IRDAI License)');
  const [p2Notes, setP2Notes] = useState('');

  // Pathway 3 Form State (Loan Partner)
  const [p3Name, setP3Name] = useState('');
  const [p3Phone, setP3Phone] = useState('');
  const [p3Email, setP3Email] = useState('');
  const [p3City, setP3City] = useState('');
  const [p3PartnerType, setP3PartnerType] = useState('Direct Selling Agent (DSA)');
  const [p3Exp, setP3Exp] = useState('2-5 Years');
  const [p3LoanTypes, setP3LoanTypes] = useState<string[]>(['Business Loan', 'Home Loan']);
  const [p3Notes, setP3Notes] = useState('');

  // Pathway 4 Form State (Tech / Creative Pro)
  const [p4Name, setP4Name] = useState('');
  const [p4Phone, setP4Phone] = useState('');
  const [p4Email, setP4Email] = useState('');
  const [p4City, setP4City] = useState('');
  const [p4Domain, setP4Domain] = useState('Website / Web App Developer');
  const [p4Skills, setP4Skills] = useState('React, Next.js, Tailwind, TypeScript');
  const [p4Portfolio, setP4Portfolio] = useState('');
  const [p4Availability, setP4Availability] = useState('Project-by-Project');
  const [p4Notes, setP4Notes] = useState('');

  // Pathway 5 Form State (Business Solutions Client)
  const [p5Name, setP5Name] = useState('');
  const [p5Company, setP5Company] = useState('');
  const [p5Phone, setP5Phone] = useState('');
  const [p5Email, setP5Email] = useState('');
  const [p5City, setP5City] = useState('');
  const [p5BusinessType, setP5BusinessType] = useState('SME / MSME');
  const [p5Service, setP5Service] = useState('Custom CRM System');
  const [p5Problem, setP5Problem] = useState('');
  const [p5Budget, setP5Budget] = useState('₹50,000 - ₹2,00,000');
  const [p5Timeline, setP5Timeline] = useState('2 - 4 Weeks');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    let summary = '';
    if (activePathway === 'financial-customer') {
      summary = `Financial assistance request for ${p1LoanCategory} (${p1Amount}) by ${p1Name || 'Customer'} (${p1City || 'India'}).`;
    } else if (activePathway === 'insurance-advisor') {
      summary = `Insurance advisor network application from ${p2Name} (${p2City}) with ${p2Exp} experience in ${p2Categories.join(', ')}.`;
    } else if (activePathway === 'loan-partner') {
      summary = `Loan connector partnership registration from ${p3Name} (${p3PartnerType}, ${p3City}).`;
    } else if (activePathway === 'tech-creative-pro') {
      summary = `Collaboration network application for ${p4Domain} by ${p4Name} (${p4Skills}).`;
    } else {
      summary = `Business project enquiry for ${p5Service} by ${p5Name} at ${p5Company || 'Company'} (${p5Budget}).`;
    }
    setSubmittedDataSummary(summary);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedDataSummary('');
  };

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#002117] to-[#0A261D] text-white py-16 px-4 sm:px-6 border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#75F8B3]">
            <Send className="w-3.5 h-3.5" />
            <span>PRD Section 08 • 5 Working Enquiry Pathways</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            Connect with Delight Solution Service
          </h1>

          <p className="font-body text-sm sm:text-base text-[#C0ECD7] max-w-2xl leading-relaxed">
            Choose your tailored enquiry pathway below to connect directly with founder Amit Shrivastav and our specialized coordinators.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#A4D0BC] pt-1">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#00A86B]" />
              <span>{COMPANY_INFO.phone}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00A86B]" />
              <span>{COMPANY_INFO.email}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00A86B]" />
              <span>{COMPANY_INFO.location}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Pathway Selection Tabs */}
        <div className="bg-white p-2 rounded-2xl border border-[#CFDDD3] shadow-sm flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActivePathway('financial-customer');
              setIsSubmitted(false);
            }}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-label font-bold transition-all text-left flex items-center gap-2.5 ${
              activePathway === 'financial-customer'
                ? 'bg-[#0D382A] text-white shadow-sm'
                : 'text-[#414844] hover:bg-[#F2F4F2]'
            }`}
          >
            <CreditCard className="w-4 h-4 text-[#75F8B3] shrink-0" />
            <div>
              <div className="leading-tight">Pathway 1</div>
              <div className="text-[10px] font-normal opacity-80">Financial Customer</div>
            </div>
          </button>

          <button
            onClick={() => {
              setActivePathway('insurance-advisor');
              setIsSubmitted(false);
            }}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-label font-bold transition-all text-left flex items-center gap-2.5 ${
              activePathway === 'insurance-advisor'
                ? 'bg-[#0D382A] text-white shadow-sm'
                : 'text-[#414844] hover:bg-[#F2F4F2]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#75F8B3] shrink-0" />
            <div>
              <div className="leading-tight">Pathway 2</div>
              <div className="text-[10px] font-normal opacity-80">Insurance Advisor Network</div>
            </div>
          </button>

          <button
            onClick={() => {
              setActivePathway('loan-partner');
              setIsSubmitted(false);
            }}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-label font-bold transition-all text-left flex items-center gap-2.5 ${
              activePathway === 'loan-partner'
                ? 'bg-[#0D382A] text-white shadow-sm'
                : 'text-[#414844] hover:bg-[#F2F4F2]'
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#75F8B3] shrink-0" />
            <div>
              <div className="leading-tight">Pathway 3</div>
              <div className="text-[10px] font-normal opacity-80">Loan Partner / Connector</div>
            </div>
          </button>

          <button
            onClick={() => {
              setActivePathway('tech-creative-pro');
              setIsSubmitted(false);
            }}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-label font-bold transition-all text-left flex items-center gap-2.5 ${
              activePathway === 'tech-creative-pro'
                ? 'bg-[#0D382A] text-white shadow-sm'
                : 'text-[#414844] hover:bg-[#F2F4F2]'
            }`}
          >
            <Code2 className="w-4 h-4 text-[#75F8B3] shrink-0" />
            <div>
              <div className="leading-tight">Pathway 4</div>
              <div className="text-[10px] font-normal opacity-80">Tech / Creative Pro</div>
            </div>
          </button>

          <button
            onClick={() => {
              setActivePathway('business-solutions');
              setIsSubmitted(false);
            }}
            className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-label font-bold transition-all text-left flex items-center gap-2.5 ${
              activePathway === 'business-solutions'
                ? 'bg-[#0D382A] text-white shadow-sm'
                : 'text-[#414844] hover:bg-[#F2F4F2]'
            }`}
          >
            <Building className="w-4 h-4 text-[#75F8B3] shrink-0" />
            <div>
              <div className="leading-tight">Pathway 5</div>
              <div className="text-[10px] font-normal opacity-80">Business Client Project</div>
            </div>
          </button>
        </div>

        {/* Success Confirmation State */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#CFDDD3] shadow-md text-center max-w-2xl mx-auto space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#191C1B]">
              Enquiry Successfully Recorded
            </h3>
            <p className="text-xs sm:text-sm text-[#414844] max-w-lg mx-auto leading-relaxed">
              Thank you for reaching out to Delight Solution Service. Your submission has been routed directly to founder Amit Shrivastav and our division intake team.
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-xs text-[#0D382A] font-mono max-w-lg mx-auto">
              {submittedDataSummary}
            </div>
            <div className="text-xs text-[#717974]">
              Expected response time: Under 24 business hours via phone or email.
            </div>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg bg-[#0D382A] text-white text-xs font-bold hover:bg-[#134E3B]"
              >
                Submit Another Requirement
              </button>
              <button
                onClick={() => onNavigate('overview')}
                className="px-5 py-2.5 rounded-lg border border-[#CFDDD3] text-xs font-semibold hover:bg-gray-50"
              >
                Return to Overview
              </button>
            </div>
          </div>
        ) : (
          /* Active Form Container */
          <div className="bg-white rounded-2xl border border-[#CFDDD3] p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
            {/* Pathway 1: Financial Customer */}
            {activePathway === 'financial-customer' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#006D43] uppercase tracking-wider">
                    Pathway 01 of 05
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                    Financial Customer Loan Assistance
                  </h2>
                  <p className="text-xs text-[#414844] mt-1">
                    Evaluate your borrowing eligibility across personal, business, home, and commercial loans.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-label">
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={p1Name}
                      onChange={(e) => setP1Name(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] focus:border-[#00A86B] focus:ring-1 focus:ring-[#00A86B] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Mobile Phone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={p1Phone}
                      onChange={(e) => setP1Phone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] focus:border-[#00A86B] focus:ring-1 focus:ring-[#00A86B] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={p1Email}
                      onChange={(e) => setP1Email(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] focus:border-[#00A86B] focus:ring-1 focus:ring-[#00A86B] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">City / Location *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={p1City}
                      onChange={(e) => setP1City(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] focus:border-[#00A86B] focus:ring-1 focus:ring-[#00A86B] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Loan Assistance Category *</label>
                    <select
                      value={p1LoanCategory}
                      onChange={(e) => setP1LoanCategory(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Personal Loan</option>
                      <option>Business Loan</option>
                      <option>Home Loan</option>
                      <option>Home Construction Loan</option>
                      <option>Used-Car Loan</option>
                      <option>Loan Against Property (LAP)</option>
                      <option>Balance Transfer</option>
                      <option>Overdraft Facility (OD)</option>
                      <option>Credit Card Assistance</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Estimated Requirement Amount *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. ₹10,00,000"
                      value={p1Amount}
                      onChange={(e) => setP1Amount(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Employment Type *</label>
                    <select
                      value={p1Employment}
                      onChange={(e) => setP1Employment(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Salaried</option>
                      <option>Self-Employed Professional</option>
                      <option>Business Owner / MSME</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Approximate Monthly Income</label>
                    <select
                      value={p1MonthlyIncome}
                      onChange={(e) => setP1MonthlyIncome(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Below ₹25,000</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹2,50,000</option>
                      <option>Above ₹2,50,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-xs font-label">
                  <label className="font-bold text-[#191C1B]">Specific Details or Existing EMIs</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your requirements, any active loans, or preferred partner banks..."
                    value={p1Notes}
                    onChange={(e) => setP1Notes(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-[11px] text-[#717974] leading-relaxed">
                  <strong>Statutory Notice:</strong> DSS is an independent loan facilitator and documentation partner. DSS does not approve loans or determine rates; approval rests solely with partner banks and NBFCs.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0D382A] text-white font-label font-bold text-xs hover:bg-[#134E3B] transition-colors shadow-sm"
                >
                  Submit Financial Assistance Request
                </button>
              </form>
            )}

            {/* Pathway 2: Insurance Advisor Network */}
            {activePathway === 'insurance-advisor' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#006D43] uppercase tracking-wider">
                    Pathway 02 of 05
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                    Insurance Advisor Network Registration
                  </h2>
                  <p className="text-xs text-[#414844] mt-1">
                    For licensed insurance advisors seeking high-intent local customer referrals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-label">
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Advisor Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vikram Meena"
                      value={p2Name}
                      onChange={(e) => setP2Name(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Mobile Phone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 94140 12345"
                      value={p2Phone}
                      onChange={(e) => setP2Phone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="vikram@advisor.com"
                      value={p2Email}
                      onChange={(e) => setP2Email(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">City & Territory *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Jaipur & Ajmer, Rajasthan"
                      value={p2City}
                      onChange={(e) => setP2City(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Years of Insurance Practice</label>
                    <select
                      value={p2Exp}
                      onChange={(e) => setP2Exp(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>1 - 2 Years</option>
                      <option>3 - 5 Years</option>
                      <option>6 - 10 Years</option>
                      <option>10+ Years</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">IRDAI License Status *</label>
                    <select
                      value={p2License}
                      onChange={(e) => setP2License(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Yes (Active IRDAI License)</option>
                      <option>In Process / Renewal</option>
                      <option>Associated with Corporate Agency / Broker</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-label">
                  <label className="font-bold text-[#191C1B]">Primary Insurance Lines Practiced</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Life Insurance', 'Health Insurance', 'General / Commercial', 'Motor & Fleet'].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 bg-gray-50 cursor-pointer text-xs">
                        <input
                          type="checkbox"
                          checked={p2Categories.includes(cat)}
                          onChange={(e) => {
                            if (e.target.checked) setP2Categories([...p2Categories, cat]);
                            else setP2Categories(p2Categories.filter((c) => c !== cat));
                          }}
                          className="accent-[#0D382A]"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0D382A] text-white font-label font-bold text-xs hover:bg-[#134E3B] transition-colors"
                >
                  Submit Insurance Network Application
                </button>
              </form>
            )}

            {/* Pathway 3: Loan Partner / Connector */}
            {activePathway === 'loan-partner' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#006D43] uppercase tracking-wider">
                    Pathway 03 of 05
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                    Loan Partner & Connector Application
                  </h2>
                  <p className="text-xs text-[#414844] mt-1">
                    For DSAs, independent connectors, and loan distribution professionals across India.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-label">
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Partner / Contact Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Suresh Agrawal"
                      value={p3Name}
                      onChange={(e) => setP3Name(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Mobile Phone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98290 56789"
                      value={p3Phone}
                      onChange={(e) => setP3Phone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Email Address</label>
                    <input
                      type="email"
                      placeholder="suresh@partner.com"
                      value={p3Email}
                      onChange={(e) => setP3Email(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Operating City & State *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={p3City}
                      onChange={(e) => setP3City(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Partner Classification *</label>
                    <select
                      value={p3PartnerType}
                      onChange={(e) => setP3PartnerType(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Direct Selling Agent (DSA)</option>
                      <option>Independent Financial Advisor</option>
                      <option>Connector</option>
                      <option>Broker</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Years in Lending Distribution</label>
                    <select
                      value={p3Exp}
                      onChange={(e) => setP3Exp(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Less than 1 Year</option>
                      <option>2 - 5 Years</option>
                      <option>5 - 10 Years</option>
                      <option>10+ Years</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0D382A] text-white font-label font-bold text-xs hover:bg-[#134E3B] transition-colors"
                >
                  Register as Loan Partner / Connector
                </button>
              </form>
            )}

            {/* Pathway 4: Tech & Creative Pro */}
            {activePathway === 'tech-creative-pro' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#006D43] uppercase tracking-wider">
                    Pathway 04 of 05
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                    Technology & Creative Professional Application
                  </h2>
                  <p className="text-xs text-[#414844] mt-1">
                    Join the DSS Professional Collaboration Network across Tech, Data, Creative, or Marketing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-label">
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Priya Nair"
                      value={p4Name}
                      onChange={(e) => setP4Name(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Mobile Phone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 12340"
                      value={p4Phone}
                      onChange={(e) => setP4Phone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="priya@domain.com"
                      value={p4Email}
                      onChange={(e) => setP4Email(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">City & Country *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Bengaluru, India (or Remote)"
                      value={p4City}
                      onChange={(e) => setP4City(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Primary Domain / Role *</label>
                    <select
                      value={p4Domain}
                      onChange={(e) => setP4Domain(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Website / Web App Developer</option>
                      <option>CRM / Full-Stack Developer</option>
                      <option>UI/UX Designer</option>
                      <option>No-Code / Low-Code Specialist</option>
                      <option>AI Agent / RAG Developer</option>
                      <option>n8n / Make.com Specialist</option>
                      <option>Excel / Financial Modeler</option>
                      <option>Power BI & BI Developer</option>
                      <option>Video Editor / Creative Animator</option>
                      <option>Digital Marketer / Social Strategist</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Working Availability *</label>
                    <select
                      value={p4Availability}
                      onChange={(e) => setP4Availability(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Project-by-Project</option>
                      <option>Part-time Evenings/Weekends</option>
                      <option>Full-time Freelance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-xs font-label">
                  <label className="font-bold text-[#191C1B]">Key Tools & Technical Skills *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. React 19, TypeScript, n8n, Tailwind, Power BI, Python, Figma"
                    value={p4Skills}
                    onChange={(e) => setP4Skills(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                  />
                </div>

                <div className="space-y-1 text-xs font-label">
                  <label className="font-bold text-[#191C1B]">Portfolio / GitHub / LinkedIn URL</label>
                  <input
                    type="url"
                    placeholder="https://github.com/... or https://behance.net/..."
                    value={p4Portfolio}
                    onChange={(e) => setP4Portfolio(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#4338CA] text-white font-label font-bold text-xs hover:bg-[#3730A3] transition-colors"
                >
                  Submit Specialist Application
                </button>
              </form>
            )}

            {/* Pathway 5: Business Solutions Project */}
            {activePathway === 'business-solutions' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#006D43] uppercase tracking-wider">
                    Pathway 05 of 05
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#191C1B] mt-1">
                    Business Solutions & Project Enquiry
                  </h2>
                  <p className="text-xs text-[#414844] mt-1">
                    For enterprises, MSMEs, and startups commissioning custom websites, CRMs, automation, or data modeling.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-label">
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rajesh Singhal"
                      value={p5Name}
                      onChange={(e) => setP5Name(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Company / Organization *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Industrial Solutions"
                      value={p5Company}
                      onChange={(e) => setP5Company(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="rajesh@apex.com"
                      value={p5Email}
                      onChange={(e) => setP5Email(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Phone / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98280 11223"
                      value={p5Phone}
                      onChange={(e) => setP5Phone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Required Service Solution *</label>
                    <select
                      value={p5Service}
                      onChange={(e) => setP5Service(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Website or Web Application</option>
                      <option>Custom CRM System</option>
                      <option>UI/UX Product Design</option>
                      <option>AI Agent or Workflow Automation (n8n/Make)</option>
                      <option>Advanced Excel & Data Modeling</option>
                      <option>Power BI Dashboard & Analytics</option>
                      <option>AI-Assisted Video Ads & Marketing</option>
                      <option>Integrated Multi-Division Solution</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#191C1B]">Expected Project Budget</label>
                    <select
                      value={p5Budget}
                      onChange={(e) => setP5Budget(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#CFDDD3] bg-white outline-none"
                    >
                      <option>Under ₹50,000</option>
                      <option>₹50,000 - ₹2,00,000</option>
                      <option>₹2,00,000 - ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-xs font-label">
                  <label className="font-bold text-[#191C1B]">Describe the Problem or Scope</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you want to achieve, existing pain points, or target launch deadline..."
                    value={p5Problem}
                    onChange={(e) => setP5Problem(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#CFDDD3] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#006D43] text-white font-label font-bold text-xs hover:bg-[#008f58] transition-colors"
                >
                  Send Project Requirement
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
