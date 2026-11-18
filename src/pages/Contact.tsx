import React, { useState } from "react";
import Breadcrumb from "../components/common/BreadCrumbs";
import { Phone, MapPin, Mail, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "Bridal Jewellery",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Namaste Radha Gold Jewellers! I would like to inquire about your heritage collections and schedule a showroom appointment.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Royal Hero Banner */}
      <div className="relative h-[360px] md:h-[420px] overflow-hidden bg-[#240308] flex items-center justify-center">
        <img
          src="/images/set 2/RJ_001.jpg"
          alt="Contact Radha Gold Jewellers"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#240308] via-[#35040D]/75 to-[#240308]/90" />
        <div className="absolute inset-0 pattern-jaali-dark opacity-35 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#35040D] border border-[#C5A059] text-[#DFB76C] text-xs font-cinzel uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            Mylapore Flagship Salon
          </div>

          <h1 className="font-cinzel text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Connect With Our Master Goldsmiths
          </h1>

          <p className="font-cormorant italic text-lg md:text-xl text-[#DFB76C]">
            Private Bridal Appointments, Custom Nakashi Orders & Showroom Enquiries
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-[#C5A059]" />
            <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            <span className="h-px w-12 bg-[#C5A059]" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb current="Contact Us" />

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {/* Phone */}
            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm hover:border-[#C5A059] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                TELEPHONE
              </h3>
              <p className="font-mono text-sm text-[#580D1A] font-semibold">044 42102844</p>
              <p className="font-mono text-xs text-[#736360] mt-0.5">+91 94440 00535</p>
            </div>

            {/* Location */}
            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm hover:border-[#C5A059] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                LOCATION
              </h3>
              <p className="text-xs text-[#3D3330] leading-relaxed font-sans">
                72, North Mada Street, Mylapore, Chennai - 600004
              </p>
            </div>

            {/* Email */}
            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm hover:border-[#C5A059] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                ELECTRONIC MAIL
              </h3>
              <p className="text-xs text-[#580D1A] font-semibold">radhajewellers@yahoo.com</p>
              <p className="text-[10px] text-[#736360] mt-0.5">Direct Owner Desk</p>
            </div>

            {/* Hours */}
            <div className="p-6 bg-[#FFFDF9] rounded-sm border border-[#E8DCC8] shadow-sm hover:border-[#C5A059] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#35040D] text-[#DFB76C] mx-auto flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#35040D] uppercase mb-1">
                SHOWROOM HOURS
              </h3>
              <p className="text-xs text-[#3D3330] font-sans font-medium">11:00 AM – 8:30 PM</p>
              <p className="text-[10px] text-red-700 mt-0.5">Closed on Sundays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Split Section */}
      <section className="py-16 bg-[#FFFDF9] border-t border-[#E8DCC8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-6 bg-[#FAF7F2] p-8 md:p-10 rounded-sm border border-[#E8DCC8] shadow-md relative">
              <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-[#A98239] uppercase font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Inquiry Dispatch
              </div>

              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#35040D] mb-2">
                Send a Royal Message
              </h2>
              <p className="text-xs text-[#5D5350] font-sans mb-8">
                Inquire about custom bridal suites, hallmark certificate verifications, or gold melt orders.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded border border-[#C5A059] space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h3 className="font-cinzel text-lg font-bold text-[#35040D]">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs text-[#5D5350] font-sans leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our senior boutique manager will review your note and contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        occasion: "Bridal Jewellery",
                        message: "",
                      });
                    }}
                    className="font-cinzel text-xs uppercase tracking-wider text-[#580D1A] underline cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block text-[#35040D] font-medium mb-1">
                      Patron Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Smt. Radha Raman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-[#DFD2BC] rounded-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#35040D] font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 94440 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-[#DFD2BC] rounded-sm focus:outline-none focus:border-[#C5A059]"
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
                        className="w-full px-3.5 py-3 bg-white border border-[#DFD2BC] rounded-sm focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#35040D] font-medium mb-1">
                      Jewellery Collection of Interest
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-[#DFD2BC] rounded-sm focus:outline-none focus:border-[#C5A059]"
                    >
                      <option>Bridal Jewellery Suite</option>
                      <option>Original Temple Jewellery</option>
                      <option>Gold Haram & Necklaces</option>
                      <option>Panchalogam Heritage Collection</option>
                      <option>Royal Bangles & Kadas</option>
                      <option>Diamond & Precious Gemstones</option>
                      <option>Bespoke Custom Nakashi Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#35040D] font-medium mb-1">
                      Your Message / Custom Requirement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please mention preferred designs, estimated gold weight or appointment dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-[#DFD2BC] rounded-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#35040D] text-[#DFB76C] font-cinzel text-xs uppercase tracking-widest font-semibold border border-[#C5A059] hover:bg-[#580D1A] transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#DFB76C]" />
                    Send Royal Inquiry
                  </button>
                </form>
              )}

              {/* Instant WhatsApp Option */}
              <div className="mt-6 pt-6 border-t border-[#DFD2BC] text-center">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-[#1F4E34] text-white font-sans text-xs font-semibold rounded-sm hover:bg-[#163825] transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  Chat Directly on WhatsApp (+91 94444 75473)
                </button>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 bg-[#35040D] text-[#FAF7F2] rounded-sm border border-[#C5A059] shadow-lg">
                <h3 className="font-cinzel text-lg font-bold text-[#DFB76C] mb-2">
                  Visit the Heritage Landmark
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-sans mb-4">
                  We are conveniently situated opposite the iconic Mylapore North Mada temple chariot pathway. Ample valet parking assistance is provided for bridal family viewings.
                </p>
                <div className="flex items-center gap-4 text-xs text-[#DFB76C] font-cinzel">
                  <span>✦ 100% Secure Insured Delivery</span>
                  <span>✦ Private Viewing Lounges</span>
                </div>
              </div>

              <div className="w-full h-[420px] rounded-sm overflow-hidden border-2 border-[#C5A059] shadow-xl">
                <iframe
                  title="Radha Gold Jewellers Showroom Map"
                  src="https://www.google.com/maps?q=72,+North+Mada+Street,+Mylapore,+Chennai+-+600004&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}