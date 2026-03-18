import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeIn, fadeInTransition } from "@/lib/animations";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Topçu Holding Kurumsal Web Sitesi",
    description: "Topçu Holding için modern, kurumsal kimliği yansıtan ve tam duyarlı (responsive) bir web sitesi geliştirilmesi.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://www.topcuholding.com/",
  },
  {
    title: "E-Ticaret Dashboard",
    description: "Veri görselleştirme ve envanter yönetimi için geliştirilmiş modern admin paneli.",
    tags: ["TypeScript", "React", "Recharts"],
  },
  {
    title: "SaaS Landing Page",
    description: "Yüksek dönüşüm oranlı, modern ve etkileyici bir satış sayfası tasarımı.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...fadeInTransition, delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className="group glass-card rounded-2xl overflow-hidden transition-all duration-300"
  >
    <div className="aspect-video bg-gradient-to-br from-secondary to-card overflow-hidden relative flex items-center justify-center">
      <span className="text-3xl font-bold text-muted-foreground/10 tracking-tighter select-none">
        {project.title.slice(0, 2).toUpperCase()}
      </span>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 p-2 rounded-full glass-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Projeyi Görüntüle">
          <ExternalLink size={16} className="text-foreground" />
        </a>
      )}
    </div>
    <div className="p-6 md:p-8">
      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground px-2.5 py-1 rounded" style={{ background: "hsla(0,0%,100%,0.05)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projeler" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
    <motion.div {...fadeIn} className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">Seçili Projeler</h2>
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
