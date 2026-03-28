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
      { name: "PostgreSQL", level: 72 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Linux", level: 68 },
    ],
  },
];

const containerVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      staggerChildren: 0.08,
      ease: "easeOut",
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-4 relative overflow-hidden">
    {/* Decorative background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.category}
            custom={ci}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            whileHover={{ 
              y: -8,
              borderColor: "hsl(var(--primary) / 0.3)",
              boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)"
            }}
            className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 transition-colors duration-300"
          >
            <motion.h3 
              variants={itemVariants}
              className="font-display text-xl font-bold text-gradient mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-primary/50" />
              {cat.category}
            </motion.h3>
            
            <div className="space-y-6">
              {cat.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="h-2 rounded-full bg-secondary/50 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5,
                        duration: 1.2,
                        ease: [0.33, 1, 0.68, 1], // Equivalent to circOut
                      }}
                      className="h-full rounded-full bg-gradient-primary relative"
                    >
                      {/* Animated glow overlay */}
                      <motion.div 
                        animate={{ 
                          x: ["-100%", "100%"],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2, 
                          ease: "linear",
                          delay: 1
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-20"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
