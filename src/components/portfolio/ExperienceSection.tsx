import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Company",
    period: "Jan 2024 – Present",
    description:
      "Building responsive web applications using React, TypeScript, and Tailwind CSS. Collaborating with design and backend teams to deliver high-quality products.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Web Development Intern",
    company: "Startup Inc.",
    period: "Jun 2023 – Dec 2023",
    description:
      "Developed interactive UI components and implemented responsive designs. Participated in code reviews and agile development processes.",
    skills: ["JavaScript", "HTML/CSS", "Git", "Figma"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 bg-card/30">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="My Experience" subtitle="Professional journey and growth" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-2.5 md:left-auto md:right-auto top-1 w-3 h-3 rounded-full bg-primary shadow-glow z-10"
              style={{
                [i % 2 === 0 ? "right" : "left"]: window?.innerWidth >= 768 ? "-6.5px" : undefined,
                left: window?.innerWidth < 768 ? "10px" : (i % 2 !== 0 ? "-6.5px" : undefined),
                right: window?.innerWidth >= 768 && i % 2 === 0 ? "-6.5px" : undefined,
              }}
            />

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className={`flex items-center gap-2 mb-2 text-primary text-sm font-mono ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                <Calendar size={14} />
                {exp.period}
              </div>
              <h3 className="font-display text-lg font-bold mb-1">{exp.role}</h3>
              <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                <Briefcase size={14} />
                {exp.company}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
