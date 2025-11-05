import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "آراء العملاء", path: "/testimonials" },
    { name: "فروعنا", path: "/#branches", isScroll: true },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white font-bold">F</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground font-cairo leading-tight">
                عيادة الفايز
              </h1>
              <p className="text-xs text-muted-foreground font-cairo">لطب الأسنان</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link.isScroll) {
                    e.preventDefault();
                    handleScrollTo(link.path.split('#')[1]);
                  }
                }}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-cairo font-semibold transition-all duration-300 ${
                    isActive && !link.isScroll
                      ? "bg-gradient-primary text-primary-foreground shadow-soft"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => window.open('https://wa.me/201289666684', '_blank')}
              className="font-cairo"
            >
              <Phone className="ml-2 w-4 h-4" />
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="القائمة"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (link.isScroll) {
                      e.preventDefault();
                      handleScrollTo(link.path.split('#')[1]);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-cairo font-semibold transition-all ${
                      isActive && !link.isScroll
                        ? "bg-gradient-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button
                onClick={() => {
                  window.open('https://wa.me/201289666684', '_blank');
                  setIsMenuOpen(false);
                }}
                className="mt-2 font-cairo"
              >
                <Phone className="ml-2 w-4 h-4" />
                احجز الآن
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
