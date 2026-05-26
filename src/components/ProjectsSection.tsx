import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import topcuHoldingImg from "@/assets/topcu-holding.png";
import basciKatlanirImg from "@/assets/basci-katlanir.png";
import fortisBlogImg from "@/assets/fortis-blog.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Topçu Holding Corporate Website",
    description: "Development of a modern, fully responsive corporate website for Topçu Holding that reflects their brand identity.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://www.topcuholding.com/",
    image: topcuHoldingImg,
  },
  {
    title: "Başçı Folding Glass Systems",
    description: "Development of a modern, fully responsive corporate website for Başçı Folding Glass Systems that reflects their brand identity.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://bascikatlanir.com/",
    image: basciKatlanirImg,
  },
  {
    title: "Fortis Designer Blog Management",
    description: "I manage content for the Fortis Designer blog, regularly planning and publishing SEO-friendly, user-focused blog posts.",
    tags: ["Content Management", "SEO", "Blog"],
    link: "https://fortisdesigner.com/blog",
    image: fortisBlogImg,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative"
  >
    <div className="glass-card rounded-3xl overflow-hidden transition-all duration-500">
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
        <h3
          className="text-lg font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-all duration-300"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground px-3 py-1.5 rounded-full"
              style={{
                background: "hsla(0, 0%, 100%, 0.04)",
                border: "1px solid hsla(0, 0%, 100%, 0.08)",
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
        className="text-foreground/40 font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
      >
        Çalışmalar
      </motion.span>
      <h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tighter"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Seçili Projeler
      </h2>
      <p className="text-muted-foreground text-sm">Dijital dünyada iz bırakan işler.</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
