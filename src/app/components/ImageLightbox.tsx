import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const SCROLL_LOCK_COUNT_KEY = "lightboxScrollLockCount";
const BODY_PREV_OVERFLOW_KEY = "lightboxPrevBodyOverflow";
const HTML_PREV_OVERFLOW_KEY = "lightboxPrevHtmlOverflow";

interface LightboxProps {
  images: { url: string; caption: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageLightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const lockCount = Number(body.dataset[SCROLL_LOCK_COUNT_KEY] ?? "0");

    if (lockCount === 0) {
      body.dataset[BODY_PREV_OVERFLOW_KEY] = body.style.overflow;
      html.dataset[HTML_PREV_OVERFLOW_KEY] = html.style.overflow;
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    }

    body.dataset[SCROLL_LOCK_COUNT_KEY] = String(lockCount + 1);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);

      const currentCount = Number(body.dataset[SCROLL_LOCK_COUNT_KEY] ?? "1");
      const nextCount = Math.max(0, currentCount - 1);

      if (nextCount === 0) {
        body.style.overflow = body.dataset[BODY_PREV_OVERFLOW_KEY] ?? "";
        html.style.overflow = html.dataset[HTML_PREV_OVERFLOW_KEY] ?? "";
        delete body.dataset[SCROLL_LOCK_COUNT_KEY];
        delete body.dataset[BODY_PREV_OVERFLOW_KEY];
        delete html.dataset[HTML_PREV_OVERFLOW_KEY];
      } else {
        body.dataset[SCROLL_LOCK_COUNT_KEY] = String(nextCount);
      }
    };
  }, [handleKey]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div
        className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm z-10"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] mx-16 md:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.url}
          src={current.url}
          alt={current.caption}
          className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
          style={{ maxWidth: "calc(100vw - 130px)" }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="text-center mt-3">
          <p
            className="text-white/80 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {current.caption}
          </p>
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Thumbnail strip */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 px-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); }}
            className={`w-12 h-9 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
              i === currentIndex ? "border-white opacity-100" : "border-transparent opacity-50"
            }`}
          >
            <img src={img.url} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
