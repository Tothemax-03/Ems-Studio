import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft, Star, MapPin, Users, Clock, ExternalLink,
  Wifi, Wind, UtensilsCrossed, Eye, BedDouble, Bath,
  ChevronRight, Shield, ChevronLeft
} from "lucide-react";
import { UNITS, UnitFeature } from "../data/units";
import { ImageLightbox } from "../components/ImageLightbox";
import { ReviewCard } from "../components/ReviewCard";

const FeatureChip = ({ icon, label, accentColor, accentLight }: UnitFeature & { accentColor: string; accentLight: string }) => {
  const iconMap = {
    bed: <BedDouble size={15} style={{ color: accentColor }} />,
    bath: <Bath size={15} style={{ color: accentColor }} />,
    wifi: <Wifi size={15} style={{ color: accentColor }} />,
    ac: <Wind size={15} style={{ color: accentColor }} />,
    kitchen: <UtensilsCrossed size={15} style={{ color: accentColor }} />,
    view: <Eye size={15} style={{ color: accentColor }} />,
  };

  return (
    <div
      className="flex items-center gap-2 rounded-xl px-3.5 py-2.5 border"
      style={{ background: accentLight, borderColor: `${accentColor}25` }}
    >
      {iconMap[icon]}
      <span
        className="text-stone-700 text-sm"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
};

const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={size}
        className={
          s <= Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : s - 0.5 <= rating
            ? "fill-amber-300 text-amber-300"
            : "fill-stone-200 text-stone-200"
        }
      />
    ))}
  </div>
);

export function UnitDetailPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  const unit = UNITS.find((u) => u.id === unitId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [reviewFilter, setReviewFilter] = useState<"newest" | "highest">("newest");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-500 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Unit not found</p>
          <button onClick={() => navigate("/")} className="text-[#2196A6] underline">Back to Home</button>
        </div>
      </div>
    );
  }

  const allImages = [{ url: unit.heroImage, caption: unit.name }, ...unit.galleryImages];

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const sortedReviews = [...unit.reviews].sort((a, b) =>
    reviewFilter === "highest" ? b.rating - a.rating : b.id - a.id
  );

  return (
    <div className="min-h-screen bg-[#f8f6f2]" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* Sticky Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${scrolled ? "bg-stone-100" : "bg-white/20 backdrop-blur-sm"}`}>
              <ArrowLeft size={16} className={scrolled ? "text-stone-700" : "text-white"} />
            </div>
            <span
              className={`text-sm transition-colors duration-200 ${scrolled ? "text-stone-700" : "text-white"}`}
              style={{ fontWeight: 500 }}
            >
              Back
            </span>
          </button>

          <div className={`hidden md:flex items-center gap-1 text-sm ${scrolled ? "text-stone-500" : "text-white/80"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            <button onClick={() => navigate("/")} className="hover:underline">EMS Staycation</button>
            <ChevronRight size={14} className="mx-1" />
            <span className={scrolled ? "text-stone-800" : "text-white"} style={{ fontWeight: 600 }}>{unit.name}</span>
          </div>

          <button
            onClick={() => window.open(unit.airbnbUrl, "_blank")}
            className="flex items-center gap-2 bg-[#FF5A5F] hover:bg-[#e04e52] text-white px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ fontWeight: 600 }}
          >
            Book on Airbnb
            <ExternalLink size={13} />
          </button>
        </div>
      </div>

      {/* ─── HERO GALLERY ─── */}
      <div className="relative w-full h-[65vh] min-h-[440px] overflow-hidden group">
        <img
          src={allImages[activeHeroIndex].url}
          alt={unit.name}
          className="w-full h-full object-cover transition-opacity duration-500 cursor-pointer"
          onClick={() => openLightbox(activeHeroIndex)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55 pointer-events-none" />

        {/* Hero navigation arrows */}
        <button
          onClick={() => setActiveHeroIndex((i) => (i - 1 + allImages.length) % allImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setActiveHeroIndex((i) => (i + 1) % allImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* View all badge */}
        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 text-stone-800 text-sm transition-all duration-200 hover:scale-105 shadow-lg"
          style={{ fontWeight: 600 }}
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-5 h-5 rounded-sm overflow-hidden">
                <img src={allImages[i]?.url} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          View all {allImages.length} photos
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {allImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveHeroIndex(i)}
              className={`rounded-full transition-all duration-300 ${i === activeHeroIndex ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>

        {/* Unit title overlay */}
        <div className="absolute bottom-14 left-6 md:left-10">
          <div
            className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-3 py-1 mb-2 text-white text-xs"
            style={{ background: unit.badgeColor, fontWeight: 600 }}
          >
            {unit.viewBadge}
          </div>
          <h1
            className="text-white drop-shadow-lg"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, lineHeight: 1.2, textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            {unit.name}
          </h1>
        </div>
      </div>

      {/* ─── THUMBNAIL STRIP ─── */}
      <div className="bg-white border-b border-stone-100 px-4 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => { setActiveHeroIndex(i); openLightbox(i); }}
              className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                i === activeHeroIndex ? "border-[#2196A6]" : "border-transparent"
              }`}
            >
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Unit Info */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <p
                    className="uppercase tracking-wider text-xs mb-1"
                    style={{ color: unit.accentColor, fontWeight: 600 }}
                  >
                    Marina Spatial Condo · Unit {unit.unitNumber}
                  </p>
                  <h2
                    className="text-[#1a1a2e]"
                    style={{ fontWeight: 800, fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)", lineHeight: 1.2 }}
                  >
                    {unit.viewType} Studio
                  </h2>
                  <p className="text-stone-500 mt-1 italic text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    "{unit.tagline}"
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <StarRating rating={unit.rating} />
                    <span className="text-[#1a1a2e] text-sm" style={{ fontWeight: 700 }}>{unit.rating}</span>
                  </div>
                  <span className="text-stone-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {unit.reviewCount} reviews
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-5 pb-5 border-b border-stone-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-stone-400" />
                  {unit.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-stone-400" />
                  Up to {unit.maxGuests} guests
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                {unit.description}
              </p>
              <p className="text-stone-500 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                {unit.extendedDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100">
              <h3 className="text-[#1a1a2e] mb-5" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                What's Included
              </h3>
              <div className="flex flex-wrap gap-3">
                {unit.features.map((f) => (
                  <FeatureChip
                    key={f.label}
                    {...f}
                    accentColor={unit.accentColor}
                    accentLight={unit.accentLight}
                  />
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <StarRating rating={unit.rating} size={18} />
                    <span className="text-[#1a1a2e]" style={{ fontWeight: 800, fontSize: "1.3rem" }}>
                      {unit.rating}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Based on <strong>{unit.reviewCount} reviews</strong> from Airbnb guests
                  </p>
                </div>

                {/* Filter */}
                <div className="flex gap-2">
                  {(["newest", "highest"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setReviewFilter(f)}
                      className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 capitalize ${
                        reviewFilter === f
                          ? "text-white shadow-sm"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        background: reviewFilter === f ? unit.accentColor : undefined,
                      }}
                    >
                      {f === "newest" ? "Newest" : "Highest Rated"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Airbnb badge */}
              <div className="flex items-center gap-2 bg-[#FFF8F0] border border-[#FF5A5F]/20 rounded-xl px-4 py-2.5 mb-5">
                <div className="w-5 h-5 rounded-full bg-[#FF5A5F] flex items-center justify-center flex-shrink-0">
                  <span className="text-white" style={{ fontSize: "0.6rem", fontWeight: 800 }}>A</span>
                </div>
                <p className="text-stone-600 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ fontWeight: 600 }}>Reviews powered by Airbnb</span> · Dynamic reviews will load from Airbnb API
                </p>
              </div>

              {/* Review Cards */}
              <div className="space-y-4">
                {sortedReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} accentColor={unit.accentColor} />
                ))}
              </div>

              <button
                onClick={() => window.open(unit.airbnbUrl, "_blank")}
                className="mt-5 w-full border rounded-xl py-3 text-sm transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: unit.accentColor,
                  borderColor: `${unit.accentColor}40`,
                }}
              >
                Read all {unit.reviewCount} reviews on Airbnb →
              </button>
            </div>

            {/* More Details */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100">
              <h3 className="text-[#1a1a2e] mb-5" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                More Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Check-in/out */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: unit.accentLight }}>
                    <Clock size={16} style={{ color: unit.accentColor }} />
                  </div>
                  <div>
                    <p className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>Check-in / Check-out</p>
                    <p className="text-stone-500 text-sm mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Check-in: <strong>{unit.checkin}</strong>
                      <br />
                      Check-out: <strong>{unit.checkout}</strong>
                    </p>
                  </div>
                </div>

                {/* Max guests */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: unit.accentLight }}>
                    <Users size={16} style={{ color: unit.accentColor }} />
                  </div>
                  <div>
                    <p className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>Maximum Guests</p>
                    <p className="text-stone-500 text-sm mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Up to <strong>{unit.maxGuests} guests</strong> per stay
                    </p>
                  </div>
                </div>
              </div>

              {/* House Rules */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={16} className="text-stone-400" />
                  <p className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>House Rules</p>
                </div>
                <ul className="space-y-2">
                  {unit.houseRules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: unit.accentColor }}>✓</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby Places */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-stone-400" />
                  <p className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>Nearby Places</p>
                </div>
                <div className="space-y-2">
                  {unit.nearbyPlaces.map((place, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-stone-50 last:border-0">
                      <div className="flex items-center gap-2 text-stone-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span>{place.icon}</span>
                        {place.name}
                      </div>
                      <span className="text-stone-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {place.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-5 rounded-2xl overflow-hidden bg-stone-100 h-44 flex items-center justify-center border border-stone-200">
                <div className="text-center">
                  <MapPin size={24} className="text-stone-400 mx-auto mb-2" />
                  <p className="text-stone-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Marina Spatial Condo
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Dumaguete City, Negros Oriental
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              {/* Booking Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100">
                {/* Price */}
                <div className="mb-4 pb-4 border-b border-stone-100">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="text-[#1a1a2e]"
                      style={{ fontWeight: 800, fontSize: "1.75rem" }}
                    >
                      ₱{unit.price.min.toLocaleString()}
                    </span>
                    <span className="text-stone-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      – ₱{unit.price.max.toLocaleString()} / night
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={unit.rating} size={13} />
                    <span className="text-stone-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {unit.rating} · {unit.reviewCount} reviews
                    </span>
                  </div>
                </div>

                {/* Book CTA */}
                <button
                  onClick={() => window.open(unit.airbnbUrl, "_blank")}
                  className="group w-full py-4 rounded-2xl text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${unit.accentColor}, ${unit.accentColor}cc)`,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  Book on Airbnb
                  <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-stone-400 text-center text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  You won't be charged yet · Secure booking via Airbnb
                </p>

                {/* Summary */}
                <div className="mt-5 space-y-2 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="flex justify-between text-stone-600">
                    <span>Min. price per night</span>
                    <span style={{ fontWeight: 600 }}>₱{unit.price.min.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Max. guests</span>
                    <span style={{ fontWeight: 600 }}>{unit.maxGuests}</span>
                  </div>
                </div>
              </div>

              {/* Other units */}
              <div className="bg-white rounded-3xl p-5 shadow-sm border border-stone-100">
                <p className="text-[#1a1a2e] mb-4 text-sm" style={{ fontWeight: 700 }}>
                  Explore Other Units
                </p>
                <div className="space-y-3">
                  {UNITS.filter((u) => u.id !== unit.id).map((other) => (
                    <button
                      key={other.id}
                      onClick={() => { navigate(`/unit/${other.id}`); window.scrollTo(0, 0); }}
                      className="w-full flex items-center gap-3 p-3 rounded-xl border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-200 hover:scale-[1.01] text-left"
                    >
                      <img
                        src={other.heroImage}
                        alt={other.name}
                        className="w-12 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-stone-800 text-xs truncate" style={{ fontWeight: 600 }}>
                          {other.viewType}
                        </p>
                        <p className="text-stone-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                          ₱{other.price.min.toLocaleString()}–₱{other.price.max.toLocaleString()} / night
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-stone-400 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-[#f0fdf4] border border-green-100 rounded-2xl p-4 flex items-start gap-3">
                <Shield size={18} className="text-[#3aaa5c] mt-0.5 flex-shrink-0" />
                <p className="text-stone-600 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ fontWeight: 600 }}>Safe & Secure Booking</span><br />
                  All bookings are processed through Airbnb's secure platform with guest protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky footer booking bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 px-4 py-3 z-40 flex items-center justify-between shadow-lg">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[#1a1a2e]" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
              ₱{unit.price.min.toLocaleString()}
            </span>
            <span className="text-stone-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>/ night</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={11} className="fill-amber-400 text-amber-400" />
            <span className="text-stone-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              {unit.rating} · {unit.reviewCount} reviews
            </span>
          </div>
        </div>
        <button
          onClick={() => window.open(unit.airbnbUrl, "_blank")}
          className="text-white px-6 py-2.5 rounded-xl flex items-center gap-1.5 transition-all duration-200 hover:opacity-90"
          style={{ background: unit.accentColor, fontWeight: 700, fontSize: "0.85rem" }}
        >
          Book on Airbnb <ExternalLink size={13} />
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((i) => (i + 1) % allImages.length)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length)}
        />
      )}
    </div>
  );
}
