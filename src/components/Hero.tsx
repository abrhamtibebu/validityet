
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const moveX = (x - rect.width / 2) / 50;
      const moveY = (y - rect.height / 2) / 50;
      
      // Apply the parallax effect to shapes
      const shapes = heroRef.current.querySelectorAll('.hero-shape');
      shapes.forEach((shape, index) => {
        const factor = index + 1;
        (shape as HTMLElement).style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };

    const currentRef = heroRef.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-yellow/20 blur-3xl hero-shape"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-yellow/30 blur-3xl hero-shape"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-dark/20 blur-2xl hero-shape"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center">          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Elevate Your Brand's <br />
            <span className="text-gradient">Visibility & Impact</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            We craft strategic marketing solutions and unforgettable events
            that transform businesses and create lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a href="#contact" className="btn-primary flex items-center gap-2 w-full sm:w-auto">
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-outline flex items-center gap-2 w-full sm:w-auto">
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
