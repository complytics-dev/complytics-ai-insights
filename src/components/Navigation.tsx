import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";



export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/complytics-logo-new.png" 
              alt="Complytics Logo" 
              className="h-28 w-auto flex items-center"
            />
          </Link>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/team">
              <Button variant="outline" size="sm">
                About
              </Button>
            </Link>
            <Link to="/waitlist">
              <Button variant="outline" size="sm">
                Join Waitlist
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Link to="/team" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    About
                  </Button>
                </Link>
                <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;