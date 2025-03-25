
import { useEffect, useRef } from "react";
import { 
  Globe, 
  TrendingUp, 
  Smartphone, 
  Camera, 
  PenTool, 
  Users, 
  CalendarDays, 
  BarChart, 
  Megaphone,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-brand-dark" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital strategies that drive traffic, engagement, and conversions across all online channels.",
      features: ["SEO & SEM", "Content Marketing", "Email Campaigns", "Analytics & Reporting"]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-dark" />,
      title: "Branding & Strategy",
      description:
        "Strategic brand development and positioning to help you stand out in a competitive market.",
      features: ["Brand Identity", "Positioning Strategy", "Market Research", "Competitive Analysis"]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-brand-dark" />,
      title: "Social Media Management",
      description:
        "End-to-end social media services to build your presence and engage with your audience effectively.",
      features: ["Platform Strategy", "Content Creation", "Community Management", "Paid Campaigns"]
    },
    {
      icon: <Camera className="h-10 w-10 text-brand-dark" />,
      title: "Content Production",
      description:
        "High-quality visual and written content that tells your brand story and resonates with your audience.",
      features: ["Photography", "Videography", "Copywriting", "Graphic Design"]
    },
    {
      icon: <PenTool className="h-10 w-10 text-brand-dark" />,
      title: "Web Design & Development",
      description:
        "Custom website solutions that combine stunning design with seamless functionality.",
      features: ["UI/UX Design", "Responsive Development", "E-commerce", "Website Maintenance & Management"]
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-brand-dark" />,
      title: "Event Management",
      description:
        "End-to-end event planning and execution services for corporate and promotional events.",
      features: ["Ushering Services", "Event Planning", "Venue Selection", "Post-Event Analysis", "Managed Wi-Fi Services"]
    },
    {
      icon: <BarChart className="h-10 w-10 text-brand-dark" />,
      title: "Corporate Training",
      description:
        "Specialized marketing workshops and training programs for corporate teams and professionals.",
      features: ["Marketing Workshops", "Skill Development", "Team Building", "Customized Programs"]
    },
    {
      icon: <Megaphone className="h-10 w-10 text-brand-dark" />,
      title: "PR & Communications",
      description:
        "Strategic public relations services to enhance your reputation and media presence.",
      features: ["Media Relations", "Press Releases", "Crisis Management", "Public Affairs"]
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="section-title animate-on-scroll">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            We offer a comprehensive suite of marketing and event services designed to elevate your brand, 
            engage your audience, and drive measurable business results.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-xl p-6 shadow-md border border-gray-100 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-brand-yellow/10 p-4 inline-block rounded-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 bg-brand-yellow rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center text-brand-dark font-medium hover:underline mt-auto">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact" className="btn-primary inline-flex items-center">
            <span>Discuss Your Project</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
