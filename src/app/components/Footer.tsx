import { MapPin, Phone, Mail, Waves, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "#home" },
        { label: "Our Units", href: "#units" },
        { label: "Amenities", href: "#amenities" },
        { label: "About Us", href: "#about" },
      ],
    },
    {
      title: "Units",
      links: [
        { label: "SeaView Studio (Unit 26)", href: "https://www.airbnb.com/rooms/1346933732794342250" },
        { label: "MountainView Studio (Unit 28)", href: "https://www.airbnb.com/rooms/1213687251867764010" },
        { label: "CityView Studio (Unit 30)", href: "#units" },
      ],
    },
  ];

  const scrollTo = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#0f1f27] text-white">
      {/* Top CTA Banner */}
      <div className="bg-[#2196A6] py-10 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-white mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
            >
              Ready to Book Your Stay?
            </h3>
            <p className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Check availability and book directly on Airbnb for the best rates.
            </p>
          </div>
          <button
            onClick={() => window.open("https://www.airbnb.com/", "_blank")}
            className="bg-white text-[#2196A6] hover:bg-stone-100 px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg flex-shrink-0"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
          >
            View on Airbnb →
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2196A6] flex items-center justify-center">
                <Waves size={17} className="text-white" />
              </div>
              <div>
                <div
                  className="text-white"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                >
                  EMS Staycation
                </div>
                <div className="text-[#7dd3e8] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Dumaguete
                </div>
              </div>
            </div>

            <p
              className="text-stone-400 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your home away from home in Dumaguete City. Comfortable, affordable, and beautiful — every stay, every time.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
                { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
                { icon: <Twitter size={16} />, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2196A6] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className="text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-stone-400 hover:text-[#7dd3e8] text-sm transition-colors duration-200 text-left"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#7dd3e8]" />
                </div>
                <div>
                  <p className="text-white text-sm" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                    Marina Spatial Condo
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Dumaguete City, Negros Oriental
                    <br />Philippines
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#7dd3e8]" />
                </div>
                <div>
                  <p className="text-stone-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    +63 (0) 912 345 6789
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#7dd3e8]" />
                </div>
                <div>
                  <p className="text-stone-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    ems.staycation@gmail.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-stone-500 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {currentYear} EMS Staycation Dumaguete. All rights reserved.
          </p>
          <p
            className="text-stone-600 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Designed with ♥ for Dumaguete · Powered by Airbnb
          </p>
        </div>
      </div>
    </footer>
  );
}
