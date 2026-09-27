<div align="center">
  <img src="public/logo-full.png" alt="Smt Gayatri Devi Sr.Sec Vidya Mandir" width="200" />
  <h1>Smt Gayatri Devi Sr.Sec Vidya Mandir</h1>
  <p>
    <strong>Official Website</strong> —
    <a href="https://smtgayatridevi.edu.in">smtgayatridevi.edu.in</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Motion-12-0055FF?logo=framer&logoColor=white" alt="Motion" />
    <br />
    <img src="https://img.shields.io/badge/status-live-00C853?logo=vercel&logoColor=white" alt="Status: Live" />
    <img src="https://img.shields.io/badge/SEO-optimized-FF6F00?logo=google&logoColor=white" alt="SEO Optimized" />
    <img src="https://img.shields.io/badge/CI-CD-2088FF?logo=github-actions&logoColor=white" alt="CI/CD" />
  </p>
</div>

---

## Overview

A modern, single-page application for Smt Gayatri Devi Sr.Sec Vidya Mandir, a premier K–12 CBSE-affiliated institution in Majupur, Aligarh, UP, India. Built with performance, accessibility, and search engine visibility as first-class concerns.

**Live site:** [https://smtgayatridevi.edu.in](https://smtgayatridevi.edu.in)

---

## Features

### User-Facing
- **Bilingual UI** — Full English and Nepali language support with instant toggle
- **Dark/Light theme** — System-aware with manual override
- **Responsive design** — Mobile-first, fluid layouts across all breakpoints
- **Animated interactions** — Scroll-triggered animations, parallax hero, count-up stats
- **Image lightbox** — Full-screen gallery viewer with keyboard navigation
- **Admission form** — Class-specific fields (GPA for Grade 11 applicants), client-side validation
- **Back-to-top** — Floating button on scroll
- **Skip-to-content** — Accessibility-first navigation

### Technical
- **SPA with client-side routing** — React Router v7, lazy-loaded pages, code splitting
- **Client-side rendering** — All pages indexable via proper sitemap, robots.txt, and per-page SEO meta tags
- **Automated deployment** — GitHub Actions → FTP → BabalHost on every push to `main`
- **Custom SEO system** — `useSEO` hook updates title, description, canonical, and OG tags per page

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript 5.8 |
| **Bundler** | Vite 6.4 |
| **Styling** | Tailwind CSS 4 + CSS custom properties |
| **Routing** | React Router v7 (BrowserRouter) |
| **Animations** | Motion 12 (Framer Motion) |
| **Icons** | Lucide React |
| **CI/CD** | GitHub Actions → FTP deploy |
| **Hosting** | BabalHost (cPanel, Apache, LiteSpeed) |
| **SEO** | robots.txt, sitemap.xml, JSON-LD schema, per-page meta tags |

---

## Project Structure

```
public/
├── .htaccess              # Apache SPA fallback + www→non-www redirect
├── robots.txt             # Crawler directives
├── sitemap.xml            # Full page index
└── images/                # Optimised WebP + JPEG school photos

src/
├── components/
│   ├── layout/            # Navbar, Footer, AnnouncementBar
│   └── ui/                # GlassCard, GlassButton, Lightbox, ThemeToggle, etc.
├── data/                  # Page content, faculty, academic programs, gallery
├── lib/                   # Hooks: useSEO, useTranslation, theme/language/cms contexts
├── pages/                 # Lazy-loaded route components (7 pages + 404)
├── translations/          # en.ts, np.ts — full bilingual content
├── App.tsx                # Root layout, router, providers
├── index.css              # Global styles, CSS variables, Tailwind
└── main.tsx               # Entry point
```

**Pages:**

| Route | Page | SEO Description |
|-------|------|----------------|
| `/` | Home | Hero, stats, principal's message, features |
| `/about` | About | History, vision, mission, faculty carousel |
| `/academic` | Academic | Programmes from KG to Grade 12 |
| `/admission` | Admission | Online form with class-specific fields |
| `/gallery` | Gallery | Campus, events, sports, cultural photos |
| `/contact` | Contact | Map, form, phone, email, address |
| `/privacy` | Privacy Policy | Data handling policy |
| `/terms` | Terms of Service | Usage terms |

---

## SEO & Performance

- **robots.txt** — Allows full crawling, points to sitemap
- **sitemap.xml** — 8 pages submitted to Google Search Console
- **JSON-LD schema** — `EducationalOrganization` with address, courses, social profiles
- **Per-page meta** — Unique title, description, canonical, OG, Twitter tags via `useSEO` hook
- **Semantic HTML** — Proper heading hierarchy, landmark elements
- **Image optimisation** — WebP format, `loading="lazy"`, descriptive alt text
- **Resource hints** — `preconnect` for Google Fonts
- **Core Web Vitals** — Optimised for LCP, CLS, INP
- **CSP headers** — Content Security Policy configured

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev        # → http://localhost:3000

# Production build
npm run build      # → dist/

# Preview production build
npm run preview
```

---

## Deployment

Every push to the `main` branch triggers an automated deployment via GitHub Actions:

1. Checkout → `npm ci` → `npm run build`
2. FTP deploy to BabalHost `/public_html/`
3. Apache serves the SPA with `.htaccess` fallback for client-side routes

Secrets required in GitHub repo:
- `FTP_USERNAME` — BabalHost cPanel username
- `FTP_PASSWORD` — BabalHost cPanel password

---

## School Information

| Detail | Info |
|--------|------|
| **Name** | Smt Gayatri Devi Sr.Sec Vidya Mandir |
| **Established** | January 2015 |
| **Location** | Majupur (Gonda), Aligarh, UP, India |
| **Phone** | +91 XXXXXXXXXX |
| **Email** | info@smtgayatridevi.edu.in |
| **Affiliation** | Central Board of Secondary Education (CBSE) |
| **Grades** | Kindergarten through Grade 12 |
| **Streams (11–12)** | Science & CS · Management · Hotel Management & Tourism |

---

## Contributors

[![swyamshushrestha-del](https://img.shields.io/badge/swyamshushrestha-del-owner-181717?logo=github)](https://github.com/swyamshushrestha-del)

---

## AI Collaboration

This project was developed collaboratively with AI tools:

| Tool | Role |
|------|------|
| **OpenCode (DeepSeek V4 Flash)** | Primary AI pair programmer — architecting, coding, deploying, SEO |
| **Claude Code** | Planning, code review, and quality assurance |
| **GitHub Copilot** | Inline code completion and suggestions |

All AI-generated code was reviewed, tested, and approved by a human developer.

---

## License

© 2026 Smt Gayatri Devi Sr.Sec Vidya Mandir. All rights reserved.
