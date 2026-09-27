import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Facebook,
  MessageCircle,
  Instagram,
  ChevronRight,
} from "lucide-react";
import {
  SCHOOL_INFO,
  QUICK_LINKS,
  PROGRAMS_LIST,
  SOCIAL_LINKS,
} from "../../data/site";
import { useTranslation } from "../../lib/useTranslation";

const SOCIAL_ICONS = [
  {
    Icon: Facebook,
    label: "Follow us on Facebook",
    href: SOCIAL_LINKS[0].href,
  },
  {
    Icon: Instagram,
    label: "Follow us on Instagram",
    href: SOCIAL_LINKS[1].href,
  },
  {
    Icon: MessageCircle,
    label: "Chat on WhatsApp",
    href: SOCIAL_LINKS[2].href,
  },
];

export const Footer = () => {
  const t = useTranslation();
  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        borderTop: "1px solid var(--footer-border)",
      }}
      className="backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <picture>
                <source srcSet="\images\webp\logo3.jpg" />
                <img
                  src="\images\webp\logo3.jpg"
                  alt={SCHOOL_INFO.name}
                  className="h-10 w-auto object-contain"
                />
              </picture>

              <span>Smt Gayatri Devi Sr.Sec Vidya Mandir</span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center footer-social backdrop-blur-sm border"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    borderColor: "var(--glass-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-1.5 footer-link"
                  >
                    <ChevronRight
                      size={12}
                      style={{ color: "var(--accent)", opacity: 0.6 }}
                    />
                    {path === "/admission" ? t.footer.admission : label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              {t.footer.programmes}
            </h4>
            <ul className="space-y-3 text-sm">
              {PROGRAMS_LIST.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-1.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <ChevronRight
                    size={12}
                    style={{ color: "var(--accent)", opacity: 0.6 }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              {t.footer.contact}
            </h4>
            <ul className="space-y-4 text-sm">
              <li
                className="flex gap-3 items-start"
                style={{ color: "var(--text-secondary)" }}
              >
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--accent)", opacity: 0.7 }}
                />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li
                className="flex gap-3 items-center"
                style={{ color: "var(--text-secondary)" }}
              >
                <Phone
                  size={16}
                  className="shrink-0"
                  style={{ color: "var(--accent)", opacity: 0.7 }}
                />
                <a href={SCHOOL_INFO.phoneHref} className="hover:underline">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li
                className="flex gap-3 items-center"
                style={{ color: "var(--text-secondary)" }}
              >
                <Mail
                  size={16}
                  className="shrink-0"
                  style={{ color: "var(--accent)", opacity: 0.7 }}
                />
                <a href={SCHOOL_INFO.emailHref} className="hover:underline">
                  {SCHOOL_INFO.email}
                </a>
              </li>
              <li
                className="flex gap-3 items-center"
                style={{ color: "var(--text-secondary)" }}
              >
                <Calendar
                  size={16}
                  className="shrink-0"
                  style={{ color: "var(--accent)", opacity: 0.7 }}
                />
                <span>{SCHOOL_INFO.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{
            borderTop: "1px solid var(--glass-border)",
            color: "var(--text-muted)",
          }}
        >
          <p>
            © {SCHOOL_INFO.copyrightYear} {SCHOOL_INFO.name}. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
