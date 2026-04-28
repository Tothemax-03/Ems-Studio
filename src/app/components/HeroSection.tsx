interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToUnits = () => {
    const el = document.querySelector("#units");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a4a52]/40 via-transparent to-transparent" />

      {/* Floating badge */}
      <div className="absolute top-28 right-8 lg:right-16 hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-4 py-2.5">
        <div className="w-2 h-2 rounded-full bg-[#5ec97a] animate-pulse" />
        <span className="text-white text-xs font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Available Now · Dumaguete City
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#a8e6cf] text-xs font-medium tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ✦ Premium Condo Stays in Dumaguete
          </span>
        </div>

        <h1
          className="text-white mb-5 leading-tight drop-shadow-lg"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          Relax, Stay, and{" "}
          <span className="text-[#7dd3e8]">Enjoy Dumaguete</span>
        </h1>

        <p
          className="text-white/85 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          }}
        >
          Your perfect staycation with comfort, views, and convenience — right in the heart of Dumaguete City.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToUnits}
            className="group bg-[#2196A6] hover:bg-[#1a7a88] text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#2196A6]/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Explore Units
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>

          <button
            onClick={() => {
              const el = document.querySelector("#about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.95rem" }}
          >
            Learn More
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            { number: "3", label: "Condo Units" },
            { number: "4.9★", label: "Average Rating" },
            { number: "100+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-white"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem", fontWeight: 700 }}
              >
                {stat.number}
              </div>
              <div className="text-white/65 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-8 bg-white/40 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </section>
  );
}
