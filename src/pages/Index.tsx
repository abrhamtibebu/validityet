
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { setupScrollAnimations } from "../utils/animations";

const Index = () => {
  useEffect(() => {
    // Setup scroll animations
    const cleanupAnimations = setupScrollAnimations();
    
    return () => {
      cleanupAnimations();
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Quick access back to top button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 bg-brand-yellow text-brand-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:bg-brand-dark hover:text-brand-yellow"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </div>
  );
};

export default Index;
