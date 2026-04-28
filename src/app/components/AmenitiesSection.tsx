import { Waves, ShieldCheck, Wifi, Car, ArrowUpDown } from "lucide-react";

const amenities = [
  {
    icon: <Waves size={28} />,
    title: "Swimming Pool",
    description: "Refreshing pool with stunning views overlooking the city.",
    color: "#2196A6",
    bg: "#e8f5f8",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "24/7 Security",
    description: "Round-the-clock security for your safety and peace of mind.",
    color: "#5ec97a",
    bg: "#edf9f1",
  },
  {
    icon: <Wifi size={28} />,
    title: "Free Wi-Fi",
    description: "High-speed internet connection included in every stay.",
    color: "#2196A6",
    bg: "#e8f5f8",
  },
  {
    icon: <Car size={28} />,
    title: "Free Parking",
    description: "Secure, covered parking available for all guests.",
    color: "#8b6e4e",
    bg: "#f5efe9",
  },
  {
    icon: <ArrowUpDown size={28} />,
    title: "Elevator Access",
    description: "Modern elevators for easy access to all floors.",
    color: "#5ec97a",
    bg: "#edf9f1",
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#5ec97a]/10 border border-[#5ec97a]/25 rounded-full px-4 py-1.5 mb-4">
            <span
              className="text-[#3aaa5c] text-xs font-semibold tracking-wider uppercase"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              ✦ Amenities
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
            Everything You Need
          </h2>
          <p
            className="text-stone-500 max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            Premium building amenities designed to make your stay as comfortable and convenient as possible.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group rounded-2xl p-6 border border-stone-100 hover:border-transparent hover:shadow-xl transition-all duration-400 hover:-translate-y-1 cursor-default text-center"
              style={{ background: "#fafaf9" }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: amenity.bg, color: amenity.color }}
              >
                {amenity.icon}
              </div>

              <h3
                className="text-[#1a1a2e] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                {amenity.title}
              </h3>
              <p
                className="text-stone-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
