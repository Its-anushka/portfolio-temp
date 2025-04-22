
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-primary">
          Anushka Singh
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`transition-colors hover:text-primary ${
                  isActive(route.path) 
                    ? "text-primary font-medium" 
                    : "text-foreground/70"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-background absolute top-full left-0 w-full border-b">
          <ul className="flex flex-col py-4 px-6 space-y-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={`block transition-colors hover:text-primary ${
                    isActive(route.path) 
                      ? "text-primary font-medium" 
                      : "text-foreground/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
