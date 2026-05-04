import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import topcuHoldingImg from "@/assets/topcu-holding.png";
import basciKatlanirImg from "@/assets/basci-katlanir.png";
import fortisBlogImg from "@/assets/fortis-blog.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "Topçu Holding Kurumsal Web Sitesi",
    description:
      "Topçu Holding için modern, kurumsal kimliği yansıtan ve tam duyarlı (responsive) bir web sitesi geliştirilmesi.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://www.topcuholding.com/",
    image: topcuHoldingImg,
    accent: "340 85% 60%",
  },
  {
    title: "Başçı Katlanır Cam Sistemleri",
    description:
      "Başçı Katlanır Cam Sistemleri için modern, kurumsal kimliği yansıtan ve tam duyarlı bir web sitesi geliştirilmesi.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://bascikatlanir.com/",
    image: basciKatlanirImg,
    accent: "270 80% 65%",
  },
  {
    title: "Fortis Designer Blog Yönetimi",
    description:
      "Fortis Designer blog hesabının içerik yönetimini üstleniyorum. Düzenli olarak SEO uyumlu, kullanıcı odaklı blog yazıları planlıyor ve yayınlıyorum.",
    tags: ["İçerik Yönetimi", "SEO", "Blog"],
    link: "https://fortisdesigner.com/blog",
    image: fortisBlogImg,
    accent: "185 80% 55%",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative"
  >
    <div className="glass-card rounded-3xl overflow-hidden transition-all duration-500">
      {/* Image with overlay */}
      <div className="aspect-[16/10] overflow-hidden relative">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-card">
            <span className="text-4xl font-bold text-muted-foreground/10">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, hsla(${project.accent}, 0.3), transparent 60%)`,
          }}
        />

        {/* Visit link */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{
              background: "hsla(0, 0%, 0%, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsla(0, 0%, 100%, 0.2)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Projeyi Görüntüle"
          >
            <ArrowUpRight size={16} className="text-white" />
          </motion.a>
        )}
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <h3
            className="text-lg font-bold text-foreground group-hover:gradient-text transition-all duration-300"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full transition-colors duration-300"
              style={{
                background: `hsla(${project.accent}, 0.08)`,
                color: `hsl(${project.accent})`,
                border: `1px solid hsla(${project.accent}, 0.15)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projeler" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
    <div className="section-divider mb-24" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
      >
        Çalışmalar
      </motion.span>
      <h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tighter"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Seçili Projeler
      </h2>
      <p className="text-muted-foreground text-sm">
        Dijital dünyada iz bırakan işler.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
