import { useState } from "react";
import { Menu, X, Waves } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Units", href: "#units" },
    { label: "Amenities", href: "#amenities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2196A6] flex items-center justify-center">
              <Waves size={16} className="text-white" />
            </div>
            <div>
              <span className="text-[#1a1a2e] font-semibold text-sm leading-tight block">EMS Staycation</span>
              <span className="text-[#2196A6] text-xs leading-tight block">Dumaguete</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-stone-600 hover:text-[#2196A6] text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2196A6] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#units")}
              className="bg-[#2196A6] hover:bg-[#1a7a88] text-white px-5 py-2 rounded-full text-sm transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-stone-600 hover:text-[#2196A6]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-stone-600 hover:text-[#2196A6] text-sm py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#units")}
            className="w-full bg-[#2196A6] text-white py-2.5 rounded-full text-sm mt-2"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
