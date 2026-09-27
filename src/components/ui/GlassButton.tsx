import type { ReactNode } from "react";
import { clsx } from "clsx";
import { motion } from "motion/react";

interface GlassButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const GlassButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: GlassButtonProps) => {
  const base = "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200";

  const variants = {
    primary:   "bg-[var(--glass-bg-mid)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-bg-strong)] hover:border-[var(--glass-border-strong)] backdrop-blur-sm disabled:opacity-40 disabled:cursor-not-allowed",
    secondary: "bg-transparent border border-[var(--glass-border-strong)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed",
    ghost:     "bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)] disabled:opacity-40 disabled:cursor-not-allowed",
    accent:    "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] font-bold shadow-lg disabled:opacity-40 disabled:cursor-not-allowed",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
