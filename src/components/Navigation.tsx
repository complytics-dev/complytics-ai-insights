import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Product", path: "/product" },
  { name: "Demo", path: "/demo" },
  { name: "About", path: "/team" }
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine if current page has a light background
  const isLightPage = location.pathname === "/team";
  
  // Dynamic styling based on page background
  const navStyles = isLightPage 
    ? "backdrop-blur-sm border-b border-gray-200 shadow-sm"
    : "bg-background/95 backdrop-blur-sm border-b border-border";
  
  const textStyles = isLightPage
    ? "text-gray-100"
    : "text-foreground";
  
  const mutedTextStyles = isLightPage
    ? "text-gray-300"
    : "text-muted-foreground";
  
  const logoStyles = isLightPage
    ? "text-gray-100"
    : "text-foreground";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 ${navStyles}`}
      style={isLightPage ? { backgroundColor: '#1C2431' } : {}}
    >
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${textStyles} hover:text-primary transition-colors ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
              <X className={`h-6 w-6 ${textStyles}`} />
            ) : (
              <Menu className={`h-6 w-6 ${textStyles}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${textStyles} hover:text-primary transition-colors ${
                    location.pathname === item.path ? "text-primary" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
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