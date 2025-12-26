import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Background3D } from "./Background3D";
import { Flame, Skull, Scroll, Zap, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Domain", icon: Skull },
    { href: "/skills", label: "Techniques", icon: Zap },
    { href: "/projects", label: "Creations", icon: Flame },
    { href: "/contact", label: "Pact", icon: Mail },
  ];

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden flex flex-col md:flex-row">
      <Background3D />

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-primary/20 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <span className="font-display font-bold text-primary text-xl tracking-wider">RYOMEN</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary p-2">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 text-2xl font-display uppercase tracking-widest ${
                  location === item.href ? "text-primary text-shadow-glow" : "text-muted-foreground"
                }`}
              >
                <item.icon className="w-6 h-6" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex flex-col w-24 h-screen sticky top-0 border-r border-primary/20 bg-black/40 backdrop-blur-sm z-30">
        <div className="p-6 flex justify-center mb-8">
          <div className="w-10 h-10 bg-primary/20 flex items-center justify-center rounded-sm border border-primary rotate-45">
            <span className="font-display font-bold text-primary -rotate-45">R</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-8 py-4">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`relative group p-3 flex flex-col items-center gap-2 transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              >
                <div className={`p-3 rounded-sm transition-all duration-300 ${isActive ? 'bg-primary/20 shadow-[0_0_15px_rgba(219,20,54,0.3)]' : 'group-hover:bg-white/5'}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                {/* Tooltip-ish label */}
                <span className="absolute left-full ml-4 px-3 py-1 bg-primary text-white text-xs font-display uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20">
                  {item.label}
                </span>

                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute left-0 w-1 h-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="p-6 flex flex-col items-center text-xs text-muted-foreground font-mono opacity-50">
          <span className="writing-vertical-rl">EST. 2024</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 overflow-x-hidden">
        {/* Page Transition Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            className="min-h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
