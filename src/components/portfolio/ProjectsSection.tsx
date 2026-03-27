import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, authentication, payment integration, and admin dashboard. Built with modern frontend and backend technologies.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop, user roles, and project boards for efficient team workflows.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chatbot powered by machine learning with natural language processing, conversation history, and customizable AI personas.",
    tech: ["React", "Python", "OpenAI API", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations, dark theme, and interactive elements to showcase projects and skills.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 bg-card/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Folder size={24} className="text-primary" />
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View code"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View live"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
