import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#hakkimda" },
  { label: "Skills", href: "#yetenekler" },
  { label: "Projects", href: "#projeler" },
  { label: "Contact", href: "#iletisim" },
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
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 glass-navbar transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-foreground font-bold tracking-tighter text-xl relative group"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          BB<span className="text-foreground/40">.</span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-px bg-foreground/30 group-hover:w-full transition-all duration-300"
          />
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-foreground transition-colors duration-300 py-1 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground/50 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <a href="#iletisim" className="hidden md:inline-flex btn-primary px-5 py-2 text-xs tracking-wide">
          Get in Touch
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-navbar border-t border-border px-6 py-4 space-y-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
