import React, { useState } from 'react';
import { PageId, ProjectItem, ProjectStatus, ProjectType } from '../types';
import { PROJECTS_EXPERIMENTS } from '../data/mockData';
import {
  FolderGit2,
  Filter,
  CheckCircle2,
  Clock,
  FlaskConical,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Code2,
  Layers,
  Tag,
  Info,
  X,
} from 'lucide-react';

interface ProjectsExperimentsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectsExperimentsPage: React.FC<ProjectsExperimentsPageProps> = ({
  onNavigate,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const statuses: ('All' | ProjectStatus)[] = [
    'All',
    'Available',
    'Pilot',
    'Developing',
    'Learning / Research',
    'Planned',
  ];

  const types: ('All' | ProjectType)[] = [
    'All',
    'Real DSS client project',
    'Internal DSS project',
    'Demonstration',
    'Prototype',
    'Concept design',
  ];

  const categories = [
    'All',
    'Loans & Credit Assistance',
    'Insurance Network',
    'CRM Development',
    'AI Agents & Automation',
    'Advanced Excel & Data',
    'Power BI & Analytics',
    'AI Creative & Marketing',
  ];

  const filteredProjects = PROJECTS_EXPERIMENTS.filter((proj) => {
    if (selectedStatus !== 'All' && proj.status !== selectedStatus) return false;
    if (selectedType !== 'All' && proj.type !== selectedType) return false;
    if (selectedCategory !== 'All' && proj.category !== selectedCategory) return false;
    return true;
  });

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Pilot':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Developing':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Learning / Research':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Planned':
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTypeBadge = (type: ProjectType) => {
    switch (type) {
      case 'Real DSS client project':
        return 'bg-[#0D382A] text-white';
      case 'Internal DSS project':
        return 'bg-[#006D43] text-white';
      case 'Demonstration':
        return 'bg-[#1E293B] text-white';
      case 'Prototype':
        return 'bg-[#B45309] text-white';
      case 'Concept design':
        return 'bg-[#4338CA] text-white';
    }
  };

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#002117] to-[#0A261D] text-white py-16 px-4 sm:px-6 border-b border-[#0D382A]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00A86B]/20 border border-[#00A86B]/40 text-[#75F8B3]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRD Section 09 • Verified Portfolio System</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            Projects, Systems & Working Prototypes
          </h1>

          <p className="font-body text-sm sm:text-base text-[#C0ECD7] max-w-2xl leading-relaxed">
            Every entry is strictly designated by its authentic status and development tier. No fabricated metrics, no synthetic corporate client lists—only verifiable code, working tools, and transparent prototypes.
          </p>

          {/* PRD Section 9 Requirement Notice */}
          <div className="p-3.5 rounded-xl bg-[#061610] border border-[#0D382A] text-xs text-[#A4D0BC] max-w-3xl flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
            <span>
              <strong>PRD Section 9 Codification:</strong> Classified across 5 mandatory Status Tags (Available, Pilot, Developing, Learning / Research, Planned) and 5 Project Types (Real client, Internal project, Demonstration, Prototype, Concept design).
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Filter Controls Bar */}
        <div className="bg-white p-5 rounded-2xl border border-[#CFDDD3] shadow-sm space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs font-label font-bold text-[#191C1B]">
              <Filter className="w-4 h-4 text-[#006D43]" />
              <span>Filter Portfolio By:</span>
            </div>
            <span className="text-xs text-[#717974] font-mono">
              Showing {filteredProjects.length} of {PROJECTS_EXPERIMENTS.length} Entries
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-label">
            {/* Category Dropdown */}
            <div className="space-y-1">
              <label className="text-[#717974] font-semibold">Domain / Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#F2F4F2] border border-[#CFDDD3] rounded-lg p-2 font-medium text-[#191C1B]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Dropdown */}
            <div className="space-y-1">
              <label className="text-[#717974] font-semibold">Status Tag (PRD Rule):</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-[#F2F4F2] border border-[#CFDDD3] rounded-lg p-2 font-medium text-[#191C1B]"
              >
                {statuses.map((stat) => (
                  <option key={stat} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Type Dropdown */}
            <div className="space-y-1">
              <label className="text-[#717974] font-semibold">Project Classification Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#F2F4F2] border border-[#CFDDD3] rounded-lg p-2 font-medium text-[#191C1B]"
              >
                {types.map((typ) => (
                  <option key={typ} value={typ}>
                    {typ}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white border border-[#CFDDD3] hover:border-[#006D43] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Status & Type Badges */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(
                      project.status
                    )}`}
                  >
                    ● {project.status}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${getTypeBadge(
                      project.type
                    )}`}
                  >
                    {project.type}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#006D43] uppercase tracking-wider">
                  {project.category}
                </div>

                <h3 className="font-display font-bold text-lg text-[#191C1B] leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#414844] font-body leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F2F4F2] text-[#414844] border border-[#E2EBE5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-label font-bold text-[#0D382A] hover:text-[#006D43] flex items-center gap-1"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="text-[11px] font-semibold text-[#717974] hover:text-[#191C1B]"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filtered to 0 */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-[#CFDDD3] space-y-3">
            <Info className="w-8 h-8 text-[#717974] mx-auto" />
            <h4 className="font-display font-bold text-lg text-[#191C1B]">
              No Projects Match Selected Filters
            </h4>
            <p className="text-xs text-[#414844]">
              Try resetting the status or category filter to view all DSS projects.
            </p>
            <button
              onClick={() => {
                setSelectedStatus('All');
                setSelectedType('All');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-lg bg-[#0D382A] text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl border border-[#CFDDD3] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(
                      activeProject.status
                    )}`}
                  >
                    ● {activeProject.status}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${getTypeBadge(
                      activeProject.type
                    )}`}
                  >
                    {activeProject.type}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#191C1B]">
                  {activeProject.title}
                </h3>
                <span className="text-xs font-bold text-[#006D43] uppercase tracking-wider font-label">
                  {activeProject.category}
                </span>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#414844] font-body leading-relaxed">
              <strong className="text-sm font-display font-bold text-[#191C1B] block">
                Technical Overview & Architecture
              </strong>
              <p>{activeProject.fullDesc}</p>
            </div>

            <div className="space-y-2">
              <strong className="text-xs font-label uppercase tracking-wider text-[#717974] block">
                Technologies & Tools Applied
              </strong>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#F2F4F2] text-[#191C1B] border border-[#E2EBE5]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <strong className="text-xs font-label uppercase tracking-wider text-[#717974] block">
                Key Deliverables
              </strong>
              <div className="space-y-1">
                {activeProject.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#191C1B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006D43]" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {activeProject.outcomes && (
              <div className="p-3.5 rounded-xl bg-[#006D43]/10 border border-[#006D43]/20 text-xs text-[#006D43]">
                <strong>Demonstrated Impact:</strong> {activeProject.outcomes}
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-[#717974] hover:text-[#191C1B]"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onNavigate('enquiry');
                }}
                className="px-5 py-2.5 rounded-lg bg-[#0D382A] text-white text-xs font-label font-bold hover:bg-[#134E3B]"
              >
                Inquire About Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
