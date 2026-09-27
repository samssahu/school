import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "motion/react";
import { CMSProvider } from "./lib/cmsContext";
import { ThemeProvider } from "./lib/themeContext";
import { LanguageProvider } from "./lib/languageContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BackToTop } from "./components/ui/BackToTop";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { GradientBackground } from "./components/ui/GradientBackground";

// Lazy load all page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academic = lazy(() => import("./pages/Academic"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Admission = lazy(() => import("./pages/Admission"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-[var(--gold-accent)]">Loading...</div>
    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <ThemeProvider>
        <LanguageProvider>
        <Router>
          <ScrollToTop />
          <GradientBackground />
          <div className="min-h-screen font-sans text-white selection:bg-[var(--gold-accent)]/30 selection:text-white">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">
              <AnimatePresence mode="wait">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/"          element={<Home />} />
                    <Route path="/about"     element={<About />} />
                    <Route path="/academic"  element={<Academic />} />
                    <Route path="/gallery"   element={<Gallery />} />
                    <Route path="/contact"   element={<Contact />} />
                    <Route path="/admission" element={<Admission />} />
                    <Route path="/privacy"   element={<Privacy />} />
                    <Route path="/terms"     element={<Terms />} />
                    <Route path="*"          element={<NotFound />} />
                  </Routes>
                </Suspense>
              </AnimatePresence>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </LanguageProvider>
      </ThemeProvider>
    </CMSProvider>
  );
}
