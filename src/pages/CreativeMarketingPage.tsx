import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Video,
  Sparkles,
  Camera,
  Play,
  Film,
  Instagram,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Share2,
  Tv,
} from 'lucide-react';

interface CreativeMarketingPageProps {
  onNavigate: (page: PageId) => void;
}

export const CreativeMarketingPage: React.FC<CreativeMarketingPageProps> = ({
  onNavigate,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'reels' | 'product' | 'influencer'>('product');

  const capabilities = [
    {
      title: 'AI-Assisted Product Advertising',
      tag: 'E-Commerce & Retail',
      desc: 'Cinematic promotional videos for footwear, apparel, jewelry, and packaged goods created without expensive physical studio rentals, high-end cameras, or location permits.',
      deliverables: [
        '3D dynamic camera sweeps & cinematic lighting',
        'Model lifestyle renders across varying demographics',
        'Aspect ratios ready for Instagram Reels (9:16), YouTube (16:9), and Meta Feed (1:1)',
        'Conversion-optimized motion text and kinetic typography',
      ],
      icon: <Camera className="w-5 h-5 text-[#B45309]" />,
    },
    {
      title: 'Virtual Influencer & UGC-Style Ads',
      tag: 'Social Growth',
      desc: 'Virtual persona video creation for automated daily organic Instagram and YouTube shorts with natural lip-sync and localized voiceovers.',
      deliverables: [
        'Hyper-realistic virtual brand ambassadors with facial consistency',
        'Relatable User-Generated Content (UGC) hook structures',
        'Localized multilingual voice synthesis (Hindi, English, regional)',
        'Scripting designed to arrest scrolling within the first 3 seconds',
      ],
      icon: <Video className="w-5 h-5 text-[#B45309]" />,
    },
    {
      title: 'Social Media & Brand Positioning Strategy',
      tag: 'Strategic Advisory',
      desc: 'Grounding your creative production in a strategic growth framework with structured content calendars, audience segmentation, and channel positioning.',
      deliverables: [
        'Brand Narrative & Tone of Voice Playbook',
        'Monthly Omnichannel Content Calendars',
        'Performance Video Ad Hook Testing Frameworks',
        'Direct Attribution & Lead Funnel Architecture',
      ],
      icon: <TrendingUp className="w-5 h-5 text-[#B45309]" />,
    },
  ];

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#451A03] to-[#78350F] text-white py-16 px-4 sm:px-6 border-b border-[#92400E]">
        <div className="max-w-[1240px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FDE68A]/20 border border-[#FDE68A]/40 text-[#FDE68A]">
            <Video className="w-3.5 h-3.5" />
            <span>Division 04 • Digital Marketing & Creative Solutions</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-3xl leading-tight">
            AI-Assisted Product Advertising, Virtual Avatars & High-Converting Video Ads
          </h1>

          <p className="font-body text-sm sm:text-base text-[#FEF3C7] max-w-2xl leading-relaxed">
            Harness generative visual AI to produce cinematic e-commerce video commercials, apparel campaigns, and virtual influencer content at a fraction of traditional studio production budgets.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('enquiry')}
              className="px-6 py-3 rounded-lg bg-[#F59E0B] text-[#451A03] font-label font-bold text-xs hover:bg-[#FBBF24] transition-all shadow-md"
            >
              Discuss Creative Project (Pathway 5)
            </button>
            <button
              onClick={() => onNavigate('projects-experiments')}
              className="px-6 py-3 rounded-lg bg-[#451A03] text-[#FEF3C7] border border-[#92400E] font-label font-bold text-xs hover:text-white hover:border-[#F59E0B] transition-all"
            >
              View Creative Experiments & Demos
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#CFDDD3] hover:border-[#B45309] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#191C1B]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#414844] font-body leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#717974] uppercase tracking-wider block">
                    Deliverables:
                  </span>
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#191C1B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="text-xs font-label font-bold text-[#B45309] hover:text-[#78350F] flex items-center gap-1 group"
                >
                  <span>Request Video Sample Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Cost vs AI Generation Comparison */}
        <div className="p-8 rounded-2xl bg-white border border-[#CFDDD3] shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="font-label text-xs uppercase tracking-wider text-[#B45309] font-bold">
              Economic Advantage
            </span>
            <h3 className="font-display font-bold text-2xl text-[#191C1B]">
              Why D2C Brands & Retailers Choose AI Video Production
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-red-50/50 border border-red-200 text-red-950 space-y-2">
              <strong className="text-sm font-display font-bold text-red-800 block">
                Traditional Physical Video Shoot
              </strong>
              <div className="space-y-1.5 pt-2">
                <div>• Studio rental, lighting crew & equipment: ₹35,000 – ₹75,000 / day</div>
                <div>• Professional fashion models & makeup stylists: ₹25,000+</div>
                <div>• Reshoots require full physical rebooking and venue delays</div>
                <div>• 2–3 weeks editing turnaround time for 1 final video</div>
                <div>• High risk: If product angles fail to convert, you start over</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 text-emerald-950 space-y-2">
              <strong className="text-sm font-display font-bold text-emerald-800 block">
                DSS AI-Assisted Creative Pipeline
              </strong>
              <div className="space-y-1.5 pt-2">
                <div>• 80%+ lower production expenditure</div>
                <div>• Rapid iteration: Generate 10+ lighting, background & camera variations in 48 hours</div>
                <div>• Test multiple avatar personas to see which demographic converts best</div>
                <div>• Instant format adaptation for 9:16 Reels, 16:9 YouTube, and 1:1 Feed</div>
                <div>• Continuous experimentation without burning marketing capital</div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Talent Callout */}
        <div className="p-6 rounded-xl bg-[#B45309]/5 border border-[#B45309]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-base text-[#B45309]">
              Are you a Video Editor, Motion Graphic Designer, or AI Content Creator?
            </h4>
            <p className="text-xs text-[#414844] mt-1">
              Collaborate with DSS on active commercial video mandates with guaranteed milestone compensation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('enquiry')}
            className="px-5 py-2.5 rounded-lg bg-[#B45309] text-white font-label font-bold text-xs hover:bg-[#78350F] transition-colors shrink-0"
          >
            Join Creative Network (Pathway 4)
          </button>
        </div>
      </div>
    </div>
  );
};
