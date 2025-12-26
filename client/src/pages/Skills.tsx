import { motion } from "framer-motion";
import { CursedCard } from "@/components/ui/CursedCard";
import { Code, Database, Globe, Layers, Cpu, Paintbrush } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Techniques",
      icon: Globe,
      items: ["React.js", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion", "Three.js"],
      desc: "Constructing visual realities."
    },
    {
      category: "Backend Sorcery",
      icon: Database,
      items: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "Drizzle ORM", "Docker"],
      desc: "Manipulating the data flow."
    },
    {
      category: "Cursed Tools",
      icon: Cpu,
      items: ["VS Code", "Figma", "Git", "Linux", "AWS", "Vercel"],
      desc: "Weapons of choice."
    }
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
          CURSED <span className="text-primary">TECHNIQUES</span>
        </h1>
        <div className="h-1 w-24 bg-primary" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <CursedCard key={idx} delay={idx * 0.1} className="h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="p-3 bg-primary/10 rounded border border-primary/30 text-primary">
                <skill.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">{skill.category}</h3>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{skill.desc}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-sm border border-white/10 bg-white/5 text-gray-300 font-mono hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
            
            {/* Decorative background element */}
            <Layers className="absolute bottom-4 right-4 w-24 h-24 text-primary/5 -z-10 rotate-12" />
          </CursedCard>
        ))}
      </div>

      {/* Experience Timeline Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
          <span className="w-8 h-1 bg-primary"></span>
          SORCERER PATH
        </h2>

        <div className="space-y-12 border-l-2 border-primary/20 ml-4 pl-8 md:pl-12 relative">
          {[
            { year: "2024", title: "Senior Sorcerer (Frontend Lead)", company: "Tech Domain Inc.", desc: "Leading frontend architecture and specialized grade deployments." },
            { year: "2022", title: "Grade 1 Developer", company: "Jujutsu Tech", desc: "Fullstack development and cursed spirit exorcism (bug fixing)." },
            { year: "2020", title: "Apprentice", company: "StartUp High", desc: "Learning the basics of cursed energy manipulation." },
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-black border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              
              <span className="text-primary font-display font-bold text-lg">{exp.year}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{exp.title}</h3>
              <p className="text-muted-foreground font-mono text-sm mb-2">{exp.company}</p>
              <p className="text-gray-400 max-w-xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
