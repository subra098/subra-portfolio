import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Techzex Software Private Limited",
    period: "Aug 2024 – Jan 2025",
    description:
      "Worked as a Web Development Intern, contributing to the development of responsive and user-friendly web applications. Collaborated with the team to build clean UI components and improve overall user experience.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    role: "Frontend Developer",
    company: "InternPe",
    period: "Feb 2025 – Apr 2025",
    description:
      "Worked on building responsive and user-friendly web interfaces using modern frontend technologies. Collaborated with mentors and team members to develop real-world projects and improve UI performance.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  }
  
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
            <div className={`absolute top-2 w-3 h-3 rounded-full bg-primary shadow-glow z-10 left-[10px] ${
              i % 2 === 0 ? "md:left-auto md:-right-[6.5px]" : "md:-left-[6.5px]"
            }`} />

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
