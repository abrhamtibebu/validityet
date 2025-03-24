
import { useEffect, useRef } from "react";
import { addStaggeredDelay, animateCount } from "../utils/animations";
import { Award, Users, Calendar, TrendingUp } from "lucide-react";

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement>(null);
  const viewedStats = useRef(false);

  useEffect(() => {
    // Add staggered animation to feature items
    if (featureItemsRef.current) {
      addStaggeredDelay(featureItemsRef.current, '.feature-item', 0.1);
    }

    // Intersection observer for stats
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !viewedStats.current) {
          viewedStats.current = true;
          const numberElements = entries[0].target.querySelectorAll('.stat-number');
          
          numberElements.forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            animateCount(el as HTMLElement, target);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="section-title animate-on-scroll">
            About <span className="text-gradient">Validity</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            We are a vibrant, results-driven marketing and events agency based in Addis Ababa, Ethiopia, 
            specializing in innovative digital strategies and unforgettable brand experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-64 h-64 bg-brand-yellow/30 rounded-full blur-3xl -z-10"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Validity Marketing Team" 
                  className="w-full h-auto object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-3xl font-display font-bold mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded with a vision to redefine the marketing landscape in Ethiopia, Validity Marketing and Events 
              brings together a team of creative strategists, digital experts, and event specialists passionate about 
              elevating brands to their fullest potential.
            </p>
            <p className="text-gray-600 mb-8">
              As a startup that understands the challenges of building a business, we've quickly established ourselves 
              by delivering exceptional results for companies across various industries. Our approach combines strategic thinking, 
              creative execution, and meticulous attention to detail to ensure our clients stand out in today's competitive marketplace.
            </p>

            <div ref={featureItemsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="feature-item flex items-start space-x-3 animate-on-scroll">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Excellence Driven</h4>
                  <p className="text-gray-600 text-sm">We pursue excellence in every project we undertake</p>
                </div>
              </div>
              
              <div className="feature-item flex items-start space-x-3 animate-on-scroll">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Results Focused</h4>
                  <p className="text-gray-600 text-sm">Measurable results that drive business growth</p>
                </div>
              </div>
              
              <div className="feature-item flex items-start space-x-3 animate-on-scroll">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Client Centric</h4>
                  <p className="text-gray-600 text-sm">Your success is our primary measure of achievement</p>
                </div>
              </div>
              
              <div className="feature-item flex items-start space-x-3 animate-on-scroll">
                <div className="bg-brand-blue/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Timely Delivery</h4>
                  <p className="text-gray-600 text-sm">We understand that time is a crucial business resource</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20 animate-on-scroll"
        >
          <div className="glass-card p-6 rounded-lg text-center">
            <h3 className="stat-number text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2" data-target="15">0</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg text-center">
            <h3 className="stat-number text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2" data-target="8">0</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg text-center">
            <h3 className="stat-number text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2" data-target="12">0</h3>
            <p className="text-gray-600">Team Members</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg text-center">
            <h3 className="stat-number text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2" data-target="3">0</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
