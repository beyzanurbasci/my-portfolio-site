import { motion } from "framer-motion";

const skills = [
  "React",
  "MVC",
  "TypeScript",
  "HTML / CSS",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Responsive Design",
  "Next.js",
  "Framer Motion",
];

const SkillsSection = () => (
  <section id="yetenekler" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
        Teknoloji Yığını
      </h2>
      <p className="text-muted-foreground text-sm">
        Kullandığım araçlar ve uzmanlık alanlarım.
      </p>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className="skill-pill"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </section>
);

export default SkillsSection;
