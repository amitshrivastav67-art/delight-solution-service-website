import React from 'react';
import { DivisionId } from '../types';

interface DivisionBadgeProps {
  division: DivisionId | 'general';
  label?: string;
  className?: string;
}

export const DivisionBadge: React.FC<DivisionBadgeProps> = ({
  division,
  label,
  className = '',
}) => {
  switch (division) {
    case 'division-1-finance':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase text-[#0D382A] bg-[#0D382A]/10 border border-[#0D382A]/25 ${className}`}
        >
          <span className="w-2 h-2 rounded-[2px] bg-[#0D382A] inline-block" />
          {label || 'Division 1 • Financial Solutions'}
        </span>
      );
    case 'division-2-ai-digital':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase text-[#006D43] bg-[#006D43]/10 border border-[#006D43]/25 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B] shadow-[0_0_6px_#00A86B] inline-block" />
          {label || 'Division 2 • AI & Digital Products'}
        </span>
      );
    case 'division-3-data-bi':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase text-[#1E293B] bg-[#1E293B]/10 border border-[#1E293B]/25 ${className}`}
        >
          <span className="w-2 h-2 rounded-sm bg-[#1E293B] inline-block" />
          {label || 'Division 3 • Data & BI'}
        </span>
      );
    case 'division-4-marketing-creative':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase text-[#B45309] bg-[#B45309]/10 border border-[#B45309]/25 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] inline-block" />
          {label || 'Division 4 • Creative Marketing'}
        </span>
      );
    case 'division-5-collaboration':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase text-[#4338CA] bg-[#4338CA]/10 border border-[#4338CA]/25 ${className}`}
        >
          <span className="w-2 h-2 rounded-full border border-[#4338CA] inline-block" />
          {label || 'Division 5 • Collaboration Network'}
        </span>
      );
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase text-[#191C1B] bg-gray-100 border border-gray-200 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B] inline-block" />
          {label || 'Delight Solution Service'}
        </span>
      );
  }
};
