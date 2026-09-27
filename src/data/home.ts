import {
  GraduationCap,
  Users,
  CheckCircle,
  BookOpen,
  Globe,
  Trophy,
  School,
} from "lucide-react";
import type {
  StatItem,
  Feature,
  Testimonial,
  GalleryImage,
  NewsItem,
} from "../lib/types";

// ── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  tagline: "Since 2015 AD",
  headline1: "Empowering",
  headline2: "Minds",
  description:
    "Education for Character, Knowledge & Wisdom. A premier institution in Majupur from Kindergarten to Class 12.",
  ctaPrimary: "Admission Open",
  ctaSecondary: "Learn More",
  preBadge: "Grade 0-12 (2026–27) — Limited seats available. Now Open →",
  excellence: {
    label: "Excellence Proven",
    desc: "99% CBSE pass rate. Academic excellence recognized across the region. 2024 Results →",
  },
  mandelaQuote: "Education is the most powerful weapon.",
  annotations: ["CBSE Affiliated", "Grade 0–12"],
};

// ── Principal's Message ──────────────────────────────────────────────────────────

export const PRINCIPAL_MESSAGE = {
  title: "Message from the Principal",
  paragraphs: [
    "Welcome to Smt Gayatri Devi Sr.Secondary Vidya Mandir. Established 2015 , our institution has been a well-recognised name for the benchmark of quality education in India.",
    "Affiliated with the Central Board of Secondary Education (CBSE) and approved by the Ministry of Education, we are situated in the heart of Majupur(Gonda) — committed to producing globally competent and socially responsible citizens.",
  ],
  quote: "Education is the most powerful weapon.",
  signedBy: "The Principal",
};

// ── Stats ────────────────────────────────────────────────────────────────────

export const stats: StatItem[] = [
  {
    label: "Years of Excellence",
    value: "10+",
    icon: BookOpen,
    desc: "Est. January 2015",
  },
  {
    label: "Qualified Teachers",
    value: "21+",
    icon: GraduationCap,
    desc: "Expert Faculty",
  },
  {
    label: "Students Enrolled",
    value: "500+",
    icon: Users,
    desc: "Active Learners",
  },
  {
    label: "CBSE Pass Rate",
    value: "99%",
    icon: CheckCircle,
    desc: "National Excellence",
  },
];

// ── Why Choose Us ────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    stat: "99% CBSE Pass Rate",
    desc: "CBSE-affiliated with three decades of outstanding results. Recognized as the Best Secondary School in Gonda — our students consistently excel in regional and national examinations.",
  },
  {
    icon: GraduationCap,
    title: "Dedicated Faculty",
    stat: "21+ Expert Teachers",
    desc: "Specialised streams in Science, Computer Science, Management, Hotel Management & Tourism — taught by 21+ qualified faculty dedicated to building career-ready graduates from Majupur.",
  },
  {
    icon: Globe,
    title: "Future-Ready Campus",
    stat: "Smart Classrooms",
    desc: "English-medium instruction, advanced science labs, digital library, and state-of-the-art computer facilities — equipping students with 21st-century skills for global opportunities.",
  },
];

// ── AI Tutor Section ─────────────────────────────────────────────────────────

export const AI_TUTOR = {
  title: "Interactive AI Learning",
  description:
    "Our Academia features the cutting-edge AI Tutor. Students can practise language skills, ask academic questions, and get real-time voice feedback — powered by Gemini 2.5 Live.",
  feature: "Voice Enabled — Natural conversation with Gemini 2.5 Live",
};

// ── News ─────────────────────────────────────────────────────────────────────

export const newsItems: NewsItem[] = [
  {
    title: "CBSE Results 2024: Record-Breaking Performance",
    date: "June 10, 2024",
    excerpt:
      "Smt Gayatri Devi students achieved a 99% pass rate in the CBSE examination, with 80% scoring A+.",
  },
  {
    title: "Science Fair Winners Announced",
    date: "April 22, 2024",
    excerpt:
      "Our students claimed top honours at the Science and Innovation Fair held in Gonda.",
  },
  {
    title: "Grade 11 Pre-Registration Now Open",
    date: "March 1, 2024",
    excerpt:
      "Applications for Science streams for 2026–27 are now being accepted.",
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Thapa",
    role: "Alumni, Class of 2024",
    quote:
      "The teachers didn't just teach me subjects — they taught me to think critically and pursue my passions.",
  },
  {
    name: "Sita Gurung",
    role: "Parent",
    quote:
      "Enrolling my daughter here was the best decision. The balance between academics and extracurriculars is phenomenal.",
  },
  {
    name: "Rohan Shrestha",
    role: "Current Student, Class 12",
    quote:
      "The AI Tutor has completely transformed how I practise English. It's like having a personal guide 24/7.",
  },
];

// ── CTA Section ────────────────────────────────────────────────────────────

export const CTA_SECTION = {
  title: "Ready to join the Smt Gayatri Devi family?",
  description:
    "Applications are open for all streams. Take the first step toward a brighter future.",
  button: "Apply Now",
};

// ── Home Gallery Preview (6 images) ─────────────────────────────────────────

export const homeGalleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/webp/schoolpic.jpg",
    label: "Main Campus",
    span: "col-span-2 row-span-2",
  },
  { id: 2, src: "/images/webp/college6.webp", label: "Computer Lab" },
  { id: 3, src: "/images/webp/college1.webp", label: "Science Lab" },
  { id: 4, src: "/images/webp/heroo.webp", label: "School Grounds" },
  { id: 5, src: "/images/webp/12.webp", label: "Classrooms" },
  {
    id: 6,
    src: "/images/webp/college3.webp",
    label: "Annual Day",
    span: "col-span-2",
  },
];
