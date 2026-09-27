import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";
import { useTranslation } from "../../lib/useTranslation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = useTranslation();
  const lightSurface = ["/admission", "/privacy", "/terms"].includes(
    location.pathname,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.academic, path: "/academic" },
    { name: t.nav.gallery, path: "/gallery" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      {/* Navbar — transparent on hero pages, floating panel on light pages */}
      <nav
        style={{ background: "transparent", border: "none", boxShadow: "none" }}
        className="fixed top-0 left-0 right-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={
              lightSurface
                ? "mx-auto flex w-full md:w-fit items-center justify-between md:justify-start gap-6 md:gap-8"
                : "flex justify-between items-center gap-6"
            }
            style={{
              marginTop: lightSurface ? "12px" : "0",
              padding: lightSurface ? "12px 0" : "16px 0",
              background: "transparent",
              border: "none",
              borderRadius: "0",
              boxShadow: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
            }}
          >
            {/* ===== LEFT: Logo Section ===== */}
            <Link
              to="/"
              className="flex items-center gap-3 flex-shrink-0 hover:opacity-85 transition-opacity duration-300 group"
            >
              <img
                src="\images\webp\logo3.jpg"
                alt="Smt Gayatri Devi Sr.Sec Vidya Mandir Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div
                className="hidden sm:flex flex-col justify-center gap-0"
                style={{
                  maxWidth: scrolled ? "0" : "200px",
                  overflow: "hidden",
                  opacity: scrolled ? 0 : 1,
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="font-bold text-sm leading-snug"
                  style={{ color: lightSurface ? "#0F172A" : "#ffffff" }}
                >
                  Smt Gayatri Devi
                </span>
                <span
                  className="font-semibold text-xs leading-snug"
                  style={{
                    color: lightSurface
                      ? "rgba(15,23,42,0.68)"
                      : "rgba(255,255,255,0.85)",
                  }}
                >
                  Sr.Sec Vidya Mandir
                </span>
              </div>
            </Link>

            {/* ===== CENTER: Liquid Glass Pill ===== */}
            <div
              className="hidden md:flex items-center gap-1"
              style={{
                background: scrolled
                  ? "rgba(255,255,255,0.72)"
                  : lightSurface
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255,255,255,0.12)",
                backdropFilter: "blur(24px) saturate(1.8)",
                WebkitBackdropFilter: "blur(24px) saturate(1.8)",
                borderRadius: "999px",
                padding: "6px 10px",
                border: scrolled
                  ? "1px solid rgba(0,134,75,0.18)"
                  : lightSurface
                    ? "1px solid rgba(148,163,184,0.18)"
                    : "1px solid rgba(255,255,255,0.30)",
                boxShadow: scrolled
                  ? "0 4px 24px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.80)"
                  : "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.20)",
                transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="liquid-nav-link"
                  style={{
                    color: isActive(link.path)
                      ? scrolled || lightSurface
                        ? "#00864B"
                        : "white"
                      : scrolled || lightSurface
                        ? "#334155"
                        : "rgba(255,255,255,0.88)",
                  }}
                >
                  <motion.div
                    className="px-4 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 relative cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: isActive(link.path)
                        ? scrolled || lightSurface
                          ? "rgba(0,134,75,0.12)"
                          : "rgba(255,255,255,0.18)"
                        : "transparent",
                      color: "inherit",
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* ===== RIGHT: Actions Section ===== */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Admission Button - Desktop */}
              <Link
                to="/admission"
                className="btn-admission hidden sm:block px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer text-white"
                style={{ outline: "none" }}
              >
                {t.nav.admission}
              </Link>

              {/* Language Toggle */}
              <LanguageToggle />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                style={{
                  color:
                    scrolled || lightSurface
                      ? "var(--text-secondary)"
                      : "rgba(255,255,255,0.88)",
                }}
                className="p-2 md:hidden hover:opacity-70 transition-opacity cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE MENU (Full Screen Overlay) ===== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: lightSurface
                  ? "rgba(255,255,255,0.98)"
                  : "var(--glass-bg-strong)",
                borderTop: lightSurface
                  ? "1px solid rgba(148,163,184,0.18)"
                  : "1px solid var(--glass-border)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-2">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: isActive(link.path)
                        ? "white"
                        : lightSurface
                          ? "var(--text-secondary)"
                          : "var(--text-secondary)",
                      backgroundColor: isActive(link.path)
                        ? "var(--accent)"
                        : "transparent",
                    }}
                    className="px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Divider */}
                <div
                  className="my-2 h-px"
                  style={{ backgroundColor: "var(--glass-border)" }}
                />

                {/* Admission Button - Mobile */}
                <Link
                  to="/admission"
                  onClick={() => setIsOpen(false)}
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "white",
                  }}
                  className="px-4 py-3 rounded-lg text-center font-bold shadow-lg cursor-pointer"
                >
                  Admission
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
