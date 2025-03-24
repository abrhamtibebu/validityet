
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact Us", href: "#contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Digital Marketing", href: "#services" },
        { label: "Branding & Strategy", href: "#services" },
        { label: "Social Media Management", href: "#services" },
        { label: "Content Production", href: "#services" },
        { label: "Web Design & Development", href: "#services" },
        { label: "Event Management", href: "#services" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Careers", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-[#333333] text-white pt-20 pb-8">
      <div className="container-custom">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/f93fcdbd-0f11-4538-a335-4c4d8e6db7d6.png"
                alt="Validity Marketing and Events"
                className="h-10 mr-3"
              />
            </div>

            <p className="text-gray-300 mb-6">
              Elevate your brand's visibility and impact with our comprehensive marketing and event management services.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover-lift">
                <MapPin className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm">
                  Bole Road, Friendship Building, 4th Floor<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>

              <div className="flex items-center gap-3 group hover-lift">
                <Phone className="h-5 w-5 text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm">+251 91 234 5678</p>
              </div>

              <div className="flex items-center gap-3 group hover-lift">
                <Mail className="h-5 w-5 text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm">info@validity.marketing</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-brand-yellow">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="hover-lift">
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-brand-yellow transform group-hover:translate-x-1 transition-transform duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Validity Marketing and Events. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a 
              href="#" 
              className="bg-gray-700 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-700 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-700 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
              aria-label="Like us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-700 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 transform hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
