import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";



export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  const isAboutPage = location.pathname === '/team';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${isAboutPage ? 'bg-gray-900/95' : 'bg-gradient-subtle/95'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isDark || location.pathname === '/team' ? "/complyticsdark.png" : "/complyticslight.png"} 
              alt="Complytics Logo" 
              className="h-36 w-auto flex items-center"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`relative py-2 text-sm font-medium transition-all duration-300 ${
              location.pathname === '/' 
                ? (isAboutPage ? 'text-white' : 'text-foreground')
                : (isAboutPage ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-foreground')
            }`}>
              Home
              {location.pathname === '/' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link to="/team" className={`relative py-2 text-sm font-medium transition-all duration-300 ${
              location.pathname === '/team' 
                ? (isAboutPage ? 'text-white' : 'text-foreground')
                : (isAboutPage ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-foreground')
            }`}>
              About
              {location.pathname === '/team' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link to="/contact-us" className={`relative py-2 text-sm font-medium transition-all duration-300 ${
              location.pathname === '/contact-us' 
                ? (isAboutPage ? 'text-white' : 'text-foreground')
                : (isAboutPage ? 'text-gray-300 hover:text-white' : 'text-muted-foreground hover:text-foreground')
            }`}>
              Contact Us
              {location.pathname === '/contact-us' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <a href="https://calendly.com/rishab-motgi-complytics/complytics-discovery-call?back=1&month=2025-09" target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isAboutPage 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-foreground text-background hover:bg-foreground/90'
            }`}>
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isAboutPage ? 'text-white' : 'text-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isAboutPage ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block py-3 transition-colors ${
                isAboutPage ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'
              }`}>
                Home
              </Link>
              <Link to="/team" onClick={() => setIsMenuOpen(false)} className={`block py-3 transition-colors ${
                isAboutPage ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'
              }`}>
                About
              </Link>
              <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className={`block py-3 transition-colors ${
                isAboutPage ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'
              }`}>
                Contact Us
              </Link>
              <a href="https://calendly.com/rishab-motgi-complytics/complytics-discovery-call?back=1&month=2025-09" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className={`block mt-4 px-4 py-3 rounded-lg text-center font-medium transition-colors ${
                isAboutPage 
                  ? 'bg-white text-gray-900 hover:bg-gray-100' 
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}>
                Book Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;