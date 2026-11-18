import React, { useState, useEffect, useRef } from "react";
import { Product, PRODUCTS } from "../../data/products";
import { X, Camera, RefreshCw, Sparkles, Download, Check, Sliders, Maximize2, AlertCircle, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useAppDispatchHook, useAppSelectorHook } from "../../redux/store";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";

interface VirtualTryOnModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function VirtualTryOnModal({ product, onClose }: VirtualTryOnModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(product);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [scale, setScale] = useState<number>(1.0);
  const [positionY, setPositionY] = useState<number>(55); // percentage from top
  const [positionX, setPositionX] = useState<number>(50); // percentage from left
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [filterMode, setFilterMode] = useState<"natural" | "gold" | "radiance">("gold");
  const [showControls, setShowControls] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const dispatch = useAppDispatchHook();
  const wishlistItems = useAppSelectorHook((state) => state.wishlist.items);
  const isWishlisted = selectedProduct
    ? wishlistItems.some((item) => item.id === selectedProduct.id)
    : false;

  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);

  // Start Camera
  const startCamera = async () => {
    setCameraError(null);
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode,
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setCameraActive(true);
          };
        }
      } else {
        throw new Error("Camera API not supported in this browser context.");
      }
    } catch (err: any) {
      console.warn("Camera access note:", err);
      setCameraError(
        err.name === "NotAllowedError" || err.message?.includes("Permission")
          ? "Camera permission was denied. Interactive AR simulation mode is enabled below."
          : "Camera not detected. Interactive AR simulation mode is enabled below."
      );
      setCameraActive(false);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [facingMode]);

  // Flip camera
  const toggleCameraFacing = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  // Capture Snapshot
  const handleCaptureSnapshot = () => {
    if (!videoRef.current && !cameraError) return;

    const canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 960;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw background video or simulation backdrop
    if (cameraActive && videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = "#1A0205";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // add warm radial gradient
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        50,
        canvas.width / 2,
        canvas.height / 2,
        350
      );
      grad.addColorStop(0, "#35040D");
      grad.addColorStop(1, "#180205");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw Jewellery Piece
    if (selectedProduct) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = selectedProduct.image;
      img.onload = () => {
        const pieceWidth = 320 * scale;
        const pieceHeight = 320 * scale;
        const posX = (canvas.width * (positionX / 100)) - (pieceWidth / 2);
        const posY = (canvas.height * (positionY / 100)) - (pieceHeight / 2);

        ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
        ctx.shadowBlur = 20;
        ctx.drawImage(img, posX, posY, pieceWidth, pieceHeight);

        // Watermark
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#DFB76C";
        ctx.font = "bold 16px Cinzel, serif";
        ctx.fillText("RADHA GOLD JEWELLERS · VIRTUAL TRY-ON", 30, canvas.height - 40);

        setCapturedImage(canvas.toDataURL("image/jpeg", 0.95));
      };
    }
  };

  const handleWhatsAppConsultation = () => {
    if (!selectedProduct) return;
    const text = `Namaste Radha Gold Jewellers! I just tried on *${selectedProduct.name}* using your Virtual Try-On AR Mirror. I would like to book a private viewing or customize this piece.`;
    window.open(`https://wa.me/919444475473?text=${text}`, "_blank");
  };

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#1F0206] border-2 border-[#C5A059] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#35040D] border-b border-[#C5A059]/40 flex items-center justify-between text-[#FAF7F2] z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#240308] border border-[#DFB76C] flex items-center justify-center text-[#DFB76C]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#DFB76C] tracking-wider uppercase">
                  Virtual AR Try-On Mirror
                </h3>
                <span className="text-[10px] bg-[#DFB76C] text-[#240308] px-2 py-0.5 rounded font-mono font-bold tracking-normal">
                  LIVE AR
                </span>
              </div>
              <p className="text-[11px] text-[#FAF7F2]/75 font-sans">
                Experience royal heirloom ornaments rendered in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(toggleWishlist(selectedProduct))}
              className={`p-2 rounded-full border transition cursor-pointer ${
                isWishlisted
                  ? "bg-[#DFB76C] text-[#35040D] border-[#DFB76C]"
                  : "bg-white/10 text-[#DFB76C] border-[#C5A059]/40 hover:bg-white/20"
              }`}
              title={isWishlisted ? "Saved to Wishlist" : "Save to Wishlist"}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Close Try-On"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Viewport Area */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
          {/* Live Video Feed */}
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted
            className={`absolute inset-0 w-full h-full object-cover transform ${
              facingMode === "user" ? "-scale-x-100" : ""
            } ${cameraActive ? "opacity-100" : "opacity-0"}`}
          />

          {/* Fallback Simulation Mirror if camera is disabled/denied */}
          {!cameraActive && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#2B040B] via-[#1A0205] to-[#140103] p-6 text-center">
              {/* Silhouette guide for neck and shoulders */}
              <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                <svg viewBox="0 0 400 500" className="w-full h-full max-w-md text-[#DFB76C]" fill="currentColor">
                  <path d="M200 60 A45 55 0 0 1 200 170 A45 55 0 0 1 200 60 Z M140 220 C140 180 260 180 260 220 L320 380 L80 380 Z" opacity="0.3" />
                </svg>
              </div>

              {cameraError && (
                <div className="relative z-10 max-w-md p-3.5 rounded bg-[#35040D]/90 border border-[#C5A059]/50 text-xs text-[#DFB76C] mb-4 flex items-center gap-2 text-left shadow-lg">
                  <AlertCircle className="w-5 h-5 shrink-0 text-[#DFB76C]" />
                  <span>{cameraError}</span>
                </div>
              )}

              <button
                onClick={startCamera}
                className="relative z-10 px-5 py-2.5 bg-[#35040D] hover:bg-[#580D1A] text-[#DFB76C] font-cinzel text-xs uppercase tracking-wider rounded border border-[#C5A059] flex items-center gap-2 shadow-lg transition cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                Enable Web Camera Mirror
              </button>
            </div>
          )}

          {/* AR Overlay Filter Aura */}
          {filterMode === "gold" && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,183,108,0.12)_0%,transparent_70%)] pointer-events-none" />
          )}
          {filterMode === "radiance" && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
          )}

          {/* Futuristic AR Face/Neck Grid Reticle */}
          <div className="absolute inset-8 pointer-events-none border border-[#DFB76C]/15 rounded flex items-center justify-center">
            {/* Corner crosshairs */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#DFB76C]/60" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#DFB76C]/60" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#DFB76C]/60" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#DFB76C]/60" />

            {/* Subtle center alignment guide */}
            <div className="w-px h-12 bg-[#DFB76C]/30 absolute top-4" />
            <div className="h-px w-12 bg-[#DFB76C]/30 absolute top-4" />
          </div>

          {/* THE AR JEWELLERY OVERLAY PIECE */}
          <div
            style={{
              position: "absolute",
              top: `${positionY}%`,
              left: `${positionX}%`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transition: "transform 0.05s ease-out",
            }}
            className="cursor-move select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-w-[280px] sm:max-w-[340px] max-h-[280px] sm:max-h-[340px] object-contain"
              draggable={false}
            />
          </div>

          {/* Live Top Floating Tag */}
          <div className="absolute top-4 left-4 z-20 bg-[#240308]/85 border border-[#C5A059]/50 rounded-sm px-3 py-1.5 backdrop-blur-md">
            <span className="text-[10px] text-[#DFB76C] font-cinzel uppercase tracking-wider block font-semibold">
              Trying on: {selectedProduct.name}
            </span>
            <span className="text-[10px] text-white/70 font-sans block">
              {selectedProduct.category} · {selectedProduct.purity}
            </span>
          </div>

          {/* Floating Camera Actions */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={toggleCameraFacing}
              className="p-2 rounded-full bg-[#240308]/85 text-[#DFB76C] border border-[#C5A059]/40 hover:bg-[#35040D] transition cursor-pointer"
              title="Flip Camera"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowControls(!showControls)}
              className="p-2 rounded-full bg-[#240308]/85 text-[#DFB76C] border border-[#C5A059]/40 hover:bg-[#35040D] transition cursor-pointer"
              title="Toggle AR Sliders"
            >
              <Sliders className="w-4 h-4" />
            </button>
          </div>

          {/* AR Floating Adjustment Sliders */}
          {showControls && (
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#240308]/90 border border-[#C5A059]/40 p-3 rounded-sm backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-white">
              {/* Scale Slider */}
              <div className="flex items-center gap-2 min-w-[140px] flex-1">
                <span className="text-[#DFB76C] font-cinzel text-[10px] uppercase tracking-wider shrink-0">
                  Size:
                </span>
                <input
                  type="range"
                  min="0.6"
                  max="1.6"
                  step="0.05"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="w-full accent-[#DFB76C] h-1.5 bg-[#35040D] rounded cursor-pointer"
                />
              </div>

              {/* Vertical Position */}
              <div className="flex items-center gap-2 min-w-[140px] flex-1">
                <span className="text-[#DFB76C] font-cinzel text-[10px] uppercase tracking-wider shrink-0">
                  Position Y:
                </span>
                <input
                  type="range"
                  min="20"
                  max="85"
                  value={positionY}
                  onChange={(e) => setPositionY(parseInt(e.target.value))}
                  className="w-full accent-[#DFB76C] h-1.5 bg-[#35040D] rounded cursor-pointer"
                />
              </div>

              {/* Reset alignment */}
              <button
                onClick={() => {
                  setScale(1.0);
                  setPositionY(55);
                  setPositionX(50);
                }}
                className="text-[10px] text-[#DFB76C] font-cinzel uppercase tracking-wider underline hover:text-white cursor-pointer"
              >
                Reset Alignment
              </button>
            </div>
          )}
        </div>

        {/* Carousel to switch between different pieces */}
        <div className="p-3 bg-[#240308] border-t border-[#C5A059]/30">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="font-cinzel text-[11px] text-[#DFB76C] uppercase tracking-wider font-semibold">
              Select Another Piece to Try:
            </span>
            <span className="text-[10px] text-white/60 font-sans">
              Instant Overlay Switch
            </span>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {PRODUCTS.map((item) => {
              const isSelected = item.id === selectedProduct.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedProduct(item);
                  }}
                  className={`w-14 h-14 shrink-0 rounded overflow-hidden border-2 transition-all cursor-pointer relative ${
                    isSelected
                      ? "border-[#DFB76C] scale-105 shadow-md shadow-[#DFB76C]/30"
                      : "border-white/20 hover:border-[#DFB76C]/60 opacity-75 hover:opacity-100"
                  }`}
                  title={item.name}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#DFB76C]/20 border border-[#DFB76C]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#35040D] border-t border-[#C5A059]/40 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCaptureSnapshot}
              className="px-4 py-2 bg-[#240308] hover:bg-[#1A0205] text-[#DFB76C] font-cinzel text-xs tracking-wider uppercase font-semibold rounded border border-[#C5A059] flex items-center gap-2 shadow transition cursor-pointer"
            >
              <Camera className="w-4 h-4 text-[#DFB76C]" />
              Capture Photo
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleWhatsAppConsultation}
              className="px-4 py-2 bg-[#1F4E34] hover:bg-[#163825] text-white font-sans text-xs font-semibold rounded flex items-center gap-2 transition cursor-pointer shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              Inquire via WhatsApp
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-transparent text-white/80 hover:text-white font-cinzel text-xs tracking-wider uppercase"
            >
              Close
            </button>
          </div>
        </div>

        {/* Captured Snapshot Dialog */}
        {capturedImage && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90">
            <div className="relative max-w-md w-full bg-[#1F0206] border-2 border-[#C5A059] p-4 rounded text-center space-y-4">
              <button
                onClick={() => setCapturedImage(null)}
                className="absolute top-2 right-2 text-[#DFB76C] p-1.5 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h4 className="font-cinzel text-base text-[#DFB76C] font-bold">
                Your Royal Look Captured
              </h4>

              <div className="rounded overflow-hidden border border-[#C5A059]/40 max-h-[60vh]">
                <img src={capturedImage} alt="Captured Try-On" className="w-full h-auto object-cover" />
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={capturedImage}
                  download={`radha-gold-tryon-${selectedProduct.id}.jpg`}
                  className="px-4 py-2 bg-[#35040D] text-[#DFB76C] border border-[#C5A059] font-cinzel text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#580D1A] flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  Save Photo
                </a>

                <button
                  onClick={() => setCapturedImage(null)}
                  className="px-4 py-2 bg-white/10 text-white font-cinzel text-xs uppercase tracking-wider rounded hover:bg-white/20"
                >
                  Try Another Piece
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
