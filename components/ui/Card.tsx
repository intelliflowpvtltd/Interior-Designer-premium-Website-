import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "luxury" | "dark";
}

function Card({ children, className, hover = false, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-white border-soft-gray",
    luxury: "bg-white border-rose-gold/20",
    dark: "bg-deep-charcoal border-soft-gray text-white",
  };

  return (
    <div
      className={cn(
        "relative border overflow-hidden group",
        variants[variant],
        hover && "transition-all duration-300 hover:shadow-soft hover:border-rose-gold/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
