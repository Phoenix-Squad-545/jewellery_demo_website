import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/BreadCrumbs";
import { useCart } from "../context/CartContext";
import { Product } from "../data/products";
import { Sparkles, Eye, ShoppingBag, ShieldCheck, ChevronLeft, ChevronRight, X, Heart, Camera } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useAppDispatchHook, useAppSelectorHook } from "../redux/store";
import { toggleWishlist } from "../redux/slices/wishlistSlice";

interface ProductState {
  category?: string;
  product?: string;
  parentImage?: string;
}

// Maps category/product names to images strictly from set 1, set 2, set 3, and Latest_Temple
const getProductItems = (productName: string): string[] => {
  const norm = productName.toLowerCase();

  if (norm.includes("temple")) {
    return [
      "/images/Latest_Temple/temple-jewellery-1.jpg",
      "/images/Latest_Temple/temple-jewellery-2.jpg",
      "/images/Latest_Temple/temple-jewellery-3.jpg",
      "/images/Latest_Temple/temple-jewellery-4.jpg",
      "/images/Latest_Temple/temple-jewellery-5.jpg",
    ];
  }

  if (norm.includes("bridal")) {
    return [
      "/images/set 2/RJ_001.jpg",
      "/images/set 2/RJ_002.jpg",
      "/images/set 2/RJ_003.jpg",
      "/images/set 2/RJ_004.jpg",
      "/images/set 2/RJ_005.jpg",
      "/images/set 2/RJ_006.jpg",
      "/images/set 2/RJ_007.jpg",
      "/images/set 3/001.jpg",
      "/images/set 3/002.jpg",
    ];
  }

  if (norm.includes("jadau") || norm.includes("kundan")) {
    return [
      "/images/set 1/RJ_15.png",
      "/images/set 1/RJ_16.png",
      "/images/set 1/RJ_17.png",
      "/images/set 1/RJ_18.png",
      "/images/set 1/RJ_19.png",
      "/images/set 1/RJ_13.jpeg",
      "/images/set 1/RJ_14.jpeg",
      "/images/set 2/RJ_003.jpg",
    ];
  }

  if (norm.includes("panchalogam")) {
    return [
      "/images/set 1/RJ_1.jpeg",
      "/images/set 1/RJ_2.png",
      "/images/set 1/RJ_3.jpeg",
      "/images/set 1/RJ_4.jpeg",
      "/images/set 1/RJ_5.jpeg",
      "/images/set 1/RJ_6.jpeg",
      "/images/set 1/RJ_7.png",
      "/images/set 1/RJ_8.jpeg",
      "/images/set 1/RJ_9.png",
      "/images/set 1/RJ_10.jpeg",
    ];
  }

  if (norm.includes("bangle") || norm.includes("kada")) {
    return [
      "/images/set 3/003.jpg",
      "/images/set 3/004.jpg",
      "/images/set 3/005.jpg",
      "/images/set 1/RJ_11.png",
      "/images/set 1/RJ_12.png",
      "/images/set 3/007.jpg",
    ];
  }

  if (norm.includes("earring") || norm.includes("stud") || norm.includes("jhumka")) {
    return [
      "/images/set 2/RJ_006.jpg",
      "/images/set 2/RJ_007.jpg",
      "/images/set 1/RJ_7.png",
      "/images/set 1/RJ_8.jpeg",
      "/images/set 1/RJ_9.png",
      "/images/Latest_Temple/temple-jewellery-3.jpg",
    ];
  }

  if (norm.includes("diamond")) {
    return [
      "/images/set 3/006.jpg",
      "/images/set 3/001.jpg",
      "/images/set 3/007.jpg",
      "/images/set 3/008.jpg",
      "/images/set 2/RJ_001.jpg",
    ];
  }

  if (norm.includes("necklace") || norm.includes("haram") || norm.includes("chain")) {
    return [
      "/images/set 2/RJ_004.jpg",
      "/images/set 2/RJ_005.jpg",
      "/images/set 1/RJ_15.png",
      "/images/Latest_Temple/temple-jewellery-1.jpg",
      "/images/Latest_Temple/temple-jewellery-2.jpg",
      "/images/Latest_Temple/temple-jewellery-4.jpg",
    ];
  }

  // General fallback strictly from allowed sets
  return [
    "/images/set 2/RJ_001.jpg",
    "/images/Latest_Temple/temple-jewellery-1.jpg",
    "/images/set 1/RJ_15.png",
    "/images/set 3/003.jpg",
    "/images/set 2/RJ_004.jpg",
    "/images/Latest_Temple/temple-jewellery-2.jpg",
    "/images/set 1/RJ_1.jpeg",
    "/images/set 3/006.jpg",
  ];
};

export default function ProductList() {
  const { category, product } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, setTryOnProduct } = useCart();
  const dispatch = useAppDispatchHook();
  const wishlistItems = useAppSelectorHook((state) => state.wishlist.items);

  const state = location.state as ProductState;
  const currentProductName = product || "Heritage Collection";
  const parentImage = state?.parentImage || "/images/set 2/RJ_001.jpg";

  const productImages = getProductItems(currentProductName);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % productImages.length : null));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + productImages.length) % productImages.length : null
        );
      }
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, productImages.length]);

  const handleWhatsAppInquiry = (imgSrc: string, index: number) => {
    const text = `Namaste Radha Gold Jewellers! I am interested in ${currentProductName} Design #${index + 1} from your online collection. Please share gold purity, weight, and showroom viewing appointment details.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  const createPseudoProduct = (imgSrc: string, index: number): Product => {
    return {
      id: `item-${currentProductName.toLowerCase().replace(/\s+/g, "-")}-${index + 1}`,
      name: `${currentProductName} Royal Piece #${index + 1}`,
      category: "Bridal Jewellery",
      categorySlug: category || "collections",
      collections: ["bestseller"],
      price: 0,
      image: imgSrc,
      purity: "22K BIS 916 Hallmarked Gold",
      weight: `${45 + (index % 5) * 4}.5 gms`,
      description: `Authentic handcrafted ${currentProductName} featuring traditional Nakashi repoussé and certified purity.`,
      hallmark: "BIS 916 Hallmarked",
      inStock: true,
    };
  };

  const currentModalImage = selectedIndex !== null ? productImages[selectedIndex] : null;

  return (
    <>
      {/* Royal Hero Banner */}
      <div className="relative h-[360px] md:h-[420px] overflow-hidden bg-[#240308] flex items-center justify-center">
        <img
          src={productImages[0] || parentImage}
          alt={currentProductName}
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#240308] via-[#35040D]/75 to-[#240308]/90" />
        <div className="absolute inset-0 pattern-jaali-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#35040D] border border-[#C5A059] text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            22K Hallmarked Treasures
          </div>

          <h1 className="font-cinzel text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            {currentProductName}
          </h1>

          <p className="font-cormorant italic text-lg md:text-xl text-[#DFB76C]">
            Handcrafted with Master Sthapati Artistry Since 1967
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        current={currentProductName}
        parents={[
          { name: "Royal Gallery", path: "/gallery" },
          ...(category ? [{ name: category.replace(/-/g, " "), path: `/gallery/${category}` }] : []),
        ]}
      />

      {/* Main Items Grid */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-10 border-b border-[#ECE3D2] gap-4">
            <div>
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#35040D]">
                Exquisite {currentProductName} Designs
              </h2>
              <p className="text-xs text-[#5D5350] font-sans mt-1">
                Showing {productImages.length} authentic handcrafted creations from our Mylapore vault
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-wider text-[#A98239]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>100% BIS 916 Hallmark Guaranteed</span>
            </div>
          </div>

          {/* Grid of pieces (NO PRICE TAGS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productImages.map((src, index) => {
              const pseudoProd = createPseudoProduct(src, index);
              const isWishlisted = wishlistItems.some((item) => item.id === pseudoProd.id);

              return (
                <div
                  key={index}
                  className="group relative bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
                >
                  {/* Corner Filigree Borders on hover */}
                  <span className="pointer-events-none absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-10" />
                  <span className="pointer-events-none absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-10" />
                  <span className="pointer-events-none absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-10" />
                  <span className="pointer-events-none absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]/0 group-hover:border-[#C5A059] transition-all z-10" />

                  {/* Image */}
                  <div
                    className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2] cursor-pointer"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={src}
                      alt={`${currentProductName} piece ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Hallmark tag */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="inline-flex items-center gap-1 bg-[#35040D]/90 text-[#DFB76C] text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm border border-[#C5A059]/40 tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" />
                        BIS 916
                      </span>
                    </div>

                    {/* Wishlist Heart Icon */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleWishlist(pseudoProd));
                      }}
                      className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer shadow-md ${
                        isWishlisted
                          ? "bg-[#580D1A] text-[#DFB76C] border-[#DFB76C] scale-105"
                          : "bg-[#FFFDF9]/90 text-[#6B5E5B] border-[#E8DCC8] hover:text-[#580D1A] hover:bg-white"
                      }`}
                      title={isWishlisted ? "Saved in Wishlist" : "Save to Wishlist"}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>

                    {/* Hover actions */}
                    <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex items-center gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {/* Virtual Try-On */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTryOnProduct(pseudoProd);
                        }}
                        className="flex-1 py-1.5 bg-[#35040D] hover:bg-[#4A0E17] text-[#DFB76C] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm shadow-md transition flex items-center justify-center gap-1 cursor-pointer border border-[#C5A059]"
                        title="Virtual Try-On"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#DFB76C]" />
                        <span>Try-On</span>
                      </button>

                      {/* Enlarge */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(index);
                        }}
                        className="py-1.5 px-2 bg-white/95 hover:bg-white text-[#35040D] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm shadow-md transition flex items-center justify-center gap-1 cursor-pointer border border-[#C5A059]/40"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>

                      {/* WhatsApp Inquiry */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppInquiry(src, index);
                        }}
                        className="p-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-sm shadow-md transition cursor-pointer"
                        title="WhatsApp Inquiry"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Content details (NO PRICE TAG) */}
                  <div className="p-4 flex flex-col flex-1 justify-between bg-[#FFFDF9]">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#A98239] font-semibold mb-0.5">
                        Piece #RGJ-{(index + 1).toString().padStart(3, "0")}
                      </div>
                      <h4 className="font-cinzel text-sm text-[#35040D] font-bold line-clamp-1">
                        {currentProductName} Masterpiece
                      </h4>
                      <p className="text-[11px] text-[#736360] font-sans mt-0.5">
                        22K Gold · Handcrafted Heritage
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#ECE3D2] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[11px] text-[#580D1A] font-cinzel uppercase tracking-wider font-semibold">
                        <Sparkles className="w-3 h-3 text-[#A98239]" />
                        <span>Heritage Design</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => addToCart(pseudoProd)}
                        className="px-3 py-1.5 bg-[#35040D] hover:bg-[#580D1A] text-[#DFB76C] font-cinzel text-[10px] tracking-wider uppercase font-semibold rounded-sm border border-[#C5A059] transition flex items-center gap-1 shadow-sm cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#DFB76C]" />
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Full-Screen Zoom and Next/Prev Controls */}
      {currentModalImage !== null && selectedIndex !== null && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#1F0206] border-2 border-[#C5A059] rounded-sm p-4 shadow-2xl flex flex-col items-center">
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#35040D] text-[#DFB76C] border border-[#C5A059] flex items-center justify-center hover:bg-[#580D1A] transition cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={() =>
                setSelectedIndex((selectedIndex - 1 + productImages.length) % productImages.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#35040D]/80 text-[#DFB76C] border border-[#C5A059] flex items-center justify-center hover:bg-[#35040D] transition cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setSelectedIndex((selectedIndex + 1) % productImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#35040D]/80 text-[#DFB76C] border border-[#C5A059] flex items-center justify-center hover:bg-[#35040D] transition cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={currentModalImage}
                alt="Piece Preview"
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Actions (NO PRICE TAG) */}
            <div className="mt-4 pt-3 border-t border-[#C5A059]/30 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-xs">
              <div className="text-center sm:text-left">
                <p className="font-cinzel text-sm text-[#DFB76C] font-bold">
                  {currentProductName} #{selectedIndex + 1}
                </p>
                <p className="text-[11px] text-white/70">
                  100% BIS 916 Pure Hallmarked Gold · Handcrafted in Mylapore, Chennai
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const pseudo = createPseudoProduct(currentModalImage, selectedIndex);
                    setSelectedIndex(null);
                    setTryOnProduct(pseudo);
                  }}
                  className="px-4 py-2 bg-[#240308] text-[#DFB76C] font-cinzel text-xs uppercase tracking-wider font-semibold rounded border border-[#C5A059] hover:bg-[#35040D] transition cursor-pointer flex items-center gap-1.5"
                >
                  <Camera className="w-3.5 h-3.5 text-[#DFB76C]" />
                  Virtual Try-On
                </button>

                <button
                  onClick={() => {
                    const pseudo = createPseudoProduct(currentModalImage, selectedIndex);
                    addToCart(pseudo);
                  }}
                  className="px-4 py-2 bg-[#35040D] text-[#DFB76C] font-cinzel text-xs uppercase tracking-wider font-semibold rounded border border-[#C5A059] hover:bg-[#580D1A] transition cursor-pointer flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Royal Bag
                </button>

                <button
                  onClick={() => handleWhatsAppInquiry(currentModalImage, selectedIndex)}
                  className="px-4 py-2 bg-[#1F4E34] text-white font-sans text-xs tracking-wide rounded hover:bg-[#163825] transition cursor-pointer flex items-center gap-1.5"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}