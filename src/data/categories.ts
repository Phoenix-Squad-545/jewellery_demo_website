// data/categories.ts

export interface Category {
  key: string;
  slug: string;
  label: string;
  tagline: string;
  image: string;
  itemCount: number;
  type?: "multi" | "single";
  products?: string[];
}

export const categories: Category[] = [
  {
    key: "Bridal Jewellery",
    slug: "bridal-jewellery",
    label: "Bridal Jewellery",
    tagline: "Imperial Regalia for Royal Nuptials",
    image: "/images/set 2/RJ_001.jpg",
    itemCount: 28,
    type: "single",
    products: ["Bridal Jewellery"]
  },
  {
    key: "Temple Jewellery",
    slug: "temple-jewellery",
    label: "Temple Jewellery",
    tagline: "Original Chola & Vijayanagara Heritage",
    image: "/images/Latest_Temple/temple-jewellery-1.jpg",
    itemCount: 34,
    type: "single",
    products: ["Temple Jewellery"]
  },
  {
    key: "Gold Jewellery",
    slug: "gold-jewellery",
    label: "Gold Jewellery",
    tagline: "22K BIS 916 Pure Hallmarked Gold",
    image: "/images/set 2/RJ_004.jpg",
    itemCount: 45,
    type: "single",
    products: ["Gold Jewellery"]
  },
  {
    key: "Diamond Jewellery",
    slug: "diamond-jewellery",
    label: "Diamond Jewellery",
    tagline: "IGI Certified Solitaires & Uncut Polki",
    image: "/images/set 3/006.jpg",
    itemCount: 19,
    type: "single",
    products: ["Diamond Jewellery"]
  },
  {
    key: "Necklaces",
    slug: "necklaces",
    label: "Necklaces & Harams",
    tagline: "Chokers, Haslis & Grand Harams",
    image: "/images/set 1/RJ_15.png",
    itemCount: 52,
    type: "single",
    products: ["Necklaces"]
  },
  {
    key: "Bangles",
    slug: "bangles",
    label: "Bangles & Kadas",
    tagline: "Nakashi Carved Cuffs & Polki Valayal",
    image: "/images/set 3/003.jpg",
    itemCount: 36,
    type: "single",
    products: ["Bangles"]
  },
  {
    key: "Earrings",
    slug: "earrings",
    label: "Earrings & Jhumkas",
    tagline: "Chandbalis, Studs & Heritage Bell Jhumkas",
    image: "/images/set 2/RJ_006.jpg",
    itemCount: 40,
    type: "single",
    products: ["Earrings"]
  },
  {
    key: "Panchalogam Jewellery",
    slug: "panchalogam-jewellery",
    label: "Panchalogam Jewellery",
    tagline: "Sacred 5-Metal Alloy with 24K Gold Foil",
    image: "/images/set 1/RJ_1.jpeg",
    itemCount: 25,
    type: "single",
    products: ["Panchalogam Jewellery"]
  }
];