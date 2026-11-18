import React, { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CartProvider, useCart } from "../context/CartContext";
import CartDrawer from "../components/cart/CartDrawer";
import QuickViewModal from "../components/products/QuickViewModal";
import WishlistDrawer from "../components/wishlist/WishlistDrawer";
import VirtualTryOnModal from "../components/tryon/VirtualTryOnModal";
import { Sparkles } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

function ToastNotification() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[130] bg-[#35040D] text-[#DFB76C] px-5 py-3 rounded-sm border border-[#C5A059] shadow-2xl flex items-center gap-3 animate-fadeSlideUp">
      <Sparkles className="w-4 h-4 text-[#DFB76C] shrink-0" />
      <span className="font-cinzel text-xs font-semibold tracking-wider">
        {toastMessage}
      </span>
    </div>
  );
}

function LayoutContent({ children }: MainLayoutProps) {
  const { tryOnProduct, setTryOnProduct } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#251D1B] antialiased">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer onOpenTryOn={(prod) => setTryOnProduct(prod)} />
      <QuickViewModal onOpenTryOn={(prod) => setTryOnProduct(prod)} />
      {tryOnProduct && (
        <VirtualTryOnModal
          product={tryOnProduct}
          onClose={() => setTryOnProduct(null)}
        />
      )}
      <ToastNotification />
    </div>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <CartProvider>
      <LayoutContent>
        {children}
      </LayoutContent>
    </CartProvider>
  );
}