import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Portfolio from "./components/sections/Portfolio";
import TestimonialSection from "./components/sections/TestimonialSection";
import ServiceArea from "./components/sections/ServiceArea";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";
import { lazy, Suspense } from "react";
import SectionDivider from "./components/ui/SectionDivider";
import ScrollToTop from "./components/ui/ScrollToTop";
import Footer from "./components/sections/Footer";

// Lazy load heavy components for better code splitting
const MapsSection = lazy(() => import("./components/sections/MapsSection"));

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <Portfolio />
        <AboutUs />
        <WhyUs />
        <TrustBar />
        <TestimonialSection />
        <SectionDivider />
        <ServiceArea />
        <HowItWorks />
        <FAQ />
        {/* Lazy load maps with fallback */}
        <Suspense fallback={
          <div className="h-64 w-full bg-surface-container-low animate-pulse" aria-live="polite" aria-label="Memuat peta lokasi" />
        }>
          <MapsSection />
        </Suspense>
        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}
