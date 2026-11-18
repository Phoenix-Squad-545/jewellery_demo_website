import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#35040D]/5 border border-[#C5A059]/30 rounded-sm text-[#A98239] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        {label}
      </div>

      <h2 className="font-cinzel text-3xl md:text-4xl text-[#35040D] font-bold tracking-tight">
        {title}
      </h2>

      <div className="flex items-center justify-center gap-3 my-4">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
        <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
      </div>

      {subtitle && (
        <p className="text-sm text-[#5D5350] font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}