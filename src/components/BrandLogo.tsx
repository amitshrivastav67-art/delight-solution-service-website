import React from 'react';
import { COMPANY_INFO } from '../data/mockData';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'emblem' | 'horizontal' | 'shield' | 'full';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'emblem',
  theme = 'light',
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      box: 'w-8 h-8 rounded-lg',
      img: 'w-7 h-7',
      title: 'text-sm font-bold leading-tight',
      tagline: 'text-[9px] tracking-wider uppercase',
      hBanner: 'h-8',
    },
    md: {
      box: 'w-10 h-10 rounded-xl',
      img: 'w-9 h-9',
      title: 'text-base font-bold leading-tight',
      tagline: 'text-[10px] tracking-wider uppercase',
      hBanner: 'h-10 sm:h-11',
    },
    lg: {
      box: 'w-12 h-12 rounded-xl',
      img: 'w-11 h-11',
      title: 'text-lg font-bold leading-tight',
      tagline: 'text-[11px] tracking-wider uppercase',
      hBanner: 'h-12 sm:h-14',
    },
    xl: {
      box: 'w-16 h-16 rounded-2xl',
      img: 'w-14 h-14',
      title: 'text-xl font-bold leading-tight',
      tagline: 'text-xs tracking-wider uppercase',
      hBanner: 'h-16 sm:h-20',
    },
  };

  const current = sizeConfig[size];

  // 1. Direct Horizontal Banner format (Shield + metallic text from image in one shot)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={COMPANY_INFO.logoHorizontalUrl}
          alt="Delight Solution Service Logo"
          className={`${current.hBanner} w-auto object-contain select-none`}
        />
      </div>
    );
  }

  // 2. Full Presentation Card
  if (variant === 'full') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#0b1015] border border-slate-700/80 shadow-2xl p-2 ${className}`}
      >
        <img
          src={COMPANY_INFO.logoHorizontalUrl}
          alt="Delight Solution Service Official Logo"
          className="w-full h-auto object-contain select-none"
        />
      </div>
    );
  }

  // 3. Shield Alone
  if (variant === 'shield') {
    return (
      <div
        className={`relative overflow-hidden bg-[#0b1015] border border-slate-700/80 shadow-sm flex items-center justify-center p-0.5 ${current.box} ${className}`}
      >
        <img
          src={COMPANY_INFO.logoShieldUrl}
          alt="DSS Shield Emblem"
          className={`${current.img} object-contain select-none drop-shadow`}
        />
      </div>
    );
  }

  // 4. Default: Emblem + HTML Typography (Crisp, perfectly fitted in border)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Metallic Shield Emblem Container */}
      <div
        className={`relative shrink-0 overflow-hidden bg-[#0c1218] border border-slate-700/70 shadow-sm flex items-center justify-center p-1 transition-transform group-hover:scale-105 ${current.box}`}
      >
        <img
          src={COMPANY_INFO.logoShieldUrl}
          alt="DSS Shield Emblem"
          className="w-full h-full object-contain select-none"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-display tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#0D382A]'
            } ${current.title}`}
          >
            Delight Solution Service
          </span>
          <span
            className={`font-label font-semibold ${
              theme === 'dark' ? 'text-[#A4D0BC]' : 'text-[#717974]'
            } ${current.tagline}`}
          >
            Finance • AI & Tech • Collaboration
          </span>
        </div>
      )}
    </div>
  );
};
