import { motion } from "framer-motion";
import { fadeIn, fadeInTransition } from "@/lib/animations";

const AboutSection = () => (
  <section id="hakkimda" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div {...fadeIn} className="relative group order-2 md:order-1">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="aspect-square rounded-2xl glass-card overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
            <span className="text-6xl font-bold text-muted-foreground/20 tracking-tighter select-none">BB</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...fadeInTransition, delay: 0.15 }}
        className="order-1 md:order-2"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
          Karmaşık Problemlere<br />Zarif Çözümler.
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>
            Teknolojiye olan tutkum, kodun sadece çalışması değil, aynı zamanda bir
            sanat eseri gibi hissettirmesi gerektiği inancıyla birleşiyor. Son 4
            yıldır, kullanıcı deneyimini merkeze alan dijital ürünler inşa
            ediyorum.
          </p>
          <p>
            Modern JavaScript ekosisteminde uzmanlaşarak, performans ve
            erişilebilirlik standartlarını en üst düzeyde tutan projeler
            geliştiriyorum.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 rounded-xl glass-card">
            <h4 className="text-foreground font-bold text-2xl">4+</h4>
            <p className="text-muted-foreground text-sm">Yıllık Deneyim</p>
          </div>
          <div className="p-4 rounded-xl glass-card">
            <h4 className="text-foreground font-bold text-2xl">20+</h4>
            <p className="text-muted-foreground text-sm">Tamamlanan Proje</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
