import { HeroSection } from "../components/HeroSection";
import { FeaturedUnits } from "../components/FeaturedUnits";
import { AmenitiesSection } from "../components/AmenitiesSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { homepageImages } from "../data/images";

export function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection heroImage={homepageImages.heroBanner} />
        <FeaturedUnits />
        <AmenitiesSection />
        <AboutSection poolImage={homepageImages.aboutPoolFeature} />
      </main>
      <Footer />
    </div>
  );
}
