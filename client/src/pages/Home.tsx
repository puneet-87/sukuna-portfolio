import { motion } from "framer-motion";
import { SukunaButton } from "@/components/ui/SukunaButton";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-24">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full space-y-8"
      >
        {/* Decorative Sigil Top */}
        <motion.div variants={item} className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="space-y-2">
          <motion.h2 variants={item} className="text-primary font-display tracking-[0.3em] text-sm md:text-base uppercase font-bold">
            Fullstack Developer & Designer
          </motion.h2>
          
          <motion.h1 
            variants={item}
            className="font-display font-black text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter text-white mix-blend-difference"
          >
            WELCOME TO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-red-900 drop-shadow-[0_0_10px_rgba(220,20,60,0.5)]">
              PUNEET MALHOTRA'S PERSONAL VOID
            </span>
          </motion.h1>
          
          <motion.p variants={item} className="text-muted-foreground font-mono text-sm md:text-lg max-w-2xl mt-6 border-l-2 border-primary pl-6 py-2">
            I craft digital experiences with the precision of a sorcerer. 
            Merging high-performance code with striking aesthetics.
          </motion.p>
        </div>

        <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
          <Link href="/projects">
            <SukunaButton>
              View Creations <ArrowRight className="w-4 h-4" />
            </SukunaButton>
          </Link>
          <SukunaButton variant="secondary">
            Resume <Download className="w-4 h-4" />
          </SukunaButton>
        </motion.div>

        <motion.div variants={item} className="flex gap-6 pt-12 text-muted-foreground">
          {[Github, Twitter, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        {/* Decorative Sigil Bottom */}
        <motion.div variants={item} className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </motion.div>
    </div>
  );
}
