import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight, Sparkles } from "lucide-react";
import beyzanurPortrait from "@/assets/beyzanur-portrait.jpeg";

const FloatingParticle = ({ delay, x, size }: { delay: number; x: number; size: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{ width: size, height: size, left: `${x}%`, bottom: "-10%", background: "hsl(250 85% 70%)", boxShadow: "0 0 10px hsl(243 85% 65%)" }}
    animate={{
      y: [0, -800],
      opacity: [0, 0.6, 0.6, 0],
      scale: [0, 1, 1, 0.5],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[100vh] flex flex-col justify-center overflow-hidden">
    <div className="absolute inset-0 mesh-gradient pointer-events-none" />
    <div
      className="absolute top-1/4 -left-32 w-96 h-96 opacity-40 blur-3xl"
      style={{ background: "hsl(243 75% 59%)", animation: "blob-morph 8s ease-in-out infinite" }}
    />
    <div
      className="absolute bottom-1/4 -right-32 w-80 h-80 opacity-30 blur-3xl"
      style={{ background: "hsl(250 85% 70%)", animation: "blob-morph 10s ease-in-out infinite reverse" }}
    />

    {[...Array(6)].map((_, i) => (
      <FloatingParticle key={i} delay={i * 1.5} x={10 + i * 15} size={3 + Math.random() * 4} />
    ))}

    <div className="relative grid md:grid-cols-[1fr_auto] gap-16 items-center z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <Sparkles size={14} className="text-foreground/50" />
          <span className="text-foreground/50 font-mono text-xs tracking-[0.3em] uppercase">
            Portfolio 2026
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[0.95]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Hello, I'm
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] gradient-text"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            BEYZANUR
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          As a Software Engineering student, I'm interning at Atık Nakit on
          image processing and YOLO models, while also building enterprise web
          projects with C# and ASP.NET — combining my technical expertise with
          experience in digital operations management and community leadership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a href="#projeler" className="btn-primary px-8 py-4 flex items-center gap-2 text-sm">
            View My Projects <ChevronRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex gap-4"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative justify-self-center md:justify-self-end"
      >
        <motion.div
          className="absolute -inset-6 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 50%, hsla(243, 90%, 65%, 0.6) 75%, hsla(250, 90%, 75%, 0.3) 90%, transparent 100%)",
            padding: "2px",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-background" />
        </motion.div>

        <div className="absolute -inset-8 blur-3xl rounded-full" style={{ background: "hsla(243, 85%, 60%, 0.3)" }} />
        <img
          src={beyzanurPortrait}
          alt="Beyzanur Başçı portrait"
          className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl"
          style={{ border: "3px solid hsla(243, 85%, 70%, 0.3)" }}
        />

      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-foreground/50"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
