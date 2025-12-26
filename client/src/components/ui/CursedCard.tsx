import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CursedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

export function CursedCard({ children, className, delay = 0, ...props }: CursedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      animate={{ 
        opacity: 1, 
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" // Subtle cut corner
      }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative bg-black/40 border border-primary/20 backdrop-blur-sm p-6 group",
        "hover:border-primary/60 hover:shadow-[0_0_15px_rgba(220,20,60,0.15)] transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Japanese Character watermark/decoration */}
      <div className="absolute -right-4 -top-4 text-9xl font-display text-primary/5 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        呪
      </div>

      <div className="relative z-10">
        {children}
      </div>

      {/* Animated Border Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
