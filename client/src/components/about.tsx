import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Scale } from "lucide-react";

export default function About() {
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
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Attorney Sarah BestWorth professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Meet <span className="text-gold">Sarah BestWorth</span>, Esq.
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 15 years of distinguished legal practice, Sarah BestWorth, Esq. has built an exceptional reputation for excellence in corporate law, litigation, and strategic legal counsel. As the founding attorney of BestWorth Law Firm, she brings unparalleled expertise and personalized attention to every case.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <GraduationCap className="text-gold text-xl w-8 h-8 mr-3" />
                <span className="text-gray-700">Harvard Law School, J.D., Magna Cum Laude</span>
              </div>
              <div className="flex items-center">
                <Award className="text-gold text-xl w-8 h-8 mr-3" />
                <span className="text-gray-700">Super Lawyers Rising Star (2018-2023)</span>
              </div>
              <div className="flex items-center">
                <Scale className="text-gold text-xl w-8 h-8 mr-3" />
                <span className="text-gray-700">State Bar Certified Specialist</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-navy text-white hover:bg-gray-800"
            >
              Get to Know Me Better
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
