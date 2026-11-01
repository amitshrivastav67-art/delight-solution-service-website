/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PRDAuditModal } from './components/PRDAuditModal';
import { OverviewPage } from './pages/OverviewPage';
import { FinancialSolutionsPage } from './pages/FinancialSolutionsPage';
import { AiDigitalProductsPage } from './pages/AiDigitalProductsPage';
import { DataBiPage } from './pages/DataBiPage';
import { CreativeMarketingPage } from './pages/CreativeMarketingPage';
import { CollaborationNetworkPage } from './pages/CollaborationNetworkPage';
import { ProjectsExperimentsPage } from './pages/ProjectsExperimentsPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { AboutPage } from './pages/AboutPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { LegalPages } from './pages/LegalPages';
import { COMPANY_INFO } from './data/mockData';
import { Award, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('overview');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#191C1B]">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Breadcrumbs & Direct Hub Access */}
      <div className="bg-[#F2F4F2] border-b border-[#E2EBE5] py-2 px-4 hidden sm:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between text-xs font-label">
          <div className="flex items-center gap-2 text-[#717974]">
            <button
              onClick={() => handleNavigate('overview')}
              className="font-semibold text-[#191C1B] hover:text-[#0D382A] transition-colors"
            >
              DSS Portal
            </button>
            <span>/</span>
            <span className="text-[#0D382A] font-bold">
              {currentPage === 'overview' && 'Executive Overview & Practice Hub'}
              {currentPage === 'financial-solutions' && 'Division 1: Financial Solutions (Loans & Insurance)'}
              {currentPage === 'ai-digital-products' && 'Division 2: AI & Digital Product Development'}
              {currentPage === 'data-bi' && 'Division 3: Data & Business Intelligence (Excel & Power BI)'}
              {currentPage === 'creative-marketing' && 'Division 4: Creative Marketing & AI Video Ads'}
              {currentPage === 'collaboration-network' && 'Division 5: Professional Collaboration Network'}
              {currentPage === 'projects-experiments' && 'Projects & Experiments (PRD Section 9 Portfolio)'}
              {currentPage === 'how-we-work' && 'How We Work (7-Step Delivery Methodology)'}
              {currentPage === 'about' && 'About DSS & Founder Amit Shrivastav'}
              {currentPage === 'enquiry' && '5 Working Enquiry Pathways'}
              {currentPage === 'terms' && 'Terms of Engagement'}
              {currentPage === 'privacy' && 'Privacy & Data Protection Policy'}
            </span>
          </div>

          {/* Quick Division Jump Shortcuts */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-[#717974] uppercase mr-1">Quick Jump:</span>
            <button
              onClick={() => handleNavigate('financial-solutions')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                currentPage === 'financial-solutions'
                  ? 'bg-[#0D382A] text-white'
                  : 'bg-white border border-[#D4DFD8] text-[#0D382A] hover:border-[#0D382A]'
              }`}
            >
              1. Finance
            </button>
            <button
              onClick={() => handleNavigate('ai-digital-products')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                currentPage === 'ai-digital-products'
                  ? 'bg-[#006D43] text-white'
                  : 'bg-white border border-[#D4DFD8] text-[#006D43] hover:border-[#006D43]'
              }`}
            >
              2. Digital Products
            </button>
            <button
              onClick={() => handleNavigate('data-bi')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                currentPage === 'data-bi'
                  ? 'bg-[#1E293B] text-white'
                  : 'bg-white border border-[#D4DFD8] text-[#1E293B] hover:border-[#1E293B]'
              }`}
            >
              3. Data & BI
            </button>
            <button
              onClick={() => handleNavigate('creative-marketing')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                currentPage === 'creative-marketing'
                  ? 'bg-[#B45309] text-white'
                  : 'bg-white border border-[#D4DFD8] text-[#B45309] hover:border-[#B45309]'
              }`}
            >
              4. Creative
            </button>
            <button
              onClick={() => handleNavigate('collaboration-network')}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                currentPage === 'collaboration-network'
                  ? 'bg-[#4338CA] text-white'
                  : 'bg-white border border-[#D4DFD8] text-[#4338CA] hover:border-[#4338CA]'
              }`}
            >
              5. Network
            </button>
          </div>
        </div>
      </div>

      {/* Main Content View */}
      <main className="flex-1">
        {currentPage === 'overview' && (
          <OverviewPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setIsAuditModalOpen(true)}
          />
        )}

        {currentPage === 'financial-solutions' && (
          <FinancialSolutionsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'ai-digital-products' && (
          <AiDigitalProductsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'data-bi' && (
          <DataBiPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'creative-marketing' && (
          <CreativeMarketingPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'collaboration-network' && (
          <CollaborationNetworkPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'projects-experiments' && (
          <ProjectsExperimentsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'how-we-work' && (
          <HowWeWorkPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'enquiry' && (
          <EnquiryPage onNavigate={handleNavigate} />
        )}

        {(currentPage === 'terms' || currentPage === 'privacy') && (
          <LegalPages type={currentPage} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* PRD Conformance Audit & Statutory Modal */}
      <PRDAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onNavigateToPathway={() => {
          setIsAuditModalOpen(false);
          handleNavigate('enquiry');
        }}
      />
    </div>
  );
}
