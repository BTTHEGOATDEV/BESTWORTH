import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <section id="consultation" className="py-20 gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Schedule Your Legal Consultation
          </h2>
          <p className="text-xl text-navy mb-8 max-w-2xl mx-auto">
            Get personalized legal advice tailored to your specific situation. Book a consultation today and take the first step toward resolving your legal matters.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-gold hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-navy mb-4">Initial Consultation</h3>
              <div className="text-4xl font-bold text-gold mb-4">$200</div>
              <p className="text-gray-700 mb-6">60-minute comprehensive review of your legal matter with strategic recommendations.</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Case evaluation and analysis
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Strategic planning discussion
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Next steps recommendations
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Follow-up summary email
                </li>
              </ul>
              <a 
                href="/consultation"
                className="w-full bg-navy text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold inline-block text-center"
              >
                Book Now - $200
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-gold hover:shadow-2xl transition-all duration-300 border-4 border-navy relative">
              <div className="bg-navy text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-navy mb-4">Extended Consultation</h3>
              <div className="text-4xl font-bold text-gold mb-4">$350</div>
              <p className="text-gray-700 mb-6">90-minute deep-dive consultation with detailed action plan and document review.</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Everything in Initial Consultation
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Document review and analysis
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>Detailed action plan creation
                </li>
                <li className="flex items-center">
                  <span className="text-gold mr-3">✓</span>7-day follow-up call included
                </li>
              </ul>
              <a 
                href="/consultation"
                className="w-full bg-gold text-navy px-6 py-3 rounded-lg hover:bg-deep-gold transition-colors font-semibold inline-block text-center"
              >
                Book Now - $350
              </a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
