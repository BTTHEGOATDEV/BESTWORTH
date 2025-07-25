import { Building, Gavel, Handshake, Home, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Comprehensive business legal services including mergers, acquisitions, corporate governance, and compliance matters.",
  },
  {
    icon: Gavel,
    title: "Litigation",
    description: "Skilled representation in complex civil litigation, commercial disputes, and appellate matters with proven results.",
  },
  {
    icon: Handshake,
    title: "Contract Law",
    description: "Expert contract drafting, review, and negotiation services to protect your interests and minimize risk.",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Complete real estate legal services from residential transactions to commercial property development.",
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Strategic employment law counsel for both employers and employees in workplace disputes and compliance.",
  },
  {
    icon: Shield,
    title: "Estate Planning",
    description: "Comprehensive estate planning services including wills, trusts, and succession planning strategies.",
  },
];

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our <span className="text-gold">Practice Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services tailored to meet your specific needs with the highest standards of professional excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-cream rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-gold text-4xl mb-4">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gold hover:text-deep-gold font-semibold flex items-center transition-colors"
                >
                  Learn More <span className="ml-2">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
