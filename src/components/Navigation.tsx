import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "timeline", label: "Journey" },
    { id: "achievements", label: "Awards" },
    { id: "gallery", label: "Gallery" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <button
          onClick={() => scrollToSection("home")}
          className="site-nav__brand"
          aria-label="Go to home"
        >
          <span>AJI</span>
          <strong>OJT Journal</strong>
        </button>

        <div className="site-nav__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="site-nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="site-nav__mobile">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
