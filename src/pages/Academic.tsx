import { motion } from "motion/react";
import { useSEO } from "../lib/useSEO";
import { courses, higherSecondary, achievements } from "../data/academic";
import { useTranslation } from "../lib/useTranslation";

const CARD_STYLE = {
  background: "#FFFFFF",
  border: "1.5px solid #BBF7D0",
  borderRadius: "20px",
  boxShadow: "0 6px 0px rgba(0,0,0,0.08), 0 12px 32px rgba(0,134,75,0.10)",
};

const PILL_STYLE: React.CSSProperties = {
  display: "inline-block",
  background: "#F0FDF4",
  color: "#00864B",
  border: "1.5px solid #BBF7D0",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  padding: "4px 14px",
  marginBottom: "16px",
};

const Academic = () => {
  const t = useTranslation();
  useSEO({
    title: "Academic Programmes",
    description:
      "Explore academic programmes at Smt Gayatri Devi School: Kindergarten, Primary, Secondary, and Higher Secondary in Science, Management & Hotel Management in Aligarh.",
    path: "/academic",
  });

  return (
    <div style={{ background: "#FFFFFF" }}>
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
        {/* floating dot pattern */}
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

        <div className="max-w-7xl mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* badge */}
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                border: "1.5px solid rgba(255,255,255,0.35)",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "5px 18px",
                marginBottom: "24px",
                backdropFilter: "blur(8px)",
              }}
            >
              {t.academic.hero.tag}
            </span>

            <h1
              className="font-serif font-bold"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.15,
                marginBottom: "20px",
                maxWidth: "640px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Shaping Futures Through Education
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: "0 auto 36px",
              }}
            >
              Comprehensive, CBSE-affiliated education from early childhood
              through higher secondary — designed to prepare every student for
              success.
            </p>

            {/* stat pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {["CBSE Affiliated", "Grade 9–12", "4 Streams"].map((label) => (
                <span
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                    border: "1.5px solid rgba(255,255,255,0.30)",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "7px 20px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Academic Programmes ── */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={PILL_STYLE}>Our Programmes</span>
            <h2
              className="font-serif font-bold"
              style={{
                color: "#0F172A",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              Our Programmes
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: "15px",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Comprehensive education from early childhood to higher secondary
              levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map(({ icon: Icon, title, levels, desc }, i) => (
              <motion.div
                key={i}
                style={{ ...CARD_STYLE, padding: "32px" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* icon badge */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    background: "#F0FDF4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00864B",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={22} />
                </div>

                {/* level pill */}
                <span
                  style={{
                    display: "inline-block",
                    background: "#F0FDF4",
                    color: "#00864B",
                    border: "1.5px solid #BBF7D0",
                    borderRadius: "999px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    marginBottom: "12px",
                  }}
                >
                  {levels}
                </span>

                <h3
                  className="font-bold"
                  style={{
                    color: "#0F172A",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "14px",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Higher Secondary Streams ── */}
      <section className="py-24" style={{ background: "#F0FDF4" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* left column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span style={PILL_STYLE}>{t.academic.programmes.tag}</span>
              <h2
                className="font-serif font-bold"
                style={{
                  color: "#0F172A",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                {t.academic.programmes.title}
              </h2>
              <p
                style={{ color: "#475569", fontSize: "15px", lineHeight: 1.75 }}
              >
                Four specialised streams designed to prepare students for
                professional careers and higher university studies. Each stream
                is crafted to align with national curriculum standards while
                nurturing individual strengths.
              </p>
            </motion.div>

            {/* right column — stream cards */}
            <div className="space-y-4">
              {higherSecondary.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #BBF7D0",
                    borderLeft: "4px solid #00864B",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(0,134,75,0.07)",
                    padding: "20px 24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      background: "#F0FDF4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00864B",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "#0F172A",
                        fontWeight: 700,
                        fontSize: "15px",
                        marginBottom: "5px",
                      }}
                    >
                      {title}
                    </h4>
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span style={PILL_STYLE}>{t.academic.achievements.tag}</span>
            <h2
              className="font-serif font-bold"
              style={{
                color: "#0F172A",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
              }}
            >
              {t.academic.achievements.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map(({ year, title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                style={{
                  ...CARD_STYLE,
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* ghost icon */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    padding: "16px",
                    color: "#00864B",
                    opacity: 0.06,
                    pointerEvents: "none",
                  }}
                >
                  <Icon size={80} />
                </div>

                {/* year badge */}
                <span
                  style={{
                    display: "inline-block",
                    background: "#F0FDF4",
                    color: "#00864B",
                    border: "1.5px solid #BBF7D0",
                    borderRadius: "999px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    marginBottom: "16px",
                  }}
                >
                  {year}
                </span>

                <h3
                  style={{
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "13px",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academic;
