import { useState } from "react";
import { useSEO } from "../lib/useSEO";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Play } from "lucide-react";
import { Lightbox } from "../components/ui/Lightbox";
import { allImages, galleryCategories } from "../data/gallery";
import { useTranslation } from "../lib/useTranslation";

const Gallery = () => {
  const t = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categoryLabel = (cat: string) => {
    const map: Record<string, string> = {
      All: t.gallery.all,
      Photos: t.gallery.photos,
      Videos: t.gallery.videos,
      Events: t.gallery.events,
    };
    return map[cat] ?? cat;
  };

  useSEO({
    title: "Gallery",
    description:
      "Browse photos and videos from events, classrooms, and campus life at Smt Gayatri Devi Sr.Sec Vidya Mandir in Majupur, Aligarh.",
    path: "/gallery",
  });

  const filtered =
    activeFilter === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "64px",
          background: "linear-gradient(135deg, #00864B 0%, #047857 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating dots overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Pill badge */}
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              borderRadius: "999px",
              padding: "6px 16px",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {t.gallery.hero.tag}
          </span>

          <h1
            className="font-serif font-bold mb-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            {t.gallery.hero.title}
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.80)",
              maxWidth: "36rem",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            {t.gallery.hero.subtitle}
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.60)",
              letterSpacing: "0.02em",
            }}
          >
            {allImages.length} photos across {galleryCategories.length - 1}{" "}
            categories
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div
        style={{
          padding: "16px 16px 0",
        }}
      >
        <div
          className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto"
          style={{
            backgroundColor: "rgba(255,255,255,0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid #BBF7D0",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            padding: "12px 16px",
          }}
        >
          <Filter size={15} className="shrink-0" style={{ color: "#00864B" }} />
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="shrink-0 transition-all duration-200"
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                border: activeFilter === cat ? "none" : "1px solid #BBF7D0",
                backgroundColor: activeFilter === cat ? "#00864B" : "#F0FDF4",
                color: activeFilter === cat ? "#FFFFFF" : "#475569",
              }}
            >
              {categoryLabel(cat)}
            </button>
          ))}
          <span
            className="ml-auto shrink-0 text-xs font-semibold"
            style={{ color: "#00864B" }}
          >
            {filtered.length} photos
          </span>
        </div>
      </div>

      {/* ── Photo Grid ── */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.04 }}
                  className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#F0FDF4",
                  }}
                  onClick={() => setSelectedIndex(i)}
                >
                  <img
                    src={img.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    alt={img.label}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)",
                    }}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{ color: "#FFFFFF" }}
                    >
                      {img.label}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest font-bold mt-0.5"
                      style={{ color: "#BBF7D0" }}
                    >
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Video Highlights ── */}
      <section className="py-20" style={{ backgroundColor: "#F0FDF4" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#00864B" }}
            >
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  backgroundColor: "#00864B",
                  opacity: 0.5,
                  display: "inline-block",
                }}
              />
              Watch &amp; Explore
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  backgroundColor: "#00864B",
                  opacity: 0.5,
                  display: "inline-block",
                }}
              />
            </span>
            <h2
              className="font-serif font-bold"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                color: "#0F172A",
              }}
            >
              School Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Campus Tour 2025", seed: "video-thumb-1" },
              { title: "Annual Day Highlights 2025", seed: "video-thumb-2" },
            ].map((v, i) => (
              <div
                key={i}
                className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className="aspect-video overflow-hidden relative"
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #BBF7D0",
                    boxShadow: "0 2px 12px rgba(0,134,75,0.08)",
                  }}
                >
                  <img
                    src={`https://picsum.photos/seed/${v.seed}/800/450`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    alt={v.title}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.20)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: "#00864B" }}
                    >
                      <Play
                        size={22}
                        style={{ color: "#FFFFFF", marginLeft: "3px" }}
                      />
                    </div>
                  </div>
                </div>
                <h4
                  className="font-bold mt-3 text-sm"
                  style={{ color: "#0F172A" }}
                >
                  {v.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() =>
          setSelectedIndex((prev) =>
            prev === null
              ? filtered.length - 1
              : (prev - 1 + filtered.length) % filtered.length,
          )
        }
        onNext={() =>
          setSelectedIndex((prev) =>
            prev === null ? 0 : (prev + 1) % filtered.length,
          )
        }
      />
    </div>
  );
};

export default Gallery;
