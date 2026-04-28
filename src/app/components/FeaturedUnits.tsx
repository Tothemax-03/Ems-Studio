import { UnitCard, Unit } from "./UnitCard";
import {
  getFeaturedUnitPhotoTourCategories,
  homepageImages,
} from "../data/images";

export function FeaturedUnits() {
  const units: Unit[] = [
    {
      id: 1,
      unitId: "sea-view",
      name: "Unit 26: SeaView Studio",
      subtitle: "SeaView Studio",
      description:
        "Wake up to stunning sea views in this cozy and stylish studio, perfect for a relaxing and refreshing stay.",
      features: [
        { icon: "bed", label: "1 Bed" },
        { icon: "bath", label: "1 Bathroom" },
        { icon: "wifi", label: "Wi-Fi" },
        { icon: "ac", label: "Air Conditioning" },
        { icon: "kitchen", label: "Kitchen" },
        { icon: "view", label: "Sea View" },
      ],
      priceRange: "₱1850",
      image: homepageImages.featuredSeaViewCard,
      airbnbUrl: "https://www.airbnb.com/rooms/1346933732794342250",
      viewBadge: "🌊 Sea View",
      badgeColor: "rgba(33, 150, 166, 0.85)",
      studioSlug: "studio1",
      photoTourCategories: getFeaturedUnitPhotoTourCategories("studio1"),
    },
    {
      id: 2,
      unitId: "mountain-view",
      name: "Unit 28: MountainView Studio",
      subtitle: "Stunning Studio Condo with Mountain Views - High Floor Retreat",
      description:
        "Relax in a peaceful studio with calming mountain views, designed for comfort and quiet escapes.",
      features: [
        { icon: "bed", label: "1 Bed" },
        { icon: "bath", label: "1 Bathroom" },
        { icon: "wifi", label: "Wi-Fi" },
        { icon: "ac", label: "Air Conditioning" },
        { icon: "kitchen", label: "Kitchen" },
        { icon: "view", label: "Mountain View" },
      ],
      priceRange: "₱1850",
      image: homepageImages.featuredMountainViewCard,
      airbnbUrl: "https://www.airbnb.com/rooms/1213687251867764010",
      viewBadge: "⛰️ Mountain View",
      badgeColor: "rgba(94, 201, 122, 0.85)",
      studioSlug: "studio2",
      photoTourCategories: getFeaturedUnitPhotoTourCategories("studio2"),
    },
    {
      id: 3,
      unitId: "mountain-view/Opening Soon",
      name: "Unit 16: CityView Studio",
      subtitle: "Stunning Studio Condo with Mountain Views - High Floor Retreat",
      description:
        "Relax in a peaceful studio with calming mountain views, designed for comfort and quiet escapes.",
      features: [
        { icon: "bed", label: "1 Bed" },
        { icon: "bath", label: "1 Bathroom" },
        { icon: "wifi", label: "Wi-Fi" },
        { icon: "ac", label: "Air Conditioning" },
        { icon: "kitchen", label: "Kitchen" },
        { icon: "view", label: "Mountain View" },
      ],
      priceRange: "₱1850",
      image: homepageImages.featuredCityViewCard,
      airbnbUrl: "https://www.airbnb.com/",
      viewBadge: "🌆 City View",
      badgeColor: "rgba(139, 110, 78, 0.85)",
      studioSlug: "studio3",
      photoTourCategories: getFeaturedUnitPhotoTourCategories("studio3"),
    },
  ];

  return (
    <section id="units" className="py-20 px-6 lg:px-10 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#2196A6]/10 border border-[#2196A6]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#2196A6] text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
              ✦ Our Units
            </span>
          </div>
          <h2
            className="text-[#1a1a2e] mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            Featured Condo Units
          </h2>
          <p
            className="text-stone-500 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            Choose from our hand-picked studio units at Marina Spatial Condo, each offering a unique view and premium comfort.
            <span className="block mt-1 text-[#2196A6] text-sm font-medium">Click any card to explore the full unit →</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10">
          <p className="text-stone-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            All units include complimentary toiletries, fresh linens, and 24/7 support.
          </p>
        </div>
      </div>
    </section>
  );
}
