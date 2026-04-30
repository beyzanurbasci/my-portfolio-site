import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight, Eye } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import beyzanurPortrait from "@/assets/beyzanur-portrait.jpeg";

const HeroSection = () => (
  <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
    <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
      <motion.div {...fadeIn}>
        <span className="text-primary font-mono text-sm tracking-widest mb-4 block uppercase">
          {" "}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter mb-6 leading-[1.05]">
          Merhaba, Ben <br />
          <span className="gradient-text">BEYZANUR BAŞÇI</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Yazılım Geliştirici &amp; Web Tasarımcı. Modern, kullanıcı dostu ve
          ölçeklenebilir web uygulamaları geliştiriyorum.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#projeler" className="btn-primary px-8 py-4 flex items-center gap-2 text-sm">
            Projelerimi Gör <ChevronRight size={18} />
          </a>
          <a
            href="/Beyzanur-Basci-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 flex items-center gap-2 text-sm"
          >
            <Eye size={18} /> CV Görüntüle
          </a>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/beyzanur-basci-" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:hello@beyzanur.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative justify-self-center md:justify-self-end"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent blur-2xl rounded-full" />
        <img
          src={beyzanurPortrait}
          alt="Beyzanur Başçı portre"
          className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border border-border/40 shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
