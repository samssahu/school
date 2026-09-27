import type { ReactNode } from "react";
import { motion } from "motion/react";
import { clsx } from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "mid" | "strong";
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({
  children,
  className,
  intensity = "mid",
  hover = false,
  onClick,
}: GlassCardProps) => {
  const intensityClasses = {
    light:  "bg-[var(--glass-bg)] border-[var(--glass-border)]",
    mid:    "bg-[var(--glass-bg-mid)] border-[var(--glass-border)]",
    strong: "bg-[var(--glass-bg-strong)] border-[var(--glass-border-strong)]",
  };

  const hoverClasses = hover
    ? "hover:bg-[var(--glass-bg-strong)] hover:border-[var(--glass-border-strong)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "rounded-2xl border backdrop-blur-xl relative",
        intensityClasses[intensity],
        hoverClasses,
        className
      )}
      style={intensity === "strong" ? { boxShadow: "0 8px 32px var(--shadow-glass)" } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
