import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Building, Gavel, Handshake, Home, Users, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Comprehensive business legal services including mergers, acquisitions, corporate governance, and compliance matters.",
    features: [
      "Business Formation & Structure",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Compliance & Regulatory",
      "Shareholder Agreements"
    ]
  },
  {
    icon: Gavel,
    title: "Litigation",
    description: "Skilled representation in complex civil litigation, commercial disputes, and appellate matters with proven results.",
    features: [
      "Commercial Litigation",
      "Contract Disputes", 
      "Business Tort Claims",
      "Appellate Practice",
      "Alternative Dispute Resolution"
    ]
  },
  {
    icon: Handshake,
    title: "Contract Law",
    description: "Expert contract drafting, review, and negotiation services to protect your interests and minimize risk.",
    features: [
      "Contract Drafting",
      "Contract Review & Analysis",
      "Negotiation Support",
      "Breach of Contract Claims",
      "Service Agreements"
    ]
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Complete real estate legal services from residential transactions to commercial property development.",
    features: [
      "Residential Transactions",
      "Commercial Real Estate",
      "Property Development",
      "Landlord-Tenant Issues",
      "Zoning & Land Use"
    ]
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Strategic employment law counsel for both employers and employees in workplace disputes and compliance.",
    features: [
      "Employment Contracts",
      "Workplace Discrimination",
      "Wrongful Termination",
      "Wage & Hour Issues",
      "Employee Handbook Development"
    ]
  },
  {
    icon: Shield,
    title: "Estate Planning",
    description: "Comprehensive estate planning services including wills, trusts, and succession planning strategies.",
    features: [
      "Wills & Testaments",
      "Trust Creation & Administration",
      "Estate Administration",
      "Probate Proceedings",
      "Tax Planning Strategies"
    ]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-navy to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Legal <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs with the highest standards of professional excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gold rounded-xl p-4">
                        <IconComponent className="w-8 h-8 text-navy" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href="/consultation">
                        <Button 
                          variant="outline"
                          className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How We <span className="text-gold">Work Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures you receive the best possible legal representation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We discuss your legal needs and objectives in detail</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Strategy Development</h3>
              <p className="text-gray-600">We create a tailored legal strategy for your situation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Implementation</h3>
              <p className="text-gray-600">We execute the strategy with precision and care</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-navy">4</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Results & Follow-up</h3>
              <p className="text-gray-600">We deliver results and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your <span className="text-gold">Legal Needs</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a confidential consultation and let us help you find the best legal solution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button 
                size="lg"
                className="bg-gold hover:bg-deep-gold text-navy px-8 py-4 text-lg font-semibold"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/#contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 text-lg font-semibold"
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