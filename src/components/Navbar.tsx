import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Yetenekler", href: "#yetenekler" },
  { label: "Projeler", href: "#projeler" },
  { label: "İletişim", href: "#iletisim" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-navbar transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-foreground font-bold tracking-tighter text-xl">
          BB<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#iletisim"
          className="hidden md:inline-flex btn-primary px-5 py-2 text-xs tracking-wide"
        >
          İletişime Geç
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-navbar border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setMobileOpen(false)}
            className="block btn-primary text-center px-5 py-3 text-sm mt-2"
          >
            İletişime Geç
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
