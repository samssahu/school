import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ANNOUNCEMENT } from "../../data/site";

export const AnnouncementBar = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="clay-card inline-flex flex-col items-start gap-3 p-6 max-w-xs"
    style={{
      background: "linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(249, 115, 22, 0.06) 100%)",
    }}
  >
    <div className="flex items-start gap-3 w-full">
      <span className="text-3xl flex-shrink-0">{ANNOUNCEMENT.emoji}</span>
      <div className="flex-1">
        <h3
          className="font-bold text-sm leading-tight"
          style={{ color: "#4F46E5" }}
        >
          {ANNOUNCEMENT.title}
        </h3>
        <p
          className="text-xs font-medium mt-1"
          style={{ color: "#1E293B" }}
        >
          {ANNOUNCEMENT.subtitle}
        </p>
      </div>
    </div>
    <Link
      to={ANNOUNCEMENT.href}
      className="w-full px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
      style={{
        background: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)",
        color: "white",
      }}
    >
      {ANNOUNCEMENT.cta} <ArrowRight size={16} />
    </Link>
  </motion.div>
);
