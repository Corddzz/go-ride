import "./index.css";
import RideNowIcon from "./assets/RideNow_icon.svg";
import FAQSection from "./Sections/FAQSection";
import FooterSection from "./Sections/FooterSection";
import Navbar from "./components/Navbar";
import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection";
import BookingSection from "./Sections/BookingSection";
import TestimonialSection from "./Sections/TestimonialSection";
import PricingSection from "./Sections/PricingSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-slate-900 to-indigo-950 text-white font-mono">
      <style>
        {`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-in-out;
        }
        
        .slide-out {
          animation: slideOut 0.5s ease-in-out;
        }
      `}
      </style>

      <Navbar logo={RideNowIcon} />
      <HeroSection />
      <BookingSection />
      <AboutSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default App;
