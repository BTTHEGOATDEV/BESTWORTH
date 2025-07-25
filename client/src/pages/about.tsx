import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Scale, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gold">Sarah BestWorth</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dedicated to providing exceptional legal representation with a personal touch
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-light-gray">
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
                Experience You Can <span className="text-gold">Trust</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of distinguished legal practice, Sarah BestWorth has built a reputation for excellence in corporate law, litigation, and strategic legal counsel. Her commitment to achieving the best possible outcomes for her clients has earned her recognition among the top attorneys in the region.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Sarah founded BestWorth Law Firm with a simple philosophy: every client deserves personalized attention and unwavering advocacy. She believes that understanding each client's unique situation is the key to providing effective legal solutions.
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
              
              <Link href="/consultation">
                <Button className="bg-gold hover:bg-deep-gold text-navy px-8 py-3 text-lg font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            My <span className="text-gold">Philosophy</span>
          </h2>
          <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
            "Every legal challenge is an opportunity to create a better outcome for my clients. 
            I believe in combining strategic thinking with compassionate service to deliver results that truly matter."
          </blockquote>
          <p className="text-lg text-gray-600">
            — Sarah BestWorth, Founding Attorney
          </p>
        </div>
      </section>

      {/* Practice Stats */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <p className="text-white text-lg">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <p className="text-white text-lg">Cases Successfully Resolved</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <p className="text-white text-lg">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">
            Ready to Get <span className="text-gold">Started</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-gold rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <Phone className="text-navy w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Call Today</h3>
              <p className="text-gray-700">(555) 123-4567</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-gold rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <Mail className="text-navy w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Email Me</h3>
              <p className="text-gray-700">sarah@bestworthlaw.com</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-gold rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <MapPin className="text-navy w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">Visit the Office</h3>
              <p className="text-gray-700">123 Legal Plaza, Suite 456</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button 
                size="lg"
                className="bg-gold hover:bg-deep-gold text-navy px-8 py-4 text-lg font-semibold"
              >
                Book Consultation
              </Button>
            </Link>
            <Link href="/#contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}