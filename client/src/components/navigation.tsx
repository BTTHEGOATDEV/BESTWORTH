import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <button
      onClick={onClick || (() => scrollToSection(href.replace('#', '')))}
      className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </button>
  );

  return (
    <nav className="bg-navy shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-gold cursor-pointer">BestWorth</h1>
                <p className="text-xs text-gray-300 -mt-1">Law Firm</p>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <button className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </button>
              </Link>
              <Link href="/about">
                <button className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
                  About
                </button>
              </Link>
              <Link href="/services">
                <button className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
              </Link>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <Link href="/consultation">
                <Button className="bg-gold hover:bg-deep-gold text-navy">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-gold"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy border-t border-gray-700">
            <div className="block px-3 py-2">
              <Link href="/">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors w-full text-left"
                >
                  Home
                </button>
              </Link>
            </div>
            <div className="block px-3 py-2">
              <Link href="/about">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors w-full text-left"
                >
                  About
                </button>
              </Link>
            </div>
            <div className="block px-3 py-2">
              <Link href="/services">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-gold px-3 py-2 text-sm font-medium transition-colors w-full text-left"
                >
                  Services
                </button>
              </Link>
            </div>
            <div className="block px-3 py-2">
              <NavLink href="#testimonials">Testimonials</NavLink>
            </div>
            <div className="block px-3 py-2">
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <div className="px-3 py-2">
              <Link href="/consultation">
                <Button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gold hover:bg-deep-gold text-navy"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
