import { motion } from "framer-motion";
import { CursedCard } from "@/components/ui/CursedCard";
import { SukunaButton } from "@/components/ui/SukunaButton";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SHIBUYA INCIDENT",
      desc: "A chaotic real-time chat application using WebSockets and Redis. Handles massive concurrency with zero latency.",
      tags: ["React", "Node.js", "Socket.io", "Redis"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop" // Retro futuristic city
    },
    {
      title: "BLACK FLASH",
      desc: "High-performance e-commerce dashboard with predictive analytics powered by AI integration.",
      tags: ["Next.js", "Python", "TensorFlow", "Postgres"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" // Cyberpunk tech
    },
    {
      title: "MALEVOLENT SHRINE",
      desc: "3D Portfolio experience featuring complex WebGL shaders and interactive geometry.",
      tags: ["Three.js", "WebGL", "GSAP", "React"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop" // Abstract dark red
    }
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-2">
          CURSED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-900">CREATIONS</span>
        </h1>
        <p className="font-mono text-muted-foreground">Manifestations of my domain.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <CursedCard key={idx} delay={idx * 0.15} className="p-0 overflow-hidden group border-0 bg-transparent">
            <div className="relative aspect-video overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
              {/* Image with noise overlay */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              {/* Content overlaid on image */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/10 text-white backdrop-blur-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-black/60 border-x border-b border-white/10 group-hover:border-primary/50 backdrop-blur-sm transition-colors">
              <p className="text-sm text-gray-400 mb-6 line-clamp-3">{project.desc}</p>
              
              <div className="flex gap-4">
                <SukunaButton variant="secondary" className="px-4 py-2 text-xs flex-1">
                  <Github className="w-4 h-4 mr-2" /> Code
                </SukunaButton>
                <SukunaButton className="px-4 py-2 text-xs flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" /> Demo
                </SukunaButton>
              </div>
            </div>
          </CursedCard>
        ))}
      </div>
    </div>
  );
}
