import { Globe, CheckCircle, Star } from "lucide-react";
import type { VisionItem } from "../lib/types";

// ─── About Hero ───────────────────────────────────────────────────────────────

export const ABOUT_HERO = {
  sectionLabel: "Our Story",
  headline: "Shaping lives since 2015",
  photo: "/images/webp/schoolpic.jpg",
  photoAlt:
    "Smt Gayatri Devi Sr.Sec Vidya Mandir campus in Majupur, Gonda, Aligarh, UP",
  paragraphs: [
    "Smt Gayatri Devi Sr.Sec Vidya Mandir, situated at Majupur in Gonda, Aligarh is a well-recognised name for the benchmark of quality education in the region. Since its establishment in 2015, we have been focusing continuously on imparting modern education compatible with global standards.",
    "Affiliated with the Central Board of Secondary Education (CBSE) and approved by the Ministry of Education, we provide a comprehensive curriculum from Kindergarten through Class 12, offering Science, Computer Science, Management, and Hotel Management & Tourism streams at the higher secondary level.",
  ],
  tags: ["CBSE Affiliated", "Ministry Approved", "Grade 0-12"],
};

// ─── Vision / Mission / Values ───────────────────────────────────────────────

export const visionItems: VisionItem[] = [
  {
    title: "Our Vision",
    icon: Globe,
    desc: "To be a centre of excellence producing globally competent and socially responsible citizens.",
  },
  {
    title: "Our Mission",
    icon: CheckCircle,
    desc: "To provide a nurturing environment that fosters intellectual, physical, and emotional growth.",
  },
  {
    title: "Our Values",
    icon: Star,
    desc: "Integrity, excellence, respect, and community — the pillars of everything we do.",
  },
];
