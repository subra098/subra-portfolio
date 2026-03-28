import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "NALANDA INSTITUTE OFTECHNOLOGY",
    period: "2022 – 2026",
    grade: "CGPA: 8.5/10",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "GHANTESWAR HS SCHOOL , GHANTESWAR",
    period: "2020 – 2022",
    grade: "Percentage: 70%",
  },
];

const certificates = [
  "Full Stack Web Development – Udemy",
  "React & TypeScript Masterclass – Coursera",
  "Data Structures & Algorithms – LeetCode",
];

const EducationSection = () => (
  <section id="education" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Education" subtitle="Academic background and certifications" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="font-mono text-primary">{edu.period}</span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-display text-lg font-bold text-gradient mb-6 flex items-center gap-2">
            <Award size={20} className="text-primary" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
