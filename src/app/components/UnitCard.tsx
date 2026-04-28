import { Wifi, Wind, UtensilsCrossed, Eye, BedDouble, Bath, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { PhotoTourCategory, UnitPhotoTour } from "./UnitPhotoTour";

export interface UnitFeature {
  icon: "bed" | "bath" | "wifi" | "ac" | "kitchen" | "view";
  label: string;
}

export interface Unit {
  id: number;
  unitId: string;
  name: string;
  subtitle: string;
  description: string;
  features: UnitFeature[];
  priceRange: string;
  image: string;
  airbnbUrl: string;
  viewBadge: string;
  badgeColor: string;
  studioSlug: string;
  photoTourCategories: PhotoTourCategory[];
}

interface UnitCardProps {
  unit: Unit;
}

const FeatureIcon = ({ icon, label }: UnitFeature) => {
  const iconMap = {
    bed: <BedDouble size={14} className="text-[#2196A6]" />,
    bath: <Bath size={14} className="text-[#2196A6]" />,
    wifi: <Wifi size={14} className="text-[#2196A6]" />,
    ac: <Wind size={14} className="text-[#2196A6]" />,
    kitchen: <UtensilsCrossed size={14} className="text-[#2196A6]" />,
    view: <Eye size={14} className="text-[#5ec97a]" />,
  };

  return (
    <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-100 rounded-lg px-2.5 py-1.5">
      {iconMap[icon]}
      <span className="text-stone-600 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </span>
    </div>
  );
};

export function UnitCard({ unit }: UnitCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/unit/${unit.unitId}`);
  };

  const handleBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(unit.airbnbUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col border border-stone-100 cursor-pointer relative"
    >
      {/* Hover ring effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-[#2196A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={unit.image}
          alt={unit.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          style={{ "--tw-scale-x": "1.08", "--tw-scale-y": "1.08" } as React.CSSProperties}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* View badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold backdrop-blur-sm"
          style={{ fontFamily: "'Poppins', sans-serif", background: unit.badgeColor }}
        >
          {unit.viewBadge}
        </div>

        {/* Airbnb badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF5A5F]" />
          <span className="text-[#FF5A5F] text-xs font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Airbnb
          </span>
        </div>

        {/* "View Details" overlay on hover */}
        <div className="absolute inset-0 bg-[#2196A6]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
            <span className="text-[#2196A6] text-sm" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
              View Details
            </span>
            <ArrowRight size={15} className="text-[#2196A6]" />
          </div>
        </div>

        {/* Price on image */}
        <div className="absolute bottom-3 left-3">
          <span
            className="text-white font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            {unit.priceRange}
          </span>
          <span className="text-white/80 text-xs ml-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            / 2 nights Min.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Unit name */}
        <div className="mb-1">
          <p className="text-[#2196A6] text-xs uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
            Marina Spatial Condo
          </p>
          <h3
            className="text-[#1a1a2e] mt-0.5 group-hover:text-[#2196A6] transition-colors duration-200"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}
          >
            {unit.name}
          </h3>
        </div>

        <p
          className="text-stone-500 text-sm leading-relaxed mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {unit.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {unit.features.map((feature) => (
            <FeatureIcon key={feature.label} {...feature} />
          ))}
        </div>

        <UnitPhotoTour studioSlug={unit.studioSlug} categories={unit.photoTourCategories} />

        {/* Divider */}
        <div className="border-t border-stone-100 mb-4" />

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleCardClick}
            className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 py-2.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-1.5"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            View Details
            <ArrowRight size={13} />
          </button>
          <button
            onClick={handleBook}
            className="group/btn flex-1 bg-[#2196A6] hover:bg-[#1a7a88] text-white py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#2196A6]/25 flex items-center justify-center gap-1.5"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
          >
            Book on Airbnb
            <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
