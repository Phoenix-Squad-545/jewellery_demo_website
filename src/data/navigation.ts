export interface NavItem {
  label: string;
  id: string;
  isCategory?: boolean;
  categorySlug?: string;
  categoryName?: string;
}

export const navigationLinks: NavItem[] = [
  { label: "Home", id: "/" },
  { label: "Bridal", id: "/gallery/bridal-jewellery/Bridal Jewellery", isCategory: true, categorySlug: "bridal-jewellery", categoryName: "Bridal Jewellery" },
  { label: "Temple", id: "/gallery/temple-jewellery/Temple Jewellery", isCategory: true, categorySlug: "temple-jewellery", categoryName: "Temple Jewellery" },
  { label: "Gold", id: "/gallery/gold-jewellery/Gold Jewellery", isCategory: true, categorySlug: "gold-jewellery", categoryName: "Gold Jewellery" },
  { label: "Diamond", id: "/gallery/diamond-jewellery/Diamond Jewellery", isCategory: true, categorySlug: "diamond-jewellery", categoryName: "Diamond Jewellery" },
  { label: "Necklaces", id: "/gallery/necklaces/Necklaces", isCategory: true, categorySlug: "necklaces", categoryName: "Necklaces" },
  { label: "Earrings", id: "/gallery/earrings/Earrings", isCategory: true, categorySlug: "earrings", categoryName: "Earrings" },
  { label: "Bangles", id: "/gallery/bangles/Bangles", isCategory: true, categorySlug: "bangles", categoryName: "Bangles" },
  { label: "Gallery", id: "/gallery" },
  { label: "Heritage", id: "/about" },
  { label: "Contact", id: "/contact" },
];

export const royalCategoriesNav = [
  { label: "Gold Jewellery", slug: "gold-jewellery", product: "Gold Jewellery", count: "45+ Pieces" },
  { label: "Bridal Jewellery", slug: "bridal-jewellery", product: "Bridal Jewellery", count: "Royal Regalia" },
  { label: "Temple Jewellery", slug: "temple-jewellery", product: "Temple Jewellery", count: "Original 1967" },
  { label: "Diamond Jewellery", slug: "diamond-jewellery", product: "Diamond Jewellery", count: "IGI Certified" },
  { label: "Earrings", slug: "earrings", product: "Earrings", count: "Jhumkas & Balis" },
  { label: "Necklaces", slug: "necklaces", product: "Necklaces", count: "Chokers & Harams" },
  { label: "Bangles", slug: "bangles", product: "Bangles", count: "Nakashi Kadas" },
];