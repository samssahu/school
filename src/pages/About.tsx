import { useRef, useEffect } from "react";
import { useSEO } from "../lib/useSEO";
import { useTranslation } from "../lib/useTranslation";
import { motion } from "motion/react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_HERO, visionItems } from "../data/about";
import { keyFaculty, teachingFacultyPhotos } from "../data/faculty";
import { SCHOOL_INFO } from "../data/site";

const About = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const t = useTranslation();

  useSEO({
    title: "About Us",
    description:
      "Learn about Smt Gayatri Devi Sr.Sec Vidya Mandir in Majupur, Aligarh, UP — our history, vision, mission, faculty and commitment to quality education since 2015.",
    path: "/about",
  });

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          background: "linear-gradient(135deg, #00864B 0%, #047857 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating dots overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-7xl mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — school image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={ABOUT_HERO.photo}
                  className="w-full h-full object-cover"
                  alt={ABOUT_HERO.photoAlt}
                />
              </div>

              {/* Year Established badge */}
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "20px 28px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#00864B",
                    lineHeight: 1,
                  }}
                >
                  {SCHOOL_INFO.foundedYear}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginTop: "4px",
                  }}
                >
                  Year Established
                </div>
              </div>
            </motion.div>

            {/* Right — text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Pill label */}
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(255,255,255,0.18)",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  marginBottom: "20px",
                }}
              >
                {t.about.hero.tag}
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                  lineHeight: 1.15,
                }}
              >
                {ABOUT_HERO.headline}
              </h1>

              {ABOUT_HERO.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.75,
                    marginBottom: "16px",
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Tag pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "28px",
                }}
              >
                {ABOUT_HERO.tags.map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255,255,255,0.35)",
                      borderRadius: "100px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle size={13} />
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Values ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            {/* Mint pill label */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#A7F3D0",
                color: "#00864B",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "100px",
                marginBottom: "16px",
              }}
            >
              {t.about.vision.tag}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#0F172A",
              }}
            >
              {t.about.vision.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {visionItems.map(({ title, icon: Icon, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,134,75,0.18)",
                }}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #BBF7D0",
                  borderRadius: "20px",
                  boxShadow:
                    "0 6px 0px rgba(0,0,0,0.08), 0 12px 32px rgba(0,134,75,0.10)",
                  padding: "36px 28px",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#F0FDF4",
                    color: "#00864B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#0F172A",
                    marginBottom: "12px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Faculty ── */}
      <section style={{ backgroundColor: "#F0FDF4", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#A7F3D0",
                color: "#00864B",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "100px",
                marginBottom: "16px",
              }}
            >
              {t.about.team.tag}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#0F172A",
              }}
            >
              {t.about.team.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFaculty.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,134,75,0.18)",
                }}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #BBF7D0",
                  borderRadius: "16px",
                  borderTop: "3px solid #00864B",
                  boxShadow: "0 4px 24px rgba(0,134,75,0.08)",
                  overflow: "hidden",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#0F172A",
                      marginBottom: "4px",
                    }}
                  >
                    {f.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#00864B",
                      marginBottom: "8px",
                    }}
                  >
                    {f.role}
                  </p>
                  <p style={{ fontSize: "12px", color: "#475569" }}>
                    {f.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Faculty Carousel ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "96px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#A7F3D0",
                color: "#00864B",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "100px",
                marginBottom: "16px",
              }}
            >
              Teaching Excellence
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#0F172A",
              }}
            >
              Teaching Faculty
            </h2>
          </motion.div>

          <div style={{ position: "relative" }}>
            <div
              ref={carouselRef}
              style={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                scrollBehavior: "smooth",
                gap: "16px",
                scrollbarWidth: "none",
                paddingBottom: "8px",
              }}
            >
              {teachingFacultyPhotos.map(({ id, src, alt }) => (
                <div
                  key={id}
                  style={{ flexShrink: 0, width: "112px", textAlign: "center" }}
                >
                  <div
                    style={{
                      width: "112px",
                      height: "112px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid #BBF7D0",
                      boxShadow: "0 4px 16px rgba(0,134,75,0.10)",
                    }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll left */}
            <button
              aria-label="Scroll left"
              onClick={() =>
                carouselRef.current?.scrollBy({
                  left: -140,
                  behavior: "smooth",
                })
              }
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #BBF7D0",
                color: "#00864B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,134,75,0.12)",
                zIndex: 10,
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#00864B";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 20px rgba(0,134,75,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#BBF7D0";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 2px 12px rgba(0,134,75,0.12)";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scroll right */}
            <button
              aria-label="Scroll right"
              onClick={() =>
                carouselRef.current?.scrollBy({ left: 140, behavior: "smooth" })
              }
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #BBF7D0",
                color: "#00864B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,134,75,0.12)",
                zIndex: 10,
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#00864B";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 20px rgba(0,134,75,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#BBF7D0";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 2px 12px rgba(0,134,75,0.12)";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
