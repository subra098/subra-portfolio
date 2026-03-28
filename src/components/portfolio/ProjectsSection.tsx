import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Feedback Management System",
    description:
      "A platform for collecting and managing students feedback efficiently. Allows structured submission, storage, and review of feedback data.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Digital Gatepass Management System",
    description:
      "A web-based system for managing and tracking entry/exit records within a campus or hostel. Includes user authentication and admin control for monitoring requests.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Baba Brand Fashion (E-Commerce Platform)",
    description:
      "A full-featured e-commerce web application with product listing, cart functionality, and user authentication. Designed to provide a smooth and responsive shopping experience.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Hotel Amruta Bhojana Website",
    description:
      "Developed and deployed a live hotel website focused on providing a clean user experience and clear service presentation. The platform showcases room details, amenities, and booking-related information for customers.",
    tech: ["React.js", "Node.js", "Express.js"],
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
