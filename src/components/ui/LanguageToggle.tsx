import { motion } from "motion/react";
import { useLanguage } from "../../lib/languageContext";

/* ── Nepal flag SVG (authentic double-pennant shape) ─────────────────────── */
const NepalFlag = ({ size = 18 }: { size?: number }) => {
  const w = size * 0.65;
  const h = size;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 20 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Blue border — full double-pennant */}
      <polygon points="0,30 0,0 20,15 0,15 20,30" fill="#003893" />
      {/* Crimson fill — inset */}
      <polygon points="2,27.5 2,2.5 17,15 2,15 17,27.5" fill="#DC143C" />
      {/* Moon (upper pennant) — crescent */}
      <path
        d="M8.5,6 C8.5,4.5 10,4 11.5,4.8 C10,4.2 8.2,5.2 8,7 C7.8,8.5 8.8,9.5 10,9.8 C8.5,9.5 7.2,8 8.5,6 Z"
        fill="white"
      />
      {/* Sun (lower pennant) */}
      <circle cx="9.5" cy="21.5" r="2.2" fill="white" />
      <line
        x1="9.5"
        y1="18.5"
        x2="9.5"
        y2="17.5"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="9.5"
        y1="24.5"
        x2="9.5"
        y2="25.5"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="6.5"
        y1="19.3"
        x2="5.8"
        y2="18.6"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="12.2"
        y1="23.7"
        x2="13"
        y2="24.4"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="6.5"
        y1="23.7"
        x2="5.8"
        y2="24.4"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="12.2"
        y1="19.3"
        x2="13"
        y2="18.6"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="5.3"
        y1="21.5"
        x2="4.3"
        y2="21.5"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <line
        x1="13.7"
        y1="21.5"
        x2="14.7"
        y2="21.5"
        stroke="white"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* ── UK / GB flag SVG ─────────────────────────────────────────────────────── */
const UKFlag = ({ size = 14 }: { size?: number }) => {
  const w = Math.round(size * 1.5);
  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="30" height="20" fill="#012169" />
      {/* White diagonals */}
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="white" strokeWidth="4" />
      {/* Red diagonals */}
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2.4" />
      {/* White cross */}
      <rect x="12" y="0" width="6" height="20" fill="white" />
      <rect x="0" y="7" width="30" height="6" fill="white" />
      {/* Red cross */}
      <rect x="13" y="0" width="4" height="20" fill="#C8102E" />
      <rect x="0" y="8" width="30" height="4" fill="#C8102E" />
    </svg>
  );
};

/* ── Language Toggle Pill ─────────────────────────────────────────────────── */
export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      style={{
        display: "flex",
        alignItems: "center",
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1.5px solid rgba(255,255,255,0.22)",
        borderRadius: "999px",
        padding: "3px",
        gap: "2px",
        height: "40px",
      }}
    >
      {/* EN */}
      <motion.button
        onClick={() => setLang("en")}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Switch to English"
        aria-pressed={lang === "en"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "4px 10px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.04em",
          transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
          background: lang === "en" ? "#00864B" : "transparent",
          color: lang === "en" ? "white" : "rgba(255,255,255,0.70)",
          boxShadow: lang === "en" ? "0 2px 10px rgba(0,134,75,0.35)" : "none",
        }}
      >
        <UKFlag size={12} />
        EN
      </motion.button>
    </div>
  );
};
