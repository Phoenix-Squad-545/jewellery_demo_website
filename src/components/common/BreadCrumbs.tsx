import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  current: string;
  parents?: BreadcrumbItem[];
}

export default function Breadcrumb({
  current,
  parents = [],
}: BreadcrumbProps) {
  return (
    <div className="bg-[#FAF7F2] py-3.5 border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs font-cinzel tracking-wider text-[#6B5E5B] flex-wrap">
          <Link
            to="/"
            className="hover:text-[#580D1A] transition-colors"
          >
            Home
          </Link>

          <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />

          {parents.map((parent, index) => (
            <React.Fragment key={index}>
              <Link
                to={parent.path}
                className="hover:text-[#580D1A] transition-colors capitalize"
              >
                {parent.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            </React.Fragment>
          ))}

          <span className="text-[#35040D] font-bold capitalize">
            {current}
          </span>
        </div>
      </div>
    </div>
  );
}