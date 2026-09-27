import { useSEO } from "../lib/useSEO";
import { Link } from "react-router-dom";
import { GlassButton } from "../components/ui/GlassButton";

const NotFound = () => {
  useSEO({
    title: "Page Not Found",
    description:
      "The page you are looking for does not exist at Smt Gayatri Devi Sr.Sec Vidya Mandir.",
  });
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 text-center">
      <div>
        <div
          className="text-8xl font-serif font-bold mb-4"
          style={{ color: "var(--text-primary)", opacity: 0.06 }}
        >
          404
        </div>
        <h2
          className="text-3xl font-serif font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Page Not Found
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <GlassButton variant="secondary">← Back to Home</GlassButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
