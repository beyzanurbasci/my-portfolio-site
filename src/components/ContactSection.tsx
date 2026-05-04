import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="iletisim" className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <div className="section-divider mb-24" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden noise-overlay"
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: "hsl(340 85% 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: "hsl(270 80% 65%)" }}
        />

        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            İletişim
          </motion.span>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tighter"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Benimle iletişime geçin
          </h2>
          <p className="text-muted-foreground text-base mb-10">
            Birlikte çalışalım.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  İsim
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Adınız Soyadınız"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  E-Posta
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="merhaba@ornek.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Mesaj
              </label>
              <textarea
                rows={4}
                className="form-input resize-none"
                placeholder="Projenizden bahsedin..."
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-sm"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                {submitted ? "Gönderildi ✓" : "Gönder"}
              </span>
              {!submitted && <Send size={16} />}
            </motion.button>
          </form>

          <div className="flex gap-4 mt-10 justify-center">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/beyzanur-basci-", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@beyzanur.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                style={{
                  background: "hsla(0, 0%, 100%, 0.04)",
                  border: "1px solid hsla(0, 0%, 100%, 0.08)",
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
