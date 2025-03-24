
import { useState, useEffect, useRef } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Daniel Tadesse",
      position: "CEO, RopeTech",
      company: "RopeTech",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "Validity transformed our online presence with a complete website redesign that perfectly captures our brand identity. Their strategic approach and attention to detail resulted in a significant increase in user engagement and lead generation.",
      rating: 5
    },
    {
      id: 2,
      name: "Meron Hagos",
      position: "Marketing Director",
      company: "WeSplice",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      quote: "Working with Validity on our brand identity was a game-changer for our business. They took the time to understand our vision and values, creating a cohesive brand strategy that resonates with our target audience. Their team's creativity and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Abebe Kebede",
      position: "Founder",
      company: "Weyra",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      quote: "Validity's digital marketing strategy delivered measurable results for our business. Their data-driven approach, combined with creative content development, significantly improved our online visibility and customer engagement. They're not just service providers but true partners in our growth.",
      rating: 4
    },
    {
      id: 4,
      name: "Sara Mekonnen",
      position: "Operations Manager",
      company: "Avodit",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      quote: "The corporate event organized by Validity was flawless from concept to execution. Their team handled every detail with precision, creating a memorable experience for our guests. The event generated significant buzz for our brand launch and helped establish our market presence.",
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Start autoplay
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  // Resume autoplay on mouse leave
  const resumeAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="section-title animate-on-scroll">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Don't just take our word for it. Here's what our clients have to say about working with Validity.
          </p>
        </div>

        <div 
          ref={testimonialsRef}
          className="max-w-4xl mx-auto relative animate-on-scroll"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="relative">
            <Quote className="absolute top-0 left-0 h-12 w-12 text-brand-yellow opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-brand-pink">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-xl font-display font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-brand-blue" : "w-3 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
