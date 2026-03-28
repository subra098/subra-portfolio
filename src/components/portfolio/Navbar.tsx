import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  Home, 
  User, 
  Briefcase, 
  Cpu, 
  LayoutGrid, 
  GraduationCap, 
  Mail,
  MessageSquare,
  Menu,
  X
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Projects", href: "#projects", icon: LayoutGrid },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50, y: "-50%" }}
      animate={{ opacity: 1, x: 0, y: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed z-50 right-2 sm:right-4 lg:right-10 top-1/2 flex flex-col items-center pointer-events-none select-none"
    >
      <div className="flex flex-col items-center gap-2.5 p-1.5 sm:p-2 rounded-full bg-[#0d1117]/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto max-sm:bg-transparent max-sm:border-none max-sm:shadow-none max-sm:backdrop-blur-none">
        <LayoutGroup id="nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            const isHovered = hoveredLink === link.href;
            
            return (
              <div key={link.href} className="relative flex items-center group">
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: -10 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0d1117]/90 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-primary whitespace-nowrap shadow-xl hidden sm:block"
                    >
                      {link.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => scrollTo(link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative p-2.5 sm:p-3.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-black/50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] border border-white/5 max-sm:bg-transparent max-sm:shadow-none max-sm:border-none"
                      : "text-muted-foreground/60 hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <link.icon size={20} className={`sm:w-[22px] sm:h-[22px] transition-transform duration-300 ${isActive ? "drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] scale-110" : "group-hover:scale-110"}`} />
                  
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border-r-2 border-primary/40 pointer-events-none max-sm:border-r-0 max-sm:border-primary/60 max-sm:border-l-2"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </LayoutGroup>
      </div>
    </motion.nav>
  );
};

export default Navbar;
