import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional lawyer in modern office" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Excellence in <span className="text-gold">Legal Representation</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Delivering sophisticated legal solutions with personalized attention and unwavering commitment to your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/consultation">
            <Button 
              size="lg"
              className="bg-gold hover:bg-deep-gold text-navy px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
            </Button>
          </Link>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('services')}
            className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 text-lg font-semibold transition-all"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
