import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, CSSProperties } from "react";
import { clsx } from "clsx";

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const GlassInput = ({ label, error, className, ...props }: GlassInputProps) => (
  <div className="space-y-1.5">
    {label && (
      <label htmlFor={props.id} className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        {label}
      </label>
    )}
    <input
      className={clsx(
        "w-full p-3.5 rounded-xl text-sm resize-none",
        "bg-[var(--glass-bg)] border border-[var(--glass-border)]",
        "placeholder:text-[var(--text-muted)]",
        "focus:outline-none focus:ring-2",
        "transition-all duration-200",
        error ? "border-red-400/50" : "",
        className
      )}
      style={{
        color: "var(--text-primary)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      } as CSSProperties}
      {...props}
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

interface GlassTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const GlassTextarea = ({ label, error, className, ...props }: GlassTextareaProps) => (
  <div className="space-y-1.5">
    {label && (
      <label htmlFor={props.id} className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        {label}
      </label>
    )}
    <textarea
      className={clsx(
        "w-full p-3.5 rounded-xl text-sm resize-none",
        "bg-[var(--glass-bg)] border border-[var(--glass-border)]",
        "placeholder:text-[var(--text-muted)]",
        "focus:outline-none focus:ring-2",
        "transition-all duration-200",
        error ? "border-red-400/50" : "",
        className
      )}
      style={{
        color: "var(--text-primary)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      } as CSSProperties}
      {...props}
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

interface GlassSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const GlassSelect = ({ label, error, options, className, ...props }: GlassSelectProps) => (
  <div className="space-y-1.5">
    {label && (
      <label htmlFor={props.id} className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        {label}
      </label>
    )}
    <select
      className={clsx(
        "w-full p-3.5 rounded-xl text-sm appearance-none cursor-pointer",
        "bg-[var(--glass-bg)] border border-[var(--glass-border)]",
        "focus:outline-none focus:ring-2",
        "transition-all duration-200",
        error ? "border-red-400/50" : "",
        className
      )}
      style={{
        color: "var(--text-primary)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      } as CSSProperties}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} style={{ backgroundColor: "var(--bg-deep)", color: "var(--text-primary)" }}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);
