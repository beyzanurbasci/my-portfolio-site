import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight, Download } from "lucide-react";
import { fadeIn } from "@/lib/animations";

const HeroSection = () => (
  <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
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
        <button className="btn-secondary px-8 py-4 flex items-center gap-2 text-sm">
          <Download size={18} /> CV İndir
        </button>
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
  </section>
);

export default HeroSection;
