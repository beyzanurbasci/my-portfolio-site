import { motion } from "framer-motion";
import { Code2, Layout, Server, Palette, GitBranch, Zap, Layers, Globe, Brain, Eye, Database, Sparkles, Cpu, FileSearch, Workflow, Cog } from "lucide-react";

const skills = [
  { name: "C#", icon: Code2 },
  { name: "ASP.NET", icon: Server },
  { name: "MVC", icon: Layers },
  { name: "Web Development", icon: Globe },
  { name: "Software Architecture", icon: Workflow },
  { name: "Requirement Analysis", icon: FileSearch },
  { name: "HTML", icon: Layout },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Zap },
  { name: "Python", icon: Code2 },
  { name: "Computer Vision", icon: Eye },
  { name: "YOLO (Ultralytics)", icon: Brain },
  { name: "Data Annotation", icon: Sparkles },
  { name: "Data Preprocessing", icon: Database },
  { name: "Model Training", icon: Cpu },
  { name: "AI Deployment Pipelines", icon: Cog },
];

const SkillsSection = () => (
  <section id="yetenekler" className="relative py-24 md:py-32 px-6 max-w-6xl mx-auto">
    <div className="section-divider mb-24" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-foreground/40 font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
      >
        Technologies
      </motion.span>
      <h2
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tighter"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Tech Stack
      </h2>
      <p className="text-muted-foreground text-sm max-w-md mx-auto">
        Tools I use and the areas I specialize in.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group glass-card rounded-2xl p-5 flex flex-col items-center gap-3 text-center cursor-default"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{
                background: "hsla(0, 0%, 100%, 0.04)",
                border: "1px solid hsla(0, 0%, 100%, 0.08)",
              }}
            >
              <Icon size={22} className="text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default SkillsSection;
