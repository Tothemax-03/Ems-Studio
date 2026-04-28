import { MapPin, Star, Heart } from "lucide-react";

interface AboutSectionProps {
  poolImage: string;
}

export function AboutSection({ poolImage }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-6 lg:px-10 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img
                src={poolImage}
                alt="EMS Staycation Dumaguete"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[180px]">
              <div className="w-10 h-10 rounded-xl bg-[#2196A6]/10 flex items-center justify-center flex-shrink-0">
                <Star size={18} className="text-[#2196A6] fill-[#2196A6]" />
              </div>
              <div>
                <div
                  className="text-[#1a1a2e]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  4.9 / 5.0
                </div>
                <div className="text-stone-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Guest Rating
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5ec97a]/15 flex items-center justify-center flex-shrink-0">
                <Heart size={18} className="text-[#3aaa5c] fill-[#3aaa5c]" />
              </div>
              <div>
                <div
                  className="text-[#1a1a2e]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  100+
                </div>
                <div className="text-stone-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Happy Guests
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2196A6]/10 border border-[#2196A6]/20 rounded-full px-4 py-1.5 mb-5">
              <span
                className="text-[#2196A6] text-xs font-semibold tracking-wider uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ✦ About Us
              </span>
            </div>

            <h2
              className="text-[#1a1a2e] mb-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.3rem)",
                lineHeight: 1.25,
              }}
            >
              Your Home Away{" "}
              <span className="text-[#2196A6]">From Home</span> in Dumaguete
            </h2>

            <p
              className="text-stone-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
            >
              EMS Staycation Dumaguete offers comfortable and affordable condo stays with beautiful views, perfect for relaxation, vacation, or quick city escapes. Nestled in the heart of Dumaguete City, our units are designed to provide a premium staycation experience without compromising on warmth and homey comfort.
            </p>

            <p
              className="text-stone-600 leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
            >
              Whether you're here for the vibrant local food scene, the scenic coastal walks, or just to unwind — we've got the perfect space waiting for you.
            </p>

            {/* Location badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 rounded-full bg-[#2196A6]/10 flex items-center justify-center">
                <MapPin size={16} className="text-[#2196A6]" />
              </div>
              <div>
                <p
                  className="text-[#1a1a2e]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Marina Spatial Condo
                </p>
                <p className="text-stone-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Dumaguete City, Negros Oriental, Philippines
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "Comfort", desc: "Premium furnishings" },
                { value: "Views", desc: "Sea, mountain & city" },
                { value: "Value", desc: "Affordable pricing" },
              ].map((item) => (
                <div key={item.value} className="bg-white rounded-2xl p-4 text-center border border-stone-100">
                  <div
                    className="text-[#2196A6] mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    {item.value}
                  </div>
                  <div className="text-stone-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
