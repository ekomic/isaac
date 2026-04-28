import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ImpactSection from "@/components/ImpactSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ImpactSection />
        <NewsSection />
        <GallerySection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
