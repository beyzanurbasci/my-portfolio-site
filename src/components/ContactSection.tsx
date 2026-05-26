import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: payload });
      if (error) throw error;
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[140px] opacity-[0.04] pointer-events-none bg-white" />

        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/40 font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Contact
          </motion.span>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tighter"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get in touch with me
          </h2>
          <p className="text-muted-foreground text-base mb-10">Let's work together.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Name</label>
                <input name="name" type="text" className="form-input" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email</label>
                <input name="email" type="email" className="form-input" placeholder="hello@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea name="message" rows={4} className="form-input resize-none" placeholder="Tell me about your project..." required />
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-sm disabled:opacity-60"
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? "Sending..." : submitted ? "Sent ✓" : "Send"}
              {!submitted && !loading && <Send size={16} />}
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
                className="w-11 h-11 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
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
