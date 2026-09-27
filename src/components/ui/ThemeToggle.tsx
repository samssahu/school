import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../lib/themeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg"
      style={{
        background: "linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(249, 115, 22, 0.1))",
        border: "1.5px solid rgba(79, 70, 229, 0.25)",
        color: "#4F46E5",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={19} style={{ color: "#4F46E5" }} strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={19} style={{ color: "#F97316" }} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
