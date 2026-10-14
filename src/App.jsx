import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import AboutUs from "./components/sections/AboutUs";
import TestimonialSection from "./components/sections/TestimonialSection";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";
import { lazy, Suspense, useEffect } from "react";
import ScrollToTop from "./components/ui/ScrollToTop";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";
import WhatsAppFloatingButton from "./components/ui/WhatsAppFloatingButton";
import LazyServiceAreaMap from "./components/sections/LazyServiceAreaMap";
import LocationDirectory from "./components/sections/LocationDirectory";

// Lazy load heavy components for better code splitting
const MapsSection = lazy(() => import("./components/sections/MapsSection"));
const CalculatorSection = lazy(() => import("./components/calculator/CalculatorSection"));

export default function App() {
  /* Track WhatsApp clicks as GA4 conversion events (delegated, covers every WA link) */
  useEffect(() => {
    const trackWaClick = (e) => {
      const link = e.target.closest?.('a[href*="wa.me"]');
      if (!link || typeof window.gtag !== "function") return;
      window.gtag("event", "whatsapp_click", {
        page_path: window.location.pathname,
        link_location: link.className.includes("fixed") ? "floating_button" : "inline_cta",
      });
    };
    document.addEventListener("click", trackWaClick);
    return () => document.removeEventListener("click", trackWaClick);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <AboutUs />
        {/* Lazy load calculator with fallback */}
        <Suspense fallback={
          <div className="h-96 w-full bg-surface-container-low animate-pulse" aria-label="Memuat kalkulator estimasi" />
        }>
          <CalculatorSection />
        </Suspense>
        <LocationDirectory />
        <LazyServiceAreaMap />
        <TestimonialSection />
        <HowItWorks />
        <FAQ />
        {/* Lazy load maps with fallback */}
        <Suspense fallback={
          <div className="h-64 w-full bg-surface-container-low animate-pulse" aria-live="polite" aria-label="Memuat peta lokasi" />
        }>
          <MapsSection />
        </Suspense>
        <ScrollToTop />
        <CTA />
        <WhatsAppFloatingButton />
        <Footer />
      </main>
    </>
  );
}
