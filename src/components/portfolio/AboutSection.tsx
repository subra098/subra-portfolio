import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const strengths = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect, responsive interfaces" },
  { icon: Rocket, title: "Performance", desc: "Optimized for speed and efficiency" },
  { icon: Zap, title: "Fast Learner", desc: "Adapting quickly to new technologies" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a passionate Full Stack Developer building
            modern web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            My journey in tech started with curiosity about how websites work, and it
            has evolved into a deep passion for creating impactful digital experiences.
            I specialize in React, TypeScript, and modern frontend technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or writing technical articles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {strengths.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{title}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
