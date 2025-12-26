import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SukunaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
}

const SukunaButton = forwardRef<HTMLButtonElement, SukunaButtonProps>(
  ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
    
    const baseStyles = "relative px-8 py-3 font-display font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(193,18,31,0.6)]",
      secondary: "bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary",
      ghost: "text-muted-foreground hover:text-primary hover:bg-primary/10"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {/* Slanted Background Effect */}
        <div className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0 z-[-1]" />
        
        <div className="relative flex items-center justify-center gap-2">
          {isLoading && (
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          {children}
        </div>

        {/* Cursed Corner Accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    );
  }
);

SukunaButton.displayName = "SukunaButton";

export { SukunaButton };
