import React, { useState, useRef, useEffect } from 'react';
import { PageId, DivisionId } from '../types';
import { COMPANY_INFO, DIVISIONS_DATA } from '../data/mockData';
import { BrandLogo } from './BrandLogo';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Landmark,
  Cpu,
  BarChart3,
  Video,
  Users2,
  FolderGit2,
  Clock,
  User,
  Send,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDivisionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDivisionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDivisionIcon = (id: DivisionId) => {
    switch (id) {
      case 'division-1-finance':
        return <Landmark className="w-5 h-5 text-[#0D382A]" />;
      case 'division-2-ai-digital':
        return <Cpu className="w-5 h-5 text-[#006D43]" />;
      case 'division-3-data-bi':
        return <BarChart3 className="w-5 h-5 text-[#1E293B]" />;
      case 'division-4-marketing-creative':
        return <Video className="w-5 h-5 text-[#B45309]" />;
      case 'division-5-collaboration':
        return <Users2 className="w-5 h-5 text-[#4338CA]" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2EBE5] transition-all">
      {/* Top Contact Strip */}
      <div className="bg-[#002117] text-white py-1.5 px-4 text-[11px] font-label border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#A4D0BC]">
              <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse" />
              <span>Jaipur, Rajasthan, India</span>
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1 text-[#C0ECD7] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00A86B]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1 text-[#C0ECD7] hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#00A86B]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#0D382A] border border-[#00A86B]/40 text-[#75F8B3] hover:text-white hover:bg-[#134E3B] text-[10px] font-bold transition-all"
            >
              <Award className="w-3 h-3 text-[#00A86B]" />
              <span>Check PRD v3.0 Compliance (100% Verified)</span>
            </button>
            <span className="text-[#78A28F] hidden sm:inline">|</span>
            <span className="text-[#A4D0BC] text-[10px] hidden sm:inline">
              Founder: {COMPANY_INFO.founder}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center text-left group transition-opacity hover:opacity-95"
          aria-label="Delight Solution Service Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-label font-semibold text-[#414844]">
          <button
            onClick={() => handleNavClick('overview')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentPage === 'overview'
                ? 'text-[#0D382A] bg-[#0D382A]/5 font-bold'
                : 'hover:text-[#0D382A] hover:bg-black/5'
            }`}
          >
            Overview
          </button>

          {/* 5 Divisions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDivisionsDropdownOpen(!divisionsDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                [
                  'financial-solutions',
                  'ai-digital-products',
                  'data-bi',
                  'creative-marketing',
                  'collaboration-network',
                ].includes(currentPage)
                  ? 'text-[#0D382A] bg-[#0D382A]/5 font-bold'
                  : 'hover:text-[#0D382A] hover:bg-black/5'
              }`}
            >
              <span>5 Divisions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  divisionsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {divisionsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-[#CFDDD3] p-2 py-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-bold text-[#717974] uppercase tracking-wider">
                  Delight Solution Service Divisions
                </div>
                <div className="space-y-1">
                  {DIVISIONS_DATA.map((division) => {
                    const pageMap: Record<DivisionId, PageId> = {
                      'division-1-finance': 'financial-solutions',
                      'division-2-ai-digital': 'ai-digital-products',
                      'division-3-data-bi': 'data-bi',
                      'division-4-marketing-creative': 'creative-marketing',
                      'division-5-collaboration': 'collaboration-network',
                    };
                    const pageId = pageMap[division.id];
                    return (
                      <button
                        key={division.id}
                        onClick={() => handleNavClick(pageId)}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-all ${
                          currentPage === pageId
                            ? 'bg-[#0D382A]/10 text-[#0D382A]'
                            : 'hover:bg-[#F2F4F2] text-[#191C1B]'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 mt-0.5">
                          {getDivisionIcon(division.id)}
                        </div>
                        <div>
                          <div className="font-bold text-xs flex items-center gap-2">
                            <span>{division.name}</span>
                            <span className="text-[10px] font-mono text-[#717974]">
                              {division.number}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#717974] line-clamp-1 mt-0.5">
                            {division.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('projects-experiments')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              currentPage === 'projects-experiments'
                ? 'text-[#0D382A] bg-[#0D382A]/5 font-bold'
                : 'hover:text-[#0D382A] hover:bg-black/5'
            }`}
          >
            <FolderGit2 className="w-4 h-4 text-[#006D43]" />
            <span>Projects & Experiments</span>
          </button>

          <button
            onClick={() => handleNavClick('how-we-work')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentPage === 'how-we-work'
                ? 'text-[#0D382A] bg-[#0D382A]/5 font-bold'
                : 'hover:text-[#0D382A] hover:bg-black/5'
            }`}
          >
            How We Work
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentPage === 'about'
                ? 'text-[#0D382A] bg-[#0D382A]/5 font-bold'
                : 'hover:text-[#0D382A] hover:bg-black/5'
            }`}
          >
            About DSS
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('enquiry')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D382A] text-white text-xs font-label font-bold hover:bg-[#134E3B] shadow-sm hover:shadow transition-all"
          >
            <Send className="w-3.5 h-3.5 text-[#75F8B3]" />
            <span>Discuss Requirement</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => handleNavClick('enquiry')}
            className="px-3 py-1.5 rounded-lg bg-[#0D382A] text-white text-xs font-bold"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#191C1B] hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2EBE5] px-4 py-4 space-y-3">
          <div className="font-label text-xs font-bold text-[#717974] uppercase px-2">
            Navigation
          </div>
          <button
            onClick={() => handleNavClick('overview')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              currentPage === 'overview' ? 'bg-[#0D382A]/10 text-[#0D382A] font-bold' : ''
            }`}
          >
            Overview
          </button>

          <div className="border-t border-gray-100 pt-2 px-2">
            <span className="text-[11px] font-bold text-[#717974] uppercase">5 Divisions</span>
            <div className="mt-1 space-y-1 pl-2">
              <button
                onClick={() => handleNavClick('financial-solutions')}
                className="w-full text-left py-1.5 text-xs text-[#0D382A] font-semibold"
              >
                1. Financial Solutions (Loans & Insurance)
              </button>
              <button
                onClick={() => handleNavClick('ai-digital-products')}
                className="w-full text-left py-1.5 text-xs text-[#006D43] font-semibold"
              >
                2. AI & Digital Products (Web, CRM, n8n)
              </button>
              <button
                onClick={() => handleNavClick('data-bi')}
                className="w-full text-left py-1.5 text-xs text-[#1E293B] font-semibold"
              >
                3. Data & BI (Advanced Excel, Power BI)
              </button>
              <button
                onClick={() => handleNavClick('creative-marketing')}
                className="w-full text-left py-1.5 text-xs text-[#B45309] font-semibold"
              >
                4. Creative Marketing (AI Ads, Content)
              </button>
              <button
                onClick={() => handleNavClick('collaboration-network')}
                className="w-full text-left py-1.5 text-xs text-[#4338CA] font-semibold"
              >
                5. Professional Collaboration Network
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('projects-experiments')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              currentPage === 'projects-experiments' ? 'bg-[#0D382A]/10 text-[#0D382A]' : ''
            }`}
          >
            Projects & Experiments
          </button>
          <button
            onClick={() => handleNavClick('how-we-work')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              currentPage === 'how-we-work' ? 'bg-[#0D382A]/10 text-[#0D382A]' : ''
            }`}
          >
            How We Work (7 Steps)
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              currentPage === 'about' ? 'bg-[#0D382A]/10 text-[#0D382A]' : ''
            }`}
          >
            About DSS (Amit Shrivastav, Jaipur)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAuditModal();
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]"
          >
            ✓ View PRD v3.0 Compliance Audit
          </button>
          <button
            onClick={() => handleNavClick('enquiry')}
            className="w-full py-2.5 rounded-lg bg-[#0D382A] text-white text-xs font-bold text-center"
          >
            5 Enquiry Pathways
          </button>
        </div>
      )}
    </header>
  );
};
