import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, Twitter, Youtube, Send, Instagram, FolderOpen, Users, Cpu } from "lucide-react";
import CodeRain from "./CodeRain";
import FloatingShapes from "./FloatingShapes";

const stats = [
  { label: "Projects", value: "5+", icon: FolderOpen },
  { label: "Experience", value: "1+ Yrs", icon: Users },
  { label: "Technologies", value: "10+", icon: Cpu },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
    >
      <CodeRain />
      <FloatingShapes />

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6"
            >
              Let’s Work Together
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient block lg:inline">Subrajit Jena</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              A passionate <span className="text-foreground font-semibold">Full Stack Developer </span>  
             building seamless digital experiences with a focus on modern web technologies and user-centric design.
            </motion.p>

            {/* Redesigned Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 lg:gap-6 w-full max-w-2xl"
            >
              {stats.map((stat, i) => (
                <motion.div 
                   key={i} 
                   whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.4)" }}
                   className="relative group p-4 lg:p-6 rounded-2xl bg-[#1a1c23]/60 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                    <stat.icon size={20} className="text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="mt-2">
                    <div className="font-display text-2xl lg:text-3xl font-black text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] lg:text-xs text-muted-foreground/60 font-mono uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>

                  {/* Subtle inner shadow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] transition-all pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 blur-md bg-gradient-primary rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Metallic Ring Wrapper */}
              <div className="relative p-1 rounded-full bg-gradient-primary">
                <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-[6px] border-[#1a1c23] shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Subrajit Jena"
                    className="w-full h-full object-cover object-center scale-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-10 w-full px-4"
            >
              <a
                href="/resume.jpg"
                download="Subrajit_Jena_Resume.jpg"
                className="flex-1 min-w-[140px] px-6 py-3.5 rounded-full bg-[#1a1c23]/80 backdrop-blur-md border border-primary/40 text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Download CV</span>
                <Download size={16} className="text-primary group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <button 
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 min-w-[140px] px-6 py-3.5 rounded-full bg-[#1a1c23]/80 backdrop-blur-md border border-primary/40 text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Explore Projects</span>
                <ExternalLink size={16} className="text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Social Links below buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-6 mt-10"
            >
              {[
                { icon: Github, href: "https://github.com/subra098" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Send, href: "mailto:subrajitj44@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-muted-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            Scroll Down
          </span>
          <ArrowDown size={18} className="text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
