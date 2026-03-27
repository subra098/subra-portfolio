import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Python", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 72 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 92 },
      { name: "Linux", level: 68 },
      { name: "CI/CD", level: 60 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15, duration: 0.6 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="font-display text-lg font-bold text-gradient mb-6">
              {cat.category}
            </h3>
            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: ci * 0.15 + si * 0.08,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
