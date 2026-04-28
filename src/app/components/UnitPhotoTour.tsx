import { useEffect, useMemo, useRef, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";
import { buildReactStudioPhotoUrl } from "../data/images";

export interface PhotoTourCategory {
  name: string;
  folder: string;
  images: string[];
}

interface UnitPhotoTourProps {
  studioSlug: string;
  categories: PhotoTourCategory[];
}

export function UnitPhotoTour({ studioSlug, categories }: UnitPhotoTourProps) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [lightboxImages, setLightboxImages] = useState<{ url: string; caption: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const loopedCategories = useMemo(() => [...categories, ...categories], [categories]);

  const hasScrollableContent = useMemo(() => categories.length > 1, [categories.length]);

  useEffect(() => {
    if (!hasScrollableContent) return;

    const rail = railRef.current;
    if (!rail) return;

    let rafId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      const halfLoopWidth = rail.scrollWidth / 2;
      if (halfLoopWidth > 0) {
        rail.scrollLeft += delta * 0.045;
        if (rail.scrollLeft >= halfLoopWidth) {
          rail.scrollLeft -= halfLoopWidth;
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [hasScrollableContent, loopedCategories.length]);

  const openCategory = (category: PhotoTourCategory) => {
    const gallery = category.images.slice(0, 4).map((file, idx) => ({
      url: buildReactStudioPhotoUrl(studioSlug, category.folder, file),
      caption: `${category.name} ${idx + 1}`,
    }));

    setLightboxImages(gallery);
    setLightboxIndex(0);
  };

  return (
    <div
      className="mt-4 rounded-2xl border border-stone-100 bg-stone-50/70 p-3"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-[#1a1a2e] text-sm mb-2" style={{ fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
        Photo tour
      </p>

      <div
        ref={railRef}
        className="flex gap-3 overflow-x-auto pb-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedCategories.map((category, idx) => {
          const cover = category.images[0];
          return (
            <button
              key={`${category.folder}-${idx}`}
              type="button"
              className="group w-[68vw] min-w-[220px] max-w-[290px] sm:w-44 sm:min-w-[176px] md:w-48 md:min-w-[192px] flex-shrink-0 rounded-xl border border-stone-200 bg-white p-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                openCategory(category);
              }}
            >
              <div className="h-20 overflow-hidden rounded-lg bg-stone-100">
                <img
                  src={buildReactStudioPhotoUrl(studioSlug, category.folder, cover)}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 truncate text-xs text-stone-700" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                {category.name}
              </p>
            </button>
          );
        })}
      </div>

      {lightboxImages.length > 0 && (
        <ImageLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxImages([])}
          onNext={() => setLightboxIndex((value) => (value + 1) % lightboxImages.length)}
          onPrev={() => setLightboxIndex((value) => (value - 1 + lightboxImages.length) % lightboxImages.length)}
        />
      )}
    </div>
  );
}
