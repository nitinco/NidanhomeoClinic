import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">NIDAN</h1>
              <span className="hidden sm:block text-sm text-muted-foreground">Homeopathy Clinic</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <Link
              to="/profile"
              className="text-foreground hover:text-primary transition-colors"
            >
              Profile
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <Link
              to="/myths-facts"
              className="text-foreground hover:text-primary transition-colors"
            >
              Myths & Facts
            </Link>
            <Link
              to="/life-attitude"
              className="text-foreground hover:text-primary transition-colors"
            >
              Life Attitude
            </Link>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Profile
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <Link
              to="/myths-facts"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Myths & Facts
            </Link>
            <Link
              to="/life-attitude"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Life Attitude
            </Link>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90">
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
