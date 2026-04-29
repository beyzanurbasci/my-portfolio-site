import { motion } from "framer-motion";
import { fadeInTransition } from "@/lib/animations";

const AboutSection = () => (
  <section id="hakkimda" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...fadeInTransition, delay: 0.15 }}
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
