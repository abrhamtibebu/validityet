
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // NavLinks for our single page application
  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in view
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) { // Reverse to check from bottom to top
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is visible in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-brand-dark shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo - using the new logo images */}
        <a href="#home" className="flex items-center logo-hover">
          <div className="relative h-12 w-auto">
            <img
              src={isScrolled ? "/lovable-uploads/0f93e43f-3948-4075-b4c9-bbbed20e63ec.png" : "/lovable-uploads/321f5d20-56ff-4e89-b8aa-9cd0f26feff6.png"}
              alt="Validity Marketing and Events"
              className="h-full w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-medium transition-all duration-300 relative ${
                isScrolled ? "text-white hover:text-brand-yellow" : "text-gray-700 hover:text-brand-dark"
              } ${activeSection === link.href.substring(1) ? 'active-nav-link' : ''}`}
            >
              {link.title}
              {activeSection === link.href.substring(1) && (
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 ${isScrolled ? 'bg-brand-yellow' : 'bg-brand-dark'} rounded`}></span>
              )}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="btn-primary transform hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container-custom py-20 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-2xl font-display font-medium transition-all duration-300 relative ${
                activeSection === link.href.substring(1) 
                  ? 'text-brand-yellow' 
                  : 'text-gray-800 hover:text-brand-yellow'
              }`}
            >
              {link.title}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-brand-yellow rounded"></span>
              )}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="btn-primary inline-block text-center mt-4 w-full transform hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
