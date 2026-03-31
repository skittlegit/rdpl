import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesGrid from "./components/ServicesGrid";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <TechnologySection />
      <Footer />
    </main>
  );
}
