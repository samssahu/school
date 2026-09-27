import { useState, useEffect, useRef, type ElementType } from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "motion/react";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ClipboardList,
  Award,
  Mail,
  Linkedin,
  BookOpen,
  GraduationCap,
  Trophy,
  Globe,
  Pencil,
  Star,
  Atom,
  Ruler,
} from "lucide-react";
import { AnnouncementBar } from "../components/layout/AnnouncementBar";
import { useSEO } from "../lib/useSEO";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GlassCard } from "../components/ui/GlassCard";
import { GlassButton } from "../components/ui/GlassButton";
import {
  stats,
  features,
  HERO,
  PRINCIPAL_MESSAGE,
  CTA_SECTION,
} from "../data/home";
import { useTranslation } from "../lib/useTranslation";

// ─── Count-up hook ───────────────────────────────────────────────────────────
const useCountUp = (end: number, duration = 1800) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(prefersReduced ? end : 0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (prefersReduced) {
      setCount(end);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, prefersReduced]);

  return { count, ref };
};

// ─── Stat card sub-descriptions ─────────────────────────────────────────────
const StatCard = ({
  value,
  label,
  icon: Icon,
  desc,
  variant = "dark",
}: {
  value: string;
  label: string;
  icon: ElementType;
  desc: string;
  variant?: "dark" | "light";
}) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[\d,]/g, "").trim();
  const { count, ref } = useCountUp(numericValue);

  const isLight = variant === "light";

  return (
    <div ref={ref}>
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: isLight
            ? "0 16px 40px rgba(0,134,75,0.14)"
            : "0 16px 40px rgba(0,134,75,0.14)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        style={{
          background: isLight ? "white" : "rgba(255,255,255,0.08)",
          backdropFilter: isLight ? undefined : "blur(20px) saturate(1.8)",
          WebkitBackdropFilter: isLight
            ? undefined
            : "blur(20px) saturate(1.8)",
          border: isLight
            ? "1.5px solid #BBF7D0"
            : "1.5px solid rgba(255,255,255,0.18)",
          borderRadius: "20px",
          padding: "28px 22px",
          boxShadow: isLight
            ? "0 4px 16px rgba(0,134,75,0.07)"
            : "0 8px 32px rgba(0,0,0,0.15)",
          textAlign: "center",
          cursor: "default",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: isLight ? "#F0FDF4" : "rgba(0,217,126,0.15)",
            border: isLight
              ? "1.5px solid #BBF7D0"
              : "1.5px solid rgba(0,217,126,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 18px",
          }}
        >
          <Icon size={22} style={{ color: isLight ? "#00864B" : "#00D97E" }} />
        </div>
        {/* Number */}
        <div
          style={{
            fontSize: "clamp(36px, 4vw, 50px)",
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            color: isLight ? "#00864B" : "#00D97E",
            lineHeight: 1,
            letterSpacing: "-0.5px",
            marginBottom: "8px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {numericValue > 0 ? `${count.toLocaleString()}${suffix}` : value}
        </div>
        {/* Label */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: isLight ? "#1E293B" : "rgba(255,255,255,0.9)",
            marginBottom: "4px",
          }}
        >
          {label}
        </div>
        {/* Sub-desc */}
        <div
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: isLight ? "#64748B" : "rgba(255,255,255,0.5)",
          }}
        >
          {desc}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────
const Home = () => {
  const t = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useSEO({
    title: "Smt Gayatri Devi Sr.Sec Vidya Mandir ",
    description:
      "CBSE-affiliated English-medium school in Majupur(Gonda). Quality education for character, knowledge and wisdom since 2013. Enroll now for Grade 0-12.",
    path: "/",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark" || !theme);

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setIsDark(newTheme === "dark" || !newTheme);
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* ── Hero Section: Parallax + Liquidmorphism ── */}
        <section
          className="lg:h-screen"
          style={{
            minHeight: "100svh",
            position: "relative",
            overflow: "hidden",
            background: "#060A14",
          }}
        >
          {/* ── PARALLAX BACKGROUND ── */}
          <div
            style={{
              position: "absolute",
              inset: -60,
              zIndex: 1,
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          >
            <img
              src="/images/webp/mainpic.jpg"
              alt=""
              aria-hidden="true"
              style={{
                width: "100%",
                height: "calc(100% + 120px)",
                objectFit: "cover",
                objectPosition: "center 35%",
              }}
            />
          </div>

          {/* ── Gradient Overlays ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 30%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              pointerEvents: "none",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 4,
              pointerEvents: "none",
              backgroundImage:
                "radial-gradient(circle, rgba(0,217,126,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.3,
            }}
          />

          {/* ── CONTENT GRID ── */}
          <div className="relative z-10 flex items-start lg:absolute lg:inset-0 lg:items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-0 lg:pb-0">
            <div className="max-w-7xl mx-auto w-full">
              {/* LEFT COLUMN: Text Content Only */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* EST. Badge */}
                  <div
                    style={{
                      display: "inline-block",
                      marginBottom: "20px",
                      padding: "6px 16px",
                      borderRadius: "50px",
                      background: "rgba(0,217,126,0.15)",
                      border: "1px solid rgba(0,217,126,0.3)",
                      color: "#00D97E",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    EST. 2015
                  </div>

                  {/* Main Headline */}
                  <h1
                    style={{
                      fontSize: "clamp(30px, 7.5vw, 64px)",
                      fontWeight: 700,
                      color: "white",
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      lineHeight: 1.08,
                      letterSpacing: "-0.5px",
                      marginBottom: "20px",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    {t.hero.headline1}
                    <br />
                    {t.hero.headline2}
                  </h1>

                  {/* Description */}
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      marginBottom: "32px",
                      maxWidth: "450px",
                    }}
                  >
                    {t.hero.subtext}
                  </p>

                  {/* CTA Buttons */}
                  <div
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                  >
                    <Link
                      to="/admission"
                      style={{
                        padding: "14px 32px",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(135deg, #00864B 0%, #00C070 100%)",
                        color: "white",
                        fontWeight: 700,
                        fontSize: "14px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        textDecoration: "none",
                      }}
                    >
                      {t.hero.ctaPrimary} →
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "24px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(0,217,126,0.08)",
                        border: "1px solid rgba(0,217,126,0.28)",
                        borderRadius: "12px",
                        padding: "10px 14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <ClipboardList
                        size={15}
                        style={{ color: "var(--accent)", flexShrink: 0 }}
                      />
                      <div>
                        <div
                          style={{
                            color: "var(--accent)",
                            fontSize: "11px",
                            fontWeight: 700,
                            lineHeight: 1.2,
                          }}
                        >
                          Pre Registration
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "10px",
                            marginTop: "2px",
                          }}
                        >
                          Grade 11 · Now Open
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        background: "rgba(245,158,11,0.07)",
                        border: "1px solid rgba(245,158,11,0.22)",
                        borderRadius: "12px",
                        padding: "10px 14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Award
                        size={15}
                        style={{ color: "#F59E0B", flexShrink: 0 }}
                      />
                      <div>
                        <div
                          style={{
                            color: "#F59E0B",
                            fontSize: "11px",
                            fontWeight: 700,
                            lineHeight: 1.2,
                          }}
                        >
                          Excellence Proven
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "10px",
                            marginTop: "2px",
                          }}
                        >
                          99% SEE Pass Rate
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM RIGHT: Animated Stats Cards (Vertical) ── */}
          <div
            className="hidden lg:flex flex-col"
            style={{
              position: "absolute",
              bottom: "100px",
              right: "5%",
              zIndex: 20,
              gap: "12px",
              maxWidth: "260px",
            }}
          >
            {stats.slice(0, 3).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(24px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.8)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, rgba(0,217,126,0.2), rgba(0,192,112,0.3))",
                      border: "1px solid rgba(0,217,126,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <stat.icon size={18} style={{ color: "#00D97E" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "26px",
                        fontWeight: 700,
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        color: "#00D97E",
                        lineHeight: 1,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.8)",
                        fontWeight: 600,
                        marginTop: "3px",
                      }}
                    >
                      {stat.label}
                    </div>
                    {stat.desc && (
                      <div
                        style={{
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "4px",
                        }}
                      >
                        {stat.desc}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── SCROLL INDICATOR ── */}
          <motion.div
            className="hidden sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 20,
              textAlign: "center",
              opacity: scrollY > 100 ? 0 : 0.5,
              transition: "opacity 0.3s ease",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "10px",
                letterSpacing: "3px",
                marginBottom: "8px",
              }}
            >
              SCROLL TO EXPLORE
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </section>

        {/* ── Stats Section — theme-aware glassmorphism ── */}
        <section
          style={{
            background: isDark
              ? "linear-gradient(135deg, #070C18 0%, #0A1020 60%, #070C18 100%)"
              : "linear-gradient(135deg, #F0FDF9 0%, #FFFFFF 50%, #F4FDF9 100%)",
            padding: "100px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dot grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: isDark
                ? "radial-gradient(circle, rgba(0,217,126,0.08) 1px, transparent 1px)"
                : "radial-gradient(circle, rgba(0,134,75,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: isDark ? 0.7 : 0.5,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Orb A — top right */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "8%",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(0,217,126,0.09) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,134,75,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Orb B — bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "5%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(0,217,126,0.07) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,134,75,0.05) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ position: "relative", zIndex: 1 }}
          >
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 20px",
                  borderRadius: "50px",
                  background: isDark ? "rgba(0,217,126,0.12)" : "#F0FDF4",
                  border: isDark
                    ? "1.5px solid rgba(0,217,126,0.28)"
                    : "1.5px solid #BBF7D0",
                  color: isDark ? "#00D97E" : "#00864B",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Our Impact Since 2015
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  color: isDark ? "rgba(255,255,255,0.97)" : "#0F172A",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Numbers That Define{" "}
                <span style={{ color: isDark ? "#00D97E" : "#00864B" }}>
                  Our Legacy
                </span>
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: isDark ? "rgba(255,255,255,0.62)" : "#475569",
                  lineHeight: 1.7,
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Trusted by over 1,500 families in Aligarh since 2015.
                CBSE-affiliated education with proven results.
              </p>
            </div>

            {/* Cards grid - 4 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  desc={stat.desc || ""}
                  variant={isDark ? "dark" : "light"}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Leadership / Principal's Message — theme-aware glassmorphism ── */}
        <section
          style={{
            background: isDark
              ? "linear-gradient(135deg, #0A1020 0%, #070C18 60%, #0A1020 100%)"
              : "#FFFFFF",
            padding: "88px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* ── Animated background layers ── */}
          {/* Drifting dot grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: isDark
                ? "radial-gradient(circle, rgba(0,217,126,0.07) 1px, transparent 1px)"
                : "radial-gradient(circle, rgba(0,134,75,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              animation: "driftDots 6s linear infinite",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Floating orb A — top-left */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "-60px",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(0,217,126,0.10) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,134,75,0.06) 0%, transparent 70%)",
              animation: "floatOrb 14s ease-in-out infinite",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Floating orb B — bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              right: "-40px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(0,217,126,0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,134,75,0.04) 0%, transparent 70%)",
              animation: "floatOrbB 18s ease-in-out infinite",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Floating orb C — center-right accent */}
          <div
            style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
              animation: "floatOrb 10s ease-in-out infinite reverse",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            className="max-w-7xl mx-auto px-4 sm:px-8"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* ── LEFT: Image + accent ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ position: "relative" }}
              >
                {/* Green accent block behind image */}
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    left: -24,
                    width: "100%",
                    height: "100%",
                    background: isDark ? "rgba(0,217,126,0.08)" : "#F0FDF4",
                    border: isDark
                      ? "2px solid rgba(0,217,126,0.22)"
                      : "2px solid #BBF7D0",
                    borderRadius: "24px",
                  }}
                />
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: isDark
                      ? "2px solid rgba(0,217,126,0.35)"
                      : "2px solid #BBF7D0",
                    boxShadow: isDark
                      ? "0 8px 32px rgba(0,0,0,0.40)"
                      : "0 8px 32px rgba(0,134,75,0.10)",
                    aspectRatio: "4/5",
                  }}
                >
                  <img
                    src="/images/webp/college7.jpeg"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                    alt="Smt Gayatri Devi Sr.Sec Vidya Mandir students on campus in Majupur, Aligarh"
                  />
                  {/* Quote overlay at bottom */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(0,86,47,0.88) 0%, transparent 100%)",
                      padding: "32px 24px 24px",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 600,
                        fontStyle: "italic",
                        lineHeight: 1.5,
                        borderLeft: "3px solid #4ADE80",
                        paddingLeft: "14px",
                      }}
                    >
                      "{t.leadership.quote}"
                    </p>
                  </div>
                </div>

                {/* Est. badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  style={{
                    position: "absolute",
                    top: -16,
                    right: -16,
                    background: "#00864B",
                    borderRadius: "16px",
                    padding: "10px 18px",
                    boxShadow: "0 4px 16px rgba(0,134,75,0.30)",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      opacity: 0.8,
                    }}
                  >
                    Established
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    2015
                  </div>
                </motion.div>
              </motion.div>

              {/* ── RIGHT: Content ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Label */}
                <div
                  style={{
                    display: "inline-block",
                    padding: "5px 16px",
                    borderRadius: "50px",
                    background: isDark ? "rgba(0,217,126,0.12)" : "#F0FDF4",
                    border: isDark
                      ? "1.5px solid rgba(0,217,126,0.28)"
                      : "1.5px solid #BBF7D0",
                    color: isDark ? "#00D97E" : "#00864B",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  {t.leadership.sectionTag}
                </div>

                {/* Heading */}
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    color: isDark ? "rgba(255,255,255,0.97)" : "#0F172A",
                    letterSpacing: "-0.5px",
                    lineHeight: 1.2,
                    marginBottom: "28px",
                  }}
                >
                  {t.leadership.sectionTitle}
                </h2>

                {/* Paragraphs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {PRINCIPAL_MESSAGE.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        color: isDark ? "rgba(255,255,255,0.68)" : "#475569",
                        fontSize: "15px",
                        lineHeight: 1.8,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: isDark ? "rgba(255,255,255,0.12)" : "#E2E8F0",
                    marginBottom: "28px",
                  }}
                />

                {/* Principal signature */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  {/* Real photo avatar */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: isDark
                        ? "3px solid rgba(0,217,126,0.40)"
                        : "3px solid #BBF7D0",
                      boxShadow: isDark
                        ? "0 4px 14px rgba(0,0,0,0.30)"
                        : "0 4px 14px rgba(0,134,75,0.20)",
                    }}
                  >
                    <img
                      src="/images/webp/director.jpeg"
                      loading="lazy"
                      alt="Sri Arjun Singh"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: isDark ? "rgba(255,255,255,0.97)" : "#0F172A",
                        fontSize: "15px",
                      }}
                    >
                      {t.leadership.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: isDark ? "#00D97E" : "#00864B",
                        fontWeight: 600,
                        marginTop: "2px",
                      }}
                    >
                      {t.leadership.role}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: isDark ? "rgba(255,255,255,0.45)" : "#64748B",
                        marginTop: "2px",
                      }}
                    >
                      Smt Gayatri Devi Sr.Sec Vidya Mandir
                    </div>
                    {/* Social icons */}
                    <div
                      style={{ display: "flex", gap: "10px", marginTop: "8px" }}
                    >
                      {[
                        {
                          icon: Facebook,
                          href: "",
                          label: "Facebook",
                        },
                        {
                          icon: Mail,
                          href: "",
                          label: "Email",
                        },
                        {
                          icon: Linkedin,
                          href: "",
                          label: "LinkedIn",
                        },
                      ].map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: isDark
                              ? "rgba(0,217,126,0.12)"
                              : "#F0FDF4",
                            border: isDark
                              ? "1px solid rgba(0,217,126,0.28)"
                              : "1px solid #BBF7D0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: isDark ? "#00D97E" : "#00864B",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              "#00864B";
                            (e.currentTarget as HTMLElement).style.color =
                              "white";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              isDark ? "rgba(0,217,126,0.12)" : "#F0FDF4";
                            (e.currentTarget as HTMLElement).style.color =
                              isDark ? "#00D97E" : "#00864B";
                          }}
                        >
                          <Icon size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Green accent line */}
                  <div
                    style={{
                      flex: 1,
                      height: "2px",
                      background: isDark
                        ? "linear-gradient(to right, rgba(0,217,126,0.45), transparent)"
                        : "linear-gradient(to right, #BBF7D0, transparent)",
                      marginLeft: "8px",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us / Excellence ── */}
        <section
          aria-labelledby="excellence-heading"
          style={{
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #059669 0%, #00864B 60%, #047857 100%)",
            padding: "96px 0",
          }}
        >
          {/* ── Floating education pattern background (white on green) ── */}
          {(
            [
              {
                Icon: BookOpen,
                left: "3%",
                top: "8%",
                size: 80,
                anim: "eduFloatA",
                dur: "11s",
                delay: "0s",
              },
              {
                Icon: GraduationCap,
                left: "86%",
                top: "6%",
                size: 72,
                anim: "eduFloatB",
                dur: "14s",
                delay: "2s",
              },
              {
                Icon: Pencil,
                left: "8%",
                top: "68%",
                size: 60,
                anim: "eduFloatC",
                dur: "9s",
                delay: "1s",
              },
              {
                Icon: Star,
                left: "80%",
                top: "66%",
                size: 56,
                anim: "eduFloatA",
                dur: "13s",
                delay: "3.5s",
              },
              {
                Icon: Atom,
                left: "45%",
                top: "2%",
                size: 68,
                anim: "eduFloatD",
                dur: "12s",
                delay: "1.5s",
              },
              {
                Icon: Trophy,
                left: "68%",
                top: "76%",
                size: 62,
                anim: "eduFloatB",
                dur: "15s",
                delay: "4s",
              },
              {
                Icon: Globe,
                left: "22%",
                top: "80%",
                size: 64,
                anim: "eduFloatC",
                dur: "10s",
                delay: "0.5s",
              },
              {
                Icon: Ruler,
                left: "58%",
                top: "12%",
                size: 52,
                anim: "eduFloatD",
                dur: "16s",
                delay: "5s",
              },
            ] as const
          ).map(({ Icon, left, top, size, anim, dur, delay }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left,
                top,
                color: "#ffffff",
                opacity: 0.12,
                animation: `${anim} ${dur} ease-in-out infinite ${delay}`,
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              <Icon size={size} strokeWidth={1.2} />
            </div>
          ))}

          <div
            className="max-w-6xl mx-auto px-4 sm:px-8"
            style={{ position: "relative", zIndex: 1 }}
          >
            {/* ── SEO-optimised heading ── */}
            <div className="text-center mb-14">
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 18px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {t.excellence.sectionTag}
              </div>
              <h2
                id="excellence-heading"
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  color: "#FFFFFF",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                {t.excellence.sectionTitle}
              </h2>
              <p
                style={{
                  maxWidth: "560px",
                  margin: "0 auto",
                  color: "rgba(255,255,255,0.80)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                Trusted by over 1,500 families in Aligarh since 2015 —
                CBSE-affiliated, results-driven education built for tomorrow's
                leaders.
              </p>
            </div>

            {/* ── 3 Claymorphism cards ── */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map(({ icon: Icon, stat }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  style={{
                    background: "#FFFFFF",
                    border: "2.5px solid rgba(255,255,255,0.6)",
                    borderRadius: "24px",
                    padding: "36px 32px",
                    boxShadow:
                      "0 6px 0px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.18)",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle corner pattern */}
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(0,134,75,0.06) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Icon badge */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background: "#F0FDF4",
                      border: "2px solid #BBF7D0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: "0 3px 0 #BBF7D0",
                      color: "#00864B",
                    }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Stat badge */}
                  {stat && (
                    <div
                      style={{
                        display: "inline-block",
                        background: "#F0FDF4",
                        border: "1px solid #BBF7D0",
                        borderRadius: "999px",
                        padding: "3px 12px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#00864B",
                        letterSpacing: "0.5px",
                        marginBottom: "12px",
                      }}
                    >
                      {stat}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "17px",
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      color: "#0F172A",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {t.excellence.cards[i].title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: 1.75,
                    }}
                  >
                    {t.excellence.cards[i].desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "520px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* ── 6-image mosaic collage background ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "1.2fr 0.9fr 1.1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "3px",
              overflow: "hidden",
            }}
          >
            {[
              {
                src: "/images/webp/college1.webp",
                pos: "center center",
                anim: "collageZoom",
                dur: "14s",
                delay: "0s",
              },
              {
                src: "/images/webp/college2.webp",
                pos: "center 30%",
                anim: "collageZoomAlt",
                dur: "16s",
                delay: "2s",
              },
              {
                src: "/images/webp/college3.webp",
                pos: "center center",
                anim: "collageZoom",
                dur: "12s",
                delay: "1s",
              },
              {
                src: "/images/webp/college2.webp",
                pos: "center 20%",
                anim: "collageZoomAlt",
                dur: "15s",
                delay: "3s",
              },
              {
                src: "/images/webp/college5.webp",
                pos: "center center",
                anim: "collageZoom",
                dur: "13s",
                delay: "0.5s",
              },
              {
                src: "/images/webp/college6.webp",
                pos: "center top",
                anim: "collageZoomAlt",
                dur: "17s",
                delay: "1.5s",
              },
            ].map(({ src, pos, anim, dur, delay }, i) => (
              <div key={i} style={{ overflow: "hidden", position: "relative" }}>
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: pos,
                    display: "block",
                    animation: `${anim} ${dur} ease-in-out infinite ${delay}`,
                    transformOrigin: "center center",
                  }}
                />
                {/* Per-cell dark tint so backdrop-filter on glass card blurs real photos */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(8,12,24,0.42)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Content — centred liquid glass card */}
          <div
            className="max-w-5xl mx-auto px-4 sm:px-8 w-full"
            style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px) saturate(1.8) brightness(1.1)",
                WebkitBackdropFilter:
                  "blur(20px) saturate(1.8) brightness(1.1)",
                border: "1.5px solid rgba(255,255,255,0.18)",
                borderRadius: "32px",
                padding: "64px 72px",
                boxShadow:
                  "0 24px 80px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.14)",
                textAlign: "center",
              }}
            >
              {/* Pill */}
              <div
                style={{
                  display: "inline-block",
                  marginBottom: "24px",
                  padding: "6px 20px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Admissions Open 2026–27
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 50px)",
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  color: "#FFFFFF",
                  letterSpacing: "-0.5px",
                  lineHeight: 1.15,
                  marginBottom: "18px",
                }}
              >
                {t.cta.title}
              </h2>

              <p
                style={{
                  maxWidth: "500px",
                  margin: "0 auto 36px",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "16px",
                  lineHeight: 1.75,
                }}
              >
                {t.cta.subtitle}
              </p>

              {/* Divider */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  margin: "0 auto 36px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.45), transparent)",
                }}
              />

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/admission" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "14px 36px",
                      borderRadius: "999px",
                      background: "#FFFFFF",
                      color: "#00864B",
                      fontWeight: 700,
                      fontSize: "15px",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                      cursor: "pointer",
                    }}
                  >
                    {t.cta.primary} <ArrowRight size={17} />
                  </motion.div>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "14px 36px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.12)",
                      border: "1.5px solid rgba(255,255,255,0.45)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    {t.cta.secondary}
                  </motion.div>
                </Link>
              </div>

              {/* Trust bar */}
              <p
                style={{
                  marginTop: "32px",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "12px",
                  letterSpacing: "0.8px",
                }}
              >
                CBSE Affiliated · Est. 2015 · Aligarh, UP · 500+ Students
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
};

export default Home;
