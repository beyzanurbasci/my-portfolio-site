import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { fadeIn } from "@/lib/animations";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="iletisim" className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        {...fadeIn}
        className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[120px] -z-10 opacity-30"
          style={{ background: "hsl(var(--primary))" }}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
          Benimle iletişime geçin
        </h2>
        <p className="text-muted-foreground text-lg mb-8">Birlikte çalışalım.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">İsim</label>
              <input type="text" className="form-input" placeholder="Adınız Soyadınız" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">E-Posta</label>
              <input type="email" className="form-input" placeholder="merhaba@ornek.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Mesaj</label>
            <textarea rows={4} className="form-input resize-none" placeholder="Projenizden bahsedin..." required />
          </div>
          <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-sm">
            {submitted ? "Gönderildi ✓" : (<>Gönder <Send size={16} /></>)}
          </button>
        </form>

        <div className="flex gap-6 mt-8 justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/beyzanur-basci-" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:hello@beyzanur.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email"><Mail size={20} /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
