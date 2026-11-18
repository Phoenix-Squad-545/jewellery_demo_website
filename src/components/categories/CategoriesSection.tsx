import React from "react";
import CategoryCard from "./CategoryCard";
import { categories, Category } from "../../data/categories";
import { Sparkles } from "lucide-react";

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-[#FFFDF9] border-t border-[#E8DCC8] relative overflow-hidden">
      {/* Decorative Jaali Background */}
      <div className="absolute inset-0 pattern-jaali opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#35040D]/5 border border-[#C5A059]/30 rounded-sm text-[#A98239] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Imperial Taxonomy
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#35040D] font-bold tracking-tight">
            Traditional Indian Jewellery Collections
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
          <p className="text-sm text-[#5D5350] font-sans">
            Centuries of royal temple, bridal, and aristocratic Indian artistry brought to life in pure 22K hallmarked gold, uncut syndicate polki, and sacred gems.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat: Category) => (
            <CategoryCard
              key={cat.key}
              slug={cat.slug || cat.key}
              label={cat.label}
              tagline={cat.tagline}
              image={cat.image}
              itemCount={cat.itemCount}
              products={cat.products}
            />
          ))}
        </div>
      </div>
    </section>
  );
}