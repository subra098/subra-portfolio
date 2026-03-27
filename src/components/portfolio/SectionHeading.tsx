import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
      {title.split(" ").map((word, i, arr) =>
        i === arr.length - 1 ? (
          <span key={i} className="text-gradient"> {word}</span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </h2>
    <p className="text-muted-foreground max-w-md mx-auto">{subtitle}</p>
    <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mt-4" />
  </motion.div>
);

export default SectionHeading;
