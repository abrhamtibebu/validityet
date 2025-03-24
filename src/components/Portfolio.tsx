import { useState, useEffect } from "react";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentProject, setCurrentProject] = useState<number>(0);

  const projects = [
    {
      id: 1,
      title: "WeyraET - Full Branding & Website",
      category: "branding",
      description: "Complete brand identity development and website design for WeyraET, enhancing their digital presence and customer engagement.",
      image: "https://weyraet.com/wp-content/uploads/2023/02/tumbnail-1.png",
      link: "https://weyraet.com/",
      technologies: ["Brand Strategy", "Web Development", "UI/UX Design"]
    },
    {
      id: 2,
      title: "RopeTech - Full Branding & Website",
      category: "branding",
      description: "End-to-end branding and website development for RopeTech, creating a cohesive brand identity and online presence.",
      image: "https://ropetechet.com/wp-content/uploads/2023/09/Logo-removebg-preview.png",
      link: "http://ropetechet.com/",
      technologies: ["Brand Identity", "Web Development", "Content Strategy"]
    },
    {
      id: 3,
      title: "Avodit - Full Branding & Website",
      category: "branding",
      description: "Comprehensive branding and website development for Avodit, helping establish their market position with a professional online presence.",
      image: "https://avodit.com/wp-content/uploads/2024/09/logo-1.png",
      link: "https://avodit.com/",
      technologies: ["Brand Strategy", "Web Development", "Digital Marketing"]
    },
    {
      id: 4,
      title: "WeSplice - Full Branding & Website",
      category: "branding",
      description: "Complete brand identity and website development for WeSplice, creating a modern digital presence that aligns with their business goals.",
      image: "https://wesplice.com/wp-content/uploads/2024/04/png.png",
      link: "http://wesplice.com/",
      technologies: ["Brand Identity", "Web Development", "UI/UX Design"]
    },
    {
      id: 5,
      title: "Big5 Ethiopia - Ushering Services",
      category: "event",
      description: "Provided full ushering and guest handling services for 2 consecutive years at Big5 Construction Ethiopia events.",
      image: "https://www.big5constructethiopia.com/wp-content/uploads/sites/13/2022/09/logo-big5-construct-ethiopia-2024.png",
      link: "https://www.big5constructethiopia.com/",
      technologies: ["Ushering Services", "Guest Management", "Event Coordination"]
    },
    {
      id: 6,
      title: "Techno Ethiopia - Event Services",
      category: "event",
      description: "Delivered comprehensive ushering and guest handling services for Techno Ethiopia's promotional and corporate events.",
      image: "https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/360082307_591162386486901_4202090165153631810_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeErSBnEqljHk_lka0WlL53NMxhFziY0UE0zGEXOJjRQTa3x8We3PWoGlAiUMImSX239d3GUWcAd2Tzht0JlXXih&_nc_ohc=21JK8n5UehsQ7kNvgH9tv9n&_nc_oc=Adm4DASOgEYjc8tUZKqVXtT9evGdzdfwqDa2kyDQzBPAryROHoUGZdKaNLdaeEFGr_4&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=4Q5rMVntfUM5RtMIAgXmMQ&oh=00_AYH-XiN6CWqPHsHQ-Jl6Z0qCMty5VIgSK4MPErP3Uka2_g&oe=67E75A65",
      link: "https://www.tecno-mobile.com/",
      technologies: ["Ushering Services", "Guest Relations", "Event Management"]
    },
    {
      id: 7,
      title: "CBE Headquarters Inauguration",
      category: "event",
      description: "Provided full ushering and guest handling services for the prestigious Commercial Bank of Ethiopia headquarters inauguration event.",
      image: "https://www.ena.et/documents/42142/0/2022_02_%E1%89%A3%E1%8A%90%E1%8A%A8_jpg.jpg/c3c205a0-983f-1d8b-95b8-5bce43fc4f66?version=1.0&t=1674391748551&download=true",
      link: "https://combanketh.et/",
      technologies: ["Ushering Services", "VIP Guest Management", "Event Coordination"]
    },
    {
      id: 8,
      title: "Prana Events - Managed Wi-Fi Services",
      category: "tech",
      description: "Delivered managed Wi-Fi services for numerous Prana Events gatherings, ensuring seamless connectivity for attendees.",
      image: "https://pranaevents.net/wp-content/uploads/2023/08/download-9.png",
      link: "https://pranaevents.net/",
      technologies: ["Managed Wi-Fi Management", "Network Setup", "Technical Support"]
    },
    {
      id: 9,
      title: "Prana Events - Managed Wi-Fi Services",
      category: "tech",
      description: "Delivered managed Wi-Fi services for numerous Prana Events gatherings, ensuring seamless connectivity for attendees.",
      image: "https://pranaevents.net/wp-content/uploads/2023/08/download-9.png",
      link: "https://pranaevents.net/",
      technologies: ["Managed Wi-Fi Management", "Network Setup", "Technical Support"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "branding", name: "Branding & Web" },
    {
      id: "event",
      name: "Event Services"
    },
    { id: "tech", name: "Technical Services" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextProject = () => {
    if (filteredProjects.length === 0) return;
    setCurrentProject(prev => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    if (filteredProjects.length === 0) return;
    setCurrentProject(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    setCurrentProject(0);
  }, [activeCategory]);

  useEffect(() => {
    if (filteredProjects.length > 0 && currentProject >= filteredProjects.length) {
      setCurrentProject(0);
    }
  }, [filteredProjects, currentProject]);

return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-title animate-on-scroll">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Explore our recent projects and see how we've helped businesses across different 
            industries achieve their marketing and branding goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-16 animate-on-scroll">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={filteredProjects[currentProject]?.image}
                  alt={filteredProjects[currentProject]?.title || "Project"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col">
                <div>
                  <span className="text-sm font-medium px-3 py-1 bg-brand-pink text-brand-blue rounded-full">
                    {categories.find(c => c.id === filteredProjects[currentProject]?.category)?.name || "Project"}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mt-4 mb-3">
                    {filteredProjects[currentProject]?.title || "Project Title"}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {filteredProjects[currentProject]?.description || "No description available"}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {filteredProjects[currentProject]?.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={filteredProjects[currentProject]?.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={prevProject}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                      aria-label="Previous project"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <span className="text-sm text-gray-500">
                      {currentProject + 1}/{filteredProjects.length}
                    </span>
                    <button
                      onClick={nextProject}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                      aria-label="Next project"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-lg text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-medium px-2 py-1 bg-brand-pink text-brand-blue rounded-full">
                  {categories.find(c => c.id === project.category)?.name}
                </span>
                
                <h3 className="text-xl font-display font-bold mt-3 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-blue font-medium hover:underline"
                >
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
