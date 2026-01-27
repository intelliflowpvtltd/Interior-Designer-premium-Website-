import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

    const variants = {
      primary:
        "bg-rose-gold text-white hover:bg-rose-gold-dark hover:shadow-rose-glow",
      secondary:
        "bg-transparent border border-deep-charcoal/30 text-deep-charcoal hover:border-rose-gold hover:text-rose-gold",
      ghost:
        "bg-deep-charcoal text-white hover:bg-charcoal",
      text: 
        "bg-transparent text-deep-charcoal hover:text-rose-gold underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-xs uppercase tracking-[0.15em]",
      md: "px-7 py-3.5 text-sm uppercase tracking-[0.15em]",
      lg: "px-10 py-5 text-sm uppercase tracking-[0.2em]",
      xl: "px-12 py-6 text-base uppercase tracking-[0.2em]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-antique-gold to-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        {variant === "secondary" && (
          <div className="absolute inset-0 bg-champagne/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
