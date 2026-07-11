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
import Footer from "./components/sections/Footer";

import SectionDivider from "./components/ui/SectionDivider";

// Lazy load heavy components for better code splitting
const MapsSection = lazy(() => import("./components/sections/MapsSection"));

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <TrustBar />
        <MarqueeStrip />
        <Services />
        <WhyUs />
        <Portfolio />
        <TestimonialSection />
        <SectionDivider flip />
        <ServiceArea />
        <HowItWorks />
        <FAQ />
        {/* Lazy load maps with fallback - not critical for initial load */}
        <Suspense fallback={
          <div className="h-64 w-full bg-gradient-to-b from-beton-50 to-beton-100 animate-pulse" aria-live="polite" aria-label="Memuat peta lokasi" />
        }>
          <MapsSection />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
