import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { X, Plus, Minus, Trash2, ShieldCheck, Check, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartCount,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "confirmed">("cart");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Chennai",
    pincode: "",
    paymentMethod: "showroom",
  });

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.product.name} (Qty: ${item.quantity}) - ${item.product.category} · ${item.product.purity} · ${item.product.weight}`
      )
      .join("%0A");

    const message = `Namaste Radha Gold Jewellers!%0A%0AI would like to order/inquire about the following collection pieces from your website:%0A${itemsList}%0A%0APlease assist me with certified BIS hallmarking details, custom sizing, and showroom viewing/insured delivery appointment.`;

    window.open(`https://wa.me/919444475473?text=${message}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("confirmed");
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep("cart");
        }}
      />

      {/* Drawer */}
      <div className="relative z-10 w-full max-w-md bg-[#FFFDF9] text-[#251D1B] shadow-2xl flex flex-col h-full border-l border-[#C5A059]/40">
        {/* Header */}
        <div className="px-6 py-5 bg-[#35040D] text-[#FAF7F2] border-b border-[#C5A059]/30 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DFB76C]" />
              <h3 className="font-cinzel text-lg tracking-wider text-[#DFB76C]">
                Your Royal Bag
              </h3>
            </div>
            <p className="text-xs text-[#FAF7F2]/70 font-sans mt-0.5">
              {cartCount} {cartCount === 1 ? "Heirloom Masterpiece" : "Heirloom Masterpieces"} Selected
            </p>
          </div>

          <button
            onClick={() => {
              setIsCartOpen(false);
              setCheckoutStep("cart");
            }}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#FAF7F2]/80 hover:text-white transition cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        {checkoutStep === "confirmed" ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#FAF7F2]">
            <div className="w-16 h-16 rounded-full bg-[#35040D] border-2 border-[#C5A059] flex items-center justify-center text-[#DFB76C] mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-cinzel text-xl text-[#35040D] mb-2 font-bold">
              Reservation Received with Honor
            </h4>
            <p className="text-sm text-[#3D3330] leading-relaxed mb-6 font-sans">
              Thank you, <strong>{formData.name || "Valued Patron"}</strong>. Order Reference{" "}
              <span className="font-mono text-[#580D1A] font-bold">#RGJ-{Math.floor(1000 + Math.random() * 9000)}</span> has been reserved. Our senior master jewellery consultant will contact you at{" "}
              <strong>{formData.phone || "+91 Contact"}</strong> for personalized sizing, BIS hallmark verification, and delivery/showroom viewing scheduling.
            </p>
            <button
              onClick={() => {
                clearCart();
                setCheckoutStep("cart");
                setIsCartOpen(false);
              }}
              className="font-cinzel text-xs tracking-widest uppercase bg-[#35040D] text-[#DFB76C] px-8 py-3.5 border border-[#C5A059] hover:bg-[#4A0E17] transition cursor-pointer shadow-md"
            >
              Continue Exploring Collections
            </button>
          </div>
        ) : checkoutStep === "checkout" ? (
          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#FAF7F2]">
            <div className="flex items-center justify-between pb-3 border-b border-[#C5A059]/30">
              <h4 className="font-cinzel text-sm tracking-wider text-[#35040D] font-bold">
                Insured Delivery & Showroom Reservation
              </h4>
              <button
                onClick={() => setCheckoutStep("cart")}
                className="text-xs text-[#C5A059] hover:underline font-medium cursor-pointer"
              >
                ← Back to Bag
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-[#35040D] font-medium mb-1">
                  Patron Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Smt. Lakshmi Sundaram"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#DFD2BC] rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[#35040D] font-medium mb-1">
                  Contact Mobile Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98400 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#DFD2BC] rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[#35040D] font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="patron@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#DFD2BC] rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[#35040D] font-medium mb-1">
                  Delivery / Residence Address *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Street, Landmark, Apartment"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#DFD2BC] rounded focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#35040D] font-medium mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#DFD2BC] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[#35040D] font-medium mb-1">PIN Code *</label>
                  <input
                    required
                    type="text"
                    placeholder="600004"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#DFD2BC] rounded focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-[#35040D] font-medium mb-2">
                  Preferred Fulfilment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-2.5 bg-white border border-[#DFD2BC] rounded cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "showroom"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "showroom" })}
                      className="accent-[#580D1A]"
                    />
                    <span>Reserve for Private Viewing at Mylapore Showroom</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 bg-white border border-[#DFD2BC] rounded cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "doorstep"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "doorstep" })}
                      className="accent-[#580D1A]"
                    />
                    <span>Insured Armored Doorstep Delivery with Hallmark Certificate</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DFD2BC]">
                <div className="flex justify-between text-xs text-[#6B5E5B] mb-3">
                  <span>Selected Pieces: {cartCount}</span>
                  <span className="font-cinzel text-[#35040D] font-bold">100% BIS 916 Pure Gold</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#35040D] text-[#DFB76C] font-cinzel text-xs uppercase tracking-widest border border-[#C5A059] hover:bg-[#4A0E17] transition shadow-md cursor-pointer"
                >
                  Confirm Reservation & Consultation
                </button>
              </div>
            </form>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-4">
              <Sparkles className="w-7 h-7" />
            </div>
            <h4 className="font-cormorant text-2xl text-[#35040D] mb-2 font-semibold">
              Your Bag is Empty
            </h4>
            <p className="text-xs text-[#5D5350] leading-relaxed max-w-xs mb-6 font-sans">
              Explore our handcrafted 22K temple jewels, royal bridal sets, and antique kadas to add to your collection bag.
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="font-cinzel text-xs tracking-widest uppercase bg-[#35040D] text-[#DFB76C] px-6 py-3 border border-[#C5A059] hover:bg-[#4A0E17] transition cursor-pointer"
            >
              Browse Collections
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-[#ECE3D2]">
              {cart.map((item) => (
                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded border border-[#C5A059]/30 bg-[#FAF7F2]">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-[#A98239] font-medium truncate">
                      {item.product.category}
                    </p>
                    <h5 className="font-cinzel text-xs text-[#35040D] font-bold line-clamp-1">
                      {item.product.name}
                    </h5>
                    <p className="text-[11px] text-[#5D5350] font-sans mt-0.5">
                      {item.product.purity} · {item.product.weight}
                    </p>

                    <div className="flex items-center justify-between mt-2.5">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#DFD2BC] rounded bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:text-[#580D1A] transition cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-medium text-[#35040D]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:text-[#580D1A] transition cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#8C7A76] hover:text-[#580D1A] p-1 transition cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Summary (NO PRICE TAG) */}
            <div className="p-6 bg-[#FAF7F2] border-t border-[#C5A059]/30 space-y-4">
              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[11px] text-[#3D3330] bg-[#FFFDF9] p-2.5 rounded border border-[#DFD2BC]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>100% BIS Hallmarked · Tamper-proof Insured Vault Transit</span>
              </div>

              {/* Collection Summary */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5D5350]">
                  <span>Total Selected Pieces</span>
                  <span className="font-mono font-semibold text-[#35040D]">{cartCount} Items</span>
                </div>
                <div className="flex justify-between text-[#5D5350]">
                  <span>Insured Shipping & Packaging</span>
                  <span className="text-[#35040D] font-medium">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-[#35040D] pt-2 border-t border-[#DFD2BC]">
                  <span>Purity Standard</span>
                  <span className="text-[#580D1A]">
                    22K (916) Hallmark Certified
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setCheckoutStep("checkout")}
                  className="w-full py-3 bg-[#35040D] text-[#DFB76C] font-cinzel text-xs tracking-widest uppercase border border-[#C5A059] hover:bg-[#4A0E17] transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  Reserve Pieces for Viewing
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-2.5 bg-[#1F4E34] text-white font-sans text-xs tracking-wide rounded hover:bg-[#163825] transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span>Inquire Collection via WhatsApp</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
